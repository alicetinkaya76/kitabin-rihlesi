# Rıhle 2026 — Doğrulanmış Kaynak Envanteri

Her bağlantı 6 Ağustos 2026 tarihinde tek tek açılarak kontrol edildi (bot korumalı 4 site uygulama içi tarayıcıyla elle; ayrıntı sitede). Tek istisna: Voyant Tools o gün kesintideydi.

## Makineyi gözle görme

- ✅ **[LLM Visualization (bbycroft.net/llm)](https://bbycroft.net/llm)**
  - Bir büyük dil modelinin (ChatGPT benzeri sistemlerin motorunun) içini 3 boyutlu bir maket gibi gezdiren sayfa: verinin katman katman nasıl aktığını adım adım izlersin. 'Yapay zekânın içinde ne var?' sorusuna sunumda gösterilebilecek en çarpıcı cevap.
  - Erişim: Ücretsiz, hesapsız; anlatım İngilizce ama asıl anlatım görsel olduğundan dil engeli düşük. Eski/zayıf cihazlarda 3B görüntü yavaş açılabilir.
  - İlk 10 dk: Siteyi aç → hesap yok → ekrana gelen 3B model şemasında sayfadaki adım adım anlatımı takip et (boşluk/ok tuşları veya tıklamayla ilerle) → küçük bir modelin bir kelimeyi tahmin ederken hangi katmanlardan geçtiğini animasyonla izle → fareyle döndürüp yakınlaş.
- ✅ **[Transformer Explainer (Georgia Tech)](https://poloclub.github.io/transformer-explainer/)**
  - GPT-2 adlı küçük bir dil modelini tarayıcının içinde canlı çalıştırıp iç işleyişini gösteren eğitim sayfası: kendi cümleni yazarsın, modelin bir sonraki kelimeyi hangi olasılıklarla tahmin ettiğini ve kelimelerin birbirine 'ne kadar baktığını' (attention/dikkat haritası) görürsün.
  - Erişim: Ücretsiz, hesapsız; model tamamen tarayıcıda çalışır, hiçbir veri gönderilmez. Arayüz ve örnekler İngilizce.
  - İlk 10 dk: Sayfayı aç → hesap yok → üstteki kutuya kısa bir İngilizce cümle yaz (model İngilizce eğitimli) → modelin sonraki kelime tahminlerini olasılıklarıyla gör → dikkat haritalarında hangi kelimenin hangisine bağlandığını incele → 'temperature' sürgüsünü oynatıp tahminlerin nasıl serbestleştiğini izle.
- ✅ **[Tiktokenizer](https://tiktokenizer.vercel.app)**
  - Yapay zekâ asistanlarının metni nasıl 'okuduğunu' gösterir: yazdığın cümlenin token'lara (modelin işlediği küçük metin parçaları) nasıl bölündüğünü renkli olarak anında görürsün. Arapça bir cümlenin neden İngilizceden çok daha fazla token tuttuğunu gözle görmek etkileyici bir sunum anıdır.
  - Erişim: Ücretsiz, hesapsız, tamamen tarayıcıda; arayüz İngilizce ama kullanım tek kutudan ibaret.
  - İlk 10 dk: Siteyi aç → hesap yok → kutuya önce Türkçe, sonra Arapça birer cümle yapıştır → metnin renkli parçalara bölünüşünü ve sağdaki toplam token sayısını gör → üstteki menüden farklı bir model (ör. gpt-4o) seçip aynı cümlenin farklı bölündüğünü karşılaştır.

## OpenITI ailesi

- ✅ **[OpenITI korpusu (GitHub organizasyonu)](https://github.com/OpenITI)**
  - Erken dönem İslam dünyasının Arapça ve Farsça metinlerini bilgisayarın işleyebileceği düz metin hâlinde toplayan açık korpus (korpus = büyük, düzenli metin koleksiyonu). Her kitap, yazarın vefat tarihine göre adlandırılmış depolarda durur (ör. 0300AH = hicrî 300 civarında vefat eden yazarlar).
  - Erişim: Ücretsiz, hesap gerekmez; site arayüzü İngilizce, metinler Arapça/Farsça.
  - İlk 10 dk: github.com/OpenITI adresini aç → 'Repositories' sekmesinden 0300AH gibi bir depoya gir → 'data' klasörüne tıkla → yazar klasörünü seç (ör. 0279Baladhuri) → kitap klasörüne gir → uzantısız ya da '.mARkdown' ile biten dosyaya tıkla → sağ üstteki 'Raw' düğmesine bas → açılan düz metin sayfasını Ctrl+S (Mac: Cmd+S) ile bilgisayarına kaydet.
- ✅ **[OpenITI Zenodo sürüm kaydı (2025.1.9)](https://zenodo.org/records/17767721)**
  - DOI: `10.5281/zenodo.17767721`
  - 2025
  - Korpusun atıf yapılabilir, dondurulmuş resmî sürümü. Akademik çalışmada 'ben şu sürümü kullandım' diyebilmek için GitHub yerine bu kayda atıf yapılır; 10.5281/zenodo.3082463 numaralı kalıcı DOI her zaman en yeni sürüme götürür.
  - Erişim: Ücretsiz, hesapsız indirme (bu sürüm 5,9 GB); sayfa İngilizce.
  - İlk 10 dk: Sayfayı aç → 'Files' kutusundan 'Download' ile tüm korpusu indir (büyük dosya; tek kitap gerekiyorsa GitHub yolu çok daha pratik) → sayfadaki hazır atıf metnini kopyalayıp kaynakçana ekle.
- ✅ **[OpenITI mARkdown biçim kılavuzu](https://alraqmiyyat.github.io/mARkdown/)**
  - OpenITI dosyalarının içindeki işaretlerin ne anlama geldiğini anlatan resmî kılavuz: #META# ile başlayan satırlar kitabın künye bilgisi, 'PageV05P022' basılı neşrin 5. cilt 22. sayfası, '### |' bölüm başlığı demek.
  - Erişim: Ücretsiz, hesapsız; İngilizce.
  - İlk 10 dk: Sayfayı aç → 'Header' ve 'Page Numbers' bölümlerini oku → indirdiğin bir OpenITI dosyasını not defterinde açıp gördüğün işaretleri kılavuzla karşılaştır; 10 dakikada dosyanın anatomisini çözersin.
- ✅ **[OpenITI/KITAB metadata arama uygulaması](https://kitab-project.org/metadata/)**
  - OpenITI'deki kitapları yazar adı, kitap adı ve tarihe göre tarayıp ilgili dosyaya götüren arama tablosu; kod bilmeden korpusta kitap bulmanın en kolay yolu. Günlük güncellenir.
  - Erişim: Ücretsiz, hesapsız; arayüz İngilizce, kitap adları Latin harfli çevriyazıyla aranır (ör. 'Futuh').
  - İlk 10 dk: kitab-project.org/metadata → tablonun arama kutusuna 'Ibn Battuta' yaz → çıkan satırda kitap adını, tarihi ve 'Version Id'yi gör → bağlantı seni GitHub'daki dosyaya götürür → 'Raw' düğmesi → Ctrl+S ile kaydet. Böylece arama arayüzü → kitap sayfası → ham dosya zinciri tamamlanır.
- ✅ **[KITAB Projesi (Knowledge, Information Technology, and the Arabic Book)](https://kitab-project.org/)**
  - Sarah Bowen Savant (yürütücü) ve KITAB ekibi, Aga Khan Üniversitesi ISMC (Londra), devam ediyor (ERC destekli)
  - Klasik Arapça kitapların birbirinden hangi pasajları aldığını (metin yeniden kullanımı: bir yazarın önceki kitaplardan aynen veya az değişiklikle aktardığı bölümler) makine öğrenmesiyle tespit eden büyük araştırma projesi. Yukarıdaki isnad makalesi ve birçok vaka çalışması bu projeden çıktı.
  - Erişim: Site ücretsiz ve açık; İngilizce.
  - İlk 10 dk: Siteyi açın; menüden 'Corpus and Data' bölümüne girin; ardından blogdaki 'The DNA of a Book' benzeri bir vaka yazısını açıp bir klasik eserin hangi eski kitaplardan ne kadar pasaj devraldığını gösteren görselleri inceleyin. Kod bilmeden, okuyarak ilerlenir.
- ✅ **[KITAB metin yeniden kullanımı verisi (pairwise-light)](https://github.com/kitab-project-org/pairwise-light)**
  - 2025
  - Hangi kitabın hangi kitapla hangi pasajları paylaştığını gösteren hazır tablolar (CSV = Excel'de açılan virgülle ayrılmış dosya). OpenITI 2025.1.9 sürümü için passim adlı programla üretilmiş; 'light' demek, ortak metin parçalarının kendisi boyut sınırı yüzünden çıkarılmış, yerleri (konum numaraları) bırakılmış demek.
  - Erişim: Ücretsiz, hesapsız. Kitap-başına özetler için kardeş depo: github.com/kitab-project-org/one_to_all. Resmî indirme rehberi: kitab-project.org/data/download.
  - İlk 10 dk: Depoyu aç → klasörler kitap kimliklerine göre adlandırılmış → ilgilendiğin kitabın kimliğini metadata uygulamasından öğren (ör. Shamela0012221) → klasörünü bulup bir CSV indir → Excel'de aç; her satır iki kitap arasındaki bir ortak pasajın yerini gösterir.
- ✅ **[İbn Battûta — er-Rihle (Tuhfetü'n-nüzzâr) tam metni [OpenITI]](https://raw.githubusercontent.com/OpenITI/0800AH/master/data/0779IbnBattuta/0779IbnBattuta.Rihla/0779IbnBattuta.Rihla.Shamela0011769-ara1.completed)**
  - İbn Battûta (ö. 779/1377)
  - Ünlü seyyahın seyahatnamesinin OpenITI'deki tam Arapça metni; tek tıkla tarayıcıda açılır ve tek dosya olarak kaydedilir. Kitap klasörü: github.com/OpenITI/0800AH/tree/master/data/0779IbnBattuta/0779IbnBattuta.Rihla
  - Erişim: Ücretsiz, hesapsız. Klasörde 4 ayrı sayısal sürüm var; '.completed' uzantılı bu sürüm, yapısal işaretlemesi tamamlanmış olan.
  - İlk 10 dk: Bağlantıya tıkla → tarayıcıda önce #META# künye satırları, ardından Arapça metin görünür → Ctrl+S ile kaydet → not defteri ya da Word'de aç; 'PageV##P###' işaretleri basılı neşrin cilt/sayfasını verir.
- ✅ **[Belâzürî — Fütûhu'l-Büldân tam metni [OpenITI]](https://raw.githubusercontent.com/OpenITI/0300AH/master/data/0279Baladhuri/0279Baladhuri.FutuhBuldan/0279Baladhuri.FutuhBuldan.Shamela0012221-ara1.mARkdown)**
  - Belâzürî (ö. 279/892-93)
  - İslam fetihleri tarihinin temel kaynağının OpenITI'deki tam Arapça metni. Kitap klasörü: github.com/OpenITI/0300AH/tree/master/data/0279Baladhuri/0279Baladhuri.FutuhBuldan
  - Erişim: Ücretsiz, hesapsız. Klasörde 6 sayısal sürüm var (Shamela, JK, Rafed vb. kaynaklardan); '.mARkdown' uzantılı bu sürüm işaretlemesi en ileri olan.
  - İlk 10 dk: Bağlantıya tıkla → künye satırlarından sonra Arapça metin gelir → Ctrl+S ile kaydet → Word/not defterinde aç; dosya adındaki 'Shamela0012221' numarası metnin alındığı Shamela kitap numarasıdır.

## Arapça dijital kütüphaneler

- ✅ **[el-Mektebetü'ş-Şâmile (Shamela)](https://shamela.ws/)**
  - Binlerce klasik Arapça kaynağı çevrimiçi okutan ve içinde kelime arattıran, sahada en yaygın ücretsiz dijital kütüphane. OpenITI'deki metinlerin büyük kısmının kaynağı da burasıdır (dosya adlarındaki 'Shamela0012221' gibi numaralar Shamela'nın kitap numarasıdır).
  - Erişim: Ücretsiz, hesapsız; arayüz Arapça; ayrıca çevrimdışı çalışan Windows programı vardır.
  - İlk 10 dk: Tarayıcıda shamela.ws → arama kutusuna kitap adını Arapça yaz (ör. فتوح البلدان) → kitap sayfasında içindekilerden bölüme tıklayıp oku; ekrandaki sayfa numaraları basılı neşre karşılık gelir, künye vermek için kullanılabilir.
- ✅ **[Usul.ai](https://usul.ai/)**
  - 15.000'den fazla İslami metni tarayan, yapay zekâ destekli yeni nesil arama platformu; 'bu ayeti hangi tefsirler nasıl açıklıyor' türü soruları sohbet biçiminde sorabilirsin.
  - Erişim: Temel arama ücretsiz; yapay zekâ sohbeti gibi bazı özellikler hesap/abonelik isteyebilir. Arayüz İngilizce (dil değiştirme düğmesi var).
  - İlk 10 dk: usul.ai → arama kutusuna Arapça ya da İngilizce bir terim yaz → sonuçlardan bir kitaba gir → pasajın kitap içindeki yerini gör → 'AI Chat' ile aynı konuda soru sorup verdiği kaynak göndermelerini kontrol et (yapay zekâ cevabını her zaman kaynağından doğrula).
- ✅ **[Turath (app.turath.io)](https://app.turath.io/)**
  - Shamela içeriğini modern ve hızlı bir web arayüzüyle sunan ücretsiz okuma/arama uygulaması; telefonda ve bilgisayarda rahat okuma için tercih edilir.
  - Erişim: Ücretsiz; arayüz Arapça (adı 'Türâs' = miras).
  - İlk 10 dk: app.turath.io → arama simgesine tıklayıp kitap ya da yazar adını Arapça yaz → kitabı açıp oku; sayfa numaraları basılı neşirle eşleşir.
- ✅ **[el-Mektebetü'l-Vakfiyye (Waqfeya)](https://waqfeya.net/)**
  - Taranmış İslami kitapların (PDF) ücretsiz arşivi; matbu neşrin sayfa görüntüsü gerektiğinde — dipnotu, tahkik mukaddimesi, orijinal sayfa düzeni — başvurulur.
  - Erişim: Ücretsiz, hesapsız; arayüz Arapça. Dikkat: PDF'ler çoğunlukla taranmış görüntüdür, içinde kelime araması genellikle yapılamaz.
  - İlk 10 dk: waqfeya.net → konu tasnifinden bir alan seç (fıkıh, hadis, tarih...) ya da arama kutusuna kitap adını Arapça yaz → kitap sayfasında PDF bağlantısına tıkla → indir; künyeyi PDF'in kapak sayfasından al.

## Kur'an & hadis

- ✅ **[Kur'an Arapça Korpusu (corpus.quran.com)](https://corpus.quran.com/)**
  - Kur'an'ın her kelimesinin dil bilgisi çözümlemesini veren ücretsiz araştırma sitesi: kelimenin kökü, çekimi ve cümledeki görevi tek tek işaretlenmiş; veri dosyası indirilebilir.
  - Erişim: Ücretsiz, açık kaynak (GNU lisansı); arayüz İngilizce; Leeds Üniversitesi kökenli, quran.com ekibince sürdürülüyor.
  - İlk 10 dk: corpus.quran.com → 'Word by Word' bölümüne gir → bir sure-ayet seç → her kelimenin altındaki çözümlemeyi ve çeviriyi incele → 'Download' sayfasından tüm çözümleme verisini tek dosya olarak indir.
- ✅ **[Quran.com](https://quran.com/)**
  - Kur'an'ı çok dilli okuma, dinleme ve arama sitesi; Türkçe meal dahil onlarca çeviriyi ayet ayet yan yana gösterir, kelime kelime çeviri sunar. corpus.quran.com'un dil bilgisi derinliğine girmeden önce kod bilmeyen öğrenci için yumuşak başlangıç.
  - Erişim: Ücretsiz, hesapsız; arayüz dili Türkçe seçilebilir. Kâr amacı gütmeyen Quran Foundation işletiyor.
  - İlk 10 dk: Bir sûre açın; çeviriler menüsünden bir Türkçe ve bir İngilizce meal seçip aynı ayeti karşılaştırın; kelime kelime görünümü açın.
- ✅ **[Quranic Arabic Corpus — Kur'an Morfoloji Verisi](https://corpus.quran.com/download/)**
  - Kais Dukes (Leeds Üniversitesi), v0.4
  - Kur'an'daki her kelimenin kökünü, kalıbını ve dilbilgisi görevini (isim/fiil, hâl eki vb.) tek tek etiketleyen tablo; Arapça derslerinde 'bu kelimenin kökü ne?' sorusunun hazır, denetlenmiş cevabı.
  - Erişim: Ücretsiz; indirme için yalnızca e-posta adresi istenir (hesap açılmaz); arayüz İngilizce; GNU lisansı.
  - İlk 10 dk: Sayfaya e-posta adresini yaz, GNU lisans şartını onayla ve morfoloji dosyasını indir; sekmeyle ayrılmış metni Google Sheets'e yükle; herhangi bir ayetin satırlarında ROOT (kök) sütununa bak — ör. bir sayfada 'ktb' kökünden türeyen bütün kelimeleri süz.
- ✅ **[Tanzil — Doğrulanmış Kur'an Metni](https://tanzil.net/download/)**
  - Tanzil Projesi, v1.1 (2021)
  - Titizlikle doğrulanmış Kur'an metnini düz metin, XML veya SQL olarak, harekeli (Osmanî) veya sade imlâyla indirmeye yarayan standart kaynak; hemen her dijital Kur'an uygulamasının temelindeki metin budur.
  - Erişim: Ücretsiz, hesap gerekmez; arayüz İngilizce; metin değiştirilemez, kaynak (Tanzil) belirtilmelidir.
  - İlk 10 dk: Sayfada metin türü olarak 'Simple (Clean)', biçim olarak 'Text' seç, kullanım şartını işaretle ve indir; tek dosyada bütün ayetler satır satır gelir — dosyayı Word'de ya da sohbet asistanında açıp istediğin ifadeyi arat (ör. bir kelimenin geçtiği bütün ayetler).
- ✅ **[Sunnah.com](https://sunnah.com/)**
  - Buhârî ve Müslim dahil büyük hadis koleksiyonlarını Arapça asıllarıyla ve İngilizce çevirileriyle sunan, standart numaralarıyla atıf yapılabilen en yaygın hadis sitesi.
  - Erişim: Ücretsiz, hesapsız; arayüz İngilizce, metinler Arapça-İngilizce.
  - İlk 10 dk: Tarayıcıda sunnah.com → üstteki arama kutusuna anahtar kelime yaz ya da bir koleksiyon seç → hadisin sayfasında Arapça metni, çevirisini ve kitap/bab/numara bilgisini gör; bu numara künye vermek için kullanılır.
- ✅ **[Sunnah.com resmî API (açık hadis verisi)](https://github.com/sunnah-com/api)**
  - Sunnah.com'un hadis verisini programla çekmeye yarayan resmî kanal (API = yazılımların bir siteden düzenli veri almasını sağlayan kapı). Kod bilmeyenler için doğrudan gerekli değil; bir geliştiriciyle ya da sohbet asistanıyla toplu hadis verisi üzerinde çalışılacaksa gösterilecek adres burası.
  - Erişim: GitHub deposu ücretsiz ve açık; belgeler sunnah.stoplight.io/docs/api adresinde. Geliştirme için örnek veri seti depoda mevcut.
  - İlk 10 dk: Depoyu aç → README'yi oku → 'documentation' bağlantısından API belgelerine geç; kendin denemeyeceksen bu adresi teknik iş ortağına iletmen yeterli.
- ✅ **[LK Hadith Corpus — Leeds & Kral Suud Paralel Hadis Derlemesi](https://github.com/ShathaTm/LK-Hadith-Corpus)**
  - Shatha Altammami vd. (Leeds Üniversitesi & Kral Suud Üniversitesi), 2019-2020
  - Kütüb-i Sitte'den 39.038 hadisi Arapça-İngilizce paralel ve isnad (rivayet zinciri) ile metin (metn) AYRILMIŞ hâlde veren CSV tabloları; isnad çalışmak isteyen öğrenci için hazır bölünmüş nadir bir kaynak.
  - Erişim: Ücretsiz, hesap gerekmez; GitHub arayüzü İngilizce, veri Arapça+İngilizce; açık lisans beyanı yok, atıf isteniyor; yalnız Buhârî bölümü elle doğrulanmış, kalanı otomatik (~%92 doğruluk).
  - İlk 10 dk: 'Code > Download ZIP' ile depoyu indir; Bukhari klasöründen bir CSV'yi Google Sheets'e yükle (Excel'de bozuk görünür, README de uyarıyor); 'Arabic_Isnad' ve 'Arabic_Matn' sütunlarının nasıl ayrıldığını ve 'English_Grade' (sıhhat değerlendirmesi) sütununu incele.
- ✅ **[hadith-json — 17 Kitaptan 50.884 Hadis (JSON)](https://github.com/AhmedBaset/hadith-json)**
  - Ahmed Baset (sunnah.com verisinden derleme), güncel depo
  - Dokuz temel kitap dâhil 17 hadis kitabındaki 50.884 hadisi Arapça metin + İngilizce çevirisiyle tek tip JSON (yapılandırılmış metin) dosyaları hâlinde sunar; kitap kitap indirilebildiği için öğrenci ölçeğine çok uygun.
  - Erişim: Ücretsiz, hesap gerekmez; arayüz İngilizce; depoda açık lisans beyanı görünmüyor; sunnah.com'dan kazınmış veri olduğu için sıhhat notlarını asıl kaynaktan teyit etmek gerekir.
  - İlk 10 dk: Depoda 'db/by_book' klasörüne gir, bukhari.json dosyasını 'Raw' ile indir; dosyayı sohbet asistanına verip 'ilk 20 hadisi numara-Arapça-İngilizce tablosu yap' de — JSON'un alan yapısını (id, Arapça metin, çeviri) böylece görmüş olursun.
- ✅ **[Corpus Coranicum (Berlin-Brandenburg Bilimler Akademisi)](https://corpuscoranicum.de/en)**
  - Kur'an metninin tarihi üzerine uzun soluklu Alman akademi projesi: en erken Kur'an yazmalarının görüntüleri, kıraat (okuyuş) farklılıkları ve geç antik dönem bağlam metinleri tek çatı altında. Kur'an araştırmalarının dijital yüzünü göstermek için envanterdeki büyük boşluk.
  - Erişim: Ücretsiz, hesapsız; Almanca/İngilizce arayüz.
  - İlk 10 dk: Yazmalar (Manuscripts) bölümünü açın; erken bir yazmanın sayfa görüntüsünü bugünkü matbu metinle yan yana karşılaştırın.

## Türkçe kapılar

- ✅ **[İSAM Kütüphanesi veritabanları](https://kutuphane.isam.org.tr/)**
  - İSAM'ın ücretsiz taranabilir veritabanları: Türkçe ilahiyat makaleleri, ilahiyat tezleri, Osmanlıca makaleler, dokümantasyon ve kütüphane kataloğu. Türkçe literatür taraması için ilk durak.
  - Erişim: Ücretsiz; temel arama için üyelik gerekmez; arayüz Türkçe/İngilizce. Eski adres ktp.isam.org.tr artık buraya yönleniyor (301) — nihai çalışan adres bu.
  - İlk 10 dk: kutuphane.isam.org.tr → 'Makaleler Veri Tabanı'nı seç → arama kutusuna konunu yaz (ör. 'Endülüs') → sonuç listesini tara; kayıtların yanında tam metin bağlantısı varsa PDF'i indir, yoksa künyeyi not al.
- ✅ **[TDV İslâm Ansiklopedisi (DİA)](https://islamansiklopedisi.org.tr/)**
  - TDV'nin 44 ciltlik ansiklopedisinin tamamı çevrimiçi, ücretsiz ve aranabilir; herhangi bir kişi, kitap ya da kavram hakkında güvenilir Türkçe ilk başvuru kaynağı ve künyesiyle atıf yapılabilir.
  - Erişim: Ücretsiz, hesapsız; arayüz Türkçe. Yayıncı: Türkiye Diyanet Vakfı / İSAM.
  - İlk 10 dk: islamansiklopedisi.org.tr → arama kutusuna 'İbn Battûta' yaz → maddeyi aç → madde sonundaki bibliyografyayı ve yazar/cilt/sayfa bilgisini not al; ilim dallarına göre göz atma ve 'rastgele madde' özellikleri de var.
- ✅ **[Türkiye Yazma Eserler Kurumu dijital portalı](https://portal.yek.gov.tr/)**
  - Türkiye'deki yazma eser kütüphanelerinin ortak kataloğu ve dijital görüntü arşivi; Süleymaniye dahil koleksiyonlardaki el yazmalarının kataloğunu arayıp sayfalarının fotoğraflarını inceleme imkânı.
  - Erişim: Katalog arama ücretsiz; yüksek çözünürlüklü görüntü talebi için ücretsiz üyelik gerekir. Arayüz Türkçe/Arapça/İngilizce (web aramasıyla teyit).
  - İlk 10 dk: Tarayıcıda portal.yek.gov.tr → katalog taramaya gir → eser ya da yazar adı yaz → kaydın yanında görüntü simgesi varsa yazmanın dijital sayfalarını çevirerek incele; kopya talebi için üyelik oluştur.
- ✅ **[Wikilala — Osmanlıca dijital kütüphane ve arama motoru](https://www.wikilala.com/)**
  - Osmanlıca basılı kitap, dergi ve gazetelerin içinde tam metin arama yapılabilen Türkiye merkezli platform; Latin harfleriyle yazıp Osmanlıca sayfalarda arama yapabilirsiniz. Envanterde Osmanlı basmaları için hiç kaynak yoktu; yazma portalının (YEK) doğal tamamlayıcısı.
  - Erişim: Temel arama ücretsiz; daha fazla içerik için ücretsiz hesap, kurumlara abonelik. Türkçe arayüz.
  - İlk 10 dk: Arama kutusuna 'ilahiyat' yazın; bir dergi sayfasının görüntüsünü açın; sayfadaki çeviriyazı (Latin harfine çevirme) özelliğini deneyin.
- ✅ **[YÖK Ulusal Tez Merkezi](https://tez.yok.gov.tr/UlusalTezMerkezi/)**
  - Türkiye'de yazılmış yüksek lisans ve doktora tezlerinin resmî arşivi. İlahiyat alanında hangi konuların çalışıldığını görmenin ve izin verilen tezleri tam metin okumanın en kestirme yolu; ödev ve seminer için birincil başvuru adresi.
  - Erişim: Ücretsiz, üyeliksiz arama; yazarın izin verdiği tezler PDF indirilebilir. Arayüz Türkçe.
  - İlk 10 dk: Siteyi açın, arama kutusuna 'hadis yapay zekâ' yazın; çıkan listeden bir tezin özetini okuyun; erişime açık bir tezi PDF olarak indirin.
- ✅ **[DergiPark](https://dergipark.org.tr/tr/)**
  - TÜBİTAK ULAKBİM'in barındırdığı 3.000'den fazla Türkçe akademik derginin ortak çatısı. Envanterdeki ulusal ilahiyat dergilerinin tamamı burada; makalelerin büyük kısmı ücretsiz PDF. Tek tek dergi kartlarının üstünde platformun kendisinin de bir kart olarak bulunması gerekir.
  - Erişim: Ücretsiz, hesap gerekmez; arayüz Türkçe/İngilizce.
  - İlk 10 dk: Ana sayfadaki arama kutusuna 'dijital beşerî bilimler ilahiyat' yazın; sonuçları yıla göre sıralayın; bir makale sayfasında 'Tam Metin PDF' düğmesiyle dosyayı indirin.
- ✅ **[TR Dizin (yayın/dergi arama portalı)](https://trdizin.gov.tr/)**
  - TÜBİTAK'ın ulusal hakemli dergi dizini. Bir Türkçe derginin 'TR Dizin'de taranıp taranmadığını' buradan görebilir, yayın-yazar-dergi araması yapabilirsiniz. Envanterde yalnız kriter sayfası vardı; öğrencinin asıl kullanacağı arama kapısı budur.
  - Erişim: Ücretsiz, hesapsız arama; Türkçe arayüz.
  - İlk 10 dk: 'Yayın Arama' bölümüne 'hadis' yazın; süzgeçlerle yılı daraltın; bir kaydın künyesinden DergiPark'taki tam metnine geçin.

## Veri setleri

- ✅ **[el-Süreyyâ (al-Thurayya) Gazetteer — Erken İslam Dünyası Yer Adları](https://althurayya.github.io/)**
  - Masoumeh Seydi, Maxim Romanov, 2022-
  - 9.-10. yüzyıl İslam dünyasının 2.000'den fazla tarihî yer adını (Kurtuba, Nişabur gibi) koordinatlarıyla ve şehirler arası yol ağıyla veren açık bir tarihî atlas; klasik kaynaklardaki bir yerin haritada tam nerede olduğunu saniyeler içinde gösterir.
  - Erişim: Ücretsiz, hesap gerekmez; arayüz İngilizce; tüm veri GitHub'da açık (github.com/althurayya/althurayya.github.io), depoda açık lisans beyanı yok.
  - İlk 10 dk: Siteyi aç, arama kutusuna bir şehir yaz (ör. Qurtuba) ve haritada konumunu gör; iki şehir seçip aradaki tarihî yol güzergâhını çizdir. Ham veri için sayfadaki GitHub bağlantısına geç: 'places' klasöründen tek bir yerin GeoJSON dosyasını (coğrafi koordinat dosyası) indirip geojson.io sitesine sürükleyince o yer haritada belirir.
- ✅ **[OpenITI Korpusu — İslamî Metinlerin Makine-Okur Derlemesi (Zenodo sürümü)](https://zenodo.org/records/3082463)**
  - DOI: `10.5281/zenodo.3082463`
  - Open Islamicate Texts Initiative (Aga Khan Üniversitesi, Hamburg Üniversitesi vd.), 2025 (sürüm 2025.1.9)
  - Binlerce klasik Arapça (ve Farsça/Türkçe) eserin tam metnini bilgisayarın işleyebileceği düz metin hâlinde veren dev açık korpus; Gazâlî'den Taberî'ye kadar klasik literatürün 'dijital kütüphanesi'.
  - Erişim: Ücretsiz, hesap gerekmez; sayfa İngilizce; lisans CC BY-NC-SA 4.0.
  - İlk 10 dk: Zenodo sayfasında 5,9 GB'lık ana arşivi ATLAYIP yalnızca 12 MB'lık metadata TSV dosyasını (künye tablosu) indir; Google Sheets'e yükle ve yazar sütununda 'Ghazali' diye süz — kaç eserinin, hangi kaynaktan geldiğini gör. Tek tek metin indirmek istersen GitHub'daki OpenITI depolarına geç.
- ✅ **[OpenITI/KITAB Güncel Metadata CSV'leri (kitab-metadata-automation)](https://github.com/OpenITI/kitab-metadata-automation)**
  - KITAB projesi / OpenITI, sürekli güncellenir
  - OpenITI korpusundaki her eserin yazar, başlık, ölüm tarihi ve kaynak bilgisini tek tabloda toplayan, haftalık otomatik güncellenen künye dosyaları; korpusu indirmeden 'elimizde hangi eserler var?' sorusuna cevap verir.
  - Erişim: Ücretsiz, hesap gerekmez; GitHub arayüzü İngilizce.
  - İlk 10 dk: Depoda 'output' klasörüne gir; 'OpenITI_Github_clone_metadata_light.csv' gibi 'light' (hafif) dosyalardan birini aç, 'Raw' düğmesiyle indir; Google Sheets'e yükleyip ölüm tarihi sütununu küçükten büyüğe sırala — korpusun yüzyıllara dağılımını kabaca gör.
- ✅ **[KITAB Text Reuse (Metin Yeniden Kullanımı) Veri Seti](https://zenodo.org/records/11501559)**
  - DOI: `10.5281/zenodo.11501559`
  - KITAB projesi (Aga Khan Üniversitesi), 2024 (sürüm 2023.1.8)
  - Passim adlı algoritmayla OpenITI korpusundaki binlerce eser çifti arasında tespit edilmiş ortak/aktarılmış pasajların listesi; 'bu müellif hangi kaynaktan ne kadar almış?' sorusunu veriye döker — iktibas ve kaynak takibi çalışmaları için eşsiz.
  - Erişim: Ücretsiz, hesap gerekmez; İngilizce; CC BY-NC-SA 4.0; ana dosyalar çok büyük (10,1 GB zip + 164 MB istatistik dosyası) — tek kitap indirme yolu önerilir.
  - İlk 10 dk: Zenodo sayfasındaki sürüm notları PDF'ini aç ve veri yapısını oku (ana zip 10 GB — öğrenci bilgisayarına göre değil). Küçük başlangıç için kitab-project.org/data/download sayfasına geç: metadata uygulamasından TEK bir kitabın yeniden kullanım verisini indirip iki eser arasındaki ortak pasaj sayısına bak.
- ✅ **[Onomasticon Arabicum — 27.000+ Kişilik Biyografik Veri Tabanı](https://onomasticon.irht.cnrs.fr/)**
  - IRHT-CNRS (Fransa), çevrimiçi, güncellenen
  - Klasik Arapça tabakat (biyografi) kitaplarından derlenen 27.000'den fazla âlim ve meşhur kişinin isim zinciri, tarih ve yer bilgilerini alanlara ayrılmış hâlde sorgulatan veri tabanı; bir ismin künye-nisbe-lakab parçalarının nasıl veriye dönüştüğünü gösteren en iyi örneklerden.
  - Erişim: Ücretsiz, hesap gerekmez; arayüz İngilizce/Fransızca; çevrimiçi sorgulanır, toplu indirme düğmesi görünmüyor.
  - İlk 10 dk: Ana sayfadaki arama kutusuna bir nisbe yaz (ör. Qurtubi); çıkan kayıtlardan birini aç ve ismin şöhret adı, künye, nisbe alanlarına nasıl bölündüğünü, hangi klasik kaynaktan geldiğini incele; 'Advanced search' ile yalnız belli bir şehirde ölenleri listele.
- ✅ **[Mamlūk Prosopography Project (MPP) / IHODP — Gent Üniversitesi](https://www.mmsii.ugent.be/ihodp/)**
  - Jo Van Steenbergen ekibi, Gent Üniversitesi, 2009- (platform beta)
  - Memlük dönemi (13.-15. yy) Mısır-Suriye seçkinlerine dair proje tanıtımına göre yaklaşık 4.000 kişilik biyografik veri tabanı; yanında 15. yüzyıl Arap tarih yazımı bibliyografyası ve 82 metinlik bir korpus da barındıran açık platform.
  - Erişim: Ücretsiz, hesap gerekmez; arayüz İngilizce; platformda dışa aktarma (export) olanağı duyurulmuş, beta sürüm.
  - İlk 10 dk: Sayfadan MPP projesine gir; bir emir ya da âlim adı ara; kaydın altındaki kaynak referanslarını (hangi tabakat kitabının hangi sayfası) gör — bir kişinin birden çok kaynaktaki izinin tek kayıtta nasıl birleştirildiğini incele.
- ✅ **[tabakat.io — İslam Âlimleri Dijital Atlası (Türkiye)](https://tabakat.io/)**
  - Türkiye merkezli proje, güncel
  - Türkçe arayüzlü, İslam âlimlerini harita ve ağ görünümünde sunmayı amaçlayan dijital atlas; Türkçe konuşan öğrencinin tabakat literatürüne veri gözüyle bakması için düşük eşikli bir kapı.
  - Erişim: Ücretsiz görünüyor, arayüz Türkçe; veri indirme olanağı bu oturumda doğrulanamadı.
  - İlk 10 dk: Siteyi tarayıcıda aç (içerik sayfa açıldıktan sonra yükleniyor); arama/harita görünümünden bir âlim bul ve bağlantılarını (hoca-talebe, şehir) izle; toplu veri indirme olup olmadığını sitedeki hakkında/iletişim bölümünden kontrol et.
- ✅ **[islamicatlas.org — İslam Tarih Atlası (Türkiye)](https://islamicatlas.org/)**
  - Türkiye merkezli proje, güncel
  - Seyahatnâme güzergâhları ve İslam tarihi coğrafyasını katmanlar hâlinde haritada gösteren Türkçe-İngilizce atlas; İbn Battûta gibi seyyahların rotasını nokta nokta takip ederek 'metinden haritaya' geçişi yaşatır.
  - Erişim: Ücretsiz, hesap gerekmez; arayüz Türkçe/İngilizce; şu an toplu veri indirme arayüzü yok — çevrimiçi harita katmanları üzerinden kullanılır.
  - İlk 10 dk: Siteyi aç ve Keşfet ile haritaya gir; bir seyahatnâme/coğrafya katmanını açıp güzergâh üzerindeki noktalara tıkla — her noktadaki kaynak pasajını ve konum bilgisini gör.
- ✅ **[EICD-B — Erken İslam Fetihleri Veri Tabanı (Belâzürî)](https://academic.oup.com/dsh/advance-article/doi/10.1093/llc/fqag093/8722428)**
  - DOI: `10.1093/llc/fqag093`
  - Hüseyin Gökalp, Ali Çetinkaya, 2026
  - Belâzürî'nin Fütûhu'l-büldân'ından yapay zekâ destekli, elle doğrulanmış 226 fetih kaydını (hicrî yıl, yer, komutan, halife, fetih biçimi: sulh/anveten) yapılandırılmış hâlde veren veri seti; klasik bir metnin nasıl tabloya dönüştüğünün yayınlanmış ve hakemli bir örneği.
  - Erişim: Makale açık erişim (CC BY), hesap gerekmez; İngilizce; veri şimdilik makalenin ekinde, Zenodo yüklemesi makalede taahhüt edilmiş ancak bu oturumda ayrı bir Zenodo kaydı bulunamadı.
  - İlk 10 dk: Açık erişimli makale sayfasını aç; 'Supplementary data' bölümünden 226 kayıtlık JSON ekini indir; sohbet asistanına verip 'sulh ile mi savaşla mı fethedilenler; yıllara göre say' de — makaledeki %52,2 sulh oranını kendin yeniden üret.
- ✅ **[SHARIAsource (Harvard) — İslam Hukuku Kaynak Portalı](https://portal.shariasource.com/)**
  - Program in Islamic Law, Harvard Law School, güncel
  - Harvard Hukuk Fakültesi'nin İslam hukuku belgelerini (tarihî metinler, mevzuat, mahkeme kararları) bölge-dönem-tür etiketleriyle sunan ve uzman yorumu ekleyen portalı; fıkıh ödevinde birincil kaynağa İngilizce bağlamla ulaşmanın hızlı yolu.
  - Erişim: Ücretsiz, okumak için hesap gerekmez (katkıda bulunmak için hesap var); arayüz İngilizce; toplu veri indirme yok — belge belge kullanılır.
  - İlk 10 dk: Portalda konu/bölge/dönem filtrelerini kullanarak bir belge ara (ör. Ottoman + criminal law); belge sayfasını aç ve uzman yorumunu oku; ilgini çeken belgeleri kendi kaynakçana ekle.
- ✅ **[1840'lar Osmanlı Bursa Nüfus Mikro Veri Seti (UrbanOccupationsOETR)](https://zenodo.org/records/11124537)**
  - DOI: `10.5281/zenodo.11124537`
  - UrbanOccupationsOETR projesi (ERC 679097, Koç Üniversitesi bağlantılı), 2024
  - 1839-1843 Bursa nüfus defterlerinden çıkarılmış 8.391 hane ve 19.186 kişilik tablo: mahalle, meslek, din/etnisite, askerlik ve göç bilgileri; Osmanlı sosyal tarihini Excel'de 'kendi elinle' sorgulama imkânı veren, bir Osmanlı şehrinin tam nüfus verisi olarak yayınlanmış ilk set.
  - Erişim: Ücretsiz, hesap gerekmez; belgeleme İngilizce; lisans CC BY 4.0.
  - İlk 10 dk: Zenodo'dan 3,4 MB'lık .xlsx dosyasını indir (hesap gerekmez) ve aç; mahalle sütununa süzgeç koyup tek bir mahalleyi seç; o mahalledeki meslek dağılımını ve Müslim/gayrimüslim hane oranını say — 10 dakikada bir mikro-tarih gözlemi çıkar.
- ✅ **[TQuad — Türk-İslam Bilim Tarihi Türkçe Soru-Cevap Veri Seti](https://github.com/TQuad/turkish-nlp-qa-dataset)**
  - TQuad ekibi (Teknofest 2018 yarışması için), 2018
  - Türk-İslam bilim tarihi konulu ansiklopedik paragraflardan üretilmiş yaklaşık 9.200 Türkçe soru-cevap çifti (8.308 eğitim + 892 geliştirme); Türkçe ve ilahiyat-yakını içerikte 'soru-cevap verisi nasıl görünür?' sorusunun somut örneği.
  - Erişim: Ücretsiz, hesap gerekmez; veri Türkçe, depo İngilizce/Türkçe; açık lisans beyanı yok.
  - İlk 10 dk: Depodan train-v0.1.json dosyasını indir; sohbet asistanına ver ve 'ilk 10 paragrafı ve sorularını tablo yap' de; soruların hangi paragraftan geldiğini ve cevabın paragraf içindeki tam yerini işaretleyen yapıyı incele.
- ✅ **[Sirah Nabawiyah Dataset — Siyer Olay/Kişi/Yer Tablosu (Mendeley Data)](https://data.mendeley.com/datasets/mwmzf8c2r5/1)**
  - DOI: `10.17632/mwmzf8c2r5.1`
  - Asfa Davissyah Syah, Supriyono (UIN Maulana Malik Ibrahim, Endonezya), 2026
  - Hz. Peygamber'in hayatındaki olayları, yerleri, kişileri ve kronolojiyi Excel tablosuna dökmüş küçük ölçekli bir siyer veri seti; 'metin hâlindeki siyer bilgisi tabloya nasıl döner?' sorusu için basit bir başlangıç örneği.
  - Erişim: Ücretsiz; indirme için Mendeley hesabı istenebilir; İngilizce; lisans CC BY 4.0. DİKKAT: Nisan 2026'da yayınlanmış, hakemli bir makaleye bağlı olmayan yeni bir set — sınıfta 'veri kalitesini denetleme' alıştırması olarak kullanmak daha doğru.
  - İlk 10 dk: Sayfadaki 'Download All' ile Excel dosyasını indir (Mendeley ücretsiz hesap isteyebilir); olay-yer-kişi sütunlarını incele; birkaç kaydı klasik siyer kaynağıyla karşılaştırıp doğruluğunu kendin denetle.
- ✅ **[İslam Düşünce Atlası (islamdusunceatlasi.org)](https://islamdusunceatlasi.org/)**
  - İslam Düşünce Atlası ekibi (Türkiye; İLEM/İBB Kültür yayın çevresi), güncel
  - 7.-20. yüzyıl İslam düşünce geleneğini âlim profilleri, zaman tüneli, haritalar ve kitap ağlarıyla tamamen Türkçe sunan platform; indirilebilir ham veri sunmasa da öğrencinin 'âlim-eser-şehir ilişkisi veri olarak nasıl kurgulanır?' sorusunu Türkçe görebileceği en zengin ortam.
  - Erişim: Ücretsiz, hesap gerekmez; arayüz Türkçe; toplu veri indirme/dışa aktarma seçeneği bu oturumda görülmedi — çevrimiçi kullanım içindir.
  - İlk 10 dk: Siteyi aç, zaman tünelinden bir dönem seç; bir âlimin sayfasına girip hoca-talebe ağını ve önerilen okumaları incele; harita görünümünde bir şehrin (ör. Bağdat) düşünce tarihindeki yerine bak.

## Öğrenme kaynakları

- ✅ **[Programming Historian](https://programminghistorian.org/)**
  - Tarihçiler ve beşerî bilimciler için hakemli, adım adım dijital yöntem dersleri: metin analizi, harita, ağ analizi, veri temizleme. Envanterdeki aletlerin (OpenRefine, Gephi vb.) çoğunun 'öğreticisi' burada — aletleri derse bağlayan halka.
  - Erişim: Tamamen ücretsiz (CC BY); İngilizce 121, İspanyolca 68, Portekizce 55, Fransızca 42 ders; Türkçe ders yok.
  - İlk 10 dk: İngilizce dersler sayfasında 'network analysis' dersini açın; giriş bölümünü okuyup örnek veri dosyasını indirin.
- ✅ **[The Digital Orientalist](https://digitalorientalist.com/)**
  - İslam ve Asya çalışmalarında dijital araçları tanıtan çevrimiçi dergi. 'Bu aracı bir ilahiyatçı/şarkiyatçı somut olarak nasıl kullanır' sorusuna adım adım cevap veren nadir yayınlardan; OCR, harita, yapay zekâ başlıklarında Osmanlı ve Arapça odaklı yazılar var.
  - Erişim: Ücretsiz, hesapsız; İngilizce.
  - İlk 10 dk: Site içi aramaya 'Ottoman' veya 'OCR' yazın; bir araç tanıtım yazısını açıp anlatılan ilk adımı kendi metninizde deneyin.

## Türkçe emsal yayınlar

- ✅ **[Dijital Beşerî Bilimler Bağlamında İlahiyat/İslâmî İlimler](https://dergipark.org.tr/en/pub/iuislamtd/article/1123964)**
  - DOI: `10.26650/iuitd.2022.1123964`
  - Tuba Nur Saraçoğlu, 2022
  - Türkçede dijital beşerî bilimler ile İslâmî ilimleri buluşturan kapsamlı bir çerçeve makalesi (İslam Tetkikleri Dergisi, 12/2, s. 845-891). Bu galerideki her şeyin 'Türkçe kullanım kılavuzu' gibi okunabilir; ilk okunacak metin olarak önerilir.
  - Erişim: DergiPark'ta açık erişim, ücretsiz; makale Türkçe.
- ✅ **[Veri Madenciliği Tekniklerinin ve Algoritmik Araştırmaların Hadis İlmine Uygulanabilirliği](https://dergipark.org.tr/tr/pub/eskiyeni/article/960636)**
  - DOI: `10.37697/eskiyeni.960636`
  - Sema Tombul, 2021
  - Veri madenciliği (büyük metin yığınlarından bilgisayarla örüntü çıkarma) tekniklerinin hadis ilminde nerelerde işe yaradığını Türkçe anlatıyor: hadislerin konuya göre sınıflanması, râvi ağları, isnad doğrulama. Eskiyeni dergisinde açık erişim.
  - Erişim: DergiPark'ta açık erişim (CC BY-NC); ücretsiz; Türkçe.
- ✅ **[Sosyal Medyadaki Hadis Karşıtı Söylemlerin Duygu Analizi ile İncelenmesi](https://dergipark.org.tr/tr/pub/usul/article/1750919)**
  - DOI: `10.56361/usul.1750919`
  - Sema Korucu Güven, 2025
  - Duygu analizi (yorumların olumlu/olumsuz tonunu bilgisayarla ölçme) yöntemini bir hadis tartışması videosunun yorumlarına uyguluyor. Bir ilahiyat araştırmacısının bugünün verisiyle, kod yazmadan erişilebilir hazır servislerle makale üretebildiğinin taze kanıtı (Usul, sayı 44, s. 37-64).
  - Erişim: DergiPark'ta açık erişim (CC BY-NC); ücretsiz; Türkçe.
- ✅ **[Hadis Tahrîci ve Tenkidinde Yapay Zekâ Destekli Çalışmalara Yönelik Literatür Taraması](https://dergipark.org.tr/tr/pub/ksuifd/article/1630098)**
  - DOI: `10.35209/ksuifd.1630098`
  - İbrahim Sağlam, 2025
  - Yapay zekânın hadis kaynağı bulma (tahrîc), sened-metin tenkidi ve râvi ağı görselleştirmede nereye geldiğini 16 çalışma üzerinden Türkçe özetliyor; sened-metin tenkidinde işin henüz başlangıçta olduğunu dürüstçe söylüyor (KSÜ İlahiyat Fakültesi Dergisi 45, s. 115-137).
  - Erişim: DergiPark'ta açık erişim (CC BY-NC-ND); ücretsiz; Türkçe.

## Uluslararası emsal yayın/projeler

- ✅ **[Algorithmic Analysis of Medieval Arabic Biographical Collections (Speculum makalesi)](https://www.journals.uchicago.edu/doi/full/10.1086/693970)**
  - DOI: `10.1086/693970`
  - Maxim Romanov, 2017
  - Ortaçağ'dan kalma dev bir 'alimler ve kitapları' listesini bilgisayara saydırarak İslam ilim tarihinin hangi yüzyıllarda, hangi şehirlerde yoğunlaştığını grafiklerle gösteriyor. Ortaçağ tarihçiliğinin en saygın dergilerinden Speculum'da yayımlandı; 'bu veriden gerçek makale çıkar mı?' sorusunun en net cevabı.
  - Erişim: Chicago University Press sitesinde açık erişim; hesap gerekmez; makale İngilizce.
- ✅ **[From Networks to Named Entities and Back Again: Exploring Classical Arabic Isnād Networks](https://jhnr.net/articles/10.25517/jhnr.v8i1.135)**
  - DOI: `10.25517/jhnr.v8i1.135`
  - Ryan Muther, David Smith, Sarah Bowen Savant, 2023
  - Rivayet zincirlerindeki kişi adlarını bilgisayarla ayıklayıp 'kim kimden aktarmış' ağına çeviriyor ve aynı adı taşıyan farklı kişileri birbirinden ayırma sorununu ele alıyor. KITAB ekibinin (Savant) hakemli ağ-analizi dergisinde çıkan somut ürünü.
  - Erişim: Journal of Historical Network Research açık erişimli; ücretsiz; İngilizce.
- ✅ **[OpenITI: a Machine-Readable Corpus of Islamicate Texts (Zenodo sürümü 2023.1.8)](https://zenodo.org/records/10007820)**
  - DOI: `10.5281/zenodo.10007820`
  - Lorenz Nigst, Maxim Romanov, Sarah Bowen Savant, Masoumeh Seydi, Peter Verkinderen, Hamidreza Hakimi, 2023 (sürüm 2023.1.8)
  - Bu galerideki İngilizce makalelerin çoğunun ham maddesi olan dev açık derlem; her sürümü kalıcı bir numarayla (DOI) yayımlandığı için kaynakçada kitap gibi gösterilebilir. Peter Verkinderen dahil KITAB/OpenITI ekibi ortak imzalıdır.
  - Erişim: Tamamen ücretsiz, hesap gerekmez; metinler Arapça, açıklamalar İngilizce.
  - İlk 10 dk: Zenodo sayfasını açın; yazar listesini, sürüm numarasını ve DOI'yi görün; 'Files' kısmından arşivin tek tıkla indirilebildiğini kontrol edin; dosya adlarındaki yazar-eser kodlama düzenine göz atın. İndirmeden de künye incelemesi yapılabilir.
- ✅ **[OpenITI and the Fihrist (Peter Verkinderen'in üç bölümlük analiz dizisi)](https://ecommons.aku.edu/uk_ismc_faculty_publications/276/)**
  - Peter Verkinderen, 2022
  - 'Elimizdeki dijital derlem, Arap yazı geleneğinin ne kadarını temsil ediyor?' sorusunu, en eski kitap kataloğuyla karşılaştırarak sayılarla cevaplıyor. Dikkat: hakemli dergi makalesi değil, üniversitenin kurumsal arşivine kaydedilmiş üç bölümlük analiz dizisidir; yine de yöntem dersi olarak çok değerli.
  - Erişim: AKU eCommons arşivinde ücretsiz; İngilizce.
- ✅ **[Mamluk Political Prosopography Project (MP3 / MPP), Gent Üniversitesi](https://www.ghentcdh.ugent.be/mamluk-political-prosopography-project-mp3)**
  - Jo Van Steenbergen (yürütücü) ve Gent Üniversitesi Memlük ekibi, 2009'dan itibaren (açık erişim veritabanı aşaması 2016-2020)
  - Prosopografi, tek tek ünlüleri değil bir dönemin bütün kadrosunu (emîrler, kadılar, kâtipler) toplu biçimde inceleme yöntemidir; bu proje Memlük seçkinlerini ilişkisel bir veritabanına işleyerek bunu yapıyor. Avrupa Araştırma Konseyi (ERC) destekli, kurumsallaşmış bir örnek.
  - Erişim: Proje sayfası ücretsiz; veritabanı açık erişim hedefiyle geliştirildi; İngilizce arayüz.
  - İlk 10 dk: Gent CDH sayfasındaki proje tanımını okuyun; sayfada verilen veritabanı bağlantısına (mamluk.ugent.be) geçip bir emîr adı aratmayı deneyin; kişi kaydında görevler ve ilişkiler nasıl ayrı alanlara bölünmüş, inceleyin.
- ✅ **[Narrative Social Structure: Anatomy of the Hadith Transmission Network, 610-1505 (kitap)](https://searchworks.stanford.edu/view/6213499)**
  - Recep Şentürk, 2005
  - Türk sosyolog Recep Şentürk'ün Stanford'dan çıkan kitabı; hadis rivayet zincirlerini dev bir sosyal ağ (kimin kimden aktardığını gösteren ilişki haritası) olarak inceleyen öncü çalışma. Türkiyeli bir ilahiyat öğrencisi için 'bizden biri bunu yaptı' örneğinin ilki.
  - Erişim: Basılı kitap, ücretli (üniversite kütüphanelerinde bulunur); katalog kaydı ücretsiz görüntülenir; İngilizce.
- ✅ **[Morphological Annotation of Quranic Arabic (Kur'an Arapçası Derlemi'nin bildirisi)](https://aclanthology.org/L10-1190/)**
  - Kais Dukes, Nizar Habash, 2010
  - Dünyaca kullanılan corpus.quran.com sitesinin arkasındaki bilimsel bildiri: Kur'an'ın her kelimesine dil bilgisi etiketi ekleme işinin nasıl yapıldığını anlatıyor. 'Web sitesi' sanılan kaynağın aslında hakemli bir yayına dayandığını gösteren örnek.
  - Erişim: Bildiri ACL Anthology'de ücretsiz PDF; derlem sitesi ücretsiz; İngilizce.
  - İlk 10 dk: corpus.quran.com adresine gidin; herhangi bir ayeti açın; bir kelimenin üzerine gelerek kökünü ve dil bilgisi etiketini görün; ayetin cümle yapısı çizimini inceleyin. Hesap gerekmez.
- ✅ **[Princeton Geniza Project](https://geniza.princeton.edu)**
  - Princeton Üniversitesi ekibi (ana sayfada yürütücü adı verilmiyor), devam eden, on yıllara yayılmış proje
  - Yahudi çalışmaları projesi olsa da yöntem örneği olarak burada: Ortaçağ İslam dünyasının gündelik hayatını belgeleyen on binlerce parça, herkese açık aranabilir bir veritabanına dönüştürülmüş. 'Dağınık belge yığınından aranabilir arşiv' hedefinin dünyadaki en olgun örneklerinden.
  - Erişim: Tamamen ücretsiz, hesap gerekmez; arayüz İngilizce (belgeler Arapça/İbranice/Yahudi-Arapçası).
  - İlk 10 dk: Siteyi açın; 'random fragment' (rastgele parça) düğmesine basıp karşınıza çıkan belgeyi inceleyin; sonra İngilizce bir anahtar kelimeyle (ör. 'merchant') arama yapın; bir belgenin görüntüsü, çevirisi ve açıklamasının aynı ekranda nasıl birleştiğine bakın.
- ✅ **[Persian Digital Library (Roshan Enstitüsü, Maryland Üniversitesi)](https://persdigumd.github.io/PDL/)**
  - PersDig@UMD ekibi, Roshan Institute for Persian Studies (Maryland Üniversitesi), pilot tamamlandı; devam ediyor
  - Fars edebiyatını bilgisayarın işleyebileceği açık bir derleme dönüştüren üniversite projesi; OpenITI ve KITAB ile eşgüdümlü. Bir dil-edebiyat bölümünün 'kendi klasiklerimizi dijitalleştirelim' hedefine nasıl başlayabileceğinin örneği.
  - Erişim: Ücretsiz, açık kaynak/açık erişim (CC BY-SA); sayfa İngilizce, metinler Farsça.
  - İlk 10 dk: Sayfayı açın; projenin ne topladığını anlatan bölümü okuyun; 60.000 şiirlik derlemin açık lisansla (herkes indirip kullanabilir) yayımlandığını görün; OpenITI bağlantısını not edin.
- ✅ **[Michigan Üniversitesi İslami Yazmalar Koleksiyonu (dijital)](https://lib.umich.edu/collections/collecting-areas/special-collections/islamic-manuscripts)**
  - Michigan Üniversitesi Kütüphanesi, koleksiyon 1920'lerden; dijital erişim güncel
  - Kuzey Amerika'nın en büyük İslami yazma koleksiyonlarından biri; neredeyse tamamı internetten ücretsiz görüntülenip indirilebiliyor. Osmanlı sahası ağırlığı sayesinde Türkiyeli öğrencinin okuyabileceği malzeme bol.
  - Erişim: Ücretsiz; HathiTrust'ta oturum açmadan görüntüleme ve indirme; arayüz İngilizce.
  - İlk 10 dk: Koleksiyon sayfasını açın; HathiTrust bağlantısını izleyin; 'Islamic Manuscripts Michigan' aramasıyla bir yazmayı açıp sayfalarını çevirin; hesap gerekmeden tam görüntüye ulaştığınızı görün.
- ✅ **[COMSt — Comparative Oriental Manuscript Studies (Hamburg)](https://www.aai.uni-hamburg.de/en/comst.html)**
  - Hamburg Üniversitesi merkezli COMSt araştırma ağı, ağ projesi 2009-2014; bülten yayını sürüyor (son sayı 2024)
  - Farklı dillerdeki yazma geleneklerini karşılaştırmalı ve standart yöntemlerle incelemek için kurulmuş Avrupa ağı; ürettiği el kitabı, yazma çalışmalarına başlayanların temel başvuru kaynağı oldu.
  - Erişim: Sayfa ve bülten ücretsiz; İngilizce.
  - İlk 10 dk: Sayfayı açın; 'Comparative Oriental Manuscript Studies: an Introduction' el kitabının ve COMSt Bulletin sayılarının listelendiğini görün; bir bülten sayısını açıp içindekilere göz atın.

## Uluslararası dergiler

- ✅ **[Digital Scholarship in the Humanities (DSH)](https://academic.oup.com/dsh)**
  - Oxford University Press'in dijital beşeri bilimler (bilgisayar destekli tarih, edebiyat, din araştırmaları) alanındaki hakemli dergisi. Metin sayımı, harita, veri tabanı gibi dijital yöntemlerle yapılmış her beşeri bilim çalışması kapsamına girer; İslami ilimler + dijital yöntem birleşimi için prestijli bir uluslararası adres.
  - Erişim: Okumak çoğunlukla abonelik gerektirir (bazı makaleler açık); yayımlamak için açık erişim seçeneği var, ücreti sitede ana sayfada belirtilmemiş. Dil: İngilizce. Sitede 2025 etki faktörü 1.0 yazıyor.
  - İlk 10 dk: Ana sayfada 'Most Read' listesinden bir makale özetine tıkla; yapay zekâ ve üslup analizi üzerine güncel başlıkları gör. 'Submit' bağlantısından yazım kurallarına bak.
- ✅ **[Digital Humanities Quarterly (DHQ)](https://dhq.digitalhumanities.org/)**
  - Dijital beşeri bilimler alanının tamamen ücretsiz okunan ve ücretsiz yayımlanan (yazar ücreti yok) hakemli dergisi; dijital arşiv projeleri, vaka çalışmaları ve yöntem yazıları basar. İlk uluslararası makalesini deneyecek öğrenci için mali engel olmayan bir kapı.
  - Erişim: Tamamen açık erişim, yazar ücreti (APC) yok. Dil: İngilizce (çok dilli özetler kabul ediliyor). Yayıncı: ADHO ve ACH (dijital beşeri bilimler dernekleri).
  - İlk 10 dk: Son sayıdan bir vaka çalışması aç; makalelerin proje anlatımı formatını incele. Gönderi için dhqinfo@digitalhumanities.org adresi sayfada veriliyor.
- ✅ **[Journal of Open Humanities Data (JOHD)](https://openhumanitiesdata.metajnl.com/)**
  - Veri makalesi ('data paper') yayımlayan dergi: hazırladığınız derlem, katalog veya veri setini 1.000-1.500 kelimelik kısa, hakemli bir makaleyle tanıtırsınız — tam makale yazmadan akademik yayın kazandıran tür. Din araştırmaları açıkça kapsam listesinde; dijital İslami ilimler projelerinden çıkan veri setleri için birebir.
  - Erişim: Tamamen açık erişim (CC BY 4.0). Yayın ücreti var ama fonu olmayan yazarlara muafiyet tanınıyor. Dil: İngilizce. Yayıncı: Ubiquity Press.
  - İlk 10 dk: Ana sayfadan yayımlanmış bir 'data paper' aç ve şablonunu gör: veri nedir, nasıl toplandı, nerede duruyor, nasıl yeniden kullanılır. Kendi veri setinizi bu dört soruya göre tarif etmeyi deneyin.
- ✅ **[Journal of Cultural Analytics (JCA)](https://culturalanalytics.org/)**
  - Kültürü sayısal yöntemlerle (metin madenciliği: büyük metin yığınlarında örüntü arama) inceleyen çalışmaların dergisi; veri ve kodun açık paylaşımını şart koşar. Okumak da yayımlamak da tamamen ücretsiz ('elmas' açık erişim). 2026'dan itibaren Princeton Üniversitesi Dijital Beşeri Bilimler Merkezi yayımlıyor.
  - Erişim: Elmas açık erişim: okura da yazara da ücret yok. Dil: İngilizce. Site anlık bot koruması nedeniyle bu oturumda doğrudan açılamadı; tarayıcıdan normal erişim sorunsuz olmalı.
  - İlk 10 dk: Siteye tarayıcıdan girip 'For Authors' sayfasına bakın; makale türlerini ve veri/kod paylaşım şartını okuyun.
- ✅ **[Al-ʿUṣūr al-Wusṭā: The Journal of Middle East Medievalists](https://journals.library.columbia.edu/index.php/alusur/index)**
  - Orta Çağ İslam dünyası (yaklaşık 500-1500) üzerine tamamen açık erişimli, hakemli dergi; Middle East Medievalists derneği çıkarıyor, Columbia Üniversitesi Kütüphaneleri barındırıyor. Klasik dönem İslam tarihi/ilimleri çalışan ve dijital yöntem kullanan öğrenci için hem okuma kaynağı hem yayın hedefi.
  - Erişim: Tamamen açık erişim; yazar ücretine dair bir ibare sayfada yok. Dil: İngilizce. Lisans: CC BY-NC-ND (2015 sonrası içerik).
  - İlk 10 dk: Son sayıyı açıp bir makale PDF'ini ücretsiz indir; derginin üslubunu ve dipnot düzenini incele.
- ✅ **[Journal of Arabic and Islamic Studies (JAIS)](https://journals.uio.no/JAIS)**
  - Oslo Üniversitesi'nin barındırdığı, Arap dili ve İslami ilimler alanında açık erişimli hakemli dergi. Makale PDF'leri ücretsiz; İslami ilimler içerikli bir dijital çalışmayı İngilizce yayımlamak için erişilebilir bir uluslararası seçenek.
  - Erişim: Açık erişim, PDF'ler ücretsiz. Dil: İngilizce. Barındıran kurum: Oslo Üniversitesi (OJS altyapısı). Ücret bilgisi sayfada belirtilmemiş.
  - İlk 10 dk: Güncel ciltten (2026, c.26) bir makale indir; başlıkların dil-edebiyat-İslami ilimler karışımını gör.
- ✅ **[Journal of Islamic Studies](https://academic.oup.com/jis)**
  - Oxford Centre for Islamic Studies'in çıkardığı, İslam ve İslam dünyasını tarih, hukuk, edebiyat, din gibi çok disiplinli açıdan ele alan saygın dergi. Dijital yöntemli bir İslami ilimler çalışması için üst düzey ama rekabetçi bir hedef; öğrenci için önce okuma kaynağı.
  - Erişim: Abonelik temelli (okumak çoğunlukla ücretli; üniversite kütüphanesi üzerinden erişilebilir); yazarlara açık erişim seçeneği sunuluyor, ücreti sayfada belirtilmemiş. Dil: İngilizce. Sitede 2025 etki faktörü 1.6 yazıyor.
- ✅ **[International Journal of Middle East Studies (IJMES)](https://www.cambridge.org/core/journals/international-journal-of-middle-east-studies)**
  - Middle East Studies Association'ın Cambridge University Press'te çıkan amiral dergisi; 7. yüzyıldan bugüne Orta Doğu ve komşu bölgeler üzerine tarih, din, hukuk, sosyoloji çalışmaları basar. Sitede, 3 Aralık 2025'ten itibaren kabul edilen tüm araştırma makalelerinin açık erişimli yayımlanacağı duyurulmuş.
  - Erişim: Aralık 2025 itibarıyla kabul edilen araştırma makaleleri açık erişim; açık erişim ücreti kurum anlaşmalarıyla veya muafiyetle karşılanabiliyor (sitede 'her yazara bir açık erişim yolu' deniyor). Dil: İngilizce.

## Ulusal dergiler

- ✅ **[İslam Araştırmaları Dergisi (İSAM)](https://dergipark.org.tr/tr/pub/isad)**
  - 1997-
  - TDV İslam Araştırmaları Merkezi'nin (İSAM) 1997'den beri çıkan hakemli dergisi; Türkiye'de İslami ilimler alanının en saygın adreslerinden. Dijital yöntemli ciddi bir İslami ilimler çalışması için ulusal ölçekte en görünür hedeflerden biri.
  - Erişim: DergiPark üzerinden ücretsiz okunur; başvuru yalnız DergiPark'tan. Dil: Türkçe ve İngilizce (arayüz iki dilli). Sitede TR Dizin, Scopus, Index Islamicus, ATLA, ERIH PLUS dizinleri sayılıyor. Yılda 2 sayı (Ocak-Temmuz).
  - İlk 10 dk: DergiPark sayfasında 'Arşiv' sekmesinden son sayıyı aç, bir makale PDF'i indir; 'Yazım Kuralları' sayfasından İSNAD atıf sistemini ve yazar formunu gör.
- ✅ **[Cumhuriyet İlahiyat Dergisi](https://dergipark.org.tr/tr/pub/cuid)**
  - 1996-
  - Sivas Cumhuriyet Üniversitesi'nin 1996'dan beri çıkan ilahiyat dergisi; Türkçe ilahiyat dergileri içinde uluslararası dizinlere (sitede Scopus ve Web of Science ESCI yazıyor) girmiş öncülerden. Türkçe yazıp uluslararası görünürlük isteyen öğrenci için güçlü bir seçenek.
  - Erişim: Açık erişim (CC BY-NC); DergiPark'tan ücretsiz okunur. Dil: Türkçe ve İngilizce. Sitede Scopus, TR Dizin, ESCI (Web of Science), DOAJ dizinleri sayılıyor. Ücret politikası sayfası var — göndermeden önce mutlaka kontrol edin. Yılda 2 sayı.
  - İlk 10 dk: DergiPark sayfasında 'Fiyat Politikası' ve 'Yazım Kuralları' sayfalarına bak; son sayıdan bir makalenin İngilizce genişletilmiş özetini incele.
- ✅ **[Hitit İlahiyat Dergisi](https://dergipark.org.tr/tr/pub/hititilahiyat)**
  - Hitit Üniversitesi'nin din ve sosyal bilimler alanındaki hakemli dergisi; sitede ESCI, Scopus ve TR Dizin'de tarandığı yazıyor. Değerlendirme süreci (~100 gün) sayfada şeffafça ilan ediliyor — ilk makalesini gönderen öğrenci için öngörülebilir bir süreç.
  - Erişim: Açık erişim (CC BY-NC); ücretsiz okunur, sayfada yazar ücreti geçmiyor. Dil: Türkçe ve İngilizce. Sitede ESCI, TR Dizin, Scopus, DOAJ, Index Islamicus sayılıyor. Yılda 2 sayı; başvuru dönemleri sınırlı (takvimi kontrol edin).
  - İlk 10 dk: DergiPark sayfasındaki süreç şemasını (ön kontrol → çift kör hakemlik → dil kontrolü) oku; başvuru takvimini not al.
- ✅ **[darulfunun ilahiyat](https://dergipark.org.tr/tr/pub/darulfunun)**
  - 1925-
  - İstanbul Üniversitesi İlahiyat Fakültesi'nin kökeni 1925'e giden dergisi; dinin farklı boyutlarını disiplinlerarası ele alan teorik ve uygulamalı çalışmalara açık — 'uygulamalı' vurgusu dijital yöntemli çalışmalar için elverişli. Yazar ücreti yok.
  - Erişim: Açık erişim (CC BY-NC), yazar ücreti yok. Dil: Türkçe ve İngilizce arayüz. Sitede Scopus, DOAJ, TR Dizin sayılıyor. Yılda 3 sayı (Nisan, Ağustos, Aralık).
  - İlk 10 dk: Arşivden disiplinlerarası bir makale aç; derginin 'din + sosyal bilim çerçevesi' beklentisini gör.
- ✅ **[Sakarya Üniversitesi İlahiyat Fakültesi Dergisi](https://dergipark.org.tr/tr/pub/sakaifd)**
  - 2001-
  - Sakarya Üniversitesi İlahiyat Fakültesi'nin 2001'den beri çıkan hakemli dergisi; sitede DOAJ, TR Dizin ve ESCI'de tarandığı yazıyor. Sayfada bundan sonra İngilizce ve uluslararası ortak yazarlı çalışmalara öncelik verileceği duyurulmuş — İngilizce yazabilen öğrenci için fırsat.
  - Erişim: Açık erişim (CC BY-NC), ücretsiz okunur. Dil: Türkçe ve İngilizce (İngilizceye öncelik duyurusu var). Sitede DOAJ, TR Dizin, ESCI sayılıyor. Yılda 2 sayı.
  - İlk 10 dk: DergiPark sayfasındaki üç aşamalı değerlendirme sürecini (editoryal ön inceleme ~2 ay, hakemlik ~2 ay) oku; takvime göre gönderim planla.
- ✅ **[Kader](https://dergipark.org.tr/tr/pub/kaderdergi)**
  - 2003-
  - 2003'te 'Kelam Araştırmaları Dergisi' adıyla kurulan, kelam ve İslam düşüncesi odaklı hakemli dergi; okumak da yayımlamak da ücretsiz. Kelam metinleri üzerinde dijital analiz deneyen öğrenci için alan dergisi seçeneği.
  - Erişim: Açık erişim, yayın ücreti yok. Dil: ağırlıkla Türkçe (İngilizce özel sayılar var). Sitede DOAJ ve TR Dizin sayılıyor. Yılda 2 sayı (Haziran-Aralık).
  - İlk 10 dk: Arşivden kelam konulu bir makale aç; çeviri ve kitap değerlendirmesi türlerinin de kabul edildiğini gör — ilk yayın için kitap değerlendirmesi düşük eşikli bir başlangıçtır.
- ✅ **[Dîvân: Disiplinlerarası Çalışmalar Dergisi](https://dergipark.org.tr/tr/pub/divan)**
  - 1996-
  - Bilim ve Sanat Vakfı'nın 1996'dan beri çıkan, sosyal ve beşeri bilimlerde karşılaştırmalı-disiplinlerarası yaklaşımı benimseyen dergisi. 'İlahiyat dergisi' kalıbına sığmayan, İslami ilimler + dijital yöntem gibi melez çalışmalar için doğal bir Türkçe adres.
  - Erişim: Açık erişim; DergiPark'tan ücretsiz okunur. Dil: Türkçe ve İngilizce. Sitede TR Dizin ve DOAJ sayılıyor. Yılda 2 sayı (Ocak-Temmuz); başvuru dönemlerini kontrol edin.
  - İlk 10 dk: Arşivden bir 'araştırma notu' örneği aç — tam makaleden kısa olan bu tür, öğrencinin pilot çalışmasını yayımlaması için uygun bir format.
- ✅ **[TRT Akademi](https://dergipark.org.tr/tr/pub/trta)**
  - TRT'nin iletişim bilimleri ağırlıklı ama disiplinlerarası çalışmalara da açık hakemli dergisi. Dijital İslami ilimler projesinin 'dijital medya, yapay zekâ ve toplum' boyutunu (ör. dinî içeriğin dijital dolaşımı) işleyen makaleler için kesişim adresi.
  - Erişim: Açık erişim (CC BY-NC-ND); ücretsiz okunur. Dil: Türkçe (İngilizce arayüz mevcut). Sitede TR Dizin, ERIH PLUS, DOAJ sayılıyor. Yılda 3 sayı; ücret politikası sayfası var, göndermeden önce kontrol edin.
  - İlk 10 dk: Arşivde 'yapay zekâ' veya 'dijitalleşme' temalı sayıları tara; kendi konunun iletişim boyutuna uyan bir örnek makale seç.
- ✅ **[Oksident](https://dergipark.org.tr/tr/pub/oksident)**
  - Bursa Uludağ Üniversitesi'nin Batı ve dinler (Yahudilik, Hıristiyanlık, Müslüman-Hıristiyan-Yahudi ilişkileri, oryantalizm eleştirisi) odaklı açık erişimli dergisi. Dijital yöntemle dinler arası polemik literatürünü inceleyen çalışmalar için niş bir seçenek; kapsam DH'den çok dinler tarihi.
  - Erişim: Açık erişim (CC BY-NC-ND); ücretsiz. Dil: Türkçe ve İngilizce. Sitede DOAJ, TR Dizin, EBSCO sayılıyor. Yılda 2 sayı; süreç istatistikleri (ön inceleme ~12 gün, değerlendirme ~107 gün) sayfada ilan ediliyor.
  - İlk 10 dk: Sayfadaki süreç istatistiklerini ve 'araştırma notu' türünü incele; konun Batı-İslam ilişkileri kesişimindeyse arşivden benzer bir makale bul.

## Akademik altyapı

- ✅ **[Zenodo (açık araştırma deposu)](https://zenodo.org/)**
  - CERN'in işlettiği ücretsiz açık araştırma deposu. OpenITI ve KITAB gibi korpusların resmî, DOI'li (kalıcı ve atıf verilebilir adresli) sürümleri buraya yüklenir. Envanterde tek tek Zenodo kayıtları var ama deponun kendisi yoktu; 'veri nereye konur, nasıl atıf alır' sorusunun cevabı.
  - Erişim: Ücretsiz; indirme için hesap gerekmez. İngilizce arayüz.
  - İlk 10 dk: Arama kutusuna 'OpenITI' yazın; en yeni sürüm kaydını açın; dosya listesini ve 'Cite as' kutusundaki hazır atıf künyesini inceleyin.
- ✅ **[OpenAlex](https://openalex.org/)**
  - Dünya akademik yayınlarının tamamen ücretsiz dizini. Bir konuda kim, ne zaman, hangi dergide yayın yapmış sorusuna hesapsız cevap verir; uluslararası literatür taraması için Google Scholar'a şeffaf bir alternatif.
  - Erişim: Ücretsiz, hesapsız; İngilizce arayüz.
  - İlk 10 dk: Arama kutusuna 'hadith network analysis' yazın; bir kaydı açıp DOI bağlantısından yayının kendisine gidin.
- ✅ **[ORCID](https://orcid.org/)**
  - Araştırmacılara verilen kalıcı 16 haneli kimlik numarası; aynı ada sahip yazarların karışmasını önler. Türkçe ilahiyat dergileri ve TR Dizin makale gönderiminde ister — lisansüstüne niyetli her öğrencinin edinmesi gereken ücretsiz akademik kimlik.
  - Erişim: Ücretsiz; numara almak için e-posta ile kayıt gerekir. İngilizce ağırlıklı arayüz.
  - İlk 10 dk: Kayıt sayfasından e-postanızla ORCID numaranızı alın; profilinize bölümünüzü ekleyin; numarayı makale gönderirken künyenize yazın.
- ✅ **[İSNAD Atıf Sistemi](https://www.isnadsistemi.org/)**
  - Türkiye ilahiyat dergilerinin ortak atıf ve kaynak gösterme standardı (güncel sürüm İSNAD 2); Zotero, Word ve EndNote şablonları hazır. Envanterdeki ulusal dergilere yazı gönderecek herkes için zorunlu durak — Zotero kartıyla doğal bir köprü kurar.
  - Erişim: Ücretsiz; Türkçe.
  - İlk 10 dk: İSNAD 2 kılavuz PDF'ini indirin; Zotero stilini kurun ve tek tıkla İSNAD biçimli bir dipnot üretin.

## Etik/politika belgeleri

- ✅ **[YÖK — Yükseköğretim Kurumları Bilimsel Araştırma ve Yayın Faaliyetlerinde Üretken Yapay Zekâ Kullanımına Dair Etik Rehber](https://proje.yok.gov.tr/tr/page/635)**
  - Yükseköğretim Kurulu (YÖK), 2024
  - YÖK'ün 2024'te yükseköğretim kurumlarına gönderdiği resmi rehber: tezde ve makalede ChatGPT gibi üretken yapay zekâ araçlarının hangi etik değerlerle, hangi sınırlar içinde ve nasıl beyan edilerek kullanılacağını anlatır. Sohbet asistanıyla çalışan her öğrencinin, çalışmasını savunmadan önce okuması gereken temel belge.
  - Erişim: Ücretsiz; sayfada Türkçe ve İngilizce PDF bağlantıları var. Kayıt gerekmez.
  - İlk 10 dk: Sayfadaki Türkçe PDF'i indir; 'etik değerler' ve riskler bölümünü oku, sonra kendi çalışmanda yapay zekâyı nerede kullandığını bir paragraf hâlinde beyan etmeyi dene — çoğu dergi artık bunu istiyor.
- ✅ **[TR Dizin Dergi Değerlendirme Kriterleri](https://trdizin.gov.tr/?p=456)**
  - TÜBİTAK ULAKBİM
  - TÜBİTAK ULAKBİM'in ulusal dergi dizini TR Dizin'e girmek isteyen dergilerin uyması gereken resmi kriterler; 'araştırma ve yayın etiğine uyum' bunların parçası. Öğrenci için pratik değeri: anket/mülakatla insan verisi toplayan çalışmalarda dergilerin etik kurul izni istemesinin dayanağı bu kriterlerdir — veri toplamaya başlamadan önce izni planlayın.
  - Erişim: Ücretsiz, kayıt gerekmez; sayfa Türkçe (İngilizce sürüm de var).
  - İlk 10 dk: Sayfayı aç, başvuru-izleme-değerlendirme akışını oku; hedeflediğin derginin DergiPark sayfasında 'TR Dizin' ibaresini ve etik kurallar sayfasını kontrol et.
- ✅ **[Oxford Academic — Author use of Artificial Intelligence (yayıncı YZ politikası örneği)](https://academic.oup.com/pages/for-authors/books/author-use-of-artificial-intelligence)**
  - Oxford University Press
  - Büyük bir uluslararası yayıncının (Oxford University Press) yazarlar için yapay zekâ kullanım politikası: yapay zekâ yazar olamaz, her kullanım hangi araçla ve nerede yapıldıysa ayrıntılı beyan edilmeli, içeriğin doğruluğundan her durumda insan yazar sorumludur. Uluslararası dergiye gönderim yapacak öğrencinin göreceği beyan şartlarının somut örneği.
  - Erişim: Ücretsiz, kayıt gerekmez; İngilizce.
  - İlk 10 dk: Sayfayı aç ve beyan şartlarını oku; sonra hedef derginin kendi 'Instructions to Authors' sayfasında AI/yapay zekâ maddesini ara — politika dergiden dergiye küçük farklar gösterir.

## Aletler

### Metinle çalışma

- ⚠️ **[Voyant Tools](https://voyant-tools.org)**
  - Elindeki metni (tefsir bölümü, makale, hutbe derlemesi) yapıştırınca kelime bulutu, kelime sıklığı listesi ve konkordans (bir kelimenin geçtiği her yeri cümle bağlamıyla listeleme) çıkaran tarayıcı aracı. Kurulum ve hesap yok.
  - Erişim: Tamamen ücretsiz, hesap yok; arayüz İngilizce ama Türkçe/Arapça metinleri işler. Ana sunucu yoğunlukta ara ara kesilir; resmî aynalar (beta.voyant-tools.org, voyant.lincsproject.ca) yedek olarak verilmeli.
  - İlk 10 dk: voyant-tools.org'u aç (o an açılmıyorsa beta.voyant-tools.org veya voyant.lincsproject.ca aynasını dene) → ortadaki büyük kutuya metnini yapıştır → 'Reveal' düğmesine tıkla → sol üstte kelime bulutunu (Cirrus), altta sıklık listesini gör → herhangi bir kelimeye tıkla, sağdaki panelde o kelimenin geçtiği bütün cümleleri bağlamıyla listele.
  - ⚠️ 06.08.2026 itibarıyla ana sunucu kesintide; aynalar: beta.voyant-tools.org · voyant.lincsproject.ca
- ✅ **[Google Colab](https://colab.research.google.com)**
  - Tarayıcıda çalışan hazır 'defter' ortamı: hocanın veya bir projenin paylaştığı hazır kod defterini hiçbir kurulum yapmadan, hücrelere tıklayarak çalıştırırsın. Kod yazmak değil, hazır defteri çalıştırmak yeterli.
  - Erişim: Ücretsiz (Google hesabı gerekir); ücretsiz katmanda GPU dahil güçlü kaynaklara erişim var ama süre ve kaynak sınırlı, uzun bırakılan oturum kapanabilir. Arayüz Türkçe görüntülenebilir.
  - İlk 10 dk: colab.research.google.com'u aç → Google hesabınla gir → sana paylaşılan hazır defter bağlantısını aç (ya da 'Yeni not defteri') → her gri kod hücresinin solundaki oynat (▶) düğmesine yukarıdan aşağı sırayla tıkla → çıktı (tablo, grafik, metin) hücrenin hemen altında belirir. Bir uyarı çıkarsa 'Yine de çalıştır' de.
- ✅ **[Gemini Notebook (eski adı NotebookLM)](https://notebook.google.com)**
  - 2026 (yeni ad)
  - Kendi PDF'lerini, ders notlarını, makalelerini yüklersin; asistan yalnızca o kaynaklara dayanarak, hangi kaynağın hangi yerinden aldığını göstererek cevap verir. 'Kaynağı belli olmayan bilgi' derdine birebir.
  - Erişim: Ücretsiz (Google hesabı şart); ücretsiz katmanda defter ve kaynak sayısı sınırlı, aboneliklerde limitler artıyor. Türkçe kaynak yükleyip Türkçe soru sorabilirsin.
  - İlk 10 dk: notebook.google.com'u (veya eski adres notebooklm.google.com'u) aç → Google hesabınla gir → 'Yeni not defteri' → 'Kaynak ekle' ile 2-3 PDF yükle (ör. bir tefsir bölümü + iki makale) → alttaki kutuya 'Bu kaynaklara göre X kavramı nasıl tanımlanıyor?' yaz → cevaptaki küçük numaralara tıklayıp alıntının kaynağın hangi pasajından geldiğini gör.
- ✅ **[Sohbet asistanları: ChatGPT / Claude / Gemini (dosya yükleme + veri analizi)](https://gemini.google/about/)**
  - Excel/CSV/PDF dosyanı sohbete yükleyip 'bu tabloyu özetle, yıllara göre grafik çıkar, bu Osmanlıca pasajı sadeleştir' diyebileceğin asistanlar. Kod gerektiren küçük işleri senin yerine yaparlar; tek kalem olarak rafın 'çok amaçlı çakısı'.
  - Erişim: Üçünün de ücretsiz katmanı var (hesap gerekir); ücretsizde günlük mesaj/dosya sınırları ve daha küçük modeller söz konusu. Üçü de Türkçe konuşur. Gemini'nin Türkçe tanıtım sayfası ücretsiz katmanı 'ayda 0 TL' olarak listeliyor.
  - İlk 10 dk: gemini.google.com, chatgpt.com veya claude.ai'den birini aç → ücretsiz hesapla gir → mesaj kutusundaki ataş/artı simgesiyle Excel veya PDF dosyanı yükle → 'Bu tablodaki kayıtları yıllara göre say ve çubuk grafik çiz' yaz → sonucu ve asistanın yaptığı adımları oku → kritik her sayıyı kaynağından kontrol et (asistanlar bazen uydurur; doğrulamadan alıntılama).

### Harita

- ✅ **[Google My Maps](https://www.google.com/maps/about/mymaps/)**
  - Excel'deki yer listesini (ör. Endülüs şehirleri, bir âlimin seyahat durakları) birkaç tıkla Google haritasına döken araç. Sunumda 'işte güzergâh' demenin en hızlı yolu.
  - Erişim: Ücretsiz (Google hesabı gerekir); arayüz Türkçe. Çok büyük tablolarda katman başına satır sınırı vardır; öğrenci ölçeğindeki listeler rahat sığar.
  - İlk 10 dk: google.com/maps/about/mymaps sayfasını aç → 'Başlayın' ile Google hesabınla gir → 'Yeni harita oluştur' → 'İçe aktar' → 'Yer adı' (veya enlem/boylam) sütunu olan Excel/CSV dosyanı seç → hangi sütunun konum, hangisinin başlık olduğunu işaretle → noktaların haritaya dizildiğini gör → 'Paylaş' ile bağlantı alıp sunuma koy.
- ✅ **[uMap (OpenStreetMap)](https://umap-project.org)**
  - My Maps'in açık kaynak, daha esnek kardeşi: OpenStreetMap altlığı üzerinde katmanlı, özelleştirilmiş haritalar yaparsın; CSV/GeoJSON yüklenir, Google hesabı gerekmez, istersen tamamen anonim çalışırsın.
  - Erişim: Ücretsiz ve açık kaynak (AGPL); üç resmî örnek sunucu var (Almanya/İsviçre/Fransa) ve hepsi hesapsız anonim kullanım sağlar; hesapla haritalarını sonradan düzenlemek kolaylaşır. Arayüz çok dilli (Türkçe seçenek görülebilir).
  - İlk 10 dk: umap.openstreetmap.fr veya umap.openstreetmap.de örneğini aç → hesapsız 'Haritayı oluştur' → sağdaki menüden veri içe aktarma (Import) ile enlem/boylam sütunlu CSV dosyanı yükle → nokta simgelerini ve renklerini katman ayarlarından değiştir → kaydet, çıkan bağlantıyı paylaş ya da siteye göm.
- ✅ **[Recogito (Pelagios)](https://recogito.pelagios.org)**
  - Metindeki yer adlarını işaretleyip haritaya döken, tarihçi dostu araç: bir seyahatnameyi yükler, 'Kurtuba'yı seçip yer olarak işaretlersin, araç onu tarihî yer veritabanıyla eşleştirir ve tüm yerleri haritada gösterir. Kişi ve olay da işaretlenebilir.
  - Erişim: Ücretsiz; hesap gerekir. Arayüz İngilizce. Ortak çalışmaya (aynı belgeyi birkaç kişinin işaretlemesine) izin verir — sınıf ödevi için uygun.
  - İlk 10 dk: recogito.pelagios.org → ücretsiz hesap aç → 'New document' ile metnini yükle (düz metin .txt en sorunsuzu) → metinde bir yer adını fareyle seç → açılan kutuda 'Place' işaretle → önerilen tarihî yer kaydını onayla → birkaç yeri işaledikten sonra harita görünümüne geçip hepsini haritada gör → CSV olarak dışa aktarıp My Maps'e de taşıyabilirsin.

### Ağ görselleştirme

- ✅ **[Gephi + Gephi Lite (tarayıcı sürümü)](https://gephi.org)**
  - İlişki ağlarını (kim kimden rivayet etmiş, kim kime atıf yapmış, hangi âlim hangi şehirde ders vermiş) noktalar ve çizgilerle görselleştiren araç. Tarayıcıda çalışan Lite sürümü kurulumsuz başlamak için ideal; isnad ağı çizmenin standart aleti.
  - Erişim: İkisi de ücretsiz ve açık kaynak (GPL). Gephi Lite tarayıcıda, hesapsız; masaüstü Gephi kurulum ister. Arayüz İngilizce. Elinde hazır ağ dosyası yoksa önce Palladio gibi tablodan-ağ üreten bir araçla başlamak daha kolay.
  - İlk 10 dk: Kurulumsuz başla: lite.gephi.org'u aç → 'Open graph file' ile elindeki küçük bir ağ dosyasını (.gexf/.graphml — hocandan veya bir dersten alınmış olabilir) yükle → noktaları sürükle, görünüm panelinden noktaları bağlantı sayısına göre boyutlandır → PNG olarak dışa aktar. Daha fazlası için gephi.org'dan masaüstü Gephi'yi indir (Windows/Mac/Linux).
- ✅ **[Palladio (Stanford)](https://hdlab.stanford.edu/palladio/)**
  - Tarihçiler için tasarlanmış sürükle-bırak görselleştirme: Excel tablonu yapıştırırsın, aynı veriden harita, ağ grafiği, liste ve galeri görünümleri üretir. Kod yok, kurulum yok.
  - Erişim: Ücretsiz (MIT lisansı), hesapsız, tamamen tarayıcıda; verin sunucuya gitmez. Projeyi dosya olarak indirip sonra kaldığın yerden devam edebilirsin. Arayüz İngilizce. Hâlâ ayakta (sürüm 1.2.4) ama aktif geliştirme yavaş.
  - İlk 10 dk: hdlab.stanford.edu/palladio sayfasını aç → 'Launch Palladio App' → Excel'de hazırladığın tabloyu (ör. âlim, hocası, şehri, vefat yılı sütunları) kopyalayıp kutuya yapıştır → 'Load' → üstten 'Graph' sekmesinde kaynak sütunu 'âlim', hedef sütunu 'hocası' seç → hoca-talebe ağını gör; koordinat sütunun varsa 'Map' sekmesinde aynı veriyi haritada gör.

### Tablo & grafik

- ✅ **[OpenRefine](https://openrefine.org)**
  - Dağınık tabloları temizleyen araç: aynı kişinin 'İbn Rüşd / Ibn Rushd / İbni Rüşd' gibi farklı yazımlarını bulup tek tıkla birleştirir. Kataloglardan, kaynakça listelerinden derlenen her tablonun ilk uğrağı.
  - Erişim: Ücretsiz ve açık kaynak; kurulum gerekir (Windows/Mac/Linux), hesap yok. Sayfadaki ifadeyle veri 'senin makinende' temizlenir — hassas listeler için avantaj. Arayüz İngilizce ağırlıklı.
  - İlk 10 dk: openrefine.org → 'Download' → indirip aç (program kendi tarayıcı sekmesinde açılır; verin bilgisayarından çıkmaz) → 'Create project' ile Excel/CSV dosyanı yükle → yazar sütununun başlığındaki ok menüsünden 'Facet → Text facet' seç → soldaki listede aynı ismin kaç farklı yazımı olduğunu gör → 'Cluster' düğmesine bas, önerilen birleştirmeleri onayla → temiz tabloyu dışa aktar.
- ✅ **[RAWGraphs](https://www.rawgraphs.io)**
  - Excel'den kopyaladığın tabloyu yapıştırıp yaklaşık 30 farklı grafik türüne (çubuk, zaman şeridi, treemap, akış...) çeviren kodsuz araç. Verin tarayıcıdan dışarı çıkmaz — hassas listeler için de gönül rahatlığıyla kullanılır.
  - Erişim: Ücretsiz ve açık kaynak, hesapsız; sayfanın ifadesiyle veri 'yalnızca kendi tarayıcında' işlenir. Arayüz İngilizce.
  - İlk 10 dk: rawgraphs.io → 'Use it now' → Excel'deki tabloyu kopyala, kutuya yapıştır → grafik türlerinden birini seç (ör. yüzyıllara göre eser sayısı için çubuk grafik) → sütun adlarını sürükleyip 'X ekseni', 'boyut', 'renk' kutularına bırak → grafiği anında gör → PNG veya SVG olarak indir, sunuma koy.
- ✅ **[Datawrapper](https://www.datawrapper.de)**
  - Gazetecilerin (NYT, Reuters) kullandığı kodsuz grafik aracı: tabloyu yapıştır, birkaç adımda yayına hazır, etkileşimli grafik/harita/tablo üret; web sayfasına gömülebilir bağlantı al. Sunum sitesine canlı grafik koymanın en temiz yolu.
  - Erişim: Temel kullanım ücretsiz; sayfada 'hesapsız deneyebilirsin' deniyor, yayınlayıp saklamak için ücretsiz hesap gerekir; takım/kurumsal özellikler ücretli. Arayüz İngilizce/Almanca.
  - İlk 10 dk: datawrapper.de → 'Start creating' (hesapsız denenebilir) → tabloyu yapıştır → 'Proceed' → grafik türünü seç (çubuk/çizgi/harita/tablo) → başlık, açıklama ve veri kaynağını yaz → 'Publish' ile paylaşılabilir bağlantı ve gömme kodu al; PNG olarak da indirebilirsin.

### Yazma eserler & görsel

- ✅ **[Transkribus (not: eScriptorium)](https://www.transkribus.org)**
  - El yazması ve eski matbu sayfaların fotoğrafını yükleyip otomatik olarak metne çeviren (yazı tanıma) platform. Osmanlıca için hazır kamu modeli var; Arapça yazı türleri için de modeller mevcut — yazma eser çalışan ilahiyatçı için rafın en kıymetli aleti.
  - Erişim: Ücretsiz katman: ayda 50 kredi (kabaca 50 sayfa otomatik tanıma); fazlası kredili/ücretli. Osmanlıca kamu modeli OttomanTurkish_generic'in karakter hata oranı ~%11,6 (model sayfasında ilan edilen değer) — ham çıktı düzeltme ister. Açık kaynak alternatif eScriptorium tarayıcıda çalışır ve Arapça OCR projelerinde (OpenITI) kullanılır, ama açık örneği escriptorium.openiti.org hesapları davetle veriyor; kod bilmeyen öğrenci için pratik yol Transkribus.
  - İlk 10 dk: transkribus.org → ücretsiz hesap aç (ayda 50 kredi verilir, kart istemez) → tarayıcı uygulamasında 'Upload' ile yazma/matbu sayfa görselini yükle → 'Recognize' de, model listesinden 'OttomanTurkish_generic' (Osmanlıca; hem el yazması hem matbu) ya da bir Arapça modelini seç → birkaç dakika içinde görüntünün yanında satır satır metni gör → hataları çift panelde elle düzelt, Word/TXT olarak indir.
- ✅ **[Tropy](https://tropy.org)**
  - Arşivde/kütüphanede çektiğin binlerce belge fotoğrafını düzene sokan program: 'IMG_2047.jpg' yığınını, üzerine not ve çeviri yazılabilen, etiketli, aranabilir araştırma öğelerine çevirir.
  - Erişim: Ücretsiz ve açık kaynak (Mellon Vakfı destekli), hesap yok; her şey kendi bilgisayarında durur. Arayüz İngilizce. CSV ve Omeka'ya dışa aktarım var.
  - İlk 10 dk: tropy.org → 'Download' (Windows/Mac/Linux) → kur ve aç → arşiv fotoğraflarını pencereye sürükle → aynı belgeye ait sayfaları seçip birleştirerek tek öğe yap → öğeye tarih, yer, konu gibi bilgiler gir; etiket ekle → fotoğrafın üzerine seçim çizip notunu veya çevirisini (transkripsiyon) yaz → etikete tıklayıp ilgili tüm belgeleri bir arada gör.

### Kaynakça

- ✅ **[Zotero](https://www.zotero.org)**
  - Kaynakça derdinin ilacı: tarayıcı eklentisiyle makale künyelerini tek tıkla toplar, Word'de dipnot ve kaynakçayı otomatik üretir. 9.000'den fazla atıf stili destekler; tez yazan her öğrencinin ilk kurması gereken program.
  - Erişim: Program tamamen ücretsiz ve açık kaynak; cihazlar arası eşitleme için sınırlı ücretsiz bulut alanı var, fazlası ücretli (temel kullanım için gerekmez). Türkçe rehberler mevcut: Sakarya Üniversitesi Kütüphanesi'nin Türkçe Zotero sayfası ve PDF kılavuzu bu oturumda doğrulandı (kutuphane.sakarya.edu.tr). İlahiyat için yaygın İSNAD atıf sisteminin Zotero stili de kullanılıyor.
  - İlk 10 dk: zotero.org → 'Download' ile hem programı hem tarayıcı eklentisini (Zotero Connector) kur → bir makale sayfası (ör. bir dergi sitesi veya kütüphane kaydı) açıkken tarayıcıdaki Zotero simgesine tıkla → künye kütüphanene otomatik düşsün → Word'ü aç, Zotero sekmesinden 'Add/Edit Citation' ile dipnot ekle → 'Add Bibliography' ile kaynakçayı tek tıkla oluştur.
