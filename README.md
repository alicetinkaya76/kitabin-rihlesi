# Bir Kitabın Rıhlesi

**Dijital İslami İlimler ve Yapay Zekâ: Yöntem ve Uygulamalar** — Rıhle 2026 semineri için hazırlanmış eşlikçi site ve sunum malzemeleri.

Site tek bir HTML dosyasıdır (`index.html`): harici bağımlılığı yoktur, çevrimdışı da açılır. Omurgası tek bir yolculuktur: **kitabı bul → veriye çevir → soruya dönüştür → makaleye götür.** İçinde:

- **Canlı JSON↔pasaj görüntüleyici** — İbn Battûta'nın *Rihle*'sinden 8 gerçek durak kaydı (islamicatlas.org Seyahatnâme Katmanı v1.0.0); JSON alanına dokununca kaynak pasaj yanar.
- **SVG rota haritası** — 7 yolculuk, 317 durak; her nokta *Rihle*'den bir delil pasajı taşır.
- **90 dakikalık minyatür atölye** — Belâzürî'nin *Fütûhu'l-Büldân*'ının Mısır–Mağrib bölümü (OpenITI 2025.1.9), talimat ve cevap anahtarıyla; EICD-B çalışmasının (DSH 2026, doi:10.1093/llc/fqag093) öğrenci ölçeği.
- **Doğrulanmış kaynak envanteri** — korpuslar, veri setleri, aletler, emsal yayınlar, dergiler: 101 bağlantının her biri 6 Ağustos 2026'da tek tek açılarak kontrol edildi (ayrıntı: `kaynak-envanteri.md` ve sayfa altındaki doğrulama beyanı).

## Depo yapısı

| Yol | İçerik |
|---|---|
| `index.html` | Site (tek dosya; GitHub Pages bunu servis eder) |
| `senaryo/` | 50 dakikalık sunum senaryosu v2 ("kitabın rıhlesi" omurgası) |
| `paket/` | v1 taslakları + minyatür atölye paketi (metin, rehber) |
| `kaynak-envanteri.md` | 101 kalemlik doğrulanmış envanterin okunur dökümü |
| `dev/server.mjs` | Yerel önizleme: `node dev/server.mjs` → http://localhost:8452 |

## Yayın (GitHub Pages)

Settings → Pages → **Deploy from a branch** → `main` / `(root)`. Site `https://<kullanıcı>.github.io/<repo>/` adresinde yayımlanır.

## Lisans ve atıflar

- Belâzürî metni: OpenITI korpusu, sürüm 2025.1.9 (doi:10.5281/zenodo.17767721), **CC BY-NC-SA**; de Goeje neşri (Leiden 1866) esaslı.
- İbn Battûta durak verisi: islamicatlas.org Seyahatnâme Katmanı v1.0.0.
- Belâzürî vakasının sayıları: Gökalp & Çetinkaya, *The Early Islamic Conquests Database–Balādhurī (EICD-B)*, Digital Scholarship in the Humanities, 2026, doi:10.1093/llc/fqag093 (açık erişim).
- Site içeriği: CC BY-NC-SA 4.0 (gömülü OpenITI metniyle uyumlu olması için).

Sitedeki hiçbir sayı tahmin değildir; hepsi yukarıdaki kaynaklardan gelir.
