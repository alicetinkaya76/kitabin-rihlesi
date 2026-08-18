# -*- coding: utf-8 -*-
"""'Nasıl kullanılır' videosu için canlı siteden sahne kareleri çeker."""
import os, time
from playwright.sync_api import sync_playwright

D = os.path.dirname(os.path.abspath(__file__)) + "/kare/"
os.makedirs(D, exist_ok=True)
KOK = "https://alicetinkaya76.github.io/kitabin-rihlesi/"

ZORLA = """
.rv{opacity:1!important;transform:none!important;transition:none!important}
html{scroll-behavior:auto!important}
"""

def cek():
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": 1280, "height": 720}, device_scale_factor=2)
        pg.goto(KOK, timeout=45000)
        pg.add_style_tag(content=ZORLA)
        pg.wait_for_timeout(2500)

        def kare(ad, js=None, bekle=800):
            if js:
                pg.evaluate(js)
            pg.wait_for_timeout(bekle)
            pg.screenshot(path=D + ad + ".png")
            print("  ✓", ad)

        # 1 · hero
        kare("01-hero", "window.scrollTo(0,0)")

        # 2 · kimlik bloğu
        kare("02-kimlik", """(()=>{const n=document.querySelector('.nebu');
            window.scrollTo(0,n.getBoundingClientRect().top+scrollY-90);})()""")

        # 3 · iki düğme (kimliğin altı)
        kare("03-dugmeler", """(()=>{const n=document.querySelector('.hero .btnrow');
            window.scrollTo(0,n.getBoundingClientRect().top+scrollY-330);})()""")

        # 4 · persona seçici — birini seçili göster
        kare("04-persona", """(()=>{const k=document.querySelector('#kimsec button');
            if(k) k.click();
            const n=document.querySelector('.kimsin');
            window.scrollTo(0,n.getBoundingClientRect().top+scrollY-120);})()""", 1200)

        # 5 · İbn Battûta haritası (karo yüklenmesi için uzun bekleme)
        kare("05-harita", """(()=>{const n=document.getElementById('harita');
            window.scrollTo(0,n.getBoundingClientRect().top+scrollY-40);})()""", 4000)

        # 6 · 4. durak — kendi asistanınla yolunu aç, 0. adım görünsün
        kare("06-oncesen", """(()=>{
            const dene=document.getElementById('dene');
            const b=[...dene.querySelectorAll('button')].find(x=>/asistan/i.test(x.textContent));
            if(b) b.click();
            const w=document.getElementById('w0');
            if(w) window.scrollTo(0,w.getBoundingClientRect().top+scrollY-70);})()""", 1200)

        # 7 · hazır örnek yolu + mukabele sonucu
        kare("07-mukabele", """(()=>{
            const dene=document.getElementById('dene');
            const b=[...dene.querySelectorAll('button')].find(x=>/tek dokunu|hazır/i.test(x.textContent));
            if(b) b.click();
            const q=document.getElementById('w-quick'); if(q) q.click();})()""", 3500)
        # sonucu görüntüle
        kare("07-mukabele", """(()=>{
            const k=document.getElementById('w-karne')||document.getElementById('w-report')
                  ||[...document.querySelectorAll('#dene *')].find(x=>/TAM|KISMÎ/.test(x.textContent||'')&&x.children.length===0);
            if(k) window.scrollTo(0,k.getBoundingClientRect().top+scrollY-330);})()""", 900)

        # 8 · 5. durak — iki plan düğmesi
        kare("08-plan", """(()=>{const n=document.getElementById('plandl2');
            window.scrollTo(0,n.getBoundingClientRect().top+scrollY-430);})()""")

        # 9 · kapanış kapıları
        kare("09-kapanis", """(()=>{const n=document.getElementById('tckayit');
            window.scrollTo(0,n.getBoundingClientRect().top+scrollY-120);})()""")

        # 10 · Kütüphane
        pg.goto(KOK + "kutuphane.html", timeout=45000)
        pg.add_style_tag(content=ZORLA)
        pg.wait_for_timeout(2000)
        kare("10-kutuphane", "window.scrollTo(0,0)")

        b.close()

if __name__ == "__main__":
    cek()
