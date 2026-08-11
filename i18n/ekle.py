# -*- coding: utf-8 -*-
"""Kalan adayları indeksle; çeviriyi indeks üzerinden ekle (kaçış sorunu yok)."""
import sys,io,json,re,os
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
import i18n_lib as L
R=os.path.expanduser("~/Desktop/rihle2026/")

def liste(dosya="en/index.html"):
    """TEK kaynak: hem döküm hem uygulama bunu kullanır."""
    s=io.open(R+dosya,encoding="utf-8").read()
    soz=json.load(io.open(R+"i18n/tr-en.json",encoding="utf-8"))
    a=L.cikar(s,set(soz.values()))
    g=[];se=set()
    for tur,t in a:
        t=t.strip()
        if t in se or not tur.startswith("js"): continue
        if re.match(r"^[M0-9'\"+ .]",t) or t.startswith("<div") or t.startswith("</") or "var(--" in t[:30] or "esc(" in t: continue
        if len(t.split())<4 and len(t)<=28: continue
        if re.search(r"[؀-ۿ]{20,}",t): continue
        se.add(t); g.append(t)
    return g

def uygula(ciftler, dosya="en/index.html"):
    g=liste(dosya)
    P=R+"i18n/tr-en.json"; d=json.load(io.open(P,encoding="utf-8"))
    n=0
    for i,en in ciftler:
        if i<len(g):
            d[g[i]]=en; n+=1
    io.open(P,"w",encoding="utf-8").write(json.dumps(d,ensure_ascii=False,indent=1,sort_keys=True))
    return n,len(d)
