/**
 * Rıhle 2026 — seminer değerlendirme anketi. Tek çalıştırmada kurar.
 *
 * ÇALIŞTIRMA: script.google.com → Yeni proje → yapıştır → anketiKur → Çalıştır
 * Sonra Kayıt (Log) penceresindeki DOLDURMA adresini al.
 *
 * TASARIM KARARLARI (gerekçeleriyle)
 * · ANONİM: hiçbir zorunlu soru kişisel veri istemiyor. E-posta TOPLANMIYOR
 *   (setCollectEmail kapalı). Böylece KVKK yükü hafif ve cevap oranı yüksek olur.
 * · İletişim yalnız SON SORUDA ve İSTEĞE BAĞLI; "evet" diyen ayrı sayfaya geçer
 *   ve orada açık rıza onayı verir.
 * · SEKİZ SORU. Daha uzun anket, salonda doldurulmaz.
 * · 2. ve 3. sorular kasten aynı ölçekte: FARKLARI bu seminerin asıl ölçüsüdür
 *   ("önce ne biliyordu" → "şimdi ne yapabileceğini düşünüyor").
 * · 5. soru (neresi kapalı kaldı) açık uçlu ve zorunlu: bir sonraki sunumu
 *   düzeltecek tek soru budur.
 */
function anketiKur() {
  var f = FormApp.create('Rıhle 2026 — Dijital İslami İlimler ve Yapay Zekâ · değerlendirme');
  f.setDescription(
    'Bu anket ANONİMDİR ve iki dakikanızı alır.\n\n' +
    'Amacı bir sonraki semineri düzeltmek: neyin işe yaradığını değil, ' +
    'NEYİN KAPALI KALDIĞINI öğrenmek istiyoruz.\n\n' +
    'İletişim bilgisi yalnız son soruda ve isteğe bağlıdır.'
  );
  f.setCollectEmail(false);
  f.setProgressBar(true);
  f.setConfirmationMessage(
    'Teşekkür ederiz — cevabınız kaydedildi.\n\n' +
    'Seminerin eşlikçi sitesi açık kalmaya devam ediyor:\n' +
    'alicetinkaya76.github.io/kitabin-rihlesi'
  );

  var sIletisim = f.addPageBreakItem().setTitle('İletişim (isteğe bağlı)');
  var sBitir    = f.addPageBreakItem().setTitle('Teşekkürler').setGoToPage(FormApp.PageNavigationType.SUBMIT);

  /* 1 */ f.addMultipleChoiceItem().setTitle('1. Kimsiniz?').setRequired(true)
    .setChoiceValues(['Lisans öğrencisi','Yüksek lisans öğrencisi','Doktora öğrencisi',
                      'Akademisyen','Öğretmen','Kurum çalışanı','Diğer']).showOtherOption(true);

  /* 2 */ f.addScaleItem().setTitle('2. Bu seminerden ÖNCE dijital beşerî bilimlere ne kadar aşinaydınız?')
    .setBounds(1,5).setLabels('Hiç duymamıştım','Kendim çalışma yapmıştım').setRequired(true);

  /* 3 */ f.addScaleItem().setTitle('3. ŞU AN, kendi alanınızda küçük bir dijital çalışma başlatabileceğinizi ne kadar düşünüyorsunuz?')
    .setBounds(1,5).setLabels('Hiç başlatamam','Yarın başlayabilirim').setRequired(true)
    .setHelpText('2. ve 3. soruların FARKI bizim için en değerli ölçüdür.');

  /* 4 */ f.addMultipleChoiceItem().setTitle('4. Hangi durak sizin için en çok işe yaradı?').setRequired(true)
    .setChoiceValues(['1 · Temeller — dört kavram (uzak okuma, ağ, CBS, veri seti)',
                      '2 · Araştırmacının yolu — beş istasyon',
                      '3 · Makinenin içi — modelin nasıl çalıştığı',
                      '4 · Sıra sende — 90 saniyelik delil denetimi',
                      '5 · İlk makalene giden yol — atölye ve plan',
                      '6 · T-Corpus — merkez ve açık veri',
                      'Hiçbiri belirgin şekilde öne çıkmadı']);

  /* 5 */ f.addParagraphTextItem()
    .setTitle('5. Neresi kapalı kaldı? Hangi kısmı anlamadınız ya da ikna olmadınız?')
    .setHelpText('Tek cümle de olur. Bu sorunun cevabı doğrudan bir sonraki sunumu değiştirecek — ' +
                 'lütfen nazik olmaya çalışmayın, açık olun.')
    .setRequired(true);

  /* 6 */ f.addMultipleChoiceItem().setTitle('6. Eşlikçi siteyi (kitabin-rihlesi) açtınız mı?')
    .setChoiceValues(['Evet, seminer sırasında açtım','Evet, kendim gezdim',
                      'Henüz açmadım ama açacağım','Hayır, açmayı düşünmüyorum']);

  /* 7 */ f.addScaleItem().setTitle('7. Bu semineri alanındaki bir arkadaşınıza tavsiye eder misiniz?')
    .setBounds(1,5).setLabels('Kesinlikle hayır','Kesinlikle evet');

  /* 8 */ var q8 = f.addMultipleChoiceItem();
  q8.setTitle('8. Sizinle iletişime geçmemizi ister misiniz?').setRequired(true)
    .setHelpText('"Hayır" demek anketi eksik bırakmaz; cevabınız yine tam sayılır.')
    .setChoices([
      q8.createChoice('Hayır, teşekkürler — anonim kalsın', sBitir),
      q8.createChoice('Evet: T-Corpus’tan haberdar olmak / birlikte çalışmak istiyorum', sIletisim)
    ]);

  f.addParagraphTextItem().setTitle('Eklemek istediğiniz bir şey var mı? (isteğe bağlı)');

  /* --- iletişim sayfası --- */
  f.addTextItem().setTitle('Ad soyad').setRequired(true);
  f.addTextItem().setTitle('E-posta').setRequired(true);
  f.addTextItem().setTitle('Kurum / bölüm / sınıf');
  f.addMultipleChoiceItem().setTitle('Hangi kapı?').setRequired(true)
    .setChoiceValues(['📬 Haberdar olmak istiyorum',
                      '📄 Veriyle çalışmak istiyorum — kendi sorumla başlayacağım',
                      '🤝 Ekipte çalışmak istiyorum']);
  f.addSectionHeaderItem().setTitle('Aydınlatma ve açık rıza').setHelpText(AYDINLATMA());
  f.addCheckboxItem().setTitle('Onay').setRequired(true)
    .setChoiceValues(['Aydınlatma metnini okudum; iletişim bilgilerimin belirtilen amaçla ' +
                      'işlenmesine ve yurt dışındaki form altyapısında saklanmasına açık rıza gösteriyorum.']);

  Logger.log('DOLDURMA : ' + f.getPublishedUrl());
  Logger.log('KISA     : ' + f.shortenFormUrl(f.getPublishedUrl()));
  Logger.log('DÜZENLEME: ' + f.getEditUrl());
  Logger.log('--- Doldurma adresini Claude\'a ver: anket/index.html içindeki ANKET_URL oraya bağlanacak. ---');
  return f.getPublishedUrl();
}

function AYDINLATMA() {
  return [
'Anketin 1-7. soruları ANONİMDİR; kimlik bilgisi toplanmaz.',
'Bu sayfadaki bilgileri YALNIZCA siz istediyseniz veriyorsunuz.',
'',
'VERİ SORUMLUSU: Türkiye İmam Hatipliler Vakfı (TİMAV) — T-Corpus Dijital',
'Beşerî Bilimler Merkezi. Şemsi Tebrizi Mah. Dr. Abdullah Salim Sk. No: 22,',
'Karatay/Konya. bilgi@timav.org.tr · +90 (332) 350 07 96',
'',
'AMAÇ: Size dönüş yapmak ve uygun projeye/eğitime yönlendirmek.',
'HUKUKİ SEBEP: KVKK m.5/1 — açık rızanız.',
'AKTARIM: Form altyapısı Google LLC’ye aittir; yanıtlar yurt dışındaki',
'sunucularda saklanır (KVKK m.9). Üçüncü kişilerle paylaşılmaz.',
'SAKLAMA: En çok 2 yıl; talebiniz üzerine derhal silinir.',
'HAKLARINIZ (KVKK m.11): erişme, düzeltme, silme, itiraz, rızayı geri alma.',
'Başvuru: bilgi@timav.org.tr — en geç 30 gün içinde cevaplanır.'
  ].join('\n');
}
