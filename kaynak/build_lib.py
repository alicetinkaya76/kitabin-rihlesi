# -*- coding: utf-8 -*-
"""Kütüphane sayfasını derler. (17.08.2026: geçici klasörden depoya taşındı.)
 Enjekte edilen veriler önceki derlemeden alınır
   (kaynakları değişmiyor); şablon değişse de üretim kırılmıyor."""
import io,os,re,subprocess
D=os.path.dirname(os.path.abspath(__file__))+"/"
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))+"/"
built=io.open(R+"kutuphane.html",encoding="utf-8").read()
def grab(name):
    m=re.search(r"const "+name+r"\s*=\s*(.*?);\n", built, re.S)
    assert m, name
    return m.group(1)
tpl=io.open(D+"kutuphane_template.html",encoding="utf-8").read()
out=(tpl.replace("/*__SITE__*/ null", grab("SITE"))
        .replace("/*__IBB__*/ null",  grab("IBB"))
        .replace("/*__FUTUH__*/ \"\"", grab("FUTUH")))
# ---- TEK KAYNAK: kaynak sayısı ve son denetim tarihi ----------------------
# Rapor bulgusu: aynı sayı üç yüzeyde farklıydı (103/101, 14.08/06.08).
# Sayı site_data.json'dan SAYILIR, tarih denetim.json'dan OKUNUR; ikisi de
# şablondaki yer tutuculara basılır. Elle yazılan sayı bir daha kaymaz.
import json as _json
_veri = _json.load(io.open(D + "site_data.json", encoding="utf-8"))
_n = sum(len(v) for v in _veri["shelves"].values()) + \
     sum(len(v) for v in _veri["aletler"].values())
_den = _json.load(io.open(D + "denetim.json", encoding="utf-8"))
out = (out.replace("{{KAYNAK}}", str(_n))
          .replace("{{DENETIM_KISA}}", _den["kisa"])
          .replace("{{DENETIM_UZUN}}", _den["uzun"]))
assert "{{" not in out, "yer tutucu kaldı: " + str(__import__("re").findall(r"\{\{[A-Z_]+\}\}", out))

assert "/*__" not in out, "işaretçi kaldı: "+str(re.findall(r"/\*__[A-Z]*__\*/",out))
bl=re.findall(r"<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>", out, re.S)
io.open("/tmp/lib_check.js","w",encoding="utf-8").write("\n;\n".join(bl))
r=subprocess.run(["node","--check","/tmp/lib_check.js"],capture_output=True,text=True)
if r.returncode!=0: raise SystemExit("KÜTÜPHANE JS GEÇERSİZ — yazılmadı\n"+r.stderr[:800])
io.open(R+"kutuphane.html","w",encoding="utf-8").write(out)
print("kutuphane.html yazıldı:",len(out),"bayt ·",len(bl),"script · JS temiz")
