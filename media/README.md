# media/

Alle bilder, tegninger og video for nyork.no samlet på ett sted. Dette er **kildefiler i full oppløsning** — ikke det som serveres til besøkende.

## Mapper

| Mappe | Innhold | Committes? |
|---|---|---|
| `merkevare/` | Logo, logotyper, mønster | **Ja** — brukes i kode |
| `foto/drone/` | Dronebilder av feltet og dalen | Nei |
| `foto/omradet/` | Hemsedal, natur, aktiviteter | Nei |
| `foto/hytter/` | Hytter, interiør, eksteriør | Nei |
| `foto/historisk/` | Hans Gudes maleri fra 1897 m.m. | Nei |
| `tegninger/` | Situasjonsplan, plantegninger, fasader | **Ja** — små vektorfiler |
| `video/` | Bakgrunnsvideo til forsiden | Nei |

## Hvorfor er fotografiene gitignorert

Fotografiene her er originaler — `dji_0479.jpg` er alene 15 MB. Committes de, ligger de i git-historikken for alltid og gjør repoet tregt å klone, uten at noen har nytte av det.

**Produksjonsbilder kommer fra Sanity.** Der får redaktørene lastet dem opp, satt alt-tekst og fotokreditt, og Sanity leverer riktig størrelse og format til hver skjerm. Denne mappa er arbeidsbenken før opplasting, ikke leveransen.

Unntaket er merkevare og tegninger: de brukes direkte i kode, endrer seg nesten aldri, og er små.

## Regler

- **Filnavn:** små bokstaver, bindestrek, ingen æøå eller mellomrom
- **Ingen bilder herfra rett inn i en komponent** — bruk Sanity, eller `src/assets/` hvis det er merkevare
- Alt-tekst og fotokreditt hører hjemme i Sanity, ikke i filnavnet

## Rettigheter må avklares

Bildene fra salgsoppgaven er tatt av åtte navngitte fotografer, og 3D-visualiseringene er fra 3D ESTATE AS. Rettighetene ble kjøpt for en brosjyre i 2022 — bruk på ny nettside er ikke automatisk dekket. Avklar før publisering.

Maleriet `hans-gude-hemsedal-1897.jpg` er falt i det fri (Hans Gude døde i 1903).

## Originalene

Kildefilene ligger også i `../../Kunnskap/` med sine opprinnelige navn. Den mappa er arkivet — denne er den ryddede versjonen.
