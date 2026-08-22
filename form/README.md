> **Not (19.08.2026):** Değerlendirme anketi **kaldırıldı**. Geri bildirim
> artık `ali.cetinkaya@gmail.com` adresine doğrudan e-postayla geliyor.
> Anket betiği `form/arsiv/` altında; `guncelle.gs` yalnız T-Corpus formunu
> yamalıyor. Aşağıdaki anket bölümleri **tarihî kayıt** olarak duruyor.

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
**saklama** ve KVKK m.11 hakları.

Saklama, bilerek **sabit bir üst süreye bağlanmadı**: "irtibatımız sürdüğü
sürece; dilediğiniz an silinir." KVKK m.10 aydınlatmada sabit süre şart
koşmaz — sürenin ölçütünü bildirmek yeter. Sabit 2 yıl yazmak, yıllar sonra
irtibatta olduğumuz bir araştırmacının kaydını hukuken tutamaz hâle
getiriyordu.

Metni TİMAV'ın kendi hukuk/yönetim onayından geçirmeden yayına alma.

## Bağlı adresler (14 Ağustos 2026 · sürüm 2, sıralı)
| | doldurma | kısa |
|---|---|---|
| T-Corpus | `…1FAIpQLScFGgVVHJb…WESw/viewform` | forms.gle/isUF2YP5TeP6zu1r6 |
| Anket | `…1FAIpQLSdZLfN1vmdX…L66A/viewform` | forms.gle/412BSJ5JXaFnoyqr5 |

Sürüm 1'de bütün sorular son bölüme yığılmıştı: `addPageBreakItem()` önce
çağrıldığı için sonraki `addXxxItem()`'lar hep **en sona** ekleniyordu.
Sürüm 2 soruları sırayla ekler, dallanmayı en sonda bağlar.

## Var olan formu değiştirmek — `guncelle.gs`
Üretici betiği yeniden çalıştırmak **yeni adres** üretir; QR'lar ve sitedeki
bağlantılar bozulur. Metin düzeltmesi için onun yerine `guncelle.gs`
kullanılır: formları ID ile açar, yalnız ilgili yardım metnini değiştirir,
adresler aynı kalır. Aynı Apps Script projesine eklenmeli — aydınlatma
metinlerini iki üretici betikten okur.

## Üst görsel (banner) — elle
Apps Script form **temasına erişemez**; `FormApp`'te üst görsel metodu yoktur.
Hazır görseller depoda:
- `form/banner-tcorpus.png` (1600×400)
- `form/banner-anket.png` (1600×400)

Formu aç → sağ üstte 🎨 **Temayı özelleştir** → **Üstbilgi** → *Resim seç* →
**Yükle** → dosyayı sürükle. Kırpma çerçevesi çıkarsa olduğu gibi bırak;
görsel zaten 4:1 oranında üretildi.

**Punto neden büyük:** banner 1600 px üretiliyor ama telefonda ~340 px'e
düşüyor — 4,7 kat. İlk sürümdeki 26/30 punto satırlar telefonda 6 px'e inip
okunmaz oldu. Şimdiki 38/58/44 punto, telefonda 8/12/9 px eder. Bannerı
değiştirirsen `form/banner_uret.py` çıktısını 340 px'e küçültüp bak —
okunmuyorsa punto küçüktür. Renk paleti logodan alındı
(lacivert #12427B, altın #B78F4C), o yüzden tema rengini de lacivert seç.

Görselleri yeniden üretmek: `python3 form/banner_uret.py` (depo kökünden).

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
