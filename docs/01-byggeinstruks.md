# Byggeinstruks — nyork.no

*Gis til Claude Code sammen med `CLAUDE.md`. Les CLAUDE.md først — den har stack, konvensjoner, tone of voice og ID-er.*

---

## Designsystemet finnes — bruk det

`Kunnskap/Nyørk Design System/` inneholder 294 tokens og 65 ferdige React-komponenter hentet rett ut av Figma, pluss fire ferdige skjermer i `ui_kits/nyork-website/`: forside, hytteliste, hyttedetalj og destinasjon.

**Ikke bygg komponenter som allerede finnes, og ikke definer nye farger eller avstander.** Se CLAUDE.md for hvordan tokens kobles til Tailwind.

Tre ting designsystemet **ikke** dekker, som må løses:

1. **Tomtesiden er ikke designet.** Figma har Forside, Hytter, 1-hytte, Hemsedal og Article — ingen tomteside. Bygg den som en variant av hyttelista med reguleringsregler og infrastruktur i stedet for planløsninger, i samme formspråk.
2. **Fonten ITC Franklin Gothic LT Pro er lisensiert og ikke levert.** Den brukes på knapper og labels, og er midlertidig erstattet med Libre Franklin. Må avklares før lansering — webfont-lisens er noe annet enn desktop-lisens.
3. **`components/data-table/`** er en intern shadcn-utforskning, ikke kundevendt design. Ikke bygg den inn i noen av de fem sidene.

---

## Mål

Erstatte dagens Webflow-side (elleve sider) med fem hovedsider. Dette er en **salgsside**: den skal selge hytter og tomter og fange opp interessenter. Alt annet er sekundært.

Vi kutter mye. Innholdet fra sidene som forsvinner flyttes inn i de fem som blir igjen — det slettes ikke.

---

## Sidestruktur

| Meny | Norsk URL | Engelsk URL | Merknad |
|---|---|---|---|
| Hjem | `/` | `/en/` | Fengende forside |
| Hytter | `/hytter` | `/en/cabins` | Hyttene til salgs |
| Tomter | `/tomter` | `/en/plots` | Skjules når ingen er ledige |
| Området | `/omradet` | `/en/area` | Sommer/vinter-toggle |
| Nyheter | `/siste-nytt` | `/en/news` | **URL beholdes, menytekst er «Nyheter»** |
| — | `/personvern` | `/en/privacy` | Utenfor menyen, påkrevd |

**Merk om nyheter:** menytekst og URL trenger ikke være like. `/siste-nytt` er indeksert av Google siden 2021 og beholdes som URL, mens menyen sier «Nyheter».

---

## Redirect-kart — gjør dette først

Seks URL-er med fem års rangering forsvinner. Alle må ha 301 i `netlify.toml` **før** lansering:

| Gammel URL | Går til | Status |
|---|---|---|
| `/om-prosjektet` | `/hytter` | 301 |
| `/hyttevelger` | `/hytter` | 301 |
| `/galleri` | `/hytter` | 301 |
| `/finansiering` | `/hytter#finansiering` | 301 |
| `/megler` | `/hytter#megler` | 301 |
| `/utbygger` | `/omradet#historia` | 301 |
| `/tomter` | `/tomter` | beholdes |
| `/omradet` | `/omradet` | beholdes |
| `/siste-nytt` | `/siste-nytt` | beholdes |
| `/personvern` | `/personvern` | beholdes |

Samme redirects må settes opp for eventuelle engelske varianter som finnes i dag.

---

## Hva hver side inneholder

### Forside `/`

Skal gi lyst til å klikke videre, ikke fortelle alt.

1. **Hero** — bakgrunnsvideo med stillbilde som fallback. Video lastes **ikke** på mobil.
2. **Verdiforslag** — to–tre setninger. Ski inn/ski ut, gangavstand til sentrum, utsikt begge veier.
3. **Status nå** — hvor mange hytter og tomter som er ledige. **Hentes fra Sanity, aldri hardkodet.** Dette tallet endrer seg og må aldri bli feil.
4. **Utvalgte hytter** — to–tre kort med lenke til `/hytter`
5. **Området** — teaser med lenke
6. **Jegeir-sitat** — på hallingdialekt, aldri normalisert
7. **Siste nyhet** — ett kort
8. **Meld interesse**

### Hytter `/hytter`

Kommersielt den viktigste siden. Erstatter `/om-prosjektet`, `/hyttevelger`, `/galleri`, `/finansiering` og `/megler`.

**Omfang å bygge for:** 20–50 enheter når alle byggetrinn er ferdige, fordelt på flere hyttemodeller. I dag: 7 hytter i Røvarklanten, 6 solgt, 1 ledig.

#### Modell og enhet er to forskjellige ting

Dette er den viktigste beslutningen på siden.

- **`hyttemodell`** — arkitekturen. Navn, planløsning, BRA, antall soverom, materialer, plantegninger, interiørbilder, standardleveranse. Skrives **én gang** og gjenbrukes av alle enheter av den typen.
- **`enhet`** — den konkrete hytta eller tomta. Nummer, byggetrinn, status, pris, tomtestørrelse, utsiktsretning, solforhold, prospekt-PDF, og en referanse til hvilken modell den er.

Uten dette skillet må en redaktør skrive «168 m², fire soverom, badstue» på nytt for hver eneste enhet, og etter tjue enheter har tallene begynt å sprike. Med skillet er nytt byggetrinn bare å opprette tolv `enhet`-dokumenter som peker på en modell som allerede finnes — redaktørarbeid, ikke utviklerarbeid.

#### Sidestruktur

| URL | Innhold |
|---|---|
| `/hytter` | Situasjonsplan, modellene, og hva som er ledig nå |
| `/hytter/[modell]` | Modellsiden — arkitektur, plantegninger, interiør. Den emosjonelle salgssiden. Lister hvilke enheter av modellen som er ledige. |
| `/hytter/[nummer]` | Enhetssiden — pris, status, tomt, utsikt, prospekt, megler. Den konkrete siden. |

URL-ene skal være lesbare: `/hytter/hytte-5`, ikke `/hytter/6982fc3d`. Både Google og megleren som limer lenken inn i en e-post har nytte av det.

Enhets-URL-er er flate (`/hytter/hytte-5`, ikke `/hytter/roverklanten/hytte-5`) slik at de overlever at en enhet bytter modell eller byggetrinn.

#### Hyttevelgeren

**Ikke bygg interaktivt kart nå.** Med 20–50 enheter blir det verdt det rundt tredje byggetrinn, ikke før. Bygg i stedet:

1. **Situasjonsplan som bilde**, med nummer på hyttene. Ett bilde per byggetrinn. Dette endrer seg én gang i året og kan godt kreve en designer.
2. **Kort i liste**, gruppert på byggetrinn. Status som **data**, aldri som innbrent bilde — ellers kan ingen filtrere på det og Google leser det ikke.
3. **Filter** på status, byggetrinn, modell og antall soverom. React-øy, `client:visible`.

**Filteret skal vise seg selv bare når det trengs.** Under fem ledige enheter er et filtreringsgrensesnitt bare støy — vis kortene rett fram. Terskelen styres av data, ikke av at noen husker å skru den av.

Solgte enheter vises, men nedtonet. De er sosialt bevis på at prosjektet går bra.

**Forbered kartet uten å bygge det:** legg et `kartPosisjon`-felt på `enhet` fra dag én, selv om det står tomt. Da er interaktivt kart senere et nytt visningslag over data som allerede finnes, ikke en migrering.

#### Resten av siden

4. **Om hyttene** — materialer, Volden-kjøkken fra Valdres, badstue
5. **Interiørbilder** — fra dagens galleri
6. **Finansiering** — seksjon med `id="finansiering"`
7. **Meglerkontakt** — seksjon med `id="megler"`. EIE Fjellmegleren.
8. **Meld interesse**

#### Lenking til Finn.no

Detaljsiden skal ligge **hos dere**, og lenke til Finn-annonsen. Ikke omvendt. Sender dere «Les mer» rett til Finn, gir dere bort trafikken og eier ingen av sidene kjøperen faktisk leser.

### Tomter `/tomter`

Samme grunnmodell som hytter, men **en tomtekjøper trenger noe helt annet**.

Nyørk selger rene tomter der kjøperen tar med sin egen utbygger og kan bygge fritt innenfor reguleringsplanen. Da er ikke bilder og planløsninger det viktigste — det er hva man *får lov til* å bygge, og om det er framført vei, vann, avløp, strøm og fiber til tomtegrensen. Det er de to spørsmålene som avgjør et tomtekjøp.

Tomtesiden skal derfor vise, tydelig og uten å måtte åpne en PDF:

- **Tomtestørrelse**, pris og status
- **Hva som kan bygges** — maks BYA, gesimshøyde, takvinkel, bygningsbredde og lengde, antall etasjer
- **Hva som ikke er tillatt** — frittliggende boder, garasjer, gjerder og flaggstang er forbudt i denne reguleringsplanen. Det er en overraskelse som er bedre å ta før kjøp enn etter.
- **Infrastruktur** — er vei, vann, avløp, strøm og fiber framført? Ja/nei per tomt.
- **Sol- og utsiktsforhold**
- Lenke til reguleringsplan og plankart som PDF

Verdiene ligger i `02-Innhold-fra-salgsoppgave-ST1.md`, hentet fra Detaljreguleringsplan NYØRK II (PlanID 2019001).

Reguleringsreglene er **like for alle tomtene** og skal skrives ett sted, ikke kopieres inn på hver enhet. Bruk en egen `reguleringsregler`-type som tomtene refererer til.

**Siden må håndtere at det ikke finnes tomter til salgs.** Når `tomt`-enheter med status «ledig» er null: skjul menypunktet, og la siden vise en kort tekst med lenke til interesseskjemaet i stedet for en tom liste. Dette skal skje automatisk fra data, ikke ved at noen husker å skru av et menypunkt.

### Området `/omradet`

Erstatter også `/utbygger`.

1. **Sommer/vinter-toggle** — se teknisk avsnitt under
2. **Om Nyørk-området** — beliggenhet, Øpptown, Sentrumsløypa
3. **Om Hemsedal** — hva stedet er utenom hyttene
4. **Historia** — seksjon med `id="historia"`. Gården Trøym, bosetting siden 1500-tallet, historien om navnet og norsk-amerikaneren.
5. **Familien og visjonen** — fra dagens `/utbygger`. Sitat fra Jegeir, Knut Jr. og Gaute.
6. **Planene** — Tøget (skiheis) og Jegerheim (servering). **Merkes tydelig som planer.** Ikke lov datoer som ikke er bestemt.
7. **Natur- og aktivitetsbilder** — fra dagens galleri
8. **Meld interesse**

### Nyheter `/siste-nytt`

Liste med artikler, detaljside på `/siste-nytt/[slug]`.

---

## Sommer/vinter-toggle — teknisk

Dette er sidens mest interessante komponent. Tre krav som er lette å bomme på:

**1. Begge sesongene skal ligge i HTML-en.** Toggle bytter synlighet — den henter ikke data ved klikk. Grunnen er Google: hentes sommerinnholdet først ved klikk, blir det aldri indeksert. Halve innholdet på siden ville vært usynlig for søk.

**2. Tilstanden skal ligge i URL-en:** `/omradet?sesong=sommer`. Da kan lenken deles og fungerer som forventet.

**3. Siden må fungere uten JavaScript.** Uten JS vises begge seksjonene etter hverandre. Det er dårligere, men ikke ødelagt.

Standardvalg settes etter måned — mai til september viser sommer, ellers vinter. Hemsedal er primært en vinterdestinasjon, så vinter er fallback ved tvil.

React-komponent, `client:visible`. Navnet i koden er `SesongVelger`.

---

## Sanity-innholdstyper

Bruk `sanity-innholdstype`-skillen. Prosjekt `kh2746mt`, dataset `production`.

| Type | Innhold |
|---|---|
| `hyttemodell` | Arkitekturen, skrevet én gang og gjenbrukt. Navn (A1, A2, B1), BRA, P-rom, soverom, bad + badstue, vaskerom, bod, terrasse, parkering, etasjer, plantegninger, fasadetegninger, interiørbilder, materialer, beskrivelse, illustrasjonsforbehold. Feltet `utbyggerIntern` lagres men **vises ikke** — se under. |
| `enhet` | Den konkrete hytta eller tomta. **Hytte og tomt deler modell** — felt `enhetstype` skiller dem. Nummer (H04, H05…), byggetrinn, delområde, status (ledig/reservert/solgt), pris, tomtestørrelse, utsiktsretning, solforhold, `kartPosisjon` (tomt inntil videre), prospekt-PDF, lenke til Finn-annonse. **Referansen til `hyttemodell` er valgfri** — rene tomter har ingen. |
| `reguleringsregler` | Skrives én gang og refereres av alle tomter. Maks BYA per etasjeantall, gesimshøyde, takvinkel og -form, bygningsbredde, maks lengde, møneretning, parkeringskrav, hva som ikke er tillatt, plan-ID, lenke til plankart. |
| `artikkel` | Nyhetsartikkel — tittel, ingress, brødtekst, bilde, dato |
| `side` | Redaksjonelt innhold per side, slik at tekst kan endres uten utvikler |
| `omradeInnhold` | Seksjoner med sommer- og vintervariant |
| `megler` | Navn, tittel, telefon, e-post, bilde, meglerhuslogo |
| `dokument` | PDF-er — prospekt, prisliste, plantegninger, reguleringsplan |
| `innstillinger` | Global: navigasjon, footer, tekst i interesseskjemaet |

Alle tekstfelt må være oversettbare. Tall, priser, status og datoer skal **ikke** oversettes.

**Om flere utbyggere:** Nyørk skal etter hvert samarbeide med flere utbyggere, men dette **skjules for kjøperen** — modellene presenteres som Nyørks eget utvalg. Legg likevel et internt `utbyggerIntern`-felt på `hyttemodell` fra start, og merk det tydelig som ikke-publisert i skjemaets `description`. Da har dere oversikten den dagen dere trenger den, uten at det bygges grensesnitt for noe som ikke skal vises. Feltet skal aldri hentes i en GROQ-spørring som brukes på frontend.

**Innhold klart til import:** `02-Innhold-fra-salgsoppgave-ST1.md` inneholder alle tre hyttemodellene (A1, A2, B1) med komplette tall, samt reguleringsbestemmelsene. Alt må verifiseres mot dagens situasjon før publisering — brosjyren er fra 2022.

---

## Interesseskjema

Ligger på alle fem sider, ikke som egen side. Netlify Forms.

- Samtykkeavkrysning som logges med tidspunkt
- To separate samtykker, som i dag: dette prosjektet / andre prosjekter
- Honeypot mot spam
- Varsling på e-post til Nyørk og til megler
- Lenke til personvernerklæringen
- Kvitteringstekst og feiltekst må være flerspråklige

---

## Arbeidsrekkefølge

1. **Verifiser deploy-flyten.** Tomt Astro-prosjekt, push, Netlify bygger, siden er live. Ikke gå videre før dette virker.
2. **`netlify.toml`** med redirect-kartet over
3. **Sanity-skjema** og flerspråk-oppsett
4. **Layout, header, footer, interesseskjema** — brukes av alt annet
5. **`/hytter`** først. Den er kommersielt viktigst og har flest komponenter, og den er allerede designet i Figma (hytteliste + `1-hytte`-detaljside).
6. **Resten:** forside, området, tomter, nyheter, personvern

Bygg én side helt ferdig før du starter på neste. Halvferdige sider skjuler feil.

---

## Definisjon av ferdig

For hver side:

- [ ] `npm run build` går gjennom
- [ ] Norsk og engelsk versjon finnes og lenker til hverandre med hreflang
- [ ] Ingen hardkodet brukervendt tekst
- [ ] Ingen hex-koder utenfor `tokens.css`
- [ ] `<title>` og meta-beskrivelse på begge språk
- [ ] Alle bilder bruker `<Image>` med alt-tekst fra Sanity
- [ ] Redirects satt opp for gamle URL-er siden erstatter
- [ ] Testet på mobil
- [ ] Tall om ledige enheter kommer fra Sanity, ikke fra koden

---

## Ting som ikke skal skje

- Ingen hytte- eller tomtetall skrevet direkte i koden. De blir feil.
- Ingen datoer lovet for Tøget eller Jegerheim uten at noen har bekreftet dem.
- Jegeirs sitater skal ikke normaliseres til bokmål.
- Ingen gammel URL fjernet uten redirect.
- Ingen nye avhengigheter uten å spørre.
