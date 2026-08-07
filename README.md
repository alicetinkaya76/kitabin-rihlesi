# Bir Kitabın Rıhlesi

**Dijital İslami İlimler ve Yapay Zekâ: Yöntem ve Uygulamalar** — Rıhle 2026 semineri için hazırlanmış etkileşimli site ve sunum malzemeleri. Kod bilmeyen ilahiyat ve sosyal bilim öğrencileri için tasarlandı.

🌐 **Canlı site:** https://alicetinkaya76.github.io/kitabin-rihlesi/

Site iki sayfadır:

## 1 · Deneyim (`index.html`)

Az metinli, ekran-ekran, dokunmatik bir yolculuk:

| Durak | İçerik |
|---|---|
| **0 · Tanış** | LLM'e klavyeden giriş: sonraki-kelime oyunu, ölçek karşılaştırması, üç katman, iki uyarı. Meraklısına katlanır **"Çekirdeğe iniş"**: vektörler + gerçek kosinüs benzerliği, dikkat kafaları, **gerçek softmax + sıcaklık sürgüsü**, eğitim eğrisi. |
| **1 · Harita** | İbn Battûta'nın 7 yolculuğu, 317 durağı gerçek haritada (Leaflet + OSM/CARTO); ▶ yolculuk animasyonu, 📖 durak durak hikâye turu; her durakta *Rihle*'den delil pasajı. |
| **2 · Kayıt** | "Kitap nasıl veri olur?" — çekmeceli dolap oyunu + "makinenin gördüğü" JSON görünümü. |
| **3 · Makine** | 5 adımlı boru hattı: parçala→sayıya çevir → anlam haritası → tartı (siyak-sibak) → yarışlı daktilo → kapalı liste+delil kopyası. ▶ "Baştan sona izle" otomatik turu. |
| **Sözlük** | 8 çevirmeli kart: JSON↔çekmeceli dolap, provenans↔sened, doğrulama↔mukabele, halüsinasyon↔vehim… |
| **4 · Dene** | 90 saniyelik mukabele sihirbazı: 🚀 hemen dene (örnek cevap + gizli uydurma kayıt) / 🤝 kendi asistanınla; yapıştırınca otomatik mukabele; % halkalı rapor, 🖼 karne (PNG), 🗺 doğrulananları haritala. |
| **5 · Sonrası** | "İlk makalene giden yol": 4 alan × 4 gerçekçi evre, yaptım-işaretleri (kalıcı), 📄 planı indir; emsal şeridi. |

## 2 · Kütüphane (`kutuphane.html`)

101 **tek tek doğrulanmış** kaynak: korpuslar (OpenITI ailesi), Arapça kütüphaneler, Kur'an & hadis kaynakları, Türkçe kapılar, veri setleri, aletler, emsal yayınlar, dergi rehberi, akademik altyapı ve âdâb. **Canlı arama + Ücretsiz/Türkçe/Hesapsız filtreleri + ikonlu raf haritası.** Ayrıca **⚒ Tezgâh**: OpenITI'den kitap çekme, mARkdown ayrıştırma, talimat paketleme ve otomatik mukabele (TAM/KISMÎ/BULUNAMADI + bağlam gösterimi + CSV).

## Depo yapısı

| Yol | İçerik |
|---|---|
| `index.html`, `kutuphane.html` | İki sayfa (kendine yeten; yalnız Leaflet CDN + harita karoları dışarıdan) |
| `senaryo/` | 50 dk sunum senaryosu v2 + **QR kodları** (`qr-deneyim.png`, `qr-kutuphane.png`) |
| `paket/` | v1 taslakları + 90 dk minyatür atölye paketi |
| `kaynak-envanteri.md` | 101 kalemlik doğrulanmış envanterin okunur dökümü |
| `dev/server.mjs` | Yerel önizleme: `node dev/server.mjs` → http://localhost:8452 |

## İlkeler

- **Sayı uydurulmaz:** sitedeki her sayı ya kaynağından gelir ya "temsilî" diye etiketlidir (temsilî olanların yanında gerçeğini gösteren araç bağlantısı vardır: tiktokenizer, Transformer Explainer, bbycroft).
- **Her bağlantı doğrulanmıştır** (06.08.2026; ayrıntı sayfa altındaki doğrulama beyanında).
- **Çıkarımı model yapar, doğrulamayı tezgâh yapar, sorumluluğu insan taşır.**

## Lisans ve atıflar

- Belâzürî metni: OpenITI korpusu 2025.1.9 (doi:10.5281/zenodo.17767721), CC BY-NC-SA; de Goeje neşri (Leiden 1866) esaslı.
- İbn Battûta durak verisi: islamicatlas.org Seyahatnâme Katmanı v1.0.0.
- Belâzürî vakası: Gökalp & Çetinkaya, *EICD-B*, Digital Scholarship in the Humanities, 2026, doi:10.1093/llc/fqag093 (açık erişim).
- Harita: © OpenStreetMap contributors © CARTO. Site içeriği: CC BY-NC-SA 4.0.
