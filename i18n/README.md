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
