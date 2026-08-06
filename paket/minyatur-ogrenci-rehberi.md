# MİNYATÜR ATÖLYE — BELÂZÜRÎ'DEN KENDİ FETİH HARİTANIZA
**Süre:** ~90 dakika · **Kurulum:** yok · **Gerekli beceri:** sohbet ekranı kullanmak ve dikkat
**Bu rehber**, "Dijital İslami İlimler ve Yapay Zekâ" seminerinde (Rıhle 2026) gösterilen yayımlanmış çalışmanın — EICD-B, *Digital Scholarship in the Humanities*, Oxford, 2026 — öğrenci ölçeğine indirilmiş halidir. Aynı kitap, aynı yöntem, sizin elinizle.

Öğreneceğiniz dört fiil: **BUL → İŞLE → ÇIKAR → DOĞRULA.**
İki yasak: modele *"korpusta ne var?"* diye sorulmaz · doğrulanmamış çıktı kullanılmaz.

---

## GEREKENLER

| Araç | Erişim |
|---|---|
| Herhangi bir sohbet asistanı (ChatGPT / Gemini / Claude / DeepSeek…) | 🟢 ücretsiz katman bu iş için yeterli · hesap gerekir |
| Metin dosyası: `minyatur-futuh-misr.mARkdown` (bu paketle birlikte) | 🟢 ücretsiz, açık lisans |
| Google Hesabı (yalnız Adım 5'teki harita için) | 🟡 isteğe bağlı |

Dosya yükleme ücretsiz katmanda kısıtlıysa çözüm basit: metni iki-üç parça halinde yapıştırın, promptu her parçanın başında tekrarlayın, sonuç listelerini birleştirin.

---

## ADIM 1 — BUL (5 dk)

`minyatur-futuh-misr.mARkdown` dosyasını açın. Bu, Belâzürî'nin (ö. 279/892) *Fütûhu'l-Büldân*'ının **Mısır, Mağrib, Endülüs ve Adalar** bölümüdür: 7.132 kelime — makalede bu bloğun kelime sayısı aynen böyle raporlanır; elinizdeki, üretimde kullanılan metnin ta kendisidir (OpenITI korpusu, sürüm 2025.1.9).

Biçimi tanıyın: `### |` ile başlayan satırlar bölüm başlığı, `~~` ile başlayan satırlar bir önceki cümlenin devamıdır. Metin budur; süslü bir arayüz beklemeyin — araştırma verisi böyle görünür.

## ADIM 2 — İŞLE (15 dk)

Aşağıdaki promptu **aynen** kopyalayın, sohbet asistanına yapıştırın ve en alta dosyanın tamamını ekleyin (ya da dosyayı yükleyip "Metin: ekli dosyadadır" deyin).

```
Sen, klasik Arapça tarih metinlerinden yapılandırılmış veri çıkaran
titiz bir araştırma asistanısın.

Aşağıdaki metinden, YALNIZCA bu metne dayanarak, şehirlerin İslam
hâkimiyetine giriş olaylarını çıkar ve geçerli JSON döndür.

Her olay için:
  şehir (Arap harfleriyle + Latin yazımı) · hicrî yıl (tam sayı)
  fetih türü — üç değerden biri:
     CAPITULATION  → sulhan: antlaşma, emân, cizye  (صلح، أمان، عهد، ذمة، جزية)
     SUBJUGATION   → anveten: savaş, kuşatma, zor   (عنوة، قتال، حصار، سيف، غلبة)
     RECONSOLIDATION → bozulan ahd / iki tür işaretin birlikte bulunması
  komutan · delil: hükmü dayandıran, METİNDEN AYNEN alınmış Arapça cümle

Kurallar: metinde olmayanı yazma · delilsiz olay yazma ·
emin olamadığını "çekimser" listesine sebep notuyla koy ·
şehir kuruluşları, şehirsiz meydan savaşları, iç çatışmalar olay sayılmaz.

Metin:
[BURAYA DOSYANIN TAMAMINI YAPIŞTIRIN]

Yalnızca şu biçimde cevap ver:  {"olaylar": [...], "çekimser": [...]}
```

Talimatın anatomisi seminerdeki formülün kendisi: **bağlam** (ilk cümle) · **görev** (ikinci paragraf) · **çıktı ölçütü** (alan listesi + üç değerli kapalı sözlük) · **kaynak sınırı** ("YALNIZCA bu metne" + delil zorunluluğu) · **çekimser kanal** («çekimser» listesi — modele "bilmiyorum" deme yeri açmak).

Bu talimat, seminerde perdede gördüğünüzün aynısıdır (tek fark: perdede metnin yerinde `{metin}` yer tutucusu görünür) — ve yayındaki İngilizce talimatın sadık Türkçesidir.

**İpucu:** Yıllar metinde yazıyla geçer ("سنة إحدى وعشرين" = 21); modeller bu çeviriyi bilir — siz yine de yılı delil cümlesinden teyit edin.

> **Meraklısına — model bunu nasıl yapıyor? (beş cümle)**
> Model soruya cevap vermez; metni *devam ettirir* — talimat, en olası devamın doğru kayıt olacağı bir başlangıç kurar; aruz kalıbı verilmiş şaire mısra tamamlatmak gibi. Yazacağı her kelimede bütün pasajı aynı anda tartar; yıl alanını doldururken "سنة ثلاث عشرة" gibi ifadeler ağır basar — siyak-sibak, mekanikleşmiş halde. Üç değerli kapalı liste, cevabın kapılarını üçe indirir; serbest metnin bin kapısında kaybolmaz. Delili ezberinden değil, önündeki metinden kopyalaması istenir — kopyalamak uydurmaktan daha olasıdır; modelin kolaycılığını doğruya bağlarız. Buna "anlamak" denip denmeyeceği felsefenin sorusudur; bizim ölçtüğümüz, kısıtlanmış ve denetlenmiş davranıştır.

## ADIM 3 — ÇIKAR (10 dk)

Gelen JSON'u bir tabloya dökün: Google Sheets'te sütunlar **Şehir | Yıl | Tür | Komutan | Delil**. İsterseniz aynı asistana "bu JSON'u tabloya çevir" diyebilirsiniz — ama tablo da bir çıktıdır; o da Adım 4'ten geçer.

## ADIM 4 — DOĞRULA: MUKABELE (30 dk — işin kalbi)

Her kaydın **delil cümlesini** kaynak dosyada Ctrl+F ile arayın.

- **Pratik ipucu:** Satır sonlarındaki `~~` yüzünden uzun cümle bulunamayabilir. Cümlenin 3-4 kelimelik çekirdeğini arayın (ör. tamamı yerine `ففتحها عنوة`).
- Delil **bulunduysa**: yıl ve tür, o cümledeki işaret kelimesiyle uyumlu mu, kontrol edin.
- Delil **bulunamadıysa**: kayıt geçersizdir — silin ya da `NOT_FOUND` diye işaretleyip sonuçlara katmayın. (Üretim hattında bu oran %8,4'tü ve o kayıtlar yayına girmedi.)
- Sonucunuzu **raporlayın**: "X kayıttan Y'si delille doğrulandı." Bu tek cümle, sizi "yapay zekâya yaptırdım" diyenlerden ayırır.

## ADIM 5 — HARİTALA (20 dk, isteğe bağlı)

Sheets tablonuzu Google MyMaps'e aktarın (İçe Aktar → konum sütunu: Şehir). Yanlış konumlanan şehri elle düzeltin — Tuleytula'yı Toledo, Ohio'ya koyarsa şaşırmayın; modern coğrafya araçları tarihî adlarla bocalar, üretim hattında bu yüzden tarihî gazetteer kullanılır. Noktaları tür sütununa göre renklendirin: harita, elinizle çıkmış ilk dijital-beşerî-bilimler ürününüzdür.

Üretim hattında bu adım elle değil, tarihî bir coğrafya sözlüğüyle yapılır: el-Süreyyâ gazetteer'i (2.070 yer) artı projeye elle eklenen 451 yer — 226 kaydın tamamı böyle konumlandı ve her koordinat, bölgesinin sınır kutusuyla ayrıca sınandı. Makaledeki harita ve grafiklerin hiçbiri elle çizilmedi; hepsi doğrulanmış veriden kodla üretildi. Sizin MyMaps'iniz aynı işin el yordamıyla minyatürüdür — elle düzelttiğiniz her nokta, tarihî gazetteer'lerin neden var olduğunu öğretir.

---

## CEVAP ANAHTARI
Yayımlanmış EICD-B veri setinin (226 kayıt) bu bölüme düşen **11 olayı**. Kendinizi sınadıktan sonra bakın:

| # | Şehir | Hicrî yıl | Tür | Delilden çekirdek |
|---|---|---|---|---|
| 1 | Bâbilyûn kalesi *(kayıtta: el-Fustât)* | 19 | ANVE | ففتح الحصن عنوة |
| 2 | İskenderiye | 21 | ANVE | فسار إليها في سنة إحدى وعشرين |
| 3 | İskenderiye *(ahd bozulunca ikinci fetih)* | 25 | ANVE | وذلك في سنة خمس وعشرين |
| 4 | İskenderiye *(Amr'ın mektubu aktarımı)* | 40* | ANVE | فتح علينا الإسكندرية عنوة قسرا بغير عهد ولا عقد |
| 5 | Berka | 21 | SULH | فصالح أهلها على الجزية … ثلاثة عشر ألف دينار |
| 6 | Trablus (Mağrib) | 22 | ANVE | نزل أطرابلس … |
| 7 | Tanca | 89 | ANVE | ففتح طنجة ونزلها |
| 8 | Endülüs | 92 | ANVE | حاربه أهلها ففتحها |
| 9 | Tuleytula (Toledo) | 93 | ANVE | فافتتح طارق مدينة طليطلة |
| 10 | Rodos | 52 | ANVE | ففتحها عنوة |
| 11 | Ervâd | 54 | ANVE | وفتح جنادة … أرواد |

**Anahtarı okurken:**
- Listeniz birebir aynı çıkmayabilir — farklı model, farklı gün, biraz farklı liste. Bu bir kusur değil, dersin kendisidir: ölçüt liste değil, **delil disiplinidir**.
- 4 numaralı kayıt "çekimser" listesi için mükemmel bir adaydır: yıl, bir mektup aktarımının bağlamından geliyor ve tartışmalıdır. Modeliniz onu atladıysa ceza değil, takdir puanı verin.
- 1 numaralı kayıt, bağımsız altın listede (Kennedy) **20/SULH** olarak geçer — Mısır'ın sulhan mı anveten mi fethedildiği, kaynakların asırlık ihtilafıdır. Modelin "hatası" bu ihtilafın üstüne düşer; seminerde anlatılan "hata analizi de ilimdir" anı budur.
- Bu blok, veri setinin genelinin aksine (%52 sulh) belirgin biçimde anve ağırlıklıdır — Belâzürî'de bölgeden bölgeye değişen "imza"nın küçük bir örneği.
- *Dürüstlük notu:* Bu anahtar, yayımlı 226 kayıttan delil-eşleştirmesiyle otomatik süzülüp elle ayıklandı; süzme sırasında üç kelimelik genel bir delil cümlesi (`ففتحها عنوة`) yüzünden yanlışlıkla eşleşen bir Sicistan kaydı (Büst) elle çıkarıldı. Mukabele, cevap anahtarı hazırlarken bile gerekiyor.

---

## SONRAKİ SEVİYE (isteğe bağlı)

- **Konkordans (Colab, tek hücre):** Bir sohbet asistanına şunu yazın: *"Python: ekli metin dosyasında صلح kökünün geçtiği her yeri, öncesindeki ve sonrasındaki 10'ar kelimeyle listeleyen kod yaz."* Kodu colab.research.google.com'da yeni bir deftere yapıştırıp çalıştırın. Kod çıktısı da çıktıdır: birkaç satırını elle kontrol edin.
- **Haritayı kodla çizmek (Colab):** Tablonuza, el-Süreyyâ'dan (althurayya.github.io) baktığınız enlem-boylam sütunlarını ekleyin; sonra asistana: *"Python: ekli tablodaki olayları enlem-boylam ile haritaya, türe göre daire/kare/üçgen işaretlerle çiz."* Şekildeki sayıları tablonuzla mukabele edin — kod çıktısı da çıktıdır.
- **İş yürüten vekiller:** Claude Code (kod ve veri işleri) ile Claude Cowork (masaüstünde dosyalar üzerinde bilgi işleri) gibi ajan araçlar, bu rehberdeki adımları siz tarif ettikten sonra kendileri yürütebilir. Karpathy'nin "sesli döküm" deseniyle birleştirin: sesli moda geçip 10 dakika dağınık anlatın, derli toplu bir plan geri alın. İki fren aynı: vekilin teslimatı da mukabeleden geçer; mahrem içerik sesliyken de mahremdir.
- **Kendi bölümünüz:** Aynı yöntemi kitabın Şam ya da Horasan bölümüne uygulayın — antlaşma/kuvvet oranının değiştiğini kendi elinizle görün.
- **Ağ ve harita araçları:** Gephi (ağ haritası) · QGIS (ileri haritalama) — ikisi de ücretsiz.

## İKİ TANIM — JSON VE VERİ SETİ

**JSON:** "etiket": değer çiftleriyle yazılmış kayıt biçimi — etiketli çekmeceli bir dolap gibi: çekmecenin üstünde adı (şehir, yıl, tür), içinde değeri. Düz metindir; Not Defteri'nde açılır, Excel'e dökülür, özel program istemez.
**Veri seti:** Aynı şemadaki kayıtların toplamı. Sizin ~11 kaydınız bir mini veri setidir; bizim 226 kaydımız makaleyle birlikte yayımlandı — çünkü **veri seti de bir yayındır**: makale okunur, veri seti kullanılır.
**Kalite zinciri:** Modeller veriyle eğitilir — çöp giren, çöp çıkar; sizin ürettiğiniz veri de yarın başkasının kaynağı olur. Onun için kayıt üretmek rivayet nakletmeye benzer: senedini (delil), tenkidini (mukabele), mukayesesini (cevap anahtarı) ve neşrini (sürüm notu) ister. *Rivayet, râvisi kadar sağlamdır — veri de öyle.*

## PERDE ARKASINI KENDİ GÖZÜNÜZLE GÖRÜN

- **bbycroft.net/llm** — küçük bir GPT'nin üç boyutlu anatomisi; her katman ekranda.
- **poloclub.github.io/transformer-explainer** — cümle yazın, sonraki kelimenin olasılık çubuklarını canlı izleyin ("üç kapı" fikrinin kendisi).
- **tiktokenizer.vercel.app** — deney: atölye metnindeki cümleyi yapıştırın; عنوة kaç parçaya bölünüyor? Model harf değil parça okur — Arapçanın daha çok parçaya bölünmesi, dil eşitsizliğinin mühendislik köküdür.
- **jalammar.github.io** — "The Illustrated Transformer": alanın klasik görselli anlatımı.
- **3Blue1Brown — "But what is a GPT?"** (YouTube, Türkçe altyazılı) — mekanizmanın en iyi video anlatımı.
- **ig.ft.com/generative-ai** — Financial Times'ın kaydırmalı görsel anlatımı.

## MİNİ SÖZLÜK
**mARkdown** = OpenITI'nin işaretli düz metin biçimi · **Colab** = tarayıcıda çalışan hazır kod defteri · **HTR** = el yazısı tanıma · **Gephi** = ilişki ağlarını çizen program

---

**Künye:** Gökalp, H. & Çetinkaya, A. (2026). *The Early Islamic Conquests Database–Balādhurī (EICD-B)*, Digital Scholarship in the Humanities, doi:10.1093/llc/fqag093 · Kaynak metin: OpenITI 2025.1.9 (30.12.2025), Belâzürî, *Fütûhu'l-Büldân*, de Goeje neşri 1866 · Bu rehber Rıhle 2026 semineri katılımcıları için hazırlanmıştır.

`ÜRET (kendin) • DOĞRULA (dışarıda) • BEYAN ET`
