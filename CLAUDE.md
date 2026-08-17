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
- **Netlify** — hosting. **Bygger ikke fra git.** Se «Utgivelse» under
- **TypeScript** overalt

## Kommandoer

```bash
npm run dev          # utviklingsserver (localhost:4321)
npm run build        # produksjonsbygg — kjør denne før commit
npm run preview      # se produksjonsbygget lokalt
npx sanity dev       # Sanity Studio lokalt (localhost:3333)
npx sanity deploy    # publiser Studio
```

## Utgivelse

**Netlify-prosjektet er ikke koblet til GitHub.** Det har verken repo, gren eller byggkommando satt opp. Push til `main` gjør derfor ingenting med den live siden — den oppdateres bare når noen kjører en deploy manuelt fra maskinen sin:

```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

Det betyr to ting. Koden i GitHub og siden som ligger ute kan være ulike, og utgivelse er avhengig av at én person har CLI-en innlogget. Sesjonen ryker med jevne mellomrom, og da må `npx netlify-cli logout && npx netlify-cli login` kjøres først.

**Dette bør fikses.** I Netlify-dashbordet: koble prosjektet til `knut-nyork/nyork`, gren `main`, byggkommando `npm run build`, publiseringsmappe `dist`. Koblingen krever GitHub-autorisasjon og må gjøres av noen med tilgang til begge. Når den er på plass, gjelder «push til main = live», og dette avsnittet kan slettes.

## Passord på siden

Siden er ikke lansert, og ligger bak et passord som sjekkes i `netlify/edge-functions/passord.ts`.

Passordet ligger i miljøvariabelen `SIDE_PASSORD` i Netlify, ikke i repoet. Er variabelen ikke satt, slipper ingen inn — funksjonen feiler lukket med vilje, så en glemt variabel ikke åpner siden for alle.

Sjekken kjører på kanten, før noe innhold sendes ut. Det er ekte sperring, ikke et JavaScript-lag over ferdig levert HTML — priser og planer ligger i sidene, og de skal ikke kunne hentes ut ved å se på kildekoden.

**Skal av før lansering:** slett `[[edge_functions]]`-blokka i `netlify.toml`. Da er siden åpen.

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

## Artikler som ikke er nyheter

En `artikkel` med `skjulIListe` står ikke under Siste nytt, og bygges heller ikke der. Den må ha sin egen side i `src/pages/`, en for hvert språk, og en linje i `RUTER` i `src/lib/sprak.ts`. `/slik-blir-nyork` er mønsteret — den bruker `Artikkelmal` som nyhetssakene, men ligger utenfor `/siste-nytt` fordi den beskriver prosjektet og ikke noe som nettopp har skjedd.

Skrur noen på flagget uten å lage sida, blir artikkelen utilgjengelig uten at noe feiler.

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
| `blokkBilder` | To eller tre bilder i ulik størrelse, forskjøvet i forhold til hverandre |
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
- **Netlify SSO står på (`sso_login: true`, kontekst `all`) og svarer før alt annet.** Det betyr at passordsperra i `netlify/edge-functions/passord.ts` aldri blir nådd: en besøkende møter Netlifys egen innlogging, ikke vår. Skal medeiere se siden uten Netlify-konto, må SSO av først — `npx netlify-cli api updateSite --data '{"site_id":"2db966c3-1ef5-4279-af68-7e05e4a21aca","body":{"sso_login":false}}'`. Da er passordet det eneste som står mellom publikum og prisene, og det skal det være fram til lansering
- **Netlify Forms er ikke aktivert.** Må skrus på før interesseskjemaet virker
- Netlify Free bruker kredittmodell og stopper trafikk ved ca. 15 GB. **Må oppgraderes før lansering**
- Datasettet er offentlig lesbart på gratisplanen. Avklar om utkast med priser er greit
- Bilderettigheter fra salgsoppgaven må avklares før publisering
- Tomtesiden er ikke designet i Figma — bygges som variant av hyttelista
- ITC Franklin Gothic LT Pro: webfont-lisens mangler
- Alle kontoer står på `knut@nyork.no`. Vurder å legge til Gaute som medlem i Sanity-org og Netlify-team, så prosjektet ikke er avhengig av én person
