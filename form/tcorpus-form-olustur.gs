/**
 * T-Corpus — kayıt ve başvuru formu.  SÜRÜM 2 (sıralama düzeltildi)
 *
 * ÇALIŞTIRMA: fonksiyon listesinden "formuKur" → Run.
 * Günlükteki DOLDURMA adresini Claude'a ver.
 *
 * SÜRÜM 1'DEKİ HATA: sayfa ayraçları en başta oluşturulmuştu; Apps Script
 * her yeni soruyu formun SONUNA eklediği için bütün sorular son bölüme
 * yığılıyordu. Bu sürümde öğeler DOĞRU SIRAYLA ekleniyor, dallanma ise
 * en sonda bağlanıyor (o an bütün sayfalar mevcut oluyor).
 *
 * ESKİ FORMU SİL: Drive'da "T-Corpus — kayıt ve başvuru" adlı ilk formu
 * çöpe at ki hangisinin kullanıldığı karışmasın.
 *
 * SONRA ELLE: 2. sayfaya iki DOSYA YÜKLEME sorusu ekle (Apps Script
 * oluşturamıyor). İkisi de İSTEĞE BAĞLI kalsın.
 */
function formuKur() {
  var f = FormApp.create('T-Corpus — kayıt ve başvuru');
  f.setDescription(
    'T-Corpus, TİMAV Dijital Beşerî Bilimler Merkezi.\n\n' +
    'Bu form üç kapı içindir: yalnız haberdar olmak · veriyle çalışmaya başlamak · ' +
    'ekipte çalışmak. Hiçbiri için önce "araştırmacı olmanız" gerekmiyor.\n\n' +
    'Özgeçmiş yalnız üçüncü kapıda ve isteğe bağlıdır. Bizim asıl merak ettiğimiz ' +
    'iş tecrübeniz değil, soru kurabilmeniz.'
  );
  f.setCollectEmail(true);
  f.setProgressBar(true);
  f.setAllowResponseEdits(true);
  f.setConfirmationMessage(
    'Kaydınız alındı. Teşekkür ederiz.\n\n' +
    'Gönderdiğiniz soru cümlesini okuyup size dönüş yapacağız. Bu arada merkezin ' +
    'açık veri setlerini kullanmaya bugün başlayabilirsiniz: ' +
    'alicetinkaya76.github.io/tcorpus'
  );

  /* ---------- 1. SAYFA: kapı + kimlik ---------- */
  var kapi = f.addMultipleChoiceItem();          // seçenekleri EN SONDA bağlanacak
  kapi.setTitle('Hangi kapıdan geliyorsunuz?').setRequired(true)
      .setHelpText('Aşağıdaki üç seçenek giderek artan bir bağlılık ister; ' +
                   'en hafifini seçmekte hiçbir sakınca yok.');

  f.addTextItem().setTitle('Ad soyad').setRequired(true);
  f.addTextItem().setTitle('Kurum / bölüm / sınıf').setRequired(true)
   .setHelpText('ör. Selçuk Ü. İlahiyat, 2. sınıf — ya da: mezun, bağımsız çalışıyorum');
  f.addCheckboxItem().setTitle('İlgi alanınız').setRequired(true)
   .setChoiceValues(['Tarih & siyer','Hadis & isnad','Kur\'an çalışmaları','Fıkıh','Tasavvuf',
                     'Osmanlı & Türkçe','İslam felsefesi & kelâm','Bilim tarihi','Arapça / dil',
                     'Yazılım / veri tarafı','Henüz emin değilim']).showOtherOption(true);
  f.addMultipleChoiceItem().setTitle('Bize nereden ulaştınız?')
   .setChoiceValues(['Rıhle 2026 semineri — salondaydım','Rıhle 2026 — kare kodu okuttum',
                     'Siteden (kitabin-rihlesi)','Bir hocam / arkadaşım yönlendirdi','Diğer'])
   .showOtherOption(true);

  /* ---------- 2. SAYFA: soru ve plan ---------- */
  var sPlan = f.addPageBreakItem().setTitle('Sorun ve planın')
    .setHelpText('Bu sayfa Kapı 2 ve Kapı 3 içindir. Alanları, sitedeki 5. durakta ' +
                 'indirdiğiniz tek sayfalık plandan doğrudan kopyalayabilirsiniz.\n\n' +
                 'Planınız yoksa 5 dakikada üretebilirsiniz — 5. durak, "Planını indir":\n' +
                 'https://alicetinkaya76.github.io/kitabin-rihlesi/#ilham');

  f.addParagraphTextItem().setTitle('Soru cümleniz').setRequired(true)
   .setHelpText('Tek cümle. ör. "Fütûh\'un üç bölgesinde yerleşim kayıtları, bölgeden bölgeye nasıl değişiyor?"');
  f.addTextItem().setTitle('Malzeme — neyin içinde bakacaksınız?')
   .setHelpText('ör. Fütûhu\'l-büldân\'ın Mısır bölümü · tek bir bab · tek bir süreli yayın');
  f.addTextItem().setTitle('Birim — tablonuzun satırları ne olacak?')
   .setHelpText('ör. yerleşim kaydı · râvi · kelime geçişi · ilim (düğüm)');
  f.addTextItem().setTitle('Eksen — neye göre karşılaştıracaksınız?')
   .setHelpText('ör. bölgeden bölgeye · tabakadan tabakaya · on yıldan on yıla — ya da: karşılaştırmasız');
  f.addMultipleChoiceItem().setTitle('Haftada kaç saat ayırabilirsiniz?')
   .setChoiceValues(['2 saat — ders dönemi içinde, yavaş ama sürdürülebilir',
                     '4 saat — dengeli','6+ saat — yaz ya da ara dönem'])
   .setHelpText('Dürüst cevap verin; takvimi buna göre kurarız.');
  f.addCheckboxItem().setTitle('Merkezin hangi projeleri ilginizi çekiyor?')
   .setHelpText('Beta rozetli projeler el bekliyor. Boş da bırakabilirsiniz.')
   .setChoiceValues(['İslam Tarih Atlası','İTA — İslam Tarihyazım Atlası','Tefsir Atlası','Tabakat',
                     'Siyer Atlası','Salibiyyât','Dijital Tasavvuf Atlası','İslam\'da Kitap Tarihi',
                     'Ridda Savaşları Veritabanı','İbn Teymiyye Korpusu','Frontier Heritage Corpus',
                     'isnad-bench / dia-bench','Ustaz','Verinin Dili','Halka',
                     'Kendi projemi getirmek istiyorum']);
  f.addSectionHeaderItem().setTitle('Yalnız Kapı 3 için — ekipte çalışmak isteyenler')
   .setHelpText('Kapı 1 ve 2 ile geldiyseniz bu iki alanı boş bırakın.');
  f.addParagraphTextItem().setTitle('Daha önce veriyle / dijital yöntemle bir iş yaptınız mı?')
   .setHelpText('Kısa yazın. "Hayır" da geçerli bir cevaptır ve eleme sebebi değildir.');
  f.addTextItem().setTitle('Varsa: kişisel site, GitHub, yayın ya da tez bağlantısı');

  /* ---------- 3. SAYFA: onay ---------- */
  var sOnay = f.addPageBreakItem().setTitle('Onay ve iletişim');
  f.addParagraphTextItem().setTitle('Eklemek istediğiniz bir şey var mı?');
  f.addSectionHeaderItem().setTitle('Aydınlatma metni ve açık rıza')
   .setHelpText(AYDINLATMA_METNI());
  f.addCheckboxItem().setTitle('Onay').setRequired(true)
   .setChoiceValues(['Yukarıdaki aydınlatma metnini okudum; kişisel verilerimin belirtilen ' +
                     'amaçla işlenmesine ve yurt dışında bulunan form altyapısında saklanmasına ' +
                     'açık rıza gösteriyorum.']);

  /* ---------- DALLANMA: bütün sayfalar oluştuktan SONRA ---------- */
  kapi.setChoices([
    kapi.createChoice('📬 Haberdar olmak istiyorum — yeni veri setleri ve açılan projeler duyurulduğunda haberim olsun', sOnay),
    kapi.createChoice('📄 Veriyle çalışmak istiyorum — kendi sorumla başlamak istiyorum', sPlan),
    kapi.createChoice('🤝 Ekipte çalışmak istiyorum — yürüyen bir projede sorumluluk almak istiyorum', sPlan)
  ]);
  sPlan.setGoToPage(sOnay);

  Logger.log('DOLDURMA ADRESİ : ' + f.getPublishedUrl());
  Logger.log('KISA ADRES      : ' + f.shortenFormUrl(f.getPublishedUrl()));
  Logger.log('DÜZENLEME       : ' + f.getEditUrl());
  Logger.log('--- Bu adresi Claude\'a ver. Eski formu Drive\'dan sil. ---');
  return f.getPublishedUrl();
}

function AYDINLATMA_METNI() {
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
