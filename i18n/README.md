# İki dilli üretim (TR → EN)

Kaynak dil **Türkçe**. İngilizce sayfalar `en/` altında, derlenmiş Türkçe
HTML'den **üretilir** — elle tutulan ikinci bir kopya yoktur.

## Nasıl çalışır
1. `../index.html` ve `../kutuphane.html` her zamanki gibi derlenir (Türkçe).
2. `build_i18n.py` bu iki dosyayı okur ve `tr-en.json` sözlüğünü uygular:
   - HTML metin düğümleri (`>...<`)
   - öznitelikler (`title`, `placeholder`, `aria-label`, `alt`, `content`, `summary`)
   - `<script>` içindeki dizge sabitleri
   Her değişiklik **tam dizge eşleşmesidir**; parça eşleşmesi yapılmaz, bu
   yüzden HTML/JS bozulmaz.
3. Çıktı: `../en/index.html`, `../en/kutuphane.html` (`lang="en"`, `/en/`
   içi bağlantılar yeniden yazılır) ve iki dilde de gezinme çubuğuna
   TR ⇄ EN düğmesi (tıklarken hash korunur, seçim localStorage'a yazılır).
4. `rapor.json`: her sayfa için **kapsam yüzdesi** ve çevrilmemiş dizge
   örnekleri. Payda kasten geniş tutulur (aksansız Türkçe de aday sayılır,
   bazı İngilizce/teknik dizgeler de paydaya girer) — böylece rakam
   olduğundan iyi görünmez.

## Çalıştırma
    python3 build_i18n.py

## Çeviri ekleme
`tr-en.json` dosyasına `"türkçe dizge": "english string"` çifti ekleyip
yeniden çalıştırmak yeterlidir. Türkçe dizge, kaynak dosyadaki hâliyle
**birebir** aynı olmalıdır (kırpma yapılır, iç boşluklar korunur).

## İki sert kural (ikisi de hatadan öğrenildi)

1. **Sözlük değeri, JS dizge sabitinin GÖVDESİDİR ve aynen yazılır.**
   Üretici hiçbir kaçış eklemez. Kaynak dizgede `\n` ya da `\"` varsa,
   çeviride de aynen olmalıdır. (Önce ters bölüyü ikiye katlıyorduk;
   sonuç: metinde harfiyen görünen `\n`.)
2. **İndeksle çeviri eklerken listeyi DAİMA `ekle.liste()` üretir.**
   Bir keresinde döküm ile uygulama farklı filtre kullandı, indeksler
   kaydı ve yer adları alâkasız cümlelerle değişti. Tek kaynak şart.

## Güvenlik kapısı
`build_i18n.py` üretilen EN dosyasının `<script>` bloklarını **yazmadan
önce** `node --check` ile denetler. Geçersizse dosya yazılmaz, hata
basılır. Bu kapı bilerek bozuk bir kayıtla sınandı ve çalıştığı görüldü.

## Durum şeridi (dürüst durum ilkesi)
Çeviri %100 olmadığı sürece `build_i18n.py`, EN sayfaların en üstüne bir
şerit koyar: *"This English edition is a work in progress: %N of the text
has been translated so far."* Yüzde her derlemede yeniden hesaplanır, bu
yüzden bayatlamaz; kapsam %99,5'i geçtiğinde şerit kendiliğinden kaybolur.

Gerekçe: sitenin dördüncü ilkesi "bitmemiş iş bitmiş gibi sunulmaz". Yarım
çeviriyi sessizce yayımlamak o ilkeyi çiğnerdi.

## Kaldığı yer (2026-08-12)
- index.html    %48,5 — kalan ~1.016 dizge / ~6.800 kelime
- kutuphane.html %15,9 — kalan ~1.587 dizge / ~22.000 kelime (çoğu 101
  kaynak künyesi ve Tezgâh)
Devam ederken: `python3 i18n/ekle.py` içindeki `liste()` tek kaynaktır;
dökümü ve uygulamayı DAİMA ondan al (indeks kayması hatası buradan doğmuştu).
