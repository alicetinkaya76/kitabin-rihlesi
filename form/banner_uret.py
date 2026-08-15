#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Google Form üst görselleri (1600x400).

Renkler ve logo, TİMAV'ın kendi T-Corpus logosundan alınır; hiçbir marka
öğesi yeniden çizilmez — logo dosyası olduğu gibi yerleştirilir.
Çalıştır:  python3 form/banner_uret.py     (depo kökünden)
"""
import os
from PIL import Image, ImageDraw, ImageFont

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGO = os.path.join(KOK, "tcorpus-logo.png")
HN = "/System/Library/Fonts/HelveticaNeue.ttc"

LACI = (18, 66, 123)      # logodaki mavi
ALTIN = (183, 143, 76)    # logodaki altın
W, H = 1600, 400          # Google Forms üstbilgi oranı 4:1

def f(indeks, boy):
    return ImageFont.truetype(HN, boy, index=indeks)

def genislik(d, metin, font):
    return d.textbbox((0, 0), metin, font=font)[2]

def banner(cikti, ust, alt, etiket, panel=560):
    im = Image.new("RGB", (W, H), LACI)
    d = ImageDraw.Draw(im)

    # sağ tarafa hafif derinlik: köşeden merkeze doğru açılan degrade
    for x in range(panel, W):
        t = (x - panel) / (W - panel)
        k = int(10 * (1 - t))
        d.line([(x, 0), (x, H)], fill=(LACI[0] + k, LACI[1] + k, LACI[2] + k))

    # sol beyaz panel + logo
    d.rectangle([0, 0, panel, H], fill=(255, 255, 255))
    d.rectangle([panel, 0, panel + 6, H], fill=ALTIN)
    lg = Image.open(LOGO).convert("RGBA")
    hedef = panel - 80
    lg = lg.resize((hedef, round(lg.height * hedef / lg.width)), Image.LANCZOS)
    im.paste(lg, ((panel - lg.width) // 2, (H - lg.height) // 2), lg)

    # sağ metin bloğu
    x0 = panel + 64
    fe = f(1, 38)      # etiket — telefonda ~8 px eder
    d.text((x0, 84), etiket.upper(), font=fe, fill=ALTIN)

    boy = 58
    fu = f(1, boy)
    while genislik(d, ust, fu) > W - x0 - 64 and boy > 30:
        boy -= 2
        fu = f(1, boy)
    d.text((x0, 138), ust, font=fu, fill=(255, 255, 255))

    y = 138 + boy + 20
    d.rectangle([x0, y, x0 + 96, y + 4], fill=ALTIN)

    boy2 = 44
    fa = f(7, boy2)
    while genislik(d, alt, fa) > W - x0 - 64 and boy2 > 34:
        boy2 -= 1
        fa = f(7, boy2)
    d.text((x0, y + 26), alt, font=fa, fill=(206, 220, 238))

    im.save(cikti, "PNG", optimize=True)
    print(cikti, im.size, str(os.path.getsize(cikti) // 1024) + " KB")

if __name__ == "__main__":
    banner(os.path.join(KOK, "form", "banner-tcorpus.png"),
           "Kayıt ve başvuru",
           "TİMAV Dijital Beşerî Bilimler Merkezi",
           "T-Corpus")
    banner(os.path.join(KOK, "form", "banner-anket.png"),
           "Sunum değerlendirmesi",
           "Dijital İslami İlimler ve Yapay Zekâ",
           "Rıhle 2026")
