# kaynak/ — şablonlar ve derleyiciler

`index.html` ve `kutuphane.html` **elle düzenlenmez**; buradaki şablonlardan
üretilir. Doğrudan düzenlersen ilk derlemede kaybolur.

## Neden burada
17.08.2026'ya kadar şablonlar ve `build.py` geçici klasörde (`/private/tmp/…`)
duruyordu. Sistem gece temizliğinde `build.py`'yi sildi; şablonlar kıl payı
kurtuldu. Tek kopyayı geçici klasörde tutmak buydu — artık depoda.

## Derleme sırası
```bash
python3 kaynak/build_lib.py    # kutuphane.html
python3 kaynak/build.py        # index.html
python3 kaynak/build_i18n.py   # en/*.html + dil düğmesi + kapsam rozeti
```
Üçü de diske yazmadan önce `node --check` ile üretilen JS'i denetler;
geçersizse **yazmaz**.

## Veri sabitleri nereden geliyor
`build.py` ve `build_lib.py`, şablondaki `/*__IBB__*/`, `/*__EXCERPT__*/`,
`/*__LIBSUM__*/`, `/*__SAMPLE__*/`, `/*__SITE__*/`, `/*__FUTUH__*/`
işaretçilerini **bir önceki derlemeden** okuyup yerine koyar. Kaynak veriler
değişmediği için bu güvenli; şablon değişse de üretim kırılmaz.

## Tuzaklar
- **Sayfada kendi `</body>` etiketi yok.** Tek `</body>` dizgesi
  `tekSayfaHtml()` içindeydi ve enjeksiyon yapan betikler onu belgenin sonu
  sanıp kodu ortadan böldü. Şablonda kapanış `'</bo'+'dy></html>'` diye
  bölünmüş, `build_i18n` de script blokları dışındaki son `</body>`'ye bakıyor.
- **`kutuphane.html` kendi üzerine yazılır** (hem girdi hem çıktı). Buraya
  koşulsuz ekleme yapan her satır her derlemede bir kopya daha bırakır —
  dil düğmesi CSS'i böyle 9 kopyaya çıkmıştı. Ekleme yapmadan önce
  "zaten var mı" diye bak.
- `olcek.py` tipografi ölçeğini yeniden oturtur; şablona bir kez uygulandı,
  tekrar çalıştırmak gerekmez.
