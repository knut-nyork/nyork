# CLAUDE.md — nyork.no

> Roten av repoet `github.com/knut-nyork/nyork`. Claude Code leser denne automatisk ved hver økt.

## Om prosjektet

Nyørk er et hytteprosjekt i Hemsedal, utviklet av Trøym-familien gjennom **Nea Lina AS**. Dette er en **salgsside** — den skal selge hytter og tomter, og fange opp interessenter. Alt annet er sekundært.

Teamet bak siden er ikke teknisk. Kode skal være lesbar og forutsigbar, ikke smart.

## Les først

| Fil | Innhold |
|---|---|
| `docs/01-byggeinstruks.md` | Sidestruktur, redirect-kart, hyttevelger-arkitektur, Sanity-typer. **Start her.** |
| `docs/02-innhold-salgsoppgave.md` | Hyttemodellene A1/A2/B1 med alle tall, og reguleringsbestemmelsene |
| `docs/00-teknisk-plan.md` | Bakgrunn for valg av stack. Sjelden nødvendig. |

## Stack

**Node 22.12 eller nyere kreves.** Versjonen er låst i `.nvmrc`, og `NODE_VERSION=22` må også settes i Netlify så lokalt og CI bygger likt. Oddetallsversjoner (v23, v25) støttes ikke av Astro.

- **Astro** (siste versjon) — sider, ruting, flerspråk, bildeoptimalisering
- **React (.tsx)** — alt som er interaktivt
- **Tailwind CSS** — all styling
- **Sanity** — CMS. Skjemaer ligger i `/sanity/schemas/` og er en del av repoet
- **Netlify** — hosting. Push til `main` = live
- **TypeScript** overalt

## Kommandoer

```bash
npm run dev          # utviklingsserver (localhost:4321)
npm run build        # produksjonsbygg — kjør denne før commit
npm run preview      # se produksjonsbygget lokalt
npx sanity dev       # Sanity Studio lokalt (localhost:3333)
npx sanity deploy    # publiser Studio
```

## Mappestruktur

```
design-system/      # eksportert fra Figma — LES, IKKE ENDRE
  tokens/           # fig-tokens.css (294 variabler), typography.css, fonts.css
  components/       # 65 ferdige React-komponenter
  ui_kits/          # fire ferdige skjermer, fasit for layout
  assets/           # ikoner og logo som JSX, pluss demobilder til ui_kits
media/              # alle bilder, tegninger og video — se media/README.md
  merkevare/        # logo, mønster (committes)
  foto/             # fotografier i full oppløsning (gitignorert)
  tegninger/        # situasjonsplan, plantegninger (committes)
  video/            # bakgrunnsvideo (gitignorert)
docs/               # byggeinstruks og innhold
src/
  pages/            # én fil per side. /en/ for engelsk
  components/       # .astro for statisk, .tsx for interaktivt
    blokker/        # én komponent per blokktype på forsiden
  layouts/
  lib/              # Sanity-klient, spørringer, hjelpefunksjoner
  styles/
sanity/
  schemas/
    documents/      # innholdstyper
    objects/        # gjenbrukbare felter, blant annet blokker.ts
```

## Designsystemet

`design-system/` er eksportert rett fra Figma. **Behandle den som lesetilgang** — endringer der blir overskrevet ved neste eksport. Trenger du en variant som ikke finnes, si fra i stedet for å redigere.

- **Tokens:** importer `design-system/tokens/` i `src/styles/`. Tailwind-konfigurasjonen skal peke på disse variablene, aldri definere egne verdier.
- Bruk **semantiske** tokens, ikke primitiver: `var(--semantic-color-foreground-default)`, ikke `var(--core-brand-900)`
- **Skriv aldri en hex-kode i en komponent**
- **Komponenter:** 65 stykker finnes i `components/site/`, `components/forms/` og `components/data-display/`. Bruk dem framfor å bygge nye.
- **Layout-fasit:** `ui_kits/nyork-website/` — forside, hytteliste, hyttedetalj, destinasjon

`components/data-table/` er en intern shadcn-utforskning og skal **ikke** brukes på kundevendte sider.

**Fonter:** Outfit (overskrifter), Poppins (brødtekst), Open Sans, Inter — alle fra Google Fonts. ITC Franklin Gothic LT Pro brukes på knapper og labels, men er lisensiert og ikke levert — midlertidig erstattet med Libre Franklin.

**Prisformat:** norsk stil med mellomrom som tusenskille og komma-bindestrek — `10 050 000 ,-`

## Konvensjoner

**Astro vs React — regelen er enkel:**
Bruk `.astro` som standard. Bruk `.tsx` kun når komponenten trenger tilstand, hendelser eller effekter. Er du i tvil, er svaret `.astro`.

Interaktive komponenter hydreres med `client:visible` med mindre de er synlige ved sidelast — da `client:load`.

shadcn/ui-komponenter må kalles fra en `.tsx`-fil, aldri direkte i `.astro`. React-kontekst deles ikke mellom øyer.

**Navngiving:** komponenter i koden har samme navn som i Figma. Norske navn er greit og foretrukket — teamet snakker norsk om komponentene.

## Forsiden bygges av blokker

Forsiden har ingen fast rekkefølge i koden. Den er en liste med blokker på `side`-dokumentet, og redaktøren bestemmer selv hvilke som er med, i hvilken rekkefølge, og om en blokk er synlig akkurat nå.

**Blokktypene** er objekter i `sanity/schemas/objects/blokker.ts`, og hver har en Astro-komponent med samme navn i `src/components/blokker/`:

| Blokk | Hva den er |
|---|---|
| `blokkHero` | Toppbilde med overskrift oppå. Kan ha bakgrunnsvideo |
| `blokkBudskap` | Kort budskap på farget flate |
| `blokkArtikkel` | Bilde på den ene siden, tekst på den andre. Redaktøren velger side |
| `blokkStatus` | Antall hytter og tomter. **Tallene telles opp i Sanity, aldri skrevet inn** |
| `blokkUtvalgteHytter` | Hyttekort, enten de ledige automatisk eller håndplukkede |
| `blokkSitat` | Sitat fra familien. Dialekt urørt, engelsk oversettelse *under* |
| `blokkNyheter` | Nyhetssaker, enten de nyeste automatisk eller håndplukkede |
| `blokkFremhevet` | Bilde i full bredde med tekstpanel oppå |

**Legger du til en ny blokktype**, er det fire steder: skjemaet i `blokker.ts`, navnet i `BLOKKTYPER` nederst i samme fil, en projeksjon i `BLOKKER` i `src/lib/sporringer.ts`, en type i `src/lib/typer.ts`, og en komponent som `Blokker.astro` fordeler til. Glemmer du projeksjonen, kommer blokken tom ut uten at noe feiler.

**Av/på:** hver blokk har `aktiv`. Blokker som er skrudd av filtreres bort i GROQ (`blokker[aktiv != false]`) — de skal ikke ligge skjult i HTML-en. `!= false` og ikke `== true`, så blokker laget før feltet fantes fortsatt vises.

**Automatisk eller håndplukket:** `blokkNyheter` og `blokkUtvalgteHytter` henter begge utvalgene i GROQ, og `velgUtvalg()` i `sporringer.ts` avgjør hvilket som brukes. Grensen for hvor mange kan ikke settes inn i et GROQ-utsnitt, fordi den er et felt redaktøren styrer — derfor kuttes lista i TypeScript.

**Knapper** skrives med norsk sti (`/hytter`). Den engelske slås opp i rutekartet, så `/en/cabins` finner seg selv. Adresser som begynner med `https://` står som de er og åpnes i ny fane. Ikke pek en knapp på en side som ikke finnes ennå.

## Språk — les dette nøye

Siden er **norsk og engelsk**. Norsk er hovedspråket.

- **Hardkod aldri tekst i en komponent.** All brukervendt tekst kommer fra Sanity eller oversettelsesfilene.
- Norske URL-er er standard (`/om-prosjektet`), engelske ligger under `/en/` (`/en/about`)
- Legger du til en tekst på norsk, skal engelsk versjon opprettes samtidig — også om den bare er midlertidig

## Tone of voice

Varm, jordnær og stedegen. Nyørk selger ikke luksus — det selger tilhørighet til et sted med historie. Se `.claude/skills/nyork-tekst/`.

- Skriv kort. Unngå eiendomsmegler-superlativer («unik», «eksklusiv», «drømmehytte»)
- Setningsformat, aldri Store Forbokstaver eller VERSALER
- Lokale navn beholdes: Øpptown, Røvarklanten, Tøget, Jegerheim, Sentrumsløypa
- Sitater fra Jegeir Trøim er på hallingdialekt og skal **aldri** normaliseres til bokmål
- Engelsk versjon oversetter meningen, ikke ordene. Stedsnavn oversettes ikke

## Bilder og video

**Hvor bilder hører hjemme:**

| Type | Ligger i | Hentes hvordan |
|---|---|---|
| Fotografier, hyttebilder, nyhetsbilder | **Sanity** | GROQ, med bredde-parameter |
| Logo, favicon, mønster | `media/merkevare/` → `src/assets/` | Importeres i kode |
| Plantegninger, situasjonsplan | `media/tegninger/` → Sanity eller `src/assets/` | Etter bruk |
| Demobilder i `design-system/assets/` | Brukes **ikke** i produksjon | — |

`media/` er arbeidsbenken med kildefiler i full oppløsning, ikke det som serveres. Legg aldri en fil fra `media/foto/` rett inn i en komponent — den skal opp i Sanity først, slik at redaktørene kan bytte den og sette alt-tekst.

- Bruk alltid Astros `<Image>`, aldri `<img>`
- Alt-tekst er påkrevd og kommer fra Sanity
- Bakgrunnsvideo må ha stillbilde som fallback og skal ikke lastes på mobil
- Bilder fra Sanity hentes med bredde-parameter, aldri i full oppløsning
- Fotokreditt er eget felt i Sanity og følger bildet

## Før du committer

1. `npm run build` går gjennom
2. Ingen hardkodet brukervendt tekst
3. Ingen hex-koder utenfor tokens
4. Nye sider har `<title>`, meta-beskrivelse og engelsk motpart
5. Ingen tall om ledige hytter skrevet i koden — de kommer fra Sanity

## Ting som ikke skal gjøres

- Ikke legg til nye avhengigheter uten å spørre
- Ikke bruk `client:load` som standard — det er hele poenget med Astro
- **Ikke skru på `useCdn` i `src/lib/sanity.ts`.** Siden bygges statisk, så spørringene kjøres bare under bygget — det er ingenting å spare. Med CDN-en på leverer Sanity et hurtiglagret svar i opptil et minutt, og Netlify starter bygget i samme øyeblikk som noen trykker «publiser». Da rekker bygget å hente det gamle innholdet, og redaktøren ser ikke endringen sin slå gjennom
- Ikke endre URL-strukturen på eksisterende sider uten 301-redirect. Siden har rangering på Google siden 2021
- Ikke rediger i `design-system/`
- Ikke commit API-nøkler

## Kontoer og ID-er

| | |
|---|---|
| GitHub | `knut-nyork/nyork` |
| Sanity project ID | `kh2746mt` |
| Sanity dataset | `production` (aclMode: **public**) |
| Sanity org | `knut-nyork` (`owIQZK6pU`) |
| Netlify team | «Nyørk» (`knut-sfsxcuk`) — Free-plan |
| Netlify-prosjekt | `nyork-hemsedal` |
| URL | https://nyork-hemsedal.netlify.app |

CORS er åpnet for `http://localhost:4321`, `http://localhost:3333`, `https://nyork-hemsedal.netlify.app` og `https://*.netlify.app`.

**Miljøvariabler** — `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET` og `NODE_VERSION=22` er allerede satt i Netlify. Lokalt:

```
PUBLIC_SANITY_PROJECT_ID=kh2746mt
PUBLIC_SANITY_DATASET=production
```

**`SANITY_READ_TOKEN` trengs ikke ennå.** Datasettet er `public`, så publisert innhold kan leses uten autentisering. Token er kun nødvendig for utkast/forhåndsvisning eller skriving — da hentes den i Sanity-dashbordet under API → Tokens.

## Åpne punkter

- Domenet nyørk.no overføres **først når siden er helt ferdig**. Fram til da kjører vi på Netlify-URL
- **Netlify-teamet krever SSO-innlogging på alle prosjekter.** Siden er derfor usynlig for andre enn teamet. Greit nå, må av før lansering
- **Netlify Forms er ikke aktivert.** Må skrus på før interesseskjemaet virker
- Netlify Free bruker kredittmodell og stopper trafikk ved ca. 15 GB. **Må oppgraderes før lansering**
- Datasettet er offentlig lesbart på gratisplanen. Avklar om utkast med priser er greit
- Bilderettigheter fra salgsoppgaven må avklares før publisering
- Tomtesiden er ikke designet i Figma — bygges som variant av hyttelista
- **Hovedmenyen lenker til `/tomter`, `/omradet` og `/siste-nytt`, som ikke finnes ennå og gir 404.** Samme grunn til at nyhetskortene på forsiden ikke er klikkbare — se kommentaren i `BlokkNyheter.astro` for hvor lenken skal inn når sidene bygges
- ITC Franklin Gothic LT Pro: webfont-lisens mangler
- Alle kontoer står på `knut@nyork.no`. Vurder å legge til Gaute som medlem i Sanity-org og Netlify-team, så prosjektet ikke er avhengig av én person
