# -*- coding: utf-8 -*-
"""Kütüphane sayfasını derler. Enjekte edilen veriler önceki derlemeden alınır
   (kaynakları değişmiyor); şablon değişse de üretim kırılmıyor."""
import io,os,re,subprocess
D=os.path.dirname(os.path.abspath(__file__))+"/"
R=os.path.expanduser("~/Desktop/rihle2026/")
built=io.open(R+"kutuphane.html",encoding="utf-8").read()
def grab(name):
    m=re.search(r"const "+name+r"\s*=\s*(.*?);\n", built, re.S)
    assert m, name
    return m.group(1)
tpl=io.open(D+"kutuphane_template.html",encoding="utf-8").read()
out=(tpl.replace("/*__SITE__*/ null", grab("SITE"))
        .replace("/*__IBB__*/ null",  grab("IBB"))
        .replace("/*__FUTUH__*/ \"\"", grab("FUTUH")))
assert "/*__" not in out, "işaretçi kaldı: "+str(re.findall(r"/\*__[A-Z]*__\*/",out))
bl=re.findall(r"<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>", out, re.S)
io.open("/tmp/lib_check.js","w",encoding="utf-8").write("\n;\n".join(bl))
r=subprocess.run(["node","--check","/tmp/lib_check.js"],capture_output=True,text=True)
if r.returncode!=0: raise SystemExit("KÜTÜPHANE JS GEÇERSİZ — yazılmadı\n"+r.stderr[:800])
io.open(R+"kutuphane.html","w",encoding="utf-8").write(out)
print("kutuphane.html yazıldı:",len(out),"bayt ·",len(bl),"script · JS temiz")
