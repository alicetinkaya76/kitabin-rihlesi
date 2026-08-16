# Üçüncü göz — bağımsız değerlendirme promptu

Başka bir yapay zekâya (ya da meslektaşa) yaptırılacak dış denetim.
Aşağıdakinin **tamamını** kopyalayıp yapıştırın. Web'e erişebilen bir modele
verin; erişemiyorsa sayfayı önce kaydedip dosya olarak ekleyin.

Derinlik isterseniz aynı promptu **her persona için ayrı ayrı** çalıştırın
(§3'te yalnız bir personayı bırakıp diğerlerini silin). Dört ayrı rapor,
tek genel rapordan daha çok şey söyler.

---

## PROMPT (buradan aşağısı kopyalanacak)

Sen deneyimli bir öğretim üyesi ve sunum tasarımcısısın. Türkiye'de ilahiyat
/ İslami ilimler alanında ders veriyorsun, dijital beşerî bilimleri de
biliyorsun. Görevin övmek değil; **bu sunumun hedef kitlesinde nerede
tutmayacağını bulmak.**

### 1 · Malzeme

- Sunum sayfası: https://alicetinkaya76.github.io/kitabin-rihlesi/
- Kütüphane: https://alicetinkaya76.github.io/kitabin-rihlesi/kutuphane.html
- İngilizcesi (kısmî): https://alicetinkaya76.github.io/kitabin-rihlesi/en/

Değerlendirmeden önce sayfayı **gerçekten gez**: düğmelere bas, "Planını
indir"i çalıştır, Kütüphane'deki Tezgâh'a bir metin yapıştır. Gezmeden yazma.

### 2 · Bağlam

Bu sayfa bir tanıtım sitesi değil, **sunumun kendisi**. Rıhle 2026'da
elli dakikalık bir oturum bu sayfa üzerinden yapılacak; slayt yok. Sunumdan
sonra da açık kalacak ve bağlantı sunumu izlemeyen kişilere de dolaşacak.

Yapı: **1 Temeller · 2 Yol · 3 Makine · 4 Dene · 5 Makale · 6 T-Corpus**,
artı ayrı bir Kütüphane (103 kaynak; Kitabı Bul → Veriye Çevir → Tezgâh →
Soruya Dönüştür → Makaleye Götür → Âdâb & Beyan) ve bir Sözlük.

Vaat şu: dinleyici sonunda **danışmanına götürebileceği tek sayfalık bir
araştırma planıyla** çıkacak. Kod yazması gerekmiyor.

### 3 · Hedef kitle — dördü de salonda

1. **Lisans öğrencisi (İlahiyat, 2. sınıf).** Arapçası orta. Bilgisayarla
   ilişkisi telefon ve Word. "Veri seti", "korpus", "API" duymamış.
   Sorusu: *"Bu benim ödevime yarar mı, yoksa benlik değil mi?"*
2. **Tez yazan yüksek lisans / doktora öğrencisi.** Konusu klasik bir
   metin. Zamanı yok, danışmanı ikna olmazsa hiçbir şey yapamaz.
   Sorusu: *"Bunu tezimin hangi bölümüne koyarım, jüri ne der?"*
3. **Ders veren hoca (40+, alanında yerleşik).** Yapay zekâya temkinli.
   Metnin bütünlüğüne ve isnad geleneğine bağlı.
   Sorusu: *"Bu, metni anlamayı kolaylaştırıyor mu, yoksa yerine mi
   geçiyor? Öğrencimi tembelleştirir mi?"*
4. **Meraklı katılımcı.** Alan dışından ya da kenarından; teknolojiye açık.
   Sorusu: *"Bu iş gerçekten yeni bir şey mi, süslü bir arama motoru mu?"*

### 4 · Zaten bilinenler — bunları tekrar rapor etme

Bir ön okuyucu grubundan geri bildirim alındı. Ortak bulgu: **"faydalı,
fakat ilk aşamada anlaşılmıyor"**; okuyucular sayfayı "program / uygulama /
veri tabanı" sanıyordu. Buna karşı açılışa bir kimlik bloğu eklendi
("bu sayfa nedir / ne değil"), sunucuya ait QR katlandı, düğmelere süre
etiketi kondu.

Bu düzeltmenin **işe yarayıp yaramadığını ölç** — ama "açılış karışık"
demekle yetinme; hâlâ karışıksa tam olarak hangi cümlede, hangi persona
için koptuğunu göster.

### 5 · Yapacağın testler

**A · Soğuk açılış (30 saniye).** Sayfayı ilk kez açan biri, otuz saniye
içinde şu üçünü cevaplayabiliyor mu: *Bu nedir? Bana ne? Şimdi ne yapayım?*
Cevaplanamayan varsa, hangi cümlenin bunu engellediğini yaz.

**B · Persona yürüyüşü.** Her personayı sayfada baştan sona yürüt. Nerede
durur, nerede geri döner, nerede sıkılır? **Terk noktasını** işaretle:
bölüm adı + oradaki cümle.

**C · Vaat–teslim.** Açılış "tek sayfalık araştırma planı" vaat ediyor.
Yürüyüşü tamamlayınca gerçekten öyle bir çıktı oluyor mu? Çıktıyı
**indirip aç** ve değerlendir: bu, bir danışmanın karşısına götürülebilecek
bir belge mi, yoksa doldurulmamış bir şablon mu?

**D · İtiraz testi (en önemlisi).** Salondaki en zor beş soruyu yaz ve her
biri için sayfada bir cevap olup olmadığını göster. Cevap yoksa "yok" de.
Şu tür itirazları ihmal etme:
- Metni sayıya indirgemek, onu anlamayı değil, anlamaktan kaçmayı öğretmez mi?
- Model uydurursa (halüsinasyon) ne olacak? Sayfa bunu nasıl karşılıyor?
- Bu yaklaşım klasik ilim geleneğine dışarıdan mı bakıyor?
- Öğrenci bunu, metni okumamak için bir kestirme olarak kullanmaz mı?
- Yöntem gerçekten özgün mü, yoksa hazır aletlerin derlemesi mi?

**E · Terim testi.** Sayfada geçen ve açıklanmadan kullanılan her terimi
listele (persona 1 ve 3 ölçüsüyle). "Sözlük'te var" bir savunma değil;
soru, terimin **geçtiği yerde** anlaşılıp anlaşılmadığı.

**F · Telefon testi.** Salondaki çoğu kişi QR ile telefondan açacak.
Sayfayı dar ekranda değerlendir: okunmayan, taşan, tıklanamayan ne var?

**G · Dürüstlük denetimi.** Sayfa kendi sınırlarını doğru anlatıyor mu?
Kaynaksız bir iddia, provenansı verilmemiş bir sayı, "temsilî" olduğu
söylenmeden verilmiş bir örnek var mı? Varsa yerini göster.

### 6 · Kurallar

- **Delil zorunlu.** Her bulguda: hangi bölüm, hangi cümle ya da hangi
  düğme. Yerini gösteremiyorsan yazma.
- **Övme.** İyi olanı yalnızca, kötü bir şeyi anlamak için gerekiyorsa an.
- **Genel tavsiye yok.** "Daha sade olmalı", "görselleştirme artırılabilir"
  gibi cümleler değersizdir. Onun yerine: hangi cümle, neyle değişmeli.
- **Uydurma.** Gezmediğin bir bölüm hakkında hüküm verme; erişemediysen
  "erişemedim" yaz.
- **Sayı üretme.** Sayfadaki bir sayıyı tartışıyorsan kaynağını göster.
- Sunumun elli dakika olduğunu unutma: "şu da eklensin" demeden önce
  **karşılığında neyin çıkacağını** söyle.

### 7 · Çıktı biçimi

Önce **en fazla 5 maddelik** bir özet: bu sunum hedef kitlesinde nerede
tutar, nerede tutmaz.

Sonra bulgular, **ağırdan hafife** sıralı. Her bulgu şu dört satır:

```
BULGU     — tek cümlede kusur
YER       — bölüm + cümle/düğme
KİM İÇİN  — hangi persona(lar), neden
ÖNERİ     — somut değişiklik; metin öneriyorsan cümleyi yaz
```

En sonda tek bir soru cevapla:
**Bu sunumu kendi öğrencilerine izletir miydin? Neden, neden olmasın?**

---

## Kullanım notu

Rapor geldiğinde her maddeyi hemen uygulama. Sunum elli dakika ve sayfa
zaten yoğun; her ekleme bir çıkarma ister. Gelen bulguları "haklı /
kısmen / haksız" diye ayırıp, haksız bulduklarının **gerekçesini yaz** —
o gerekçe bir sonraki denetimde işine yarar.
