# T-Corpus kayıt formu — kurulum

## Neden ben kuramıyorum
Google Form açmak senin Google hesabına giriş gerektirir. Betiği sen
çalıştırırsın; hiçbir kimlik bilgisi paylaşılmaz.

## Üç adım
1. `script.google.com` → **Yeni proje**
2. `tcorpus-form-olustur.gs` dosyasının tamamını yapıştır
3. Fonksiyon listesinden **formuKur** → **Çalıştır** (ilk seferde izin ister)

Kayıt (Log) penceresinde üç adres çıkar: **doldurma**, **kısa adres**,
**düzenleme**. Doldurma adresini bana ver; siteye ve kare koda bağlarım.

## Betiğin kuramadığı iki soru (elle, 2 tıklama)
Apps Script'te dosya yükleme sorusu oluşturma karşılığı yok. 2. sayfaya
elle ekle:
- **Planını yükle (.md / .pdf)** — isteğe bağlı
- **Özgeçmiş** — yalnız Kapı 3, isteğe bağlı

Dosya yükleme, cevaplayanın Google hesabıyla giriş yapmasını ZORUNLU kılar.
Bu yüzden ikisi de isteğe bağlı: asıl sinyal, metin alanındaki soru cümlesi.

## Formun mantığı
- **1. sayfa** — hangi kapı + kimlik + ilgi alanı. Kapı 1 seçen doğrudan
  onay sayfasına atlar (dallanma betikte kurulu).
- **2. sayfa** — soru cümlesi, malzeme, birim, eksen, saat bütçesi, ilgilenilen
  projeler; sonunda yalnız Kapı 3 için iki isteğe bağlı alan.
- **3. sayfa** — serbest not + **aydınlatma metni ve açık rıza onayı** (zorunlu).

## KVKK notu — okumadan yayına alma
Form Google altyapısında çalıştığı için yanıtlar **yurt dışında** saklanır;
bu KVKK m.9 anlamında yurt dışına aktarımdır ve **açık rıza** gerektirir.
Betikteki `AYDINLATMA_METNI()` fonksiyonu şunları içerir: veri sorumlusu
(TİMAV, adres, iletişim), işlenen veriler, amaç, hukuki sebep, aktarım,
**saklama süresi (2 yıl — değiştirmek istersen betikten değiştir)** ve
KVKK m.11 hakları.

Metni TİMAV'ın kendi hukuk/yönetim onayından geçirmeden yayına alma.

## Form hazır olduğunda sitede ne değişecek
`index_template.html` içinde tek satır:

    const FORM_URL="";      →      const FORM_URL="https://forms.gle/…";

Üç kapı otomatik olarak forma döner, "form açılmıyorsa e-posta" satırı
belirir, kare kodlar forma bakacak şekilde yeniden üretilir.

---

# Değerlendirme anketi (sunum sonu)

Betik: `rihle-anket-olustur.gs` — kurulum aynı üç adım.

## Neden ayrı bir kayıt QR'ı yok
Kapanışta iki kare kod göstermek salonun tarama enerjisini böler. Kayıt
sorusu anketin **son maddesi**; "hayır" diyen anonim kalır, "evet" diyen
iletişim sayfasına geçer ve orada açık rıza verir.

## Kalıcı adres
Kare kod forma değil, **kitabin-rihlesi/anket/** adresine bakar. O sayfa
form bağlanmadan da çalışır; `anket/index.html` içindeki tek satır
(`const ANKET_URL = "";`) doldurulunca doğrudan yönlendirir.
**Böylece QR bugün basılabilir, form sonra kurulabilir.**

## Anketin mantığı
- 1-7. sorular ANONİM; e-posta toplanmıyor (`setCollectEmail(false)`).
- 2. ve 3. sorular aynı ölçekte: **farkları** seminerin asıl başarı ölçüsü.
- 5. soru ("neresi kapalı kaldı") zorunlu ve açık uçlu — bir sonraki sunumu
  düzeltecek tek soru odur.
- Sekiz soru. Daha uzunu salonda doldurulmaz.
