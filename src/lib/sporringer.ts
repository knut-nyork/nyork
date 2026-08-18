import {sanity} from './sanity'
import type {
  Artikkel,
  Enhet,
  Hyttemodell,
  Omradeseksjon,
  Innstillinger,
  Reguleringsregler,
  Side,
  SideNavn,
  Statustall,
} from './typer'

/**
 * GROQ-spørringene siden bruker. Feltene listes eksplisitt, aldri `...`, slik
 * at interne felter ikke kan lekke ut ved et uhell — se `utbyggerIntern` på
 * hyttemodell, som aldri skal hentes i en spørring frontend bruker.
 */

const INNSTILLINGER = `*[_type == "innstillinger"][0]{
  navigasjon[]{tekst, url},
  footerTekst,
  interesseskjemaTittel,
  interesseskjemaIngress,
  samtykkeDetteProsjektet,
  samtykkeAndreProsjekter,
  sendKnappTekst,
  kvitteringstekst,
  feiltekst
}`

/** Bildet flates ut til url + alt-tekst. Bredden settes ved visning, se bildeUrl(). */
const BILDE = `{"url": bilde.asset->url, altTekst, fotokreditt}`

const KNAPP = `{tekst, sti}`

const ARTIKKEL_KORT = `{tittel, "slug": slug.current, dato, ingress, "bilde": bilde${BILDE}}`

/** Faktafeltene fra modellen som enhetskortene og enhetssiden trenger. */
const MODELL_KORT = `{
  navn,
  "slug": slug.current,
  bra,
  prom,
  antallSoverom,
  antallBad,
  antallEtasjer,
  harBadstue
}`

const ENHET_FELT = `
  nummer,
  "slug": slug.current,
  enhetstype,
  status,
  byggestatus,
  byggetrinn,
  delomrade,
  pris,
  opprinneligPris,
  tomtestorrelse,
  utsiktsretning,
  solforhold,
  beskrivelse,
  finnAnnonseUrl,
  "prospekt": prospekt->{tittel, "url": fil.asset->url},
  bilder[]${BILDE}
`

/**
 * Blokkene siden bygges av. `aktiv != false` filtrerer bort blokker redaktøren
 * har skrudd av — de skal ikke ligge skjult i HTML-en, de skal ikke være der.
 *
 * Nyheter og utvalgte hytter henter både det manuelle og det automatiske
 * utvalget. Hvilket som brukes avgjøres i velgUtvalg() under, ikke i GROQ,
 * fordi antallet er et felt og ikke kan settes inn i et utsnitt her.
 */
const BLOKKER = `blokker[aktiv != false]{
  _key,
  _type,
  _type == "blokkHero" => {
    overskrift,
    ingress,
    "bilde": bilde${BILDE},
    "videoUrl": video.asset->url,
    knapper[]${KNAPP}
  },
  _type == "blokkBudskap" => {
    overskrift,
    tekst,
    "bakgrunnsbilde": bakgrunnsbilde${BILDE},
    knapp${KNAPP}
  },
  _type == "blokkArtikkel" => {
    overskrift,
    tekst,
    "bilde": bilde${BILDE},
    "ekstrabilde": ekstrabilde${BILDE},
    bildeplassering,
    knapp${KNAPP}
  },
  _type == "blokkStatus" => {
    overskrift,
    "bakgrunnsbilde": bakgrunnsbilde${BILDE},
    rader[]{etikett, kilde, byggetrinn, verdi, ikon, fremhevet}
  },
  _type == "blokkUtvalgteHytter" => {
    overskrift,
    utvalg,
    antall,
    "valgte": enheter[]->{${ENHET_FELT}, "modell": hyttemodell->${MODELL_KORT}},
    "automatiske": *[_type == "enhet" && enhetstype == "hytte" && status == "ledig"] | order(nummer asc)[0...9]{
      ${ENHET_FELT},
      "modell": hyttemodell->${MODELL_KORT}
    }
  },
  _type == "blokkSitat" => {
    sitat,
    navn,
    oversettelse,
    "portrett": portrett${BILDE}
  },
  _type == "blokkBilder" => {
    overskrift,
    "bilder": bilder[]${BILDE}
  },
  _type == "blokkNyheter" => {
    overskrift,
    utvalg,
    antall,
    knapp${KNAPP},
    "valgte": artikler[]->${ARTIKKEL_KORT},
    "automatiske": *[_type == "artikkel" && skjulIListe != true] | order(dato desc)[0...12]${ARTIKKEL_KORT}
  },
  _type == "blokkKort" => {
    overskrift,
    visning,
    monster,
    visFilter,
    kort[]{
      etikett,
      tittel,
      detalj,
      sesong,
      "bilde": bilde${BILDE},
      "ikon": ikon->{
        aktivitet,
        navn,
        // select() og ikke et objekt rett fram: et objektuttrykk bygges alltid,
        // også når bildet mangler, og da blir feltet sant med url = null.
        // Kortet ville trodd det hadde en illustrasjon og aldri falt tilbake
        // til strekikonet.
        "illustrasjon": select(defined(illustrasjon.asset) => {"url": illustrasjon.asset->url, altTekst})
      },
      knapp${KNAPP}
    }
  },
  _type == "blokkFremhevet" => {
    overskrift,
    tekst,
    "bilde": bilde${BILDE},
    knapp${KNAPP}
  }
}`

const SIDE = `*[_type == "side" && sideNavn == $sideNavn][0]{
  sideNavn,
  overskrift,
  ingress,
  tittel,
  metaBeskrivelse,
  seksjoner[]{overskrift, ankerId, tekst},
  tomTilstand,
  hyttetyperIngress,
  situasjonsplan${BILDE},
  "sommerBilde": sommerBilde${BILDE},
  "vinterBilde": vinterBilde${BILDE},
  tomtekontakt{navn, telefon, epost, tekst},
  ${BLOKKER}
}`

/**
 * Reguleringsreglene. Ett dokument, felles for alle tomtene — verdiene skal
 * aldri skrives inn per enhet, og aldri i koden.
 */
const REGULERINGSREGLER = `*[_type == "reguleringsregler"][0]{
  planNavn,
  planId,
  bebyggelse,
  maksByaToEtasjer,
  maksByaTreEtasjer,
  maksGesimshoyde,
  takform,
  maksBygningsbredde,
  maksLengdeToEtasjer,
  maksLengdeTreEtasjer,
  moneretning,
  parkeringskrav,
  levegg,
  ikkeTillatt,
  infrastruktur,
  terrengtilpasning,
  "planDokument": planDokument->{tittel, "url": fil.asset->url}
}`

/**
 * Tomtene. De har ingen hyttemodell — feltet er valgfritt nettopp fordi en
 * tomtekjøper tar med sin egen utbygger.
 */
const TOMTER = `*[_type == "enhet" && enhetstype == "tomt"] | order(nummer asc){
  ${ENHET_FELT}
}`

/**
 * Tallene bak «Status nå», og bak filteret som skjuler tomter-menypunktet.
 *
 * `enheter` er den rå lista med status og byggetrinn. Statusblokken lar
 * redaktøren telle per byggetrinn, og å lage én count() per mulig byggetrinn
 * her ville krevd at GROQ visste hvilke trinn som finnes. Lista er noen få
 * rader, så den telles i TypeScript i stedet.
 */
const STATUSTALL = `{
  "hytterTotalt": count(*[_type == "enhet" && enhetstype == "hytte"]),
  "hytterLedige": count(*[_type == "enhet" && enhetstype == "hytte" && status == "ledig"]),
  "tomterTotalt": count(*[_type == "enhet" && enhetstype == "tomt"]),
  "tomterLedige": count(*[_type == "enhet" && enhetstype == "tomt" && status == "ledig"]),
  "enheter": *[_type == "enhet"]{enhetstype, status, byggetrinn}
}`

const MODELL_FULL = `{
  navn,
  "slug": slug.current,
  delomrade,
  bra,
  prom,
  antallSoverom,
  antallBad,
  harBadstue,
  harVaskerom,
  antallBod,
  harTerrasse,
  harParkering,
  antallEtasjer,
  beskrivelse,
  materialer,
  illustrasjonsforbehold,
  plantegninger[]${BILDE},
  fasadetegninger[]${BILDE},
  interiorbilder[]${BILDE}
}`

const HYTTER = `*[_type == "enhet" && enhetstype == "hytte"] | order(nummer asc){
  ${ENHET_FELT},
  "modell": hyttemodell->${MODELL_KORT}
}`

const MODELLER = `*[_type == "hyttemodell"] | order(navn asc)${MODELL_FULL}`

/** Seksjonene på områdesiden. Hver har sin egen sommer- og vintervariant. */
const OMRADESEKSJONER = `*[_type == "omradeInnhold"] | order(rekkefolge asc){
  tittel,
  seksjonsId,
  rekkefolge,
  "sommerBilde": sommerBilde${BILDE},
  sommerInnhold,
  "vinterBilde": vinterBilde${BILDE},
  vinterInnhold
}`

/**
 * Sakene som skal stå i lista. `skjulIListe` er for sider som ligger under
 * /siste-nytt fordi de bruker artikkelmalen, men som ikke er nyheter — de
 * beskriver prosjektet i stedet for noe som nettopp har skjedd.
 *
 * `!= true` og ikke `== false`, så saker skrevet før feltet fantes fortsatt
 * vises. Samme regel som `aktiv` på blokkene.
 */
const ARTIKLER = `*[_type == "artikkel" && skjulIListe != true] | order(dato desc){
  tittel,
  "slug": slug.current,
  dato,
  ingress,
  "bilde": bilde${BILDE},
  forfatter
}`

/**
 * Slugene som skal bli sider under /siste-nytt.
 *
 * Saker med `skjulIListe` er utelatt. De har fått sin egen adresse i
 * `src/pages/`, og bygde vi dem her også, ville nøyaktig samme tekst ligget
 * på to URL-er — og Google måtte gjettet hvilken som gjelder.
 */
const ARTIKKELSTIER = `*[_type == "artikkel" && skjulIListe != true]{"slug": slug.current}`

const ARTIKKEL = `*[_type == "artikkel" && slug.current == $slug][0]{
  tittel,
  "slug": slug.current,
  dato,
  ingress,
  "bilde": bilde${BILDE},
  "avslutningsbilde": avslutningsbilde${BILDE},
  brodtekst,
  forfatter
}`

export function hentInnstillinger(): Promise<Innstillinger | null> {
  return sanity.fetch<Innstillinger | null>(INNSTILLINGER)
}

/**
 * GROQ henter både det manuelle og det automatiske utvalget for nyheter og
 * utvalgte hytter. Her avgjøres hvilket som faktisk brukes, og antallet
 * kuttes ned — det kan ikke gjøres i utsnittet i spørringen, fordi grensen
 * er et felt redaktøren setter.
 */
interface RaattUtvalg {
  utvalg?: 'manuelt' | 'nyeste' | 'ledige'
  antall?: number
  valgte?: unknown[]
  automatiske?: unknown[]
}

function velgUtvalg(blokk: RaattUtvalg, standardAntall: number): unknown[] {
  if (blokk.utvalg === 'manuelt') return blokk.valgte ?? []
  return (blokk.automatiske ?? []).slice(0, blokk.antall ?? standardAntall)
}

function normaliserBlokker(side: Side | null): Side | null {
  if (!side?.blokker) return side

  const blokker = side.blokker.map((blokk) => {
    if (blokk._type === 'blokkNyheter') {
      const {valgte, automatiske, utvalg, antall, ...resten} = blokk as typeof blokk & RaattUtvalg
      return {...resten, artikler: velgUtvalg({utvalg, antall, valgte, automatiske}, 6)}
    }
    if (blokk._type === 'blokkUtvalgteHytter') {
      const {valgte, automatiske, utvalg, antall, ...resten} = blokk as typeof blokk & RaattUtvalg
      return {...resten, enheter: velgUtvalg({utvalg, antall, valgte, automatiske}, 3)}
    }
    return blokk
  })

  return {...side, blokker: blokker as Side['blokker']}
}

export async function hentSide(sideNavn: SideNavn): Promise<Side | null> {
  const side = await sanity.fetch<Side | null>(SIDE, {sideNavn})
  return normaliserBlokker(side)
}

/** Tallene bak «Status nå». Telles opp i Sanity, aldri skrevet i koden. */
export function hentStatustall(): Promise<Statustall> {
  return sanity.fetch<Statustall>(STATUSTALL)
}

/** Alle hytteenheter, også solgte — de vises nedtonet som sosialt bevis. */
export function hentHytter(): Promise<Enhet[]> {
  return sanity.fetch<Enhet[]>(HYTTER)
}

/** Alle tomter, også solgte. Solgte vises nedtonet, som hyttene. */
export function hentTomter(): Promise<Enhet[]> {
  return sanity.fetch<Enhet[]>(TOMTER)
}

export function hentReguleringsregler(): Promise<Reguleringsregler | null> {
  return sanity.fetch<Reguleringsregler | null>(REGULERINGSREGLER)
}

export function hentOmradeseksjoner(): Promise<Omradeseksjon[]> {
  return sanity.fetch<Omradeseksjon[]>(OMRADESEKSJONER)
}

/** Sakene som skal stå i lista. Skjulte saker er allerede filtrert bort i GROQ. */
export function hentArtikler(): Promise<Artikkel[]> {
  return sanity.fetch<Artikkel[]>(ARTIKLER)
}

/**
 * Alle artikkelstier, også de skjulte. Brukes bare av `getStaticPaths` — en
 * skjult sak skal ha sin egen side, den skal bare ikke stå i lista.
 *
 * Egen funksjon og ikke et flagg på `hentArtikler()`, fordi den som bygger
 * ruter og den som bygger lista skal ha åpenbart forskjellige verktøy. Med
 * ett felles kall ville en skjult sak før eller siden havnet i lista igjen.
 */
export function hentArtikkelstier(): Promise<{slug: string}[]> {
  return sanity.fetch<{slug: string}[]>(ARTIKKELSTIER)
}

export function hentArtikkel(slug: string): Promise<Artikkel | null> {
  return sanity.fetch<Artikkel | null>(ARTIKKEL, {slug})
}

export function hentModeller(): Promise<Hyttemodell[]> {
  return sanity.fetch<Hyttemodell[]>(MODELLER)
}
