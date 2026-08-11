---
name: ny-side
description: Oppretter en ny side på nyork.no komplett med norsk URL, engelsk motpart under /en/, meta-tittel og beskrivelse, hreflang, oppføring i navigasjonen og sjekk av 301-redirect. Bruk når noen vil legge til en ny side, en ny underside, eller flytte/endre URL-en på en eksisterende side.
---

# Ny side på nyork.no

En side er aldri ferdig før den finnes på **begge språk**. Det er den vanligste feilen i dette prosjektet — den norske siden blir lagd, den engelske blir glemt, og så oppdages det tre uker senere.

## Steg

### 1. Avklar URL-ene

Spør om begge hvis de ikke er oppgitt:

- Norsk URL — dette er hovedspråket, ligger på rot: `/hyttevelger`
- Engelsk URL — ligger under `/en/`, og **oversettes**: `/en/cabin-selector`

Norske URL-er skal være på norsk. Ikke bruk æ, ø, å i URL-er — skriv `/omradet`, ikke `/området`.

### 2. Sjekk mot gamle URL-er — dette er kritisk

Nyork.no har hatt Google-rangering siden 2021. Disse URL-ene finnes på dagens Webflow-side og **må enten beholdes eller få 301-redirect**:

```
/om-prosjektet    /hyttevelger    /tomter       /omradet
/galleri          /siste-nytt     /finansiering /megler
/utbygger         /personvern
```

Er den nye URL-en en erstatning for en av disse, legg til redirect i `netlify.toml`:

```toml
[[redirects]]
  from = "/gammel-url"
  to = "/ny-url"
  status = 301
```

Lag aldri en ny URL som kolliderer med en av de gamle uten å avklare det først.

### 3. Opprett sidefilene

```
src/pages/<norsk-url>.astro
src/pages/en/<engelsk-url>.astro
```

Bruk `.astro`, ikke `.tsx`. React er kun for komponenter som trenger tilstand eller hendelser.

Begge filene skal bruke samme layout og de samme komponentene — det er bare innholdskilden som skiller dem.

### 4. Ingen hardkodet tekst

All brukervendt tekst kommer fra Sanity eller oversettelsesfilene. Hvis du er i ferd med å skrive en norsk streng direkte i `.astro`-filen, stopp og legg den i innholdskilden i stedet.

Dette gjelder også knappetekst, skjemaetiketter, feilmeldinger og «Les mer».

### 5. Meta og hreflang

Hver side trenger:

- `<title>` — unik, beskrivende, med «Nyørk» i seg
- `<meta name="description">` — 120–155 tegn, selgende men ikke superlativisk
- `<link rel="alternate" hreflang="nb" href="...">` og `hreflang="en"` som peker på hverandre
- `<link rel="canonical">`
- Open Graph-bilde hvis siden skal deles

Meta-teksten er brukervendt tekst — den skal også være flerspråklig og følge tone of voice. Se `nyork-tekst`-skillen.

### 6. Legg til i navigasjonen

Sjekk **både** header og footer, og **begge språk**. Spør om siden skal ligge i hovedmenyen eller bare være tilgjengelig via lenke — ikke anta.

### 7. Verifiser

```bash
npm run build
```

Bygget må gå gjennom. Sjekk deretter:

- [ ] Begge språkversjoner finnes og lenker til hverandre
- [ ] Ingen hardkodet tekst
- [ ] Title og meta-beskrivelse på begge språk
- [ ] Redirect satt opp hvis en gammel URL er berørt
- [ ] Bilder bruker `<Image>`, ikke `<img>`, og har alt-tekst

## Hvis brukeren bare vil ha den norske siden

Det er greit å bygge norsk først, men opprett den engelske filen i samme slengen — med midlertidig oversettelse hvis den endelige teksten ikke finnes ennå. En midlertidig oversettelse er lettere å finne og fikse enn en side som ikke eksisterer.
