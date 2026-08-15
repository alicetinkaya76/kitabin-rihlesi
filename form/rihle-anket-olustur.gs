/**
 * Rıhle 2026 — seminer değerlendirme anketi.  SÜRÜM 2 (sıralama düzeltildi)
 *
 * ÇALIŞTIRMA: fonksiyon listesinden "anketiKur" → Run.
 * Günlükteki DOLDURMA adresini Claude'a ver.
 *
 * SÜRÜM 1'DEKİ HATA: sayfa ayracı en başta oluşturulmuştu; Apps Script her
 * yeni soruyu formun SONUNA eklediği için bütün sorular iletişim sayfasına
 * düşüyordu. Bu sürümde öğeler doğru sırayla ekleniyor, dallanma en sonda
 * bağlanıyor.  ESKİ FORMU Drive'dan SİL.
 *
 * TASARIM: 1-7 ANONİM (e-posta toplanmıyor) · iletişim yalnız 8'de ve
 * isteğe bağlı · 2 ile 3 aynı ölçekte, FARKLARI seminerin asıl ölçüsü ·
 * 5. soru zorunlu ve açık uçlu: bir sonraki sunumu o düzeltir.
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
    'Sunumun yapıldığı sayfa açık kalmaya devam ediyor; kendi hızınızda\n' +
    'yeniden gezebilirsiniz:\n' +
    'alicetinkaya76.github.io/kitabin-rihlesi'
  );

  /* ---------- 1. SAYFA: sekiz soru ---------- */
  f.addMultipleChoiceItem().setTitle('1. Kimsiniz?').setRequired(true)
   .setChoiceValues(['Lisans öğrencisi','Yüksek lisans öğrencisi','Doktora öğrencisi',
                     'Akademisyen','Öğretmen','Kurum çalışanı','Diğer']).showOtherOption(true);

  f.addScaleItem().setTitle('2. Bu seminerden ÖNCE dijital beşerî bilimlere ne kadar aşinaydınız?')
   .setBounds(1,5).setLabels('Hiç duymamıştım','Kendim çalışma yapmıştım').setRequired(true);

  f.addScaleItem().setTitle('3. ŞU AN, kendi alanınızda küçük bir dijital çalışma başlatabileceğinizi ne kadar düşünüyorsunuz?')
   .setBounds(1,5).setLabels('Hiç başlatamam','Yarın başlayabilirim').setRequired(true)
   .setHelpText('2. ve 3. soruların FARKI bizim için en değerli ölçüdür.');

  f.addMultipleChoiceItem().setTitle('4. Hangi durak sizin için en çok işe yaradı?').setRequired(true)
   .setChoiceValues(['1 · Temeller — dört kavram (uzak okuma, ağ, CBS, veri seti)',
                     '2 · Araştırmacının yolu — beş istasyon',
                     '3 · Makinenin içi — modelin nasıl çalıştığı',
                     '4 · Sıra sende — 90 saniyelik delil denetimi',
                     '5 · İlk makalene giden yol — atölye ve plan',
                     '6 · T-Corpus — merkez ve açık veri',
                     'Hiçbiri belirgin şekilde öne çıkmadı']);

  f.addParagraphTextItem()
   .setTitle('5. Neresi kapalı kaldı? Hangi kısmı anlamadınız ya da ikna olmadınız?')
   .setHelpText('Tek cümle de olur. Bu sorunun cevabı doğrudan bir sonraki sunumu ' +
                'değiştirecek — lütfen nazik olmaya çalışmayın, açık olun.')
   .setRequired(true);

  /* Sunum bu sayfa üzerinden yapıldığı için herkes onu PERDEDE gördü.
     Ölçmek istediğimiz, kendi cihazında da açıp açmadığı. */
  f.addMultipleChoiceItem().setTitle('6. Sunum sayfasını kendi telefonunuzda ya da bilgisayarınızda da açtınız mı?')
   .setHelpText('Perdede zaten gördünüz; sorduğumuz, kendi cihazınızda açıp açmadığınız.')
   .setChoiceValues(['Evet, sunum sırasında kendi cihazımda da açtım',
                     'Evet, sunumdan sonra kendim gezdim',
                     'Henüz açmadım ama açacağım',
                     'Hayır, perdede izlemek yetti']);

  f.addScaleItem().setTitle('7. Bu semineri alanındaki bir arkadaşınıza tavsiye eder misiniz?')
   .setBounds(1,5).setLabels('Kesinlikle hayır','Kesinlikle evet');

  var q8 = f.addMultipleChoiceItem();            // seçenekleri EN SONDA bağlanacak
  q8.setTitle('8. Sizinle iletişime geçmemizi ister misiniz?').setRequired(true)
    .setHelpText('"Hayır" demek anketi eksik bırakmaz; cevabınız yine tam sayılır.');

  f.addParagraphTextItem().setTitle('Eklemek istediğiniz bir şey var mı? (isteğe bağlı)');

  /* ---------- 2. SAYFA: yalnız "evet" diyenler ---------- */
  var sIletisim = f.addPageBreakItem().setTitle('İletişim (isteğe bağlı)');
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

  /* ---------- DALLANMA: sayfa oluştuktan SONRA ---------- */
  q8.setChoices([
    q8.createChoice('Hayır, teşekkürler — anonim kalsın', FormApp.PageNavigationType.SUBMIT),
    q8.createChoice('Evet: T-Corpus’tan haberdar olmak / birlikte çalışmak istiyorum', sIletisim)
  ]);

  Logger.log('DOLDURMA : ' + f.getPublishedUrl());
  Logger.log('KISA     : ' + f.shortenFormUrl(f.getPublishedUrl()));
  Logger.log('DÜZENLEME: ' + f.getEditUrl());
  Logger.log('--- Bu adresi Claude\'a ver. Eski anketi Drive\'dan sil. ---');
  return f.getPublishedUrl();
}

function AYDINLATMA() {
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
