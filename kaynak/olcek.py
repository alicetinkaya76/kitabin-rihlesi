#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Tipografik ölçeği oturtur: 62 farklı punto → 8 basamak.

Neden: 0.6–1.0rem arasında 31 ayrı punto vardı. Bunlar gözle birbirinden
ayırt edilemez ama toplamda hiyerarşiyi yok eder — sayfa "karmaşık" görünür.
Ayrım az sayıda ama BELİRGİN basamakla kurulur.

Dokunulmayanlar:
  · px cinsinden puntolar — .ring/.akis/.zs sabit geometrili çizimler
  · clamp(...) — kasıtlı duyarlı başlık puntoları
  · line-height:1 ve px/em değerleri — ortalama amaçlı, tipografik değil
"""
import io, re, sys

YOL = "/private/tmp/claude-501/-Users-alicetinkaya-Desktop-endulus-corpus-search/8f3f8fdd-31f6-4599-8a01-74709d7750da/scratchpad/sunum/index_template.html"

# ---- ölçekler (gövde 17px) ----
PUNTO   = [.66, .75, .82, .92, 1.00, 1.15, 1.35, 1.70]   # micro→h2
SATIR   = [1.3, 1.5, 1.7]                                 # sıkı / arayüz / okuma
HARF    = [.04, .09]                                      # ince / versal etiket
YUVARLAK= [4, 10, 16, 999]                                # köşe yarıçapı

def yakin(v, olcek):
    """En yakın basamak; eşitlikte büyüğü seç (okunurluk lehine)."""
    return min(olcek, key=lambda s: (abs(s - v), -s))

def biem(v):
    s = f"{v:.2f}".rstrip("0").rstrip(".")
    return (s[1:] if s.startswith("0.") else s)

def donustur(css):
    sayac = {"punto": 0, "satir": 0, "harf": 0, "yuvarlak": 0}

    def f_punto(m):
        v = float(m.group(1))
        y = yakin(v, PUNTO)
        if abs(y - v) > 1e-9: sayac["punto"] += 1
        return f"font-size:{biem(y)}rem"
    css = re.sub(r'font-size:\s*(0?\.\d+|\d+\.?\d*)rem', f_punto, css)

    def f_satir(m):
        v = float(m.group(1))
        if v <= 1.05: return m.group(0)          # lh:1 → geometrik ortalama
        y = yakin(v, SATIR)
        if abs(y - v) > 1e-9: sayac["satir"] += 1
        return f"line-height:{y}"
    css = re.sub(r'line-height:\s*(\d\.?\d*)(?![\d a-z%])', f_satir, css)

    def f_harf(m):
        v = float(m.group(1))
        y = yakin(v, HARF)
        if abs(y - v) > 1e-9: sayac["harf"] += 1
        return f"letter-spacing:{biem(y)}em"
    css = re.sub(r'letter-spacing:\s*(0?\.\d+)em', f_harf, css)

    def f_yuv(m):
        parcalar = []
        for p in m.group(1).split():
            n = re.match(r'^(\d+)px$', p)
            if not n: return m.group(0)          # % ya da karışık → dokunma
            v = int(n.group(1)); y = yakin(v, YUVARLAK)
            if y != v: sayac["yuvarlak"] += 1
            parcalar.append(f"{y}px")
        return "border-radius:" + " ".join(parcalar)
    css = re.sub(r'border-radius:\s*([0-9px ]+?)(?=[;}])', f_yuv, css)

    css = css.replace("font-weight:500", "font-weight:600")   # tek kullanım
    return css, sayac

def main():
    t = io.open(YOL, encoding="utf-8").read()
    toplam = {"punto": 0, "satir": 0, "harf": 0, "yuvarlak": 0}

    # 1) <style> blokları
    def f_style(m):
        yeni, s = donustur(m.group(2))
        for k in toplam: toplam[k] += s[k]
        return m.group(1) + yeni + m.group(3)
    t = re.sub(r'(<style[^>]*>)(.*?)(</style>)', f_style, t, flags=re.S)

    # 2) satır içi style="" öznitelikleri — onlar da kalabalığa katılıyor
    def f_inline(m):
        yeni, s = donustur(m.group(1))
        for k in toplam: toplam[k] += s[k]
        return 'style="' + yeni + '"'
    t = re.sub(r'style="([^"]*)"', f_inline, t)

    io.open(YOL, "w", encoding="utf-8").write(t)
    print("  punto     :", toplam["punto"], "değer ölçeğe oturtuldu")
    print("  satır ar. :", toplam["satir"])
    print("  harf ar.  :", toplam["harf"])
    print("  köşe      :", toplam["yuvarlak"])

if __name__ == "__main__":
    main()
