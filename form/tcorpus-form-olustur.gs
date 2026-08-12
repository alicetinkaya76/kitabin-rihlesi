/**
 * T-Corpus — kayıt ve başvuru formunu tek çalıştırmada kurar.
 *
 * NASIL ÇALIŞTIRILIR
 *  1) script.google.com → Yeni proje
 *  2) Bu dosyanın tamamını yapıştır
 *  3) Üstteki fonksiyon listesinden "formuKur" → Çalıştır
 *  4) İlk çalıştırmada Google izin ister (kendi hesabın; betik yalnız form
 *     oluşturur, başka bir şeye dokunmaz)
 *  5) Kayıt (Log) penceresinde iki adres çıkar: DOLDURMA ve DÜZENLEME
 *
 * SONRA ELLE YAPILACAK İKİ ŞEY (Apps Script dosya yükleme sorusu
 * oluşturamıyor — API'de karşılığı yok):
 *  a) 2. sayfaya "Planını yükle (.md / .pdf) — isteğe bağlı" dosya yükleme
 *  b) 2. sayfaya "Özgeçmiş — yalnız Kapı 3, isteğe bağlı" dosya yükleme
 *  Dosya yükleme, cevaplayanın Google hesabıyla giriş yapmasını zorunlu
 *  kılar; bu yüzden ikisi de İSTEĞE BAĞLI bırakıldı. Asıl sinyal metin
 *  alanlarındaki soru cümlesidir.
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
    'Gönderdiğiniz soru cümlesini okuyup size dönüş yapacağız. ' +
    'Bu arada merkezin açık veri setlerini kullanmaya bugün başlayabilirsiniz: ' +
    'alicetinkaya76.github.io/tcorpus'
  );

  /* ---------- sayfalar (önce kur, sonra yönlendir) ---------- */
  var s2 = f.addPageBreakItem().setTitle('Sorun ve planın')
    .setHelpText('Bu sayfa Kapı 2 ve Kapı 3 içindir. Alanları, sitedeki 5. durakta ' +
                 'indirdiğiniz tek sayfalık plandan doğrudan kopyalayabilirsiniz.');
  var s3 = f.addPageBreakItem().setTitle('Onay ve iletişim');

  /* ---------- 1. sayfa: kapı + kimlik ---------- */
  var kapi = f.addMultipleChoiceItem();
  kapi.setTitle('Hangi kapıdan geliyorsunuz?').setRequired(true)
    .setHelpText('Aşağıdaki üç seçenek giderek artan bir bağlılık ister; en hafifi seçmekte hiçbir sakınca yok.')
    .setChoices([
      kapi.createChoice('📬 Haberdar olmak istiyorum — yeni veri setleri ve açılan projeler duyurulduğunda haberim olsun', s3),
      kapi.createChoice('📄 Veriyle çalışmak istiyorum — kendi sorumla başlamak istiyorum', s2),
      kapi.createChoice('🤝 Ekipte çalışmak istiyorum — yürüyen bir projede sorumluluk almak istiyorum', s2)
    ]);

  f.addTextItem().setTitle('Ad soyad').setRequired(true);
  f.addTextItem().setTitle('Kurum / bölüm / sınıf')
    .setHelpText('ör. Selçuk Ü. İlahiyat, 2. sınıf — ya da: mezun, bağımsız çalışıyorum').setRequired(true);

  f.addCheckboxItem().setTitle('İlgi alanınız').setRequired(true)
    .setChoiceValues(['Tarih & siyer','Hadis & isnad','Kur\'an çalışmaları','Fıkıh',
                      'Tasavvuf','Osmanlı & Türkçe','Bilim tarihi','Arapça / dil',
                      'Yazılım / veri tarafı','Henüz emin değilim'])
    .showOtherOption(true);

  f.addMultipleChoiceItem().setTitle('Bize nereden ulaştınız?')
    .setChoiceValues(['Rıhle 2026 semineri — salondaydım',
                      'Rıhle 2026 — kare kodu okuttum',
                      'Siteden (kitabin-rihlesi)',
                      'Bir hocam / arkadaşım yönlendirdi',
                      'Diğer']).showOtherOption(true);

  /* ---------- 2. sayfa: soru ve plan ---------- */
  f.addSectionHeaderItem().setTitle('Soru tezgâhının çıktısı')
    .setHelpText('Bu dört alan, sitedeki A aletinin ürettiği plandan gelir. ' +
                 'Henüz doldurmadıysanız: kitabin-rihlesi/#soru');

  f.addParagraphTextItem().setTitle('Soru cümleniz').setRequired(true)
    .setHelpText('Tek cümle. ör. "Fütûh\'un üç bölgesinde yerleşim kayıtları, bölgeden bölgeye nasıl değişiyor?"');
  f.addTextItem().setTitle('Malzeme — neyin içinde bakacaksınız?')
    .setHelpText('ör. Fütûhu\'l-büldân\'ın Mısır bölümü · tek bir bab · tek bir süreli yayın');
  f.addTextItem().setTitle('Birim — tablonuzun satırları ne olacak?')
    .setHelpText('ör. yerleşim kaydı · râvi · kelime geçişi');
  f.addTextItem().setTitle('Eksen — neye göre karşılaştıracaksınız?')
    .setHelpText('ör. bölgeden bölgeye · tabakadan tabakaya · on yıldan on yıla — ya da: karşılaştırmasız');

  f.addMultipleChoiceItem().setTitle('Haftada kaç saat ayırabilirsiniz?')
    .setChoiceValues(['2 saat — ders dönemi içinde, yavaş ama sürdürülebilir',
                      '4 saat — dengeli',
                      '6+ saat — yaz ya da ara dönem'])
    .setHelpText('Dürüst cevap verin; takvimi buna göre kurarız.');

  f.addCheckboxItem().setTitle('Merkezin hangi projeleri ilginizi çekiyor?')
    .setHelpText('Beta rozetli projeler el bekliyor. Birden çok seçebilirsiniz; boş da bırakabilirsiniz.')
    .setChoiceValues(['İslam Tarih Atlası','İTA — İslam Tarihyazım Atlası','Tefsir Atlası',
                      'Tabakat','Siyer Atlası','Salibiyyât','Dijital Tasavvuf Atlası',
                      'İslam\'da Kitap Tarihi','Ridda Savaşları Veritabanı','İbn Teymiyye Korpusu',
                      'Frontier Heritage Corpus','isnad-bench / dia-bench','Ustaz',
                      'Verinin Dili','Halka','Kendi projemi getirmek istiyorum']);

  f.addSectionHeaderItem().setTitle('Yalnız Kapı 3 için — ekipte çalışmak isteyenler')
    .setHelpText('Kapı 1 ve 2 ile geldiyseniz bu bölümü boş bırakın.');
  f.addParagraphTextItem().setTitle('Daha önce veriyle / dijital yöntemle bir iş yaptınız mı?')
    .setHelpText('Kısa yazın. "Hayır" da geçerli bir cevaptır ve eleme sebebi değildir.');
  f.addTextItem().setTitle('Varsa: kişisel site, GitHub, yayın ya da tez bağlantısı');

  /* ---------- 3. sayfa: onay ---------- */
  f.addParagraphTextItem().setTitle('Eklemek istediğiniz bir şey var mı?');

  f.addSectionHeaderItem().setTitle('Aydınlatma metni ve açık rıza')
    .setHelpText(AYDINLATMA_METNI());

  f.addCheckboxItem().setTitle('Onay').setRequired(true)
    .setChoiceValues(['Yukarıdaki aydınlatma metnini okudum; kişisel verilerimin ' +
                      'belirtilen amaçla işlenmesine ve yurt dışında bulunan form ' +
                      'altyapısında saklanmasına açık rıza gösteriyorum.']);

  Logger.log('DOLDURMA ADRESİ : ' + f.getPublishedUrl());
  Logger.log('KISA ADRES      : ' + f.shortenFormUrl(f.getPublishedUrl()));
  Logger.log('DÜZENLEME       : ' + f.getEditUrl());
  Logger.log('--- Bu iki adresi Claude\'a ver: siteye ve kare koda bağlansın. ---');
  return f.getPublishedUrl();
}

function AYDINLATMA_METNI() {
  return [
'VERİ SORUMLUSU: Türkiye İmam Hatipliler Vakfı (TİMAV) — T-Corpus Dijital Beşerî',
'Bilimler Merkezi. Şemsi Tebrizi Mah. Dr. Abdullah Salim Sk. No: 22, Karatay/Konya.',
'İletişim: bilgi@timav.org.tr · +90 (332) 350 07 96',
'',
'İŞLENEN VERİLER: ad-soyad, e-posta adresi, öğrenim/kurum bilgisi, ilgi alanı,',
'araştırma sorusu ve plan bilgileri; yalnız üçüncü kapıdan başvuranlar için',
'isteğe bağlı olarak özgeçmiş ve bağlantı bilgileri.',
'',
'AMAÇ: Başvurunuza dönüş yapmak, sizi uygun projeye ya da eğitim programına',
'yönlendirmek ve merkezin duyurularını iletmek. Başka hiçbir amaçla',
'kullanılmaz; ticari elektronik ileti gönderilmez.',
'',
'HUKUKİ SEBEP: KVKK m.5/1 uyarınca AÇIK RIZANIZ.',
'',
'AKTARIM: Form altyapısı Google LLC tarafından sağlanmaktadır ve yanıtlar',
'yurt dışındaki sunucularda saklanır. Bu, KVKK m.9 anlamında yurt dışına',
'aktarım sayılır ve açık rızanıza tabidir. Veriler üçüncü kişilerle',
'PAYLAŞILMAZ, satılmaz, reklam amacıyla kullanılmaz.',
'',
'SAKLAMA SÜRESİ: Başvurunuz sonuçlandıktan sonra en çok 2 yıl; bu sürenin',
'sonunda ya da talebiniz üzerine derhal silinir.',
'',
'HAKLARINIZ (KVKK m.11): Verilerinize erişme, düzeltilmesini veya silinmesini',
'isteme, işlemeye itiraz etme ve rızanızı geri alma hakkına sahipsiniz.',
'Talebiniz için bilgi@timav.org.tr adresine yazmanız yeterlidir; başvurunuz',
'en geç 30 gün içinde sonuçlandırılır.'
  ].join('\n');
}
