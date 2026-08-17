# -*- coding: utf-8 -*-
"""Deneyim sayfasını (index.html) şablondan derler.

Enjekte edilen veri sabitleri ÖNCEKİ derlemeden alınır — kaynakları
değişmediği için şablon değişse de üretim kırılmaz. Aynı desen
build_lib.py'de de kullanılır.

Bu betik 17.08.2026'da yeniden yazıldı: özgün sürümü geçici klasörde
duruyordu ve sistem temizliğinde silindi. Bu yüzden artık depoda —
şablonlarla birlikte. Geçici klasörde tek kopya bırakma.

Çalıştır (depo kökünden):  python3 kaynak/build.py
"""
import io, os, re, subprocess

D = os.path.dirname(os.path.abspath(__file__)) + "/"
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + "/"

built = io.open(R + "index.html", encoding="utf-8").read()
tpl = io.open(D + "index_template.html", encoding="utf-8").read()


def grab(name):
    """Derlenmiş dosyadan `const <ad> = ...;` gövdesini aynen alır."""
    m = re.search(r"const " + name + r"\s*=\s*(.*?);\n", built, re.S)
    assert m, "önceki derlemede bulunamadı: " + name
    return m.group(1)


out = (tpl.replace("/*__IBB__*/ null",     grab("IBB"))
          .replace('/*__EXCERPT__*/ ""',   grab("EXCERPT"))
          .replace("/*__LIBSUM__*/ null",  grab("LIBSUM"))
          .replace("/*__SAMPLE__*/ null",  grab("SAMPLE")))

kalan = re.findall(r"/\*__[A-Z]+__\*/", out)
assert not kalan, "işaretçi kaldı: " + str(kalan)

# GÜVENLİK KAPISI: bozuk enjeksiyon JS'i kırabilir. Diske yazmadan önce denetle.
bl = re.findall(r"<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>", out, re.S)
io.open("/tmp/index_check.js", "w", encoding="utf-8").write("\n;\n".join(bl))
r = subprocess.run(["node", "--check", "/tmp/index_check.js"],
                   capture_output=True, text=True)
if r.returncode != 0:
    raise SystemExit("INDEX JS GEÇERSİZ — yazılmadı\n" + r.stderr[:800])

io.open(R + "index.html", "w", encoding="utf-8").write(out)
print("index.html yazıldı:", len(out), "bayt ·", len(bl), "script · JS temiz")
