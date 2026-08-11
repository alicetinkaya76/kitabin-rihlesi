# -*- coding: utf-8 -*-
"""TR sayfalarından EN sayfaları üretir + dil değiştiriciyi her ikisine enjekte eder."""
import io,os,re,json,sys,subprocess
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
import i18n_lib as L

R=os.path.expanduser("~/Desktop/rihle2026/")
SOZ=R+"i18n/tr-en.json"

SWITCH_TR='<a class="lang" href="/kitabin-rihlesi/en/{alt}" hreflang="en" data-lang="en">EN</a>'
SWITCH_EN='<a class="lang" href="/kitabin-rihlesi/{alt}" hreflang="tr" data-lang="tr">TR</a>'
SWITCH_CSS=(".nav .lang{margin-left:8px;border:1px solid var(--line);font-weight:800;"
            "letter-spacing:.06em;padding:5px 11px;border-radius:999px;background:var(--card)}"
            ".nav .lang:hover{background:var(--rubric-soft);border-color:var(--rubric)}"
            ".nav .lib+.lang{margin-left:6px}")

def switcher_ekle(s, hedef_dosya, en):
    """Gezinme çubuğuna dil düğmesi; hash korunur."""
    # var olan düğmeyi temizle: EN sayfa TR kaynaktan üretildiği için onun
    # düğmesini miras alıyordu (yanlış hreflang).
    s=re.sub(r'<a class="lang"[^>]*>[^<]*</a>','',s)
    tag=(SWITCH_EN if en else SWITCH_TR).format(alt=hedef_dosya)
    # .lib bağlantısından hemen sonra (yoksa nav'ın sonuna)
    m=re.search(r'(<a class="(?:lib|geri)"[^>]*>.*?</a>)', s, re.S)
    if m: s=s[:m.end(1)]+tag+s[m.end(1):]
    else: s=re.sub(r'(<nav class="nav"[^>]*><div class="wrap">)', lambda m: m.group(1)+tag, s, count=1)
    s=s.replace("</style>", SWITCH_CSS+"</style>", 1)
    # hash'i koru
    js=("\n<script>(function(){var a=document.querySelector('.nav .lang');if(!a)return;"
        "a.addEventListener('click',function(){try{localStorage.setItem('rihle_lang',a.dataset.lang);}catch(e){}"
        "if(location.hash)a.href=a.getAttribute('href')+location.hash;});})();</script>\n")
    if "rihle_lang" in s: return s
    return s.replace("</body>", js+"</body>",1) if "</body>" in s else s+js

def en_yap(s, sozluk, dosya):
    s,sayac=L.cevir(s,sozluk)
    s=s.replace('<html lang="tr">','<html lang="en">',1)
    # EN sayfalar /en/ altında: kardeş bağlantılar aynı klasörde kalır, mutlak olanlar /en/ alır
    s=s.replace("https://alicetinkaya76.github.io/kitabin-rihlesi/kutuphane.html",
                "https://alicetinkaya76.github.io/kitabin-rihlesi/en/kutuphane.html")
    s=s.replace("https://alicetinkaya76.github.io/kitabin-rihlesi/index.html",
                "https://alicetinkaya76.github.io/kitabin-rihlesi/en/index.html")
    return s,sayac

def main():
    sozluk=json.load(io.open(SOZ,encoding="utf-8")) if os.path.exists(SOZ) else {}
    os.makedirs(R+"en",exist_ok=True)
    rapor={}
    for tr_dosya,en_dosya,alt in [("index.html","index.html","index.html"),
                                  ("kutuphane.html","kutuphane.html","kutuphane.html")]:
        s=io.open(R+tr_dosya,encoding="utf-8").read()
        # TR sayfaya EN düğmesi
        tr=switcher_ekle(s, alt, en=False)
        io.open(R+tr_dosya,"w",encoding="utf-8").write(tr)
        # EN sayfa
        en,sayac=en_yap(s,sozluk,tr_dosya)
        en=switcher_ekle(en, alt, en=True)
        # GÜVENLİK KAPISI: bozuk kaçış / yanlış eşleşme JS'i kırabilir.
        # Üretilen dosyayı yazmadan önce script bloklarını node ile denetle.
        bloklar=re.findall(r"<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>", en, re.S)
        gecici="/tmp/_i18n_check.js"
        io.open(gecici,"w",encoding="utf-8").write("\n;\n".join(bloklar))
        r=subprocess.run(["node","--check",gecici],capture_output=True,text=True)
        if r.returncode!=0:
            raise SystemExit("EN çıktısı geçersiz JS üretti ("+en_dosya+"); YAZILMADI.\n"+r.stderr[:900])
        io.open(R+"en/"+en_dosya,"w",encoding="utf-8").write(en)
        kalan=L.kapsam(en, set(sozluk.values()))
        toplam=len({t.strip() for _,t in L.cikar(s)})
        rapor[tr_dosya]={"toplam_tekil":toplam,"kalan":len(kalan),
                         "kapsam_%":round((toplam-len(kalan))/toplam*100,1) if toplam else 100,
                         "degistirilen":sayac,"kalan_ornek":kalan[:10]}
    io.open(R+"i18n/rapor.json","w",encoding="utf-8").write(json.dumps(rapor,ensure_ascii=False,indent=1))
    for k,v in rapor.items():
        print(f"{k:16} kapsam %{v['kapsam_%']:5} · {v['toplam_tekil']-v['kalan']}/{v['toplam_tekil']} dizge · değişen {v['degistirilen']}")
    return rapor

if __name__=="__main__": main()
