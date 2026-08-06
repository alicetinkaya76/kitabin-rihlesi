# KORPUS × LLM ATÖLYESİ — EKRAN EKRAN SENARYO (v3 · tam Türkçe · üretici-LLM tarifli)
**Seminer:** Dijital İslami İlimler ve Yapay Zekâ: Yöntem ve Uygulamalar (Rıhle 2026)
**Konum:** Durak 5 · dk 29:00–41:00 · izleyici formatı (etkileşim yok; kayıt YouTube'a girer)
**Çekirdek vaka:** EICD-B — Gökalp & Çetinkaya, *Digital Scholarship in the Humanities* (Oxford), 2026, doi:10.1093/llc/fqag093
**Bu belge iki dilde konuşur:** «KONUŞMA» blokları sunucunun sözleridir ve **slayta yazılmaz** (konuşmacı notu alanına girer). «SLAYT TARİFİ» blokları, slaytları üretecek yardımcıya (ChatGPT) verilecek **birebir yapım talimatıdır**.

---

## SLAYT ÜRETİCİSİ İÇİN GENEL TARİF (bütün slaytlara uygulanır)

- **Tuval:** 16:9 · zemin `#FAF7F0` (sıcak kâğıt) · kenar boşluğu her yönden %5.
- **Renk paleti:** metin `#1F2937` · KORPUS yeşili `#1E7A46` · MODEL kehribarı `#B45309` · İNSAN mavisi `#1D4ED8` · uyarı kırmızısı `#B91C1C` · yardımcı gri `#6B7280` · kart zemini `#FFFFFF`, çerçeve `#E5E7EB` 1px.
- **Yazı:** Başlık: kalın sans (Inter/IBM Plex Sans), 40pt. Gövde: 24pt altına inme. **Arapça: Amiri, ≥30pt, sağdan sola hizalı; asla otomatik çeviri/harf değişimi yapma — metni birebir kopyala.** Kod/JSON: JetBrains Mono 22pt.
- **Menşe şeridi:** İçerik kartlarının SOL kenarında 8px dikey şerit — kaynak pasaj kartında yeşil, model çıktısı kartında kehribar, doğrulama kartında mavi.
- **Alt bant (her slaytta):** tam genişlik, 48px, zemin `#1F2937`, ortalı beyaz 16pt metin: `ÜRET (kendin) • DOĞRULA (dışarıda) • BEYAN ET`
- **Künye damgası (her slaytta, sağ alt, 10pt gri):** `OpenITI 2025.1.9 · EICD-B (DSH 2026) · son kontrol: __.__.2026`
- **Makale şekilleri:** 3., 4. ve 6. şekiller ile 1. şekil (harita) makale PDF'inden yüksek çözünürlükte dışa aktarılır; üzerine 26pt Türkçe başlık bandı eklenir; eksenler ve sayılar yeniden çizilmez, aynen korunur.
- **Kesin kurallar:** (1) Tırnak içindeki ve kod bloklarındaki metinler **birebir** aktarılır; kelime değiştirilmez. (2) Bu belgede olmayan hiçbir sayı, isim, logo eklenmez. (3) Süsleme görseli, stok fotoğraf, yapay görsel **kullanılmaz** — yalnız tarif edilen öğeler. (4) Tür işaretleri renk + biçimle birlikte verilir (daire/kare/üçgen). (5) Telefonda okunurluk: en küçük gövde 22pt.

---

## E0 — GİRİŞ KÖPRÜSÜ (29:00 · 15 sn · perde: bir önceki durak kararır)

**KONUŞMA:**
> "Şimdi mutfağa giriyoruz: yayımlanmış bir çalışmanın — bizim çalışmamızın — dört adımını dört fiille izleyeceğiz: **bul, işle, çıkar, doğrula.** Makaledeki bir cümleyi baştan söyleyeyim: bu hattın doğrulama katmanı, isnadın makul olup olmadığını denetleyen muhaddisin işini otomatikleştirir. Yaptığımız şey yeni değil; hızı yeni."

---

## EKRAN 1 — BUL: KORPUSTAKİ PASAJ (29:15 · 45 sn · şerit: 🟩)

**SLAYT TARİFİ:**
- Başlık (üst): `BUL — metin zaten orada`
- Ortada tek beyaz kart (%80 genişlik), sol kenarında yeşil menşe şeridi; kart içinde Amiri 30pt, sağdan sola, aşağıdaki metin **birebir**:
```
| شخوص خالد بن الوليد إلى الشام وما فتح في طريقه

قالوا: لما أتى خالد بن الوليد كتاب أبي بكر وهو بالحيرة خلف المثنى ابن
~~حارثة الشيباني على ناحية الكوفة، وسار في شهر ربيع الآخر سنة ثلاث عشرة في
~~ثمانمائة، ويقال في ستمائة، ويقال في خمسمائة، فأتى عين التمر ففتحها عنوة،
```
- `عنوة` kelimesinin çevresine 3px yeşil (`#1E7A46`) yuvarlatılmış dikdörtgen; `سنة ثلاث عشرة` altına ince yeşil çizgi.
- Kartın altında 18pt gri kenar notu: `### | = bölüm başlığı · ~~ = satır devamı — OpenITI'nin "işaretli metin" biçimi`

**KONUŞMA:**
> "OpenITI korpusundan bir sayfa: Belâzürî'nin Fütûhu'l-Büldân'ı — düz metin, etiketleri görünür. Şu tek kelimeye bakın: **عنوة**. Bilgisayar için dört harf; tarihçi ve fakih için bir vergi rejimi. Birinci fiil **bul**: pasajı bulmak modelin değil, korpusun ve arama araçlarının işidir — Ctrl+F bile araştırmadır. Model daha sahnede yok."

**GEÇİŞ:** "Onu sahneye talimat çağırır."

---

## EKRAN 2 — İŞLE: TALİMAT (30:00 · 60 sn · şerit: 🟨)

**SLAYT TARİFİ:**
- Başlık: `İŞLE — talimat (perdedeki, elinizdekiyle aynıdır)`
- Sol %70: beyaz kart, kehribar menşe şeridi, JetBrains Mono 20-22pt; içerik **birebir** (öğrenci rehberindeki talimat; son iki satırı `Metin: {metin}` ve çıktı satırı olarak):
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

Metin: {metin}

Yalnızca şu biçimde cevap ver:  {"olaylar": [...], "çekimser": [...]}
```
- Sağ %25: beş etiket kutucuğu, ilgili satırlara ince ok: `BAĞLAM` (1. cümle) · `GÖREV` (2. paragraf) · `ÇIKTI ÖLÇÜTÜ` (alan listesi + üç değerli kapalı sözlük) · `KAYNAK SINIRI` ("YALNIZCA" + delil şartı) · `ÇEKİMSER KANAL` ("çekimser" satırı).

**KONUŞMA:**
> "Oxford'da yayımlanan verinin talimatının Türkçesi — ve QR paketinizdeki metnin birebir aynısı. Formülün parçaları iş başında: bağlam, görev, kaynak sınırı, çıktı ölçütü. İki ayrıntı: **delil** alanı zorunlu — delilsiz iddia şemadan geçemez. Ve **çekimser** listesi: İmam Mâlik'in *lā edrī*'sini şemanın içine yazdık; çekimserlik rica değil, mühendislik."

**GEÇİŞ:** "Peki bu makine, bin iki yüz yıllık bir Arapça cümleyi nasıl olup da doğru kayda çeviriyor?"

---

## EKRAN 3 — PERDE ARKASI: MODEL BUNU NASIL "ANLIYOR"? (31:00 · 105 sn · şerit: 🟨 · atölyenin zirvesi)

**SLAYT TARİFİ:**
- Arka plan: E1'deki Arapça kart, %12 opaklıkla soluk "hayalet" olarak tuvalin tamamına.
- Üç eşit yatay panel (üstten alta), her biri beyaz kart + başlık 26pt + tek açıklama satırı 22pt:
  1. Panel başlık: `1 · Cevap vermez; devam ettirir.` — görsel: talimat+pasaj bloğunun sonunda yanıp söner gibi çizilmiş dikey imleç `▍`. Açıklama satırı **birebir**: `En olası devam, doğru kayıt olacak şekilde bir metin başlatıyoruz.`
  2. Panel başlık: `2 · Tartılı bakış.` — görsel: sağda mini JSON parçası (`"yıl": 13` ve `"tür": ANVETEN` satırları), solda pasajdan iki ifade (`سنة ثلاث عشرة`, `عنوة`); JSON satırlarından bu ifadelere 2px gri (#6B7280) düz çizgiler. Açıklama **birebir**: `Her kelimeyi yazarken bütün pasajı aynı anda tartar; işine yarayan ifadeler ağır basar.`
  3. Panel başlık: `3 · Üç kapı + kopya serbest.` — görsel: solda karalama gibi çok sayıda kapı (gri), sağda üç belirgin kapı üstlerinde `SULHAN · ANVETEN · KARMA`; ayrıca `delil` etiketinden pasaja dönen kehribar ok. Açıklama **birebir**: `Kapalı liste, ihtimalleri üç kapıya indirir. Delili ezberinden değil, önündekinden kopyalar — kopyalamak uydurmaktan daha olasıdır.`
- Slaytın en altında, alt bandın hemen üstünde 18pt gri sabit satır **birebir**: `Buna "anlamak" denir mi? Felsefenin sorusu. Bizim ölçtüğümüz: kısıtlanmış ve denetlenmiş davranış.`

**KONUŞMA:**
> "İlk yarıda görmüştük: bu makine soruya cevap vermez, metni *devam ettirir*. Bütün hüner, devamı doğru cevap olacak bir başlangıç kurmakta — aruz kalıbı verilmiş şaire mısra tamamlatmak gibi: kalıp doğruysa, olası mısra doğru mısradır. İkincisi: yazacağı her kelimede bütün pasajı aynı anda tartar; 'on üç' yazarken **سنة ثلاث عشرة** ağır basar, 'anveten' yazarken **عنوة**. Müfessir buna siyak-sibak der; burada aynı iş, mekanikleşmiş halde. Üçüncüsü: serbest bırakılsa bin kapıda kaybolur; kapalı sözlük kapıları üçe indirir. Ve delili ezberinden söylemesi yasak, önündekinden göstermesi serbest — kopyalamak uydurmaktan kolaydır, model kolaya gider; biz kolayı doğruya bağladık. Bu 'anlamak' mıdır? Felsefenin sorusu. Bizim işimiz davranışı ölçmek — ve yıl, başlıktan sayfalarca uzaktaysa bu tartının şaşabildiğini bilmek. Bekçiler o yüzden var; birazdan geliyorlar."

**GEÇİŞ:** "Ama sözüme güvenmeyin — içine kendiniz bakın."

---

## EKRAN 3b — KENDİ GÖZÜNÜZLE GÖRÜN (32:45 · 45 sn · şerit: 🟨)

**SLAYT TARİFİ:**
- Başlık: `Perde arkasını kendi gözünüzle görün`
- Üç eşit karo (yan yana), her biri: siteden alınmış gerçek ekran görüntüsü (sunumdan önce alınır) + altında 20pt ad ve 16pt gri adres:
  1. `LLM Görselleştirme — bbycroft.net/llm` (küçük bir GPT'nin üç boyutlu içi; katmanlar görünür kare)
  2. `Transformer Explainer — poloclub.github.io/transformer-explainer` (sonraki-kelime olasılık çubuklarının göründüğü kare)
  3. `Tokenizer deneyi — tiktokenizer.vercel.app` — **bu karoya, E1'deki Arapça cümle yapıştırılmış halde ekran görüntüsü alınır**; `عنوة` kelimesinin kaç renkli parçaya bölündüğü görünür olmalı.
- Karoların altında tek satır 20pt: `Model harf okumaz, parça okur — Arapça, İngilizceden daha çok parçaya bölünür.`
- Köşe notu 16pt gri: `Bağlantıların tamamı ve video anlatımlar (3Blue1Brown — Türkçe altyazılı) QR paketinde.`

**KONUŞMA:**
> "Bu şemalar benim çizimim; ama içeriye kendi gözünüzle de bakabilirsiniz — üç adres yeter. Birincisi küçük bir modelin üç boyutlu anatomisi: her katman, her sayı ekranda. İkincisi işin kalbini canlı gösterir: cümle yazarsınız, sonraki kelimenin olasılık çubuklarını izlersiniz — az önceki 'üç kapı' fikrinin ta kendisi. Üçüncüsü bizim cümlemiz: az önceki pasajı yapıştırdım; bakın **عنوة** kaç parçaya bölünüyor. Model harf okumaz, parça okur — ve Arapça, İngilizceden daha çok parçaya bölünür; dil eşitsizliğinin mühendislik kökeni buradadır. Adresler ve Türkçe altyazılı video anlatımlar paketinizde."

**GEÇİŞ:** "Şimdi çıktıya bakalım — ve çıktının yazıldığı dili tanıyalım."

---

## EKRAN 4 — ÇIKAR: JSON, VERİ SETİ VE KAYIT (33:30 · 75 sn · şerit: 🟨, delil satırında 🟩)

**SLAYT TARİFİ:**
- Başlık: `ÇIKAR — cümle değil, kayıt`
- Üstte iki tanım bandı (yan yana, açık gri zemin `#F3F4F6`, 22pt), metinler **birebir**:
  - `JSON: "etiket": değer çiftleriyle yazılmış kayıt biçimi — insan da okur, makine de. Düz metindir; özel program istemez.`
  - `VERİ SETİ: aynı şemadaki kayıtların toplamı. Bizimki: 226 kayıtlık tek dosya (eicd_baladhuri_validated.json) — makaleyle birlikte yayımlandı, çünkü veri seti de bir yayındır.`
- Orta: sol %60 beyaz kart (kehribar şerit) JetBrains Mono, **birebir**:
```
{
  "city_arabic": "عين التمر",
  "city_english": "ʿAyn al-Tamr",
  "year_ah": 13,
  "conquest_type": "SUBJUGATION",
  "commander_english": "Khālid ibn al-Walīd",
  "caliph_arabic": "أبو بكر",
  "evidence": ["فأتى عين التمر ففتحها عنوة"],
  "confidence": 0.9
}
```
  `evidence` satırının zemini açık kehribar; içindeki `عنوة` E1'dekiyle **aynı** yeşil çerçeveyle.
- Sağ %35 okuma sütunu (22pt): `Şehir: Ayn et-Temr · Hicrî yıl: 13 · Tür: ANVETEN (عنوة ile) · Komutan: Hâlid b. Velîd · Halife: Ebû Bekir · Delil: metinden aynen · Öz güven: 0,9`
- Alt not 16pt gri: `Alan adları, uluslararası yayın standardı gereği İngilizcedir; okuma sütunu yanındadır.`

**KONUŞMA:**
> "Çıktının diline bir dakika ayıralım, çünkü öğrencinin 'JSON' kelimesinden korkması için hiçbir sebep yok. JSON, etiketli çekmeceli bir dolap gibidir: her çekmecenin üstünde adı yazar — şehir, yıl, tür — içinde değeri durur. Düz metindir; Not Defteri'nde açılır, Excel'e dökülür. Bu çekmecelerden iki yüz yirmi altı tanesini üst üste koyunca ortaya **veri seti** çıkar: bizimki tek bir dosya ve makaleyle birlikte yayımlandı — çünkü veri seti de bir yayındır; makale okunur, veri seti kullanılır. Kaydın kendisine bakın: model bize cümle kurmadı, **iddia + delil çifti** üretti. Aynı **عنوة**, iki ekranda aynı renkte — çıktı, kaynağına iple bağlı. Kural: delili olmayan kayıt, bu hatta yok hükmündedir. Az sonra atölyede bu dolabın küçüğünü kendi elinizle dolduracaksınız."

**GEÇİŞ:** "Peki bu dolabın kalitesini ne belirler? Ve neden bu kadar titiziz?"

---

## EKRAN 5 — DOĞRULA: HATTIN DÖRT AŞAMASI, BEKÇİLER VE KALİTE ZİNCİRİ (34:45 · 105 sn · şerit: 🟦)

**SLAYT TARİFİ (iki katlı tek slayt ya da hızlı geçişli iki slayt):**
- **En üst — HATTIN DÖRT AŞAMASI şeridi** (dört kutu, aralarında ok, 20pt; fiil eşlemesi altlarında 16pt gri):
  `1 ÖN İŞLEME — metin ~2.000'er kelimelik örtüşen parçalara bölünür; her parçaya yıl bilgisi taşınır (bağlam penceresi sınırı)` →
  `2 ÇIKARIM — talimat + şema (İŞLE)` →
  `3 NORMALİZASYON — hemze/tâ-i merbûta imlâsı ve isim varyantları tekleştirilir (ÇIKAR)` →
  `4 DOĞRULAMA — bekçiler + mukabele (DOĞRULA)`
- **Üst kat — üç bekçi** (üç satır, başlarında küçük kalkan ikonu, 22pt):
  - `Kronoloji bekçisi — olay yılı × halife saltanatı × komutan vefatı çapraz kontrolü (21'de vefat eden Hâlid'e 25 yılı olay yazılamaz)`
  - `Yıl-bağlam enjeksiyonu — "sene on beş" başlığı sayfalar önce kalsa da her parçaya yıl bilgisi taşınır`
  - `Terim kilidi — صلح/عنوة sözlüğü hükmü serbest çağrışıma bırakmaz`
- **Orta — tablo** (dört satır):
  `TAM — kaynakta harfiyen bulundu | 79 | %35,0` · `KISMÎ — imlâ farkıyla bulundu | 128 | %56,6` · `BULUNAMADI — sonuçlara giremez | 19 | %8,4` · `Şehir adı kaynaktan doğrulandı | 207 | %91,6` (son satır kalın).
- **Alt kat — KALİTE ZİNCİRİ** (açık mavi zemin bandı, iki ok satırı + motto, metinler **birebir**):
  - `Modelin kalitesi ← eğitim verisinin kalitesi (internetin çöpü, modele siner)`
  - `Araştırmanın kalitesi ← veri setinin kalitesi (şema · delil · insan onayı · bağımsız sınav · sürüm)`
  - Motto, ortalı, 24pt: `Rivayet, râvisi kadar sağlamdır — veri de öyle.`

**KONUŞMA:**
> "Önce hattın resmî iskeleti: kitap bir seferde okunmaz — ikişer bin kelimelik, birbirine taşan parçalara bölünür ve her parçaya yıl bilgisi taşınır; çıkarımdan sonra imlâ ve isim varyantları tekleştirilir — birazdan göreceğiniz 'kısmî eşleşmelerin' sebebi de çözümü de bu normalizasyondur. Sonra mukabelenin sayıya dökülmüş hali: her kaydın delili kaynakta arandı — yüzde 35 harfiyen, yüzde 57 imlâ farkıyla; kısmî eşleşme hata değil, hemze ve tâ-i merbûta meselesidir. Yüzde 8 bulunamadı; o kayıtlar işaretli durur, sonuçlara girmez. Az önce tartının şaşabileceğini söylemiştim; bekçiler bunlar. Şimdi daha büyük soru: neden bu kadar titiziz? Çünkü kalite bir zincirdir ve iki yönde işler. Bir: bu modellerin kendisi veriyle eğitilir — internete dökülen çöp, yarının modeline siner; veri kalitesi, yapay zekânın gıdasıdır. İki: bizim ürettiğimiz veri seti de yarının araştırmalarının kaynağı olur — sizin haritanız, başkasının gazetteer'i. Onun için veri seti üretmek rivayet nakletmeye benzer: senedini ister — delil; tenkidini ister — bekçiler; mukayesesini ister — birazdan Yöntem durağında göreceğiniz bağımsız sınav; ve neşrini ister — sürüm numarasıyla yayın. Rivayet, râvisi kadar sağlamdır; veri de öyle. Zincir sizden sağlam devam etsin."

**GEÇİŞ:** "Peki 'Ayn et-Temr' kelimesi haritada bir noktaya nasıl dönüşüyor?"

---

## EKRAN 6 — KONUMLANDIR & ÇİZ: ADDAN NOKTAYA, KAYITTAN ŞEKLE (36:30 · 60 sn · şerit: 🟨→🟦)

**SLAYT TARİFİ:**
- Başlık: `KONUMLANDIR & ÇİZ — addan noktaya, kayıttan şekle`
- Sol %55 beyaz kart (mavi şerit), JetBrains Mono 20pt, **birebir**:
```
عين التمر  →  ʿAyn al-Tamr
  enlem: 32.47 · boylam: 43.62                    (WGS84)
  kaynak: el-Süreyyâ gazetteer'i (2.070 yer) + elle eklenen 451 yer
  bölge bekçisi: al-ʿIrāq sınır kutusu [29–37 K · 38–49 D] içinde? ✓
```
  Kart altı 18pt: `Modern harita servisleri "Tuleytula"yı bulamaz; 226 kaydın 226'sı tarihî gazetteer'le konumlandı — %100.`
- Sağ %40: üç adımlı yatay akış oku: `doğrulanmış JSON → çizim kodu (Python) → 1. şekil`; okun ucunda makaledeki haritanın küçük önizlemesi (E7'deki büyük görselin küçüğü). Alt satır 18pt: `Şekiller elle çizilmez; doğrulanmış veriden kodla üretilir — yeniden üretilebilir. Kod çıktısı da çıktıdır.`

**KONUŞMA:**
> "Modelin yazdığı şey bir isimdir. Noktaya dönüşmesi için tarihî bir coğrafya sözlüğü gerekir: el-Süreyyâ'nın iki bin küsur yeri, üstüne kendi eklediğimiz dört yüz elli bir yer — modern harita servisi Tuleytula'yı bulamaz; bu sözlükle iki yüz yirmi altı kaydın tamamı konumlandı. Her koordinat bir bekçiden daha geçer: bölgesinin sınır kutusuna düşüyor mu? Humus'u Hindistan'a atan eşleşme anında yakalanır. Şekillere gelince: haritayı elle çizmedik; doğrulanmış veriden kod üretti — o kodu da modele yazdırdık ve şekildeki sayıları tabloyla mukabele ettik, çünkü kod çıktısı da çıktıdır."

**GEÇİŞ:** "Bütün kayıtlar noktaya dönüşünce ortaya şu çıkıyor."

---

## EKRAN 7 — HARİTA: İLK BULGU (37:30 · 30 sn · şerit: 🟦)

**SLAYT TARİFİ:**
- Tam genişlik: makaledeki **1. şekil** (226 olay haritası); lejant büyütülmüş: `🟢 daire = sulhan · 🔴 kare = anveten · 🟡 üçgen = karma`. Başlık bandı: `İlk bulgu: desen coğrafîdir`

**KONUŞMA:**
> "Kayıtlar noktaya dönüşünce ilk bulgu haritanın kendisi: batının şehirli coğrafyasında yeşil çoğunlukta — antlaşma; doğunun dağlık direncinde kırmızı — kuvvet. Desen edebî değil, coğrafî. Ama harita, sofranın sadece ilk tabağı."

**GEÇİŞ:** "Aynı veri seti konuşmaya devam ediyor."

---

## EKRAN 8 — VERİ KONUŞUNCA (1): ZAMAN VE TÜR (38:00 · 60 sn · şerit: 🟦)

**SLAYT TARİFİ:**
- Sol %48: makaledeki **3. şeklin A paneli** (onyıllara göre fetih sayıları: 10'lar 95 · 20'ler 38 · 30'lar 42 · 40'lar 4 · 50'ler 27 · 60'lar 10 · 70'ler 0 · 80'ler 5 · 90'lar 4); üstüne Türkçe başlık bandı: `Onyıllara göre fetihler — Birinci Fitne'de (35–40 h.) hareket durma noktasında`
- Sağ %48: makaledeki **4. şekil** (pasta: `%52,2 sulhan · %42,5 anveten · %5,3 karma`); başlık bandı: `Fetihlerin yarıdan fazlası antlaşmayla`
- Alt sabit satır 1 (18pt, koyu): `Edebî kalıp olsaydı tekdüzelik beklerdik; desen coğrafya ve siyasetle değişiyor — Noth'un şema tezinin nicel sınaması.`
- Alt sabit satır 2 (16pt gri, **kayıt sigortası — asla çıkarılmaz**): `Bu şekiller, Belâzürî'nin Abbâsî dönemindeki hafızasının haritasıdır; 7. yüzyılın tutanağı değildir.`

**KONUŞMA:**
> "Şimdi sofra: aynı veri setinden şekiller. Onyıl grafiği: ilk yirmi yılda doksan beş fetih; Birinci Fitne'ye gelince dört — iç savaş, genişlemeyi durdurmuş. Veri, siyer bilgimizle el sıkışıyor; makine bize yeni bir tarih yazmıyor, bildiğimizi sayılabilir kılıyor. Pasta daha çarpıcı: fetihlerin yüzde elli iki'si antlaşmayla — 'kılıçla yayıldı' klişesinin veriyle imtihanı. İki ihtiyatı perdeden hiç indirmiyorum: bu, Belâzürî'nin Abbâsî döneminde derlenmiş hafızasının haritasıdır, yedinci yüzyılın tutanağı değil; ve Noth'un meşhur sorusu tam burada sınanıyor — anlatılar edebî kalıptan ibaret olsaydı tekdüzelik beklerdik; oysa desen coğrafyayla, şehirleşmeyle, dirençle değişiyor."

**GEÇİŞ:** "Veri kişilere inince daha da konuşkan."

---

## EKRAN 9 — VERİ KONUŞUNCA (2): KİŞİLER, MALÎ İZ, KIRILGANLIK (39:00 · 75 sn · şerit: 🟦)

**SLAYT TARİFİ:**
- Sol %48: makaledeki **6. şekil** (en çok fetih kaydedilen 10 komutan: İyâd b. Ganm 21 · Hâlid b. Velîd 14 · Habîb b. Mesleme 14 · Muhammed b. Kâsım 12 · Amr b. el-Âs 10 …); başlık bandı: `Komutan profilleri — prosopografinin sayısal hali`. Altında iki satır 18pt: `Ebû Ubeyde: sulh ağırlıklı — "Emînü'l-ümme" lakabıyla verinin el sıkışması` · `Hâlid: dengeli profil — "Seyfullah" imgesinden daha müzakereci`
- Sağ üst kutu (%48, açık zemin), başlık `Malî iz (5. tablo)`, metin **birebir**: `Antlaşma kayıtlarının %77'si malî şart taşıyor (cizye · harâc · sulh şablonları); kuvvet kayıtlarında %8. Çünkü antlaşma şartları bağlayıcıdır — kaydedilir. Buna "idarî gerçekçilik" diyoruz.`
- Sağ alt kutu, kırmızı ince çerçeve, başlık `Kırılganlık`, metin **birebir**: `Şehirlerin ~%70'i tek kaynakta geçiyor. Belâzürî kaybolsaydı, bu bilgiler kaybolurdu. Sayısallaştırma lüks değil; sigortadır.`

**KONUŞMA:**
> "Kişilere inelim: İyâd b. Ganm yirmi bir fetihle başta ve kayıtlarının çoğu antlaşma; Hâlid b. Velîd'in profili şaşırtıcı biçimde dengeli — 'Seyfullah' imgesinden daha müzakereci; Ebû Ubeyde'ninki sulh ağırlıklı — 'Emînü'l-ümme' lakabıyla verinin el sıkıştığı an. Tabakât edebiyatının yaptığını sayılarla yapıyoruz: buna sayısal prosopografi deniyor. Malî çapraz tablo daha da konuşkan: antlaşma kayıtlarının yüzde yetmiş yedisi cizye-harâc şartı taşıyor, kuvvet kayıtlarında bu oran yüzde sekiz — çünkü antlaşma şartı bağlayıcıdır, devlet onu kaydeder; idarî gerçekçilik dediğimiz bulgu bu. Ve son bulgu bir uyarı: şehirlerin yaklaşık yüzde yetmişi tek kaynakta geçiyor. Belâzürî kaybolsaydı, bu bilgiler onunla giderdi. Sayısallaştırma lüks değil; mirasın sigortasıdır."

**GEÇİŞ:** "Bu sofra kurulabiliyorsa, sizin de kurabileceğiniz küçük bir masa var."

---

## EKRAN 10 — MİNYATÜR DAVETİ (40:15 · 30 sn · şerit: 🟩🟨🟦)

**SLAYT TARİFİ:**
- Merkezde tek kutu, başlık `SİZİN MİNYATÜRÜNÜZ`, 24pt, **birebir**:
```
1  BUL      → Mısır-Mağrib bölümünü indir (7.132 kelime)
2  İŞLE     → perdedeki talimatın aynısını yapıştır
3  ÇIKAR    → ~11 olaylık JSON → tablo
4  DOĞRULA  → her delili Ctrl+F ile mukabele et
5  HARİTALA → Google MyMaps
   ~90 dakika · kurulum yok · ücretsiz katman yeter
   Paket: metin + talimat + cevap anahtarı → [kısa adres] · QR
```

**KONUŞMA:**
> "Bu haritanın ve bu şekillerin çekirdeği bir hafta sonunuza sığar: aynı kitabın Mısır bölümü, perdedeki talimatın birebir aynısı ve kendinizi sınamanız için cevap anahtarı — hepsi şu adreste. Kurulum yok; sohbet ekranı ve dikkat yeter."

---

## E11 — ÇIKIŞ CEP SLAYTI (40:45 · 15 sn)

**SLAYT TARİFİ:** Tek merkez kart, ekran görüntüsü alınmak üzere; **birebir**:
```
DÖRT FİİL:   BUL → İŞLE → ÇIKAR → DOĞRULA
İKİ YASAK:   1) Modele "korpusta ne var?" diye sorulmaz.
             2) Doğrulanmamış çıktı kullanılmaz.
────────────────────────────────────────────
ÜRET (kendin) • DOĞRULA (dışarıda) • BEYAN ET
```

**KONUŞMA:**
> "Atölyenin tamamı bu karede. Şimdi bu dört fiili bir öğrencinin gerçek ödevine giydirelim."
*(→ Durak 6: Akademik iş akışı, dk 41)*

---

## ZAMAN BEKÇİSİ

| Saat | Ekran |
|---|---|
| 29:00 | E0 köprü |
| 29:15 | E1 Bul |
| 30:00 | E2 Talimat |
| 31:00 | E3 Perde arkası *(esnek)* |
| 32:45 | E3b Kendi gözünüzle görün *(esnek)* |
| 33:30 | E4 JSON · veri seti · kayıt |
| 34:45 | E5 Dört aşama + bekçiler + kalite |
| 36:30 | E6 Konumlandır & çiz *(esnek)* |
| 37:30 | E7 Harita: ilk bulgu |
| 38:00 | E8 Veri konuşunca 1 — zaman & tür |
| 39:00 | E9 Veri konuşunca 2 — kişiler & malî iz & kırılganlık *(esnek)* |
| 40:15 | E10 Minyatür daveti |
| 40:45 | E11 cep slaytı |
| 41:00 | çıkış → Durak 6 |

**Taşma merdiveni (sırayla):** E3'ün 3. paneli sözlü tek cümleye iner (−30 sn) → E3b tek karoya (tokenizer) iner (−20 sn) → E9'un kırılganlık kutusu sözlü tek cümleye iner (−25 sn) → E6'nın sağ bloğu tek cümleye iner (−20 sn). **Kennedy karşılaştırması bu atölyede değildir** — kalıcı yeri Yöntem durağıdır (dk 45:00'ten sonra).

---

## PRODÜKSİYON KONTROL LİSTESİ

- [ ] On iki slayt statik PNG olarak dışa aktarıldı (canlı hiçbir şey yok)
- [ ] Makale şekilleri (1 · 3A · 4 · 6) PDF'ten yüksek çözünürlükte alındı; Türkçe başlık bantları eklendi; eksen ve sayılar aynen korundu
- [ ] E8'deki "Abbâsî hafızasının haritası; 7. yüzyılın tutanağı değil" sigorta satırı slaytta görünür ve hiçbir sürümde çıkarılmıyor
- [ ] «KONUŞMA» metinleri slayt yüzeyine DEĞİL, konuşmacı notu alanına kondu
- [ ] **Perdedeki talimat = öğrenci paketindeki talimat** (tek fark: {metin} yer tutucusu; gerisi kelime kelime aynı — fark kontrolü yapıldı)
- [ ] Arapça metinler birebir kopyalandı; Amiri gömülü; RTL hizalı; telefon testi geçti
- [ ] `عنوة` çerçevesi E1 ve E4'te piksel piksel aynı renk/kalınlık
- [ ] E3 bağ çizgileri: yıl→سنة ثلاث عشرة · tür→عنوة (ince gri, aynı stil)
- [ ] E3b ekran görüntüleri sunum haftasında tazelendi; tokenizer karesinde E1 cümlesi ve عنوة parçaları net görünüyor; üç adres doğru yazıldı
- [ ] E4 tanım bantlarındaki dosya adı doğru: eicd_baladhuri_validated.json
- [ ] E6 gazetteer kaydı GEOCODING_DATA v5.0'ın gerçek satırları (32.47 / 43.62) — temsilî sayı yok
- [ ] E6 önizleme ile E7 büyük harita aynı görselin iki boyutu
- [ ] Harita lejantında biçim farkı (daire/kare/üçgen) net — renk körlüğü güvenli
- [ ] YouTube açıklamasına bölüm işareti: `29:00 — Korpus × LLM Atölyesi`
- [ ] config.yaml, API anahtarı ve ham hat dosyaları hiçbir ekranda ve pakette yok (anahtar iptal edildi mi? ✔ işaretlenmeden yayın yok)

## KÜNYE NOTLARI
- Gökalp, H. & Çetinkaya, A. (2026). *EICD-B*. Digital Scholarship in the Humanities. doi:10.1093/llc/fqag093 · OpenITI 2025.1.9 (30 Aralık 2025) · Belâzürî, *Fütûhu'l-Büldân*, de Goeje neşri (Leiden 1866).
- Coğrafî sözlük: el-Süreyyâ (Romanov & Seydi 2019; 2.070 yer) + EICD elle eklemeleri (451 yer); bölge sınır kutuları REGIONS v5.0; %100 konumlandırma, makalenin 4.2 bölümünden.
- Görsel-anlatım siteleri (E3b + QR): bbycroft.net/llm · poloclub.github.io/transformer-explainer · tiktokenizer.vercel.app · jalammar.github.io (Illustrated Transformer) · 3Blue1Brown "But what is a GPT?" (Türkçe altyazı) · ig.ft.com/generative-ai — bağlantılar sunum haftasında kontrol edilir.
- **Çeviri dürüstlüğü:** Yayındaki talimat İngilizcedir; perdede ve pakette gösterilen, sadık Türkçesidir.
- Ekran verileri (35,0/56,6/8,4/91,6 · 226 · %100 · 2.070+451) makale ve hat dosyalarından. Bulgular ekranları: onyıl sayıları ve %52,2/%42,5/%5,3 → makale 3A ve 4. şekil; komutan sayıları → 6. şekil; %77/%8 malî iz → 5. tablo; ~%70 tek-kaynak → makalenin tartışma bölümü (geniş EICD projesi bulgusu, %69,5); Kennedy (22/18/16) Yöntem durağında. Sahnede bu listede olmayan sayı söylenmez.
