# -*- coding: utf-8 -*-
"""TR sayfalarından EN sayfaları üretir + dil değiştiriciyi her ikisine enjekte eder."""
import io,os,re,json,sys,subprocess
sys.path.insert(0,os.path.dirname(os.path.dirname(os.path.abspath(__file__)))+"/i18n")
import i18n_lib as L

R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))+"/"
SOZ=R+"i18n/tr-en.json"

# EN rozeti kapsamı söyler: yalın "EN", tam çeviri beklentisi yaratıyordu.
# Yüzde build sırasında _KAPSAM'dan basılır (bkz. switcher_ekle).
SWITCH_TR='<a class="lang" href="/kitabin-rihlesi/en/{alt}" hreflang="en" data-lang="en" title="İngilizce sürüm — çeviri sürüyor">EN{rozet}</a>'
SWITCH_EN='<a class="lang" href="/kitabin-rihlesi/{alt}" hreflang="tr" data-lang="tr">TR</a>'
SWITCH_CSS=(".nav .lang{margin-left:8px;border:1px solid var(--line);font-weight:800;"
            "letter-spacing:.06em;padding:5px 11px;border-radius:999px;background:var(--card)}"
            ".nav .lang:hover{background:var(--rubric-soft);border-color:var(--rubric)}"
            ".nav .lib+.lang{margin-left:6px}")

def switcher_ekle(s, hedef_dosya, en, kapsam_anahtari=None):
    """Gezinme çubuğuna dil düğmesi; hash korunur."""
    # var olan düğmeyi temizle: EN sayfa TR kaynaktan üretildiği için onun
    # düğmesini miras alıyordu (yanlış hreflang).
    s=re.sub(r'<a class="lang"[^>]*>[^<]*</a>','',s)
    if en:
        tag=SWITCH_EN.format(alt=hedef_dosya)
    else:
        # Rozet kapsamı söyler: yalın "EN" tam çeviri beklentisi yaratıyordu.
        p=_KAPSAM.get(kapsam_anahtari)
        rozet='' if (p is None or p>=99.5) else ' · %%%d taslak'%round(p)
        tag=SWITCH_TR.format(alt=hedef_dosya, rozet=rozet)
    # .lib bağlantısından hemen sonra (yoksa nav'ın sonuna)
    m=re.search(r'(<a class="(?:lib|geri)"[^>]*>.*?</a>)', s, re.S)
    if m: s=s[:m.end(1)]+tag+s[m.end(1):]
    else: s=re.sub(r'(<nav class="nav"[^>]*><div class="wrap">)', lambda m: m.group(1)+tag, s, count=1)
    # KORUMA: kutuphane.html kendi uzerine yazildigi icin bu satir korumasizken
    # her derlemede bir kopya daha ekliyordu (depoda 8 kopya birikmisti).
    if SWITCH_CSS not in s:
        s=s.replace("</style>", SWITCH_CSS+"</style>", 1)
    # hash'i koru
    js=("\n<script>(function(){var a=document.querySelector('.nav .lang');if(!a)return;"
        "a.addEventListener('click',function(){try{localStorage.setItem('rihle_lang',a.dataset.lang);}catch(e){}"
        "if(location.hash)a.href=a.getAttribute('href')+location.hash;});})();</script>\n")
    if "rihle_lang" in s: return s
    # SON </body>'ye ekle: ilkine eklemek, JS dizgesi içinde geçen bir
    # "</body>" varsa (tek sayfalık plan üreticisi böyle) kodu ortadan böler.
    # <script> blokları dışındaki son </body>'yi bul; yoksa dosya sonuna ekle.
    import re as _re
    kapali=_re.sub(r"<script[^>]*>.*?</script>", lambda m:" "*len(m.group(0)), s, flags=_re.S)
    i=kapali.rfind("</body>")
    return (s[:i]+js+s[i:]) if i>=0 else s+js


SERIT_CSS=(".enwip{background:var(--model-soft);border-bottom:1px solid var(--line);"
 "font-family:var(--sans);font-size:.78rem;color:var(--ink);text-align:center;"
 "padding:7px 16px;line-height:1.5}"
 ".enwip b{color:var(--model)}.enwip a{color:inherit}")

def serit_ekle(en, tr_dosya):
    """EN sayfanın üstüne dürüst durum şeridi (kapsam %100 ise eklenmez)."""
    global _KAPSAM
    p=_KAPSAM.get(tr_dosya)
    if p is None or p>=99.5: return en
    serit=('<div class="enwip">This English edition is <b>a work in progress</b>: '
           '<b>{:.0f}%</b> of the text has been translated so far. Passages not yet '
           'translated appear in Turkish. The interactive tools work identically in '
           'both editions.</div>').format(p)
    en=en.replace("</style>", SERIT_CSS+"</style>", 1)
    for anc in ('<a class="skip"', '<nav class="nav"'):
        i=en.find(anc)
        if i>0: return en[:i]+serit+en[i:]
    return en

_KAPSAM={}

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
        # kapsamı ÖNCE hesapla: hem EN şeridi hem TR'deki rozet ondan beslenir
        _on,_ = en_yap(s,sozluk,tr_dosya)
        _kalan=L.kapsam(_on, set(sozluk.values()))
        _toplam=len({t.strip() for _,t in L.cikar(s)})
        _KAPSAM[tr_dosya]=round((_toplam-len(_kalan))/_toplam*100,1) if _toplam else 100.0
        # TR sayfaya EN düğmesi (rozet kapsamı söyler)
        tr=switcher_ekle(s, alt, en=False, kapsam_anahtari=tr_dosya)
        io.open(R+tr_dosya,"w",encoding="utf-8").write(tr)
        en,sayac=en_yap(s,sozluk,tr_dosya)
        en=switcher_ekle(en, alt, en=True)
        # DÜRÜST DURUM (sitenin 4. ilkesi): çeviri bitmediyse sayfa bunu
        # kendisi söyler. Yüzde her derlemede yeniden hesaplanır, bayatlamaz.
        en=serit_ekle(en, tr_dosya)
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
