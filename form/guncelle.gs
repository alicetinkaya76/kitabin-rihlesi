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
 *   3. Anketin 6. sorusunu düzeltir. Sunum SİTENİN KENDİSİ üzerinden
 *      yapılıyor; "eşlikçi siteyi açtınız mı" sorusu anlamsızdı, çünkü
 *      herkes onu perdede gördü. Sorulan artık: kendi cihazında da açtı mı.
 *   4. Anketin teşekkür mesajındaki "eşlikçi site" ifadesini düzeltir.
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
/* ANKET KALDIRILDI (19.08.2026): sunum sonu degerlendirme anketi yerine
   geri bildirim dogrudan ali.cetinkaya@gmail.com adresine gidiyor.
   Bu betik artik yalniz T-Corpus formunu yamalar. Anket geri istenirse
   form/arsiv/rihle-anket-olustur.gs ile kurulur ve asagidaki satirlar
   geri acilir. */
// var ANKET_ID = '1OhjOPP39QkUSWEV8AzCEBDCV4UmdTrcjyn9V1q-oTIc';

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

var S6_BASLIK = '6. Sunum sayfasını kendi telefonunuzda ya da bilgisayarınızda da açtınız mı?';
var S6_YARDIM = 'Perdede zaten gördünüz; sorduğumuz, kendi cihazınızda açıp açmadığınız.';
var S6_SECENEK = ['Evet, sunum sırasında kendi cihazımda da açtım',
                  'Evet, sunumdan sonra kendim gezdim',
                  'Henüz açmadım ama açacağım',
                  'Hayır, perdede izlemek yetti'];
var ONAY_MESAJI = 'Teşekkür ederiz — cevabınız kaydedildi.\n\n' +
                  'Sunumun yapıldığı sayfa açık kalmaya devam ediyor; kendi hızınızda\n' +
                  'yeniden gezebilirsiniz:\n' +
                  'alicetinkaya76.github.io/kitabin-rihlesi';

function guncelle() {
  var n = 0;

  var tc = FormApp.openById(TCORPUS_ID);
  n += yaz_(tc, FormApp.ItemType.PAGE_BREAK, 'Sorun ve planın', PLAN_YARDIM);
  n += yaz_(tc, FormApp.ItemType.SECTION_HEADER, 'Aydınlatma metni ve açık rıza',
            AYDINLATMA_TCORPUS_());

// var an = FormApp.openById(ANKET_ID);
// n += yaz_(an, FormApp.ItemType.SECTION_HEADER, 'Aydınlatma ve açık rıza',
// AYDINLATMA_ANKET_());

// n += soru6_(an);
// an.setConfirmationMessage(ONAY_MESAJI);
// Logger.log('✓ teşekkür mesajı yenilendi');

  Logger.log('Güncellenen bölüm sayısı: ' + n + ' / 2');
  if (n < 2) {
    Logger.log('UYARI: beklenen 2 bölümün hepsi bulunamadı — başlıklar elle ' +
               'değiştirilmiş olabilir. Aşağıdaki dökümü kontrol edin.');
    dokum_(tc, 'T-CORPUS');

  }
  /* yazdıktan sonra GERİ OKU — "güncelledim" demek yetmez */
  denetle_(tc, FormApp.ItemType.SECTION_HEADER, 'Aydınlatma metni ve açık rıza',
           'Sabit bir üst süre yoktur', 'En çok 2 yıl');


  Logger.log('T-CORPUS: ' + tc.getPublishedUrl());
// Logger.log('ANKET   : ' + an.getPublishedUrl());
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

/** Anketin 6. sorusunu yeniden başlıklandırır. Başlığın "6." ile
    başlamasına bakar; ikinci kez çalıştırılırsa da doğru öğeyi bulur. */
function soru6_(form) {
  var ogeler = form.getItems(FormApp.ItemType.MULTIPLE_CHOICE);
  for (var i = 0; i < ogeler.length; i++) {
    if (ogeler[i].getTitle().indexOf('6.') !== 0) continue;

    var s = ogeler[i].asMultipleChoiceItem();
    Logger.log('  6. soru — ÖNCEKİ şıklar: ' + sikDizgi_(s));

    /* Zincirleme YAPMA. v3'te .setTitle().setHelpText().setChoiceValues()
       zinciri hata vermeden çalıştı ama şıklar değişmedi; başlık ve yardım
       metni geçti. Ayrı ayrı çağırıp geri okuyoruz. */
    s.setTitle(S6_BASLIK);
    s.setHelpText(S6_YARDIM);

    var secimler = [];
    for (var j = 0; j < S6_SECENEK.length; j++) secimler.push(s.createChoice(S6_SECENEK[j]));
    s.setChoices(secimler);

    /* aynı öğeyi FORMDAN YENİDEN okuyup bak — nesne üstünden değil */
    var kontrol = sikDizgi_(taze6_(form));
    Logger.log('  6. soru — SONRAKİ şıklar: ' + kontrol);
    if (kontrol.indexOf('perdede izlemek yetti') >= 0) {
      Logger.log('✓ güncellendi: anket 6. soru (şıklar dahil)');
      return 1;
    }
    Logger.log('✗ anket 6. soru: başlık geçti ama ŞIKLAR GEÇMEDİ. Yukarıdaki');
    Logger.log('  iki satırı Claude\'a gönderin; şıkları elle de düzeltebilirsiniz.');
    return 0;
  }
  Logger.log('✗ bulunamadı: anket 6. soru');
  return 0;
}

/** Formdan 6. soruyu taze okur. */
function taze6_(form) {
  var o = form.getItems(FormApp.ItemType.MULTIPLE_CHOICE);
  for (var i = 0; i < o.length; i++)
    if (o[i].getTitle().indexOf('6.') === 0) return o[i].asMultipleChoiceItem();
  return null;
}

/** Şıkları tek satırlık okunur dizgiye çevirir. */
function sikDizgi_(mc) {
  if (!mc) return '(öğe yok)';
  var c = mc.getChoices(), a = [];
  for (var i = 0; i < c.length; i++) a.push(c[i].getValue());
  return a.join(' | ');
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
