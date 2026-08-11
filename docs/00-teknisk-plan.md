# Nyørk.no — teknisk plan for ny nettside

*Utkast v1 · 11. august 2026 · til intern beslutning*

---

## Kort oppsummert

**Anbefalt oppsett:** Astro (frontend) + Sanity (CMS) + Netlify (hosting) + GitHub (kode).

**Kostnad:** ca. **200–400 kr/mnd**, godt innenfor rammen på 500 kr.

**Hvorfor dette:** Nyørk.no er en salgsside — bilde- og videotung, må rangere godt på Google, må lastes raskt på mobil i fjellet. Den har lite «app-logikk». Da er en statisk generert side med et hodeløst CMS riktig verktøy. Astro er dessuten enkelt for Claude Code å jobbe i, fordi filstrukturen er forutsigbar og komponentene kan mappes 1:1 mot Figma.

---

## 1. Hva vi bygger

Kartlagt fra dagens side (Webflow, laget av Fortress.no):

| Side | Innhold | Redigeres i CMS? |
|---|---|---|
| Forside | Hero med video, utvalgte seksjoner | Delvis (tall, priser, tekstpuljer) |
| Om prosjektet | Redaksjonell, bildetung | Delvis |
| Hyttevelger | Interaktiv oversikt over hytter | **Ja** — status, pris, BRA, plantegning |
| Tomter | Tomteliste/kart | **Ja** — samme datamodell |
| Området | Redaksjonell, aktiviteter | Delvis |
| Galleri | Bildegalleri | **Ja** |
| Siste nytt | Nyhetsartikler | **Ja** |
| Finansiering | Redaksjonell | Delvis |
| Megler | Meglerkort (EIE Fjellmegleren, Victoria Follesø) | **Ja** |
| Utbygger | Om Trøym-familien, visjon | Delvis |
| Personvern | Juridisk tekst | **Ja** |
| Meld interesse | Skjema, ligger på alle sider | Nei (kode) |

> **Merk:** Dagens `/utbygger`-side har lorem ipsum liggende i produksjon («Overskrift / Praesent lacinia arcu tellus…»). Lett gevinst å fikse ved lansering.

**Språk:** norsk + engelsk fra dag én. Dette må bygges inn fra start — det er dyrt å ettermontere.

---

## 2. Anbefalt stack

### Frontend: Astro 5 + Tailwind CSS

**Hvorfor Astro og ikke Next.js/WordPress:**

- Sender **null JavaScript** til nettleseren som standard. En hyttekjøper som scroller på mobil med dårlig dekning får siden opp med én gang. Dette teller også direkte på Google-rangering.
- Innebygd bildeoptimalisering (WebP/AVIF, riktige størrelser) — kritisk når siden er så bildetung.
- Innebygd flerspråk-ruting (`/om-prosjektet` og `/en/about`).
- **Vi bruker React.** Alt interaktivt — hyttevelger, galleri, skjema, shadcn/ui-komponenter — skrives som vanlige React-komponenter (`.tsx`). Astro er bare skallet som bestemmer hvilke av dem som får sende JavaScript til nettleseren. Én fallgruve: shadcn-komponenter må kalles fra en `.tsx`-fil, ikke direkte i `.astro`, fordi React-kontekst ikke deles mellom «øyer».
- Én fil per side gjør veien fra Figma-skisse til kode kortest mulig.

**Fravalgt:** Next.js er et fullt forsvarlig alternativ, særlig hvis siden senere skal bli app-aktig (innlogging for hytteeiere, personlig innhold). Men det gir mer JavaScript til nettleseren (typisk 300–400 kB mot under 20 kB), krever `next-intl` for flerspråk, og har mer boilerplate per side. React-komponentene vi skriver er uansett flyttbare hvis vi ombestemmer oss — det er bare sideskallene som er Astro-spesifikke. WordPress gir mer vedlikehold, sikkerhetsoppdateringer og treg side.

### CMS: Sanity

**Hvorfor:**

- **Gratisplanen holder:** 20 brukere, 100 GB båndbredde/mnd, gratis hosting av redigeringsverktøyet, live forhåndsvisning og visuell redigering inkludert.
- **Sterk på strukturerte data.** Hyttevelgeren er egentlig en database: hytte nr., status (ledig/reservert/solgt), BRA, pris, antall soverom, plantegning, bildeserie, PDF-prospekt. Sanity er laget for akkurat dette. Dere endrer «solgt» ett sted, og både hyttevelgeren, forsiden og tellerne oppdateres.
- **Flerspråk er innebygd** («ubegrenset content types og locales» også på gratisplanen).
- **Presentation-verktøyet** gir live forhåndsvisning ved siden av redigeringen, så ikke-tekniske redaktører ser hva de gjør.
- Godt dokumentert — Claude Code jobber effektivt med det.

**Én ting å være klar over:** gratisplanen har kun *offentlige* datasett. Innholdet er offentlig uansett, men det betyr at også upubliserte utkast teknisk sett er lesbare for noen som kjenner prosjekt-ID-en. Er det et problem (f.eks. priser før lansering), koster Growth 15 $/bruker/mnd ≈ 165 kr — fortsatt innenfor budsjett med 2 redaktører.

**Fravalgt:**

| Alternativ | Hvorfor ikke |
|---|---|
| **Storyblok** | Markedets beste visuelle blokk-editor, men ~90 $/mnd (≈ 1000 kr). Over budsjett. Vurder hvis dere senere vil bygge sider helt fritt. |
| **Payload CMS** | Gratis programvare, men må driftes selv med database, backup og oppdateringer. For mye driftsansvar for et ikke-teknisk team. |
| **Bli på Webflow** | Fullt gyldig valg, men da bygger dere ikke med Claude Code, og dere er låst til Webflows priser og begrensninger. |
| **Decap/Tina (git-basert)** | Gratis, men redigeringsopplevelsen er svakere og Decap er dårlig vedlikeholdt. |

### Hosting: Netlify — men ikke gratisplanen

Netlify er et godt valg, men **vær obs på at gratisplanen ble lagt om til kredittmodell**: 300 kreditter/mnd, som tilsvarer ca. 15 GB trafikk. Går kredittene tomt, **slutter siden å svare**. For en bilde- og videotung salgsside er det en reell risiko midt i en kampanje.

**Anbefaling:** Netlify **Personal (9 $/mnd ≈ 100 kr)** eller **Pro (20 $/mnd ≈ 220 kr)**. Pro gir flere brukere og bedre støtte.

**Alternativ verdt å vurdere: Cloudflare Pages** — ubegrenset båndbredde gratis, 500 bygg/mnd. Bedre økonomi for en bildetung side. Litt mindre polert grensesnitt enn Netlify. Begge fungerer likt fra Claude Code sin side, så valget kan tas sent.

**Skjemaer:** Netlify Forms er gratis på alle planer nå. Sender e-post til dere og til megler når noen melder interesse.

---

## 3. Kostnadsoversikt

| Tjeneste | Plan | Per mnd |
|---|---|---|
| Sanity CMS | Free (evt. Growth 165 kr/bruker) | 0 kr |
| Netlify | Personal / Pro | 100–220 kr |
| Analyse (Plausible el.l.) | Cookieløs | ~100 kr |
| Domene nyork.no | Har det allerede | — |
| GitHub | Free (privat repo) | 0 kr |
| **Sum** | | **200–420 kr** |

Utenom: Figma-lisens dere allerede har, og evt. Claude Code-abonnement.

**Tips som sparer både penger og irritasjon:** velg en cookieløs analyseløsning (Plausible, Fathom, Simple Analytics) i stedet for Google Analytics. Da trenger dere **ikke cookie-banner** i det hele tatt. Bedre førsteinntrykk, mindre juridisk risiko, og én ting mindre å vedlikeholde.

---

## 4. Én viktig anbefaling om redigering

Dere svarte at CMS-et bare skal dekke nyheter og hytte-/tomtedata. Det er et fornuftig, trygt valg — designet kan ikke ødelegges, og det er raskere å bygge.

Men i den opprinnelige beskrivelsen sto det at dere vil kunne «legge til nye blokker». Det er en reell motsetning, og erfaringsmessig kommer behovet etter 3–6 måneder («vi må ha inn en seksjon om det nye heisprosjektet»).

**Forslag til mellomvei — koster nesten ingenting nå, sparer mye senere:**

Lag en `pageBuilder` i Sanity fra dag én: et felt der en side er en liste av seksjoner. Start med 5–6 seksjonstyper vi uansett bygger:

- Hero med bilde/video
- Tekst + bilde (venstre/høyre)
- Faktabokser med tall
- Bildegalleri
- Sitat
- Handlingsknapp (CTA)

Skru den på for 2–3 «myke» sider (Området, Finansiering, Utbygger) og la resten være fast kodet. Da har dere friheten der den trengs, uten at forsiden kan rotes til. Å legge dette til i ettertid krever datamigrering — å ha det med fra start koster kanskje to dagers ekstra arbeid.

---

## 5. Arbeidsflyt — hvordan dette faktisk foregår

**Kode og design (Claude Code + Figma):**

Vi kobler **ikke** Figma-variabler til koden på forhånd. Skissene gis til Claude Code, som bygger, og vi justerer underveis. Det sparer omtrent en uke oppstart, og for tolv sider er det riktig avveining.

Den ene risikoen dette gir er **drift**: uten felles tokens blir grå tekst `#6B7280` på én side og `#71717A` på neste, og avstandene sklir fra hverandre. Mottiltaket er billig:

1. Bygg **én side helt ferdig** først (forslag: «Om prosjektet» — den har typografi, bilder og seksjoner, men ingen interaktivitet)
2. Trekk ut fargene, typografien og avstandene den faktisk bruker til én `tokens`-fil / Tailwind-konfigurasjon
3. Bygg resten mot den filen

Da vokser designsystemet ut av koden i stedet for å måtte defineres først — men vi får det likevel før side to.

**Én navnekonvensjon er verdt å holde uansett:** Figma-komponenter og kodekomponenter får samme navn. «HytteKort» i Figma = `HytteKort.tsx`. Da kan dere si «fiks HytteKort», og både dere og Claude Code vet hva det betyr.

**Publisering:**

- Kode ligger på GitHub. `main`-grenen = det som er live.
- Hver endring gir en forhåndsvisnings-URL på Netlify som Gaute kan se på før den går live.
- Innholdsendringer i Sanity trigger automatisk ny bygging. Fra «Publiser» til live: ca. 1–2 minutter.

**CLAUDE.md i repoet:** en fil som beskriver prosjektets konvensjoner (mappestruktur, navngivning, at all tekst skal være flerspråklig, tone-of-voice på norsk). Claude Code leser den automatisk hver gang. Dette er den viktigste enkeltfilen for at kvaliteten holder seg jevn over tid.

---

## 6. Faseplan

| Fase | Innhold | Varighet |
|---|---|---|
| **0. Beslutninger** | Godkjenne stack. Opprette kontoer: GitHub, Sanity, Netlify. Overføre domene-DNS. | 3–5 dager |
| **1. Oppsett** | Astro + Tailwind + React + CLAUDE.md. Bygge én referanseside fra Figma-skissen. Trekke ut tokens fra den. | 3–5 dager |
| **2. Fundament** | Sanity-skjema (hytte, tomt, artikkel, side, meglerkontakt, dokument). Flerspråk-oppsett. Header/footer/navigasjon. | 1–2 uker |
| **3. Sider** | Alle sider bygges mot Figma. Hyttevelgeren som React-øy. Interesseskjema med samtykke. | 2–3 uker |
| **4. Innhold** | Migrere tekst og bilder fra Webflow. Oversette til engelsk. Legge inn hytte-/tomtedata. | 1–2 uker |
| **5. Test og lansering** | Ytelsestest, tilgjengelighet (WCAG), SEO-sjekk, **301-redirects fra gamle URL-er**, GDPR-gjennomgang. Bytte DNS. | 1 uke |

**Realistisk totalt: 7–10 uker** fra beslutning til lansering, avhengig av hvor raskt innhold og oversettelser blir klare. Innhold er nesten alltid flaskehalsen — start på oversettelsene i fase 2, ikke fase 4.

---

## 7. Ting som må huskes (og ofte glemmes)

- **301-redirects.** Nyork.no har hatt Google-rangering siden 2021. Behold URL-strukturen der det går, og sett opp redirects der den endres. Ellers mister dere synlighet akkurat når dere skal selge.
- **Domenet nyørk.no.** «ø» i domenenavn oversettes til punycode (`xn--nyrk-...`). Sjekk at dere eier både nyørk.no og nyork.no og at én peker på den andre.
- **Personvern.** Interesseskjemaet samler persondata. Samtykkeavkrysning må logges med tidspunkt, og personvernerklæringen må si hvem som er behandlingsansvarlig (Nea Lina AS) og hvor lenge data lagres. Meglers tilgang til listen må beskrives.
- **Videoen på forsiden.** Bakgrunnsvideo er den største enkeltposten på båndbredde. Komprimer hardt, vurder Cloudflare Stream eller Mux hvis trafikken tar av, og ha alltid et stillbilde som faller tilbake på mobil.
- **Eierskap til kontoer.** Opprett alle kontoer på en Nyørk-/Nea Lina-e-postadresse, ikke privat. Dere skal eie dette selv, ikke via en leverandør.
- **Backup.** Sanity har innebygd historikk, men eksporter datasettet til fil månedlig. Ett skript, kjøres automatisk.

---

## 8. Første steg

1. ~~Beslutte rammeverk~~ — **avklart: Astro med React-komponenter.**
2. **Opprette kontoer:** GitHub-organisasjon «Nyork», Sanity-prosjekt, Netlify-konto — alle på firma-e-post, ikke privat.
3. **Sette opp repo med CLAUDE.md** (konvensjoner, mappestruktur, at all tekst skal være flerspråklig, tone-of-voice på norsk).
4. **Bygge «Om prosjektet» ferdig fra Figma-skissen**, trekke ut tokens, og bruke den som mal for de elleve andre.

Gjenstår å avklare:

- Er offentlig lesbare utkast i Sanity et problem (f.eks. priser før lansering)? Hvis ja → Growth-plan, ~165 kr/bruker/mnd.
- Eier dere både nyørk.no og nyork.no?

---

### Kilder

- [Sanity — Pricing](https://www.sanity.io/pricing)
- [Netlify — Pricing and Plans](https://www.netlify.com/pricing/)
- [Storyblok vs Sanity](https://www.storyblok.com/lp/storyblok-vs-sanity)
- [Best Headless CMS 2026 — Sanity vs Contentful vs Storyblok](https://www.luckymedia.dev/insights/headless-cms)
- [Vercel vs Netlify vs Cloudflare Pages 2026](https://www.devtoolreviews.com/reviews/vercel-vs-netlify-vs-cloudflare-pages-pricing-comparison-2026)
- [Nyørk Hemsedal](https://www.nyork.no/)
