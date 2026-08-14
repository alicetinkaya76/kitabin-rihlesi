/**
 * guncelle.gs — YAŞAYAN iki formu yerinde düzeltir.
 *
 * Neden ayrı bir betik: formları yeniden oluşturmak yeni adres üretir; QR'lar
 * ve sitedeki bağlantılar bozulur. Bu betik var olan formları ID ile açıp
 * yalnız iki metni değiştirir — adresler aynı kalır.
 *
 * NE YAPAR
 *   1. T-Corpus formunun 2. sayfasına 5. durak (Planını indir) bağlantısını ekler.
 *   2. Her iki formdaki aydınlatma metnini yeniler (SAKLAMA maddesi:
 *      sabit 2 yıl yerine ölçüte bağlı ifade).
 *
 * KULLANIM
 *   Bu dosyayı, iki üretici betiğin (tcorpus-form-olustur.gs +
 *   rihle-anket-olustur.gs) bulunduğu AYNI Apps Script projesine ekleyin —
 *   aydınlatma metinlerini onlardan okur. Sonra üstteki seçicide
 *   "guncelle" fonksiyonunu seçip ▷ Çalıştır'a basın.
 *
 * YAPAMADIĞI
 *   Üst görsel (banner) ve dosya yükleme soruları Apps Script'ten eklenemez;
 *   FormApp'te böyle bir metot yok. İkisi de form düzenleyicisinden elle
 *   yapılır — adımlar form/README.md'de.
 */

var TCORPUS_ID = '1u0HZFHSJcTeumgymV8CqGMJ5Tc7RE_Qbc42Lh-H9je0';
var ANKET_ID   = '1OhjOPP39QkUSWEV8AzCEBDCV4UmdTrcjyn9V1q-oTIc';

var PLAN_YARDIM =
  'Bu sayfa Kapı 2 ve Kapı 3 içindir. Alanları, sitedeki 5. durakta ' +
  'indirdiğiniz tek sayfalık plandan doğrudan kopyalayabilirsiniz.\n\n' +
  'Planınız yoksa 5 dakikada üretebilirsiniz — 5. durak, "Planını indir":\n' +
  'https://alicetinkaya76.github.io/kitabin-rihlesi/#ilham';

function guncelle() {
  if (typeof AYDINLATMA_METNI !== 'function' || typeof AYDINLATMA !== 'function') {
    throw new Error('Aydınlatma metinleri bulunamadı. Bu dosyayı, iki üretici ' +
                    'betiğin bulunduğu AYNI Apps Script projesine ekleyin.');
  }
  var n = 0;

  var tc = FormApp.openById(TCORPUS_ID);
  n += yaz_(tc, FormApp.ItemType.PAGE_BREAK, 'Sorun ve planın', PLAN_YARDIM);
  n += yaz_(tc, FormApp.ItemType.SECTION_HEADER, 'Aydınlatma metni ve açık rıza',
            AYDINLATMA_METNI());

  var an = FormApp.openById(ANKET_ID);
  n += yaz_(an, FormApp.ItemType.SECTION_HEADER, 'Aydınlatma ve açık rıza',
            AYDINLATMA());

  Logger.log('Güncellenen bölüm sayısı: ' + n + ' / 3');
  if (n < 3) {
    Logger.log('UYARI: beklenen 3 bölümün hepsi bulunamadı — başlıklar elle ' +
               'değiştirilmiş olabilir. Aşağıdaki dökümü kontrol edin.');
    dokum_(tc, 'T-CORPUS');
    dokum_(an, 'ANKET');
  }
  Logger.log('T-CORPUS: ' + tc.getPublishedUrl());
  Logger.log('ANKET   : ' + an.getPublishedUrl());
}

/** Başlığı eşleşen ilk öğenin yardım metnini değiştirir; 1 ya da 0 döner. */
function yaz_(form, tip, baslik, metin) {
  var ogeler = form.getItems(tip);
  for (var i = 0; i < ogeler.length; i++) {
    if (ogeler[i].getTitle() === baslik) {
      ogeler[i].setHelpText(metin);
      Logger.log('✓ güncellendi: ' + baslik);
      return 1;
    }
  }
  Logger.log('✗ bulunamadı: ' + baslik);
  return 0;
}

/** Sorun çıkarsa: formdaki bütün öğeleri sırasıyla döker. */
function dokum_(form, ad) {
  Logger.log('--- ' + ad + ' içindekiler ---');
  var ogeler = form.getItems();
  for (var i = 0; i < ogeler.length; i++) {
    Logger.log((i + 1) + '. [' + ogeler[i].getType() + '] ' + ogeler[i].getTitle());
  }
}
