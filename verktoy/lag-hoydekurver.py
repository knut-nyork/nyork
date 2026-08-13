"""Genererer et hoydekurve-monster som SVG, i samme format som treaarene.

Feltet bygges av noen faa gaussiske hauger, som gir myke, konsentriske kurver
slik et ekte kart ser ut. Iso-linjene trekkes ut med marching squares.
Fast seed, saa filen blir lik hver gang den regenereres.
"""
import math, random

B, H = 1555, 839          # samme viewBox som monster-trearer.svg
NX, NY = 190, 105         # ruteneett
NIVAER = 22               # antall hoydekurver
SEED = 7

random.seed(SEED)

# Hauger og forsenkninger. Blanding av stoerrelser gir bade store, rolige
# omraader og noen tette parti, som i ekte terreng.
hauger = []
for _ in range(14):
    hauger.append((
        random.uniform(-0.15, 1.15) * NX,
        random.uniform(-0.15, 1.15) * NY,
        random.uniform(0.18, 0.62) * NX,
        random.uniform(-1.0, 1.0),
    ))

def hoyde(x, y):
    s = 0.0
    for cx, cy, r, vekt in hauger:
        d2 = ((x - cx) ** 2 + (y - cy) ** 2) / (r * r)
        s += vekt * math.exp(-d2)
    # svak boelge, saa kurvene ikke blir for sirkulaere
    s += 0.18 * math.sin(x / NX * 3.1) * math.cos(y / NY * 2.3)
    return s

felt = [[hoyde(x, y) for x in range(NX + 1)] for y in range(NY + 1)]
lav = min(min(rad) for rad in felt)
hoy = max(max(rad) for rad in felt)

def interp(p1, v1, p2, v2, niva):
    t = 0.5 if v1 == v2 else (niva - v1) / (v2 - v1)
    return (p1[0] + t * (p2[0] - p1[0]), p1[1] + t * (p2[1] - p1[1]))

def segmenter(niva):
    ut = []
    for y in range(NY):
        for x in range(NX):
            hj = [(x, y), (x + 1, y), (x + 1, y + 1), (x, y + 1)]
            v = [felt[y][x], felt[y][x + 1], felt[y + 1][x + 1], felt[y + 1][x]]
            kode = sum((1 << i) for i in range(4) if v[i] > niva)
            if kode in (0, 15):
                continue
            kanter = []
            for i in range(4):
                j = (i + 1) % 4
                if (v[i] > niva) != (v[j] > niva):
                    kanter.append(interp(hj[i], v[i], hj[j], v[j], niva))
            for i in range(0, len(kanter) - 1, 2):
                ut.append((kanter[i], kanter[i + 1]))
    return ut

def kjed(segs):
    """Syr segmentene sammen til sammenhengende linjer."""
    from collections import defaultdict
    naboer = defaultdict(list)
    def nokkel(p):
        return (round(p[0], 4), round(p[1], 4))
    for a, b in segs:
        naboer[nokkel(a)].append(b)
        naboer[nokkel(b)].append(a)
    brukt, linjer = set(), []
    for a, b in segs:
        if (nokkel(a), nokkel(b)) in brukt or (nokkel(b), nokkel(a)) in brukt:
            continue
        linje = [a, b]
        brukt.add((nokkel(a), nokkel(b)))
        for _ in range(2):
            while True:
                ende = linje[-1]
                neste = None
                for kand in naboer[nokkel(ende)]:
                    par = (nokkel(ende), nokkel(kand))
                    if par not in brukt and (par[1], par[0]) not in brukt:
                        neste = kand
                        break
                if neste is None:
                    break
                brukt.add((nokkel(ende), nokkel(neste)))
                linje.append(neste)
            linje.reverse()
        if len(linje) > 6:
            linjer.append(linje)
    return linjer

def glatt(punkter):
    """Catmull-Rom til bezier, saa kurvene blir myke og ikke kantete."""
    if len(punkter) < 4:
        return None
    sx, sy = B / NX, H / NY
    p = [(x * sx, y * sy) for x, y in punkter]
    d = [f"M{p[0][0]:.0f} {p[0][1]:.0f}"]
    for i in range(len(p) - 1):
        p0 = p[i - 1] if i > 0 else p[i]
        p1, p2 = p[i], p[i + 1]
        p3 = p[i + 2] if i + 2 < len(p) else p2
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d.append(f"C{c1[0]:.0f} {c1[1]:.0f} {c2[0]:.0f} {c2[1]:.0f} {p2[0]:.0f} {p2[1]:.0f}")
    return "".join(d)

baner = []
for i in range(1, NIVAER):
    niva = lav + (hoy - lav) * i / NIVAER
    for linje in kjed(segmenter(niva)):
        d = glatt(linje)
        if d:
            baner.append(d)

svg = (
    f'<svg xmlns="http://www.w3.org/2000/svg" width="{B}" height="{H}" '
    f'viewBox="0 0 {B} {H}" fill="none">'
    f'<g stroke="#000" stroke-width="2.2" stroke-linecap="round" fill="none">'
    + "".join(f'<path d="{d}"/>' for d in baner)
    + "</g></svg>"
)

with open("monster-hoydekurver.svg", "w") as f:
    f.write(svg)

print(f"{len(baner)} kurver, {len(svg)/1024:.1f} kB")
