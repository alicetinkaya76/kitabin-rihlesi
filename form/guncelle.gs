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
 *   Tek başına çalışır — hiçbir dosyaya bağımlı değildir. Apps Script
 *   projesine yeni dosya olarak ekleyin, seçiciden "guncelle" → ▷ Çalıştır.
 *
 *   SÜRÜM 2 NOTU: sürüm 1 aydınlatma metnini komşu üretici betikten okuyordu;
 *   projedeki o dosya eski sürümse ESKİ metni yazıyordu — sessizce yanlış iş.
 *   Artık metinler burada gömülü; kaynak tektir.
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

/* Aydınlatma metinleri — depodaki iki üretici betikten birebir kopyalanır
   (form/guncelle_uret.py bunu üretir; elle düzenlemeyin). */
function AYDINLATMA_TCORPUS_() {
  return [
'Bu form için toplanan veriler: ad-soyad, e-posta, öğrenim/kurum bilgisi,',
'ilgi alanı, araştırma sorusu ve plan bilgileri. Yalnız üçüncü kapıdan',
'başvuranlar için, İSTEĞE BAĞLI olarak özgeçmiş ve bağlantı bilgileri.',
'',
'AMAÇ: Başvurunuza dönüş yapmak ve sizi uygun projeye ya da eğitim',
'programına yönlendirmek. Ticari elektronik ileti gönderilmez.',
'HUKUKİ SEBEP: KVKK m.5/1 uyarınca açık rızanız.',
'',
'YURT DIŞINA AKTARIM: Bu form Google altyapısında çalışır; yanıtlar yurt',
'dışındaki sunucularda saklanır (KVKK m.9). Üçüncü kişilerle paylaşılmaz.',
'SAKLAMA: Sabit bir üst süre yoktur — irtibatımız sürdüğü sürece saklanır;',
'dilediğiniz an silinmesini isteyebilirsiniz, talebiniz üzerine derhal silinir.',
'',
'Veri sorumlusu Türkiye İmam Hatipliler Vakfı’dır (TİMAV).',
'AYRINTILI AYDINLATMA METNİ: https://timav.org.tr/kvkk',
'HAKLARINIZ ve BAŞVURU (KVKK m.11): https://timav.org.tr/iletisim',
'bilgi@timav.org.tr'
  ].join('\n');
}

function AYDINLATMA_ANKET_() {
  return [
'Anketin 1-7. soruları ANONİMDİR; kimlik bilgisi toplanmaz.',
'Bu sayfadaki bilgileri YALNIZCA siz istediyseniz veriyorsunuz.',
'',
'AMAÇ: Size dönüş yapmak ve uygun projeye/eğitime yönlendirmek.',
'HUKUKİ SEBEP: KVKK m.5/1 — açık rızanız.',
'',
'YURT DIŞINA AKTARIM: Bu form Google altyapısında çalışır; yanıtlar yurt',
'dışındaki sunucularda saklanır (KVKK m.9). Üçüncü kişilerle paylaşılmaz.',
'SAKLAMA: Anonim yanıtlar, kimliğe bağlanamaz olduğu için süresiz arşivlenir.',
'İletişim bilgileriniz siz silinmesini isteyene kadar saklanır; talebiniz',
'üzerine derhal silinir.',
'',
'Veri sorumlusu Türkiye İmam Hatipliler Vakfı’dır (TİMAV).',
'AYRINTILI AYDINLATMA METNİ: https://timav.org.tr/kvkk',
'HAKLARINIZ ve BAŞVURU (KVKK m.11): https://timav.org.tr/iletisim',
'bilgi@timav.org.tr'
  ].join('\n');
}

function guncelle() {
  var n = 0;

  var tc = FormApp.openById(TCORPUS_ID);
  n += yaz_(tc, FormApp.ItemType.PAGE_BREAK, 'Sorun ve planın', PLAN_YARDIM);
  n += yaz_(tc, FormApp.ItemType.SECTION_HEADER, 'Aydınlatma metni ve açık rıza',
            AYDINLATMA_TCORPUS_());

  var an = FormApp.openById(ANKET_ID);
  n += yaz_(an, FormApp.ItemType.SECTION_HEADER, 'Aydınlatma ve açık rıza',
            AYDINLATMA_ANKET_());

  Logger.log('Güncellenen bölüm sayısı: ' + n + ' / 3');
  if (n < 3) {
    Logger.log('UYARI: beklenen 3 bölümün hepsi bulunamadı — başlıklar elle ' +
               'değiştirilmiş olabilir. Aşağıdaki dökümü kontrol edin.');
    dokum_(tc, 'T-CORPUS');
    dokum_(an, 'ANKET');
  }
  /* yazdıktan sonra GERİ OKU — "güncelledim" demek yetmez */
  denetle_(tc, FormApp.ItemType.SECTION_HEADER, 'Aydınlatma metni ve açık rıza',
           'Sabit bir üst süre yoktur', 'En çok 2 yıl');
  denetle_(an, FormApp.ItemType.SECTION_HEADER, 'Aydınlatma ve açık rıza',
           'kimliğe bağlanamaz', 'En çok 2 yıl');

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

/** Yazılan metni geri okur: yenisi girdi mi, eskisi gitti mi. */
function denetle_(form, tip, baslik, olmali, olmamali) {
  var ogeler = form.getItems(tip);
  for (var i = 0; i < ogeler.length; i++) {
    if (ogeler[i].getTitle() === baslik) {
      var m = ogeler[i].getHelpText();
      var iyi = (m.indexOf(olmali) >= 0) && (m.indexOf(olmamali) < 0);
      Logger.log((iyi ? '✓ doğrulandı: ' : '✗ DOĞRULANMADI: ') + baslik);
      return;
    }
  }
  Logger.log('✗ doğrulanamadı (öğe yok): ' + baslik);
}

/** Sorun çıkarsa: formdaki bütün öğeleri sırasıyla döker. */
function dokum_(form, ad) {
  Logger.log('--- ' + ad + ' içindekiler ---');
  var ogeler = form.getItems();
  for (var i = 0; i < ogeler.length; i++) {
    Logger.log((i + 1) + '. [' + ogeler[i].getType() + '] ' + ogeler[i].getTitle());
  }
}
