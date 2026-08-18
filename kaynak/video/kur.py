# -*- coding: utf-8 -*-
"""Kareleri videoya kurar: kapak + altyazı bandı + Yelda seslendirme + ffmpeg."""
import os, subprocess, glob
from PIL import Image, ImageDraw, ImageFont

V = os.path.dirname(os.path.abspath(__file__)) + "/"
K, C = V + "kare/", V + "cikti/"
os.makedirs(C, exist_ok=True)

INK, PAPER, RUBRIC, MUTED = (31,41,55), (250,247,240), (185,28,28), (156,163,175)
HN = "/System/Library/Fonts/HelveticaNeue.ttc"
GEO = "/System/Library/Fonts/Supplemental/Georgia.ttf"
GEOB = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"

SAHNELER = [
 # (kare, altyazı, seslendirme)
 ("00-kapak", None,
  "Bir Kitabın Rıhlesi. Nasıl kullanılır? Doksan saniyede gezelim."),
 ("01-hero", "Sunumun kendisi — slayt yok",
  "Bu sayfa, yirmi beş Ağustos'taki sunumun kendisi. Slayt yok; her şey burada. Sunumdan sonra da açık kalacak."),
 ("02-kimlik", "Önce: «Bu sayfa nedir?» kutusu",
  "Önce bu kutuyu okuyun. Uygulama değil, arama motoru değil, veri tabanı değil. Üyelik yok, kurulum yok, kod yok."),
 ("03-dugmeler", "İki yol: 30 dakika · 30 saniye",
  "İki yol var. Baştan başla: yaklaşık otuz dakika. Aceleniz varsa, otuz saniyelik hazır örnek."),
 ("04-persona", "Kim olduğunuzu söyleyin, rota işaretlensin",
  "Kim olduğunuzu seçin; sayfa size uygun durakları işaretlesin. Hepsini gezmek şart değil."),
 ("05-harita", "1. durak — her nokta kaynağına bağlı",
  "Birinci durakta İbn Battuta haritası. Her nokta bir iddia değil; kaynağına bağlı bir kayıt."),
 ("06-oncesen", "4. durak — önce siz: iki kaydı kendiniz çıkarın",
  "Dördüncü durakta önce siz okursunuz. Kesitten iki kaydı kendiniz çıkarmadan, kopyalama düğmesi açılmaz."),
 ("07-mukabele", "Delil denetimi — delilsiz satır tabloya giremez",
  "Sonra makinenin cevabı delil denetiminden geçer. İçine bilerek koyduğumuz uydurma kayıt yakalanır: delili kaynakta bulunmayan satır, tabloya giremez."),
 ("08-plan", "5. durak — tek sayfalık planını indir",
  "Beşinci durakta alanınızı seçin ve tek sayfalık planınızı indirin. Danışman randevusuna bununla gidin."),
 ("10-kutuphane", "Kütüphane — 103 doğrulanmış kaynak",
  "Kütüphanede yüz üç doğrulanmış kaynak var: aletler, dergiler, emsaller — hepsi adıyla, bağlantısıyla."),
 ("09-kapanis", "kitabin-rihlesi — sunumdan sonra da açık",
  "Katılmak isteyenlere sayfanın sonunda üç kapı var. Adres basit: kitabın rıhlesi. İyi yolculuklar."),
]

def kapak():
    im = Image.new("RGB", (2560, 1440), PAPER)
    d = ImageDraw.Draw(im)
    d.rounded_rectangle([1000, 340, 1560, 420], 40, outline=RUBRIC, width=3)
    f0 = ImageFont.truetype(HN, 34, index=1)
    t0 = "RIHLE 2026 · 25 AĞUSTOS"
    d.text((1280 - d.textlength(t0, f0)/2, 358), t0, font=f0, fill=RUBRIC)
    f1 = ImageFont.truetype(GEOB, 130)
    t1 = "Bir Kitabın Rıhlesi"
    d.text((1280 - d.textlength(t1, f1)/2, 520), t1, font=f1, fill=INK)
    f2 = ImageFont.truetype(HN, 56, index=0)
    t2 = "Nasıl kullanılır? — 90 saniyede"
    d.text((1280 - d.textlength(t2, f2)/2, 720), t2, font=f2, fill=MUTED)
    d.rectangle([1180, 850, 1380, 856], fill=(183,143,76))
    f3 = ImageFont.truetype(HN, 40, index=0)
    t3 = "alicetinkaya76.github.io/kitabin-rihlesi"
    d.text((1280 - d.textlength(t3, f3)/2, 920), t3, font=f3, fill=INK)
    im.save(K + "00-kapak.png")

def bantla(ad, metin):
    im = Image.open(K + ad + ".png").convert("RGB")
    if metin:
        d = ImageDraw.Draw(im, "RGBA")
        H = 128
        d.rectangle([0, im.height-H, im.width, im.height], fill=(31,41,55,235))
        d.rectangle([0, im.height-H, im.width, im.height-H+6], fill=RUBRIC)
        f = ImageFont.truetype(HN, 52, index=1)
        d.text((im.width/2 - d.textlength(metin, f)/2, im.height-H+34),
               metin, font=f, fill=(250,247,240))
    im.save(C + ad + "-b.png")

def sesle(ad, metin):
    aiff = C + ad + ".aiff"
    subprocess.run(["say", "-v", "Yelda", "-o", aiff, metin], check=True)
    r = subprocess.run(["ffprobe","-v","quiet","-show_entries","format=duration",
                        "-of","csv=p=0", aiff], capture_output=True, text=True)
    return aiff, float(r.stdout.strip())

def main():
    kapak()
    parcalar = []
    for ad, alt, ses in SAHNELER:
        bantla(ad, alt)
        aiff, sure = sesle(ad, ses)
        D = round(sure + 0.9, 2)
        mp4 = C + ad + ".mp4"
        subprocess.run(["ffmpeg","-y","-loglevel","error",
          "-loop","1","-framerate","25","-i", C+ad+"-b.png",
          "-i", aiff, "-t", str(D),
          "-vf","scale=1920:1080","-c:v","libx264","-preset","medium","-crf","20",
          "-pix_fmt","yuv420p","-c:a","aac","-b:a","128k","-af","apad",
          "-shortest_buf_duration","1" if False else "1",
          mp4], check=False)
        # -shortest_buf_duration bazı sürümlerde yok; sade komutla tekrar dene
        if not os.path.exists(mp4) or os.path.getsize(mp4) < 10000:
            subprocess.run(["ffmpeg","-y","-loglevel","error",
              "-loop","1","-framerate","25","-i", C+ad+"-b.png",
              "-i", aiff, "-t", str(D),
              "-vf","scale=1920:1080","-c:v","libx264","-preset","medium","-crf","20",
              "-pix_fmt","yuv420p","-c:a","aac","-b:a","128k","-af","apad",
              mp4], check=True)
        parcalar.append(mp4); print(f"  ✓ {ad}  {D}s")
    lst = C + "liste.txt"
    open(lst,"w").write("\n".join(f"file '{p}'" for p in parcalar))
    son = V + "nasil-kullanilir.mp4"
    subprocess.run(["ffmpeg","-y","-loglevel","error","-f","concat","-safe","0",
      "-i", lst, "-c:v","libx264","-preset","medium","-crf","20","-pix_fmt","yuv420p",
      "-c:a","aac","-b:a","128k",
      "-vf","fade=t=in:st=0:d=0.6",
      son], check=True)
    print("BİTTİ:", son, os.path.getsize(son)//1024, "KB")

if __name__ == "__main__":
    main()
