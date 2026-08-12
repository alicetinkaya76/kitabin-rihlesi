# -*- coding: utf-8 -*-
"""TR→EN iki dilli üretim altyapısı.

Tasarım kararı: kaynak dil Türkçe kalır. İngilizce sayfalar, DERLENMİŞ Türkçe
HTML üzerinde SÖZLÜK TABANLI ve BAĞLAM FARKINDA bir yeniden yazımla üretilir.
Naif str.replace KULLANILMAZ; çünkü kısa bir dizge başka bir dizgenin parçası
olabilir ve HTML/JS'i bozar. Bunun yerine üç ayrı geçiş yapılır:
  1) HTML metin düğümleri  (>...<)  — düğümün TAMAMI eşleşirse değişir
  2) öznitelik değerleri            — değerin TAMAMI eşleşirse değişir
  3) JS dizge sabitleri             — sabitin TAMAMI eşleşirse değişir
Böylece her değişiklik tam-dizge eşleşmesidir; parça eşleşmesi imkânsızdır.
"""
import io,re,json,os,unicodedata

TRHARF=set("çğıöşüÇĞİÖŞÜ")
TRKEL=re.compile(r"\b(bir|bu|ve|için|ile|olarak|değil|nedir|nasıl|var|yok|daha|çok|"
                 r"kaç|hangi|kendi|sonra|önce|gibi|ama|her|tek|iki|üç|dört|beş|senin|"
                 r"sende|kadar|üzerine|arasında|hem|ya|de|da|mi|mı|mu|mü)\b",re.I)

EN_GUVENLI=re.compile(r"^(?:[A-Za-z0-9 .,:;()\[\]/&+#'\"-]|\s)+$")
# İngilizceye çevrilmiş dizgeleri tekrar aday saymamak için sözlüğün DEĞERLERİ
# dışarıdan verilebilir; verilmezse latin-only kısa teknik dizgeler elenir.
TEKNIK=re.compile(r"^(?:https?://|www\.|[#.][a-z-]+$|[a-z]+[A-Z][a-zA-Z]*$|[a-z_]+\(|\d+(px|rem|em|%)|var\(|rgba?\()")

def cevrilebilir(s, ceviriler=None):
    """Çevrilebilir aday mı? Aksansız Türkçeyi de yakalar (eski sürüm
    '1 Temeller', '4 Dene' gibi dizgeleri kaçırıyordu ve kapsam paydasını
    olduğundan küçük gösteriyordu)."""
    t=s.strip()
    if len(t)<3: return False
    if not re.search(r"[A-Za-zÇĞİÖŞÜçğıöşü]",t): return False
    if re.fullmatch(r"[\s\d.,:;·×%/–—+-]+",t): return False
    if TEKNIK.match(t): return False
    if ceviriler and t in ceviriler: return False   # zaten İngilizce
    return True

def script_araliklari(s):
    """(baslangic,bitis) — src'siz <script> gövdeleri."""
    return [(m.start(1),m.end(1)) for m in re.finditer(r"<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>",s,re.S)]

def icinde(i,araliklar):
    return any(a<=i<b for a,b in araliklar)

# ---------------------------------------------------------------- çıkarım
def anahtar_mi(govde,son):
    """Kapanış tırnağından sonra ':' geliyorsa bu bir JSON/obje anahtarıdır."""
    i=son
    while i<len(govde) and govde[i] in " \t": i+=1
    return i<len(govde) and govde[i]==":"

def cikar(s, ceviriler=None):
    """Çevrilebilir aday dizgeleri (tür, metin) olarak döndürür."""
    sc=script_araliklari(s)
    st=[(m.start(1),m.end(1)) for m in re.finditer(r"<style[^>]*>(.*?)</style>",s,re.S)]
    adaylar=[]
    for m in re.finditer(r">([^<>]+)<",s):
        if icinde(m.start(1),sc) or icinde(m.start(1),st): continue
        if cevrilebilir(m.group(1),ceviriler): adaylar.append(("metin",m.group(1)))
    for m in re.finditer(r'\b(title|placeholder|aria-label|alt|content|summary|src)="([^"]*)"',s):
        if icinde(m.start(2),sc): continue
        if cevrilebilir(m.group(2),ceviriler): adaylar.append(("oznitelik",m.group(2)))
    for a,b in sc:
        govde=s[a:b]
        for m in re.finditer(r'"((?:[^"\\\n]|\\.)*)"',govde):
            if anahtar_mi(govde,m.end()): continue      # JSON anahtarı — çevrilmez
            if cevrilebilir(m.group(1),ceviriler): adaylar.append(("js2",m.group(1)))
        for m in re.finditer(r"'((?:[^'\\\n]|\\.)*)'",govde):
            if anahtar_mi(govde,m.end()): continue
            if cevrilebilir(m.group(1),ceviriler): adaylar.append(("js1",m.group(1)))
    return adaylar

# ---------------------------------------------------------------- yeniden yazım
def cevir(s, sozluk):
    """Sözlükteki TAM eşleşmeleri İngilizceyle değiştirir; (yeni_metin, sayac)."""
    sc=script_araliklari(s); st=[(m.start(1),m.end(1)) for m in re.finditer(r"<style[^>]*>(.*?)</style>",s,re.S)]
    sayac={"metin":0,"oznitelik":0,"js":0}
    def m_metin(m):
        if icinde(m.start(1),sc) or icinde(m.start(1),st): return m.group(0)
        t=m.group(1)
        for aday in (t, t.strip()):
            if aday in sozluk:
                sayac["metin"]+=1
                bas=t[:len(t)-len(t.lstrip())]; son=t[len(t.rstrip()):]
                return ">"+bas+sozluk[aday]+son+"<"
        return m.group(0)
    s2=re.sub(r">([^<>]+)<", m_metin, s)
    # öznitelikler ve JS için konumlar değişti; yeniden hesapla
    sc=script_araliklari(s2)
    def m_oz(m):
        if icinde(m.start(2),sc): return m.group(0)
        v=m.group(2)
        if v in sozluk:
            sayac["oznitelik"]+=1
            return m.group(1)+'="'+sozluk[v].replace('"',"&quot;")+'"'
        return m.group(0)
    s3=re.sub(r'\b(title|placeholder|aria-label|alt|content|summary|src)="([^"]*)"', m_oz, s2)
    sc=script_araliklari(s3)
    parcalar=[]; son=0
    for a,b in sc:
        parcalar.append(s3[son:a]); govde=s3[a:b]
        def m2(m):
            v=m.group(1)
            if v in sozluk:
                sayac["js"]+=1
                # ters bölü KAÇIRILMAZ: çeviri zaten JS sabitine yazılmak üzere
                # yazıldı, içindeki \n gibi diziler kasıtlıdır. Yalnız sınırlayıcı
                # tırnak kaçırılır.
                return '"'+sozluk[v]+'"'
            return m.group(0)
        def m1(m):
            v=m.group(1)
            if v in sozluk:
                sayac["js"]+=1
                return "'"+sozluk[v]+"'"
            return m.group(0)
        govde=re.sub(r'"((?:[^"\\\n]|\\.)*)"', m2, govde)
        govde=re.sub(r"'((?:[^'\\\n]|\\.)*)'", m1, govde)
        parcalar.append(govde); son=b
    parcalar.append(s3[son:])
    return "".join(parcalar), sayac

def kapsam(s, ceviriler=None):
    """Kalan Türkçe adayları (tekil) döndürür — dürüst kapsam raporu için."""
    return sorted({t.strip() for _,t in cikar(s,ceviriler)}, key=lambda x:-len(x))
