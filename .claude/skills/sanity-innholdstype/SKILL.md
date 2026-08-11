---
name: sanity-innholdstype
description: Legger til eller endrer en innholdstype i Sanity ende-til-ende — skjemafil, registrering, Studio-struktur, GROQ-spørring, TypeScript-type og flerspråkfelt. Bruk når noen vil at redaktørene skal kunne redigere noe nytt i CMS-et, eller når et eksisterende skjema skal utvides med felter.
---

# Ny innholdstype i Sanity

Sanity project ID `kh2746mt`, dataset `production`. Skjemaene ligger i `/sanity/schemas/` og er en del av repoet — de er kode, ikke noe man klikker seg til.

Redaktørene er ikke tekniske. Et skjema er godt når det er umulig å bruke feil.

## Datamodellen som allerede finnes

Før du lager noe nytt: sjekk om det hører hjemme i en eksisterende type.

**`hytte` og `tomt` deler modell.** Begge er en salgbar enhet med nummer, status, pris, areal, bilder og dokumenter. Bygg dem som én type med et `enhetstype`-felt, eller som to typer med et delt objekt — men ikke som to uavhengige skjemaer som driver fra hverandre. Hyttevelgeren og tomtekartet leser fra samme kilde.

Felt som går igjen: `nummer`, `status` (ledig / reservert / solgt), `pris`, `bra`, `antallSoverom`, `byggetrinn`, `plantegning`, `bilder`, `dokumenter`, `beskrivelse`.

## Steg

### 1. Avklar før du skriver

- Hvilke felter, og hvilke er påkrevd?
- **Hvilke felter må oversettes?** Tekst ja, tall og status nei.
- Skal typen ha egen side, eller bare vises i en liste?
- Hvem redigerer den, og hvor ofte?

### 2. Skjemafil

`sanity/schemas/<navn>.ts`

Regler som gjelder alltid:

- **Norske feltnavn i `title`**, engelske i `name`. Redaktørene ser `title`.
- Hvert felt har `description` som forklarer hva det brukes til. Skriv det for en som ikke har sett siden.
- Bildefelt **må** ha `alt`-felt med `validation: Rule => Rule.required()`. Alt-tekst er ikke valgfritt.
- Bruk `validation` på alt som kan skrives feil — priser, e-poster, påkrevde felt.
- `preview` med `select` så listen i Studio viser noe meningsfullt, ikke «Untitled».
- Statusfelt bruker `options.list` med faste valg, aldri fritekst.

### 3. Flerspråk

Følg samme mønster som resten av prosjektet. Ikke innfør en ny i18n-strategi for én type.

Felter som **ikke** skal oversettes: tall, priser, status, datoer, bilder, filer. Bare tekst og alt-tekst.

Stedsnavn oversettes ikke — Øpptown, Røvarklanten, Tøget, Jegerheim, Sentrumsløypa er de samme på engelsk.

### 4. Registrer og strukturer

- Legg til i `sanity/schemas/index.ts`
- Plasser i Studio-strukturen slik at redaktørene finner den. Grupper etter hva de tenker på — «Hytter og tomter», «Nyheter», «Sider» — ikke etter teknisk type.

### 5. Frontend-siden

- GROQ-spørring i `src/lib/queries.ts`. Hent **bare feltene du trenger** — ikke `*`.
- Bilder hentes alltid med bredde-parameter, aldri i full oppløsning.
- TypeScript-type i `src/lib/types.ts` som matcher spørringen.

### 6. Deploy og verifiser

```bash
npx sanity schema deploy
npm run build
```

Sjekkliste:

- [ ] Alle bildefelt har påkrevd alt-tekst
- [ ] Tekstfelt er oversettbare, tall er det ikke
- [ ] `preview` viser noe gjenkjennelig i Studio
- [ ] `description` på hvert felt, skrevet for en ikke-teknisk redaktør
- [ ] GROQ henter bare nødvendige felt
- [ ] TypeScript-typen matcher spørringen

## Endrer du et eksisterende skjema

Å fjerne eller døpe om et felt sletter ikke dataene, men frontend slutter å finne dem. Sjekk alltid `src/lib/queries.ts` og komponentene som bruker feltet før du endrer navn.

Eksporter datasettet før større endringer:

```bash
npx sanity dataset export production
```
