/**
 * TypeScript-motparten til skjemaene i sanity/schemas/.
 * Flerspråkfeltene har alltid nøklene `no` og `en` — se objects/locale.ts.
 */

export interface LokalTekst {
  no: string
  en: string
}

export interface Menypunkt {
  /** Menyteksten slik den vises. */
  tekst: LokalTekst
  /** Norsk sti, for eksempel «/hytter». Engelsk motpart slås opp i lib/sprak.ts. */
  url: string
}

export interface Innstillinger {
  navigasjon: Menypunkt[]
  footerTekst?: LokalTekst
  interesseskjemaTittel?: LokalTekst
  interesseskjemaIngress?: LokalTekst
  samtykkeDetteProsjektet?: LokalTekst
  samtykkeAndreProsjekter?: LokalTekst
  sendKnappTekst?: LokalTekst
  kvitteringstekst?: LokalTekst
  feiltekst?: LokalTekst
}

export type SideNavn = 'forside' | 'hytter' | 'tomter' | 'omradet' | 'siste-nytt' | 'personvern'

export interface Sideseksjon {
  overskrift: LokalTekst
  /** Gjør seksjonen lenkbar. «finansiering» og «megler» er referert fra netlify.toml. */
  ankerId?: string
  tekst?: LokalTekst
}

export interface Side {
  sideNavn: SideNavn
  /** Overskriften øverst på siden (H1). */
  overskrift?: LokalTekst
  ingress?: LokalTekst
  /** Meta-tittel — browser-fane og Google-treff. */
  tittel: LokalTekst
  metaBeskrivelse?: LokalTekst
  seksjoner?: Sideseksjon[]
  /** Vises i stedet for en tom liste når ingen enheter er ledige. */
  tomTilstand?: LokalTekst
  situasjonsplan?: Bilde
  /** Forklarer valget mellom Nyørks hyttetyper og egen hytte innenfor reguleringsplanen. */
  hyttetyperIngress?: LokalTekst
  /** Blokkene siden bygges av, i rekkefølge. Blokker som er skrudd av er allerede filtrert bort. */
  blokker?: Blokk[]
  /** Kun på tomtesiden: tomtene selges direkte av utbygger, ikke gjennom megler. */
  tomtekontakt?: Tomtekontakt
  /** Kun på områdesiden: toppbildet bytter sammen med sesongen. */
  sommerBilde?: Bilde
  vinterBilde?: Bilde
}

import type {Aktivitet} from './ikoner'

export interface Knapp {
  tekst: LokalTekst
  /** Norsk sti som «/hytter», eller full adresse til en annen nettside. */
  sti: string
}

export interface ArtikkelKort {
  tittel: LokalTekst
  slug: string
  dato: string
  ingress?: LokalTekst
  bilde?: Bilde
}

interface Blokkbase {
  _key: string
  _type: string
}

export interface BlokkHero extends Blokkbase {
  _type: 'blokkHero'
  overskrift: LokalTekst
  ingress?: LokalTekst
  bilde?: Bilde
  videoUrl?: string
  knapper?: Knapp[]
}

export interface BlokkBudskap extends Blokkbase {
  _type: 'blokkBudskap'
  overskrift: LokalTekst
  tekst?: LokalTekst
  knapp?: Knapp
}

export interface BlokkArtikkel extends Blokkbase {
  _type: 'blokkArtikkel'
  overskrift: LokalTekst
  tekst?: LokalTekst
  bilde?: Bilde
  /** Valgfritt. Legges mindre og forskjøvet oppå hovedbildet. */
  ekstrabilde?: Bilde
  bildeplassering?: 'venstre' | 'hoyre'
  knapp?: Knapp
}

export interface BlokkBilder extends Blokkbase {
  _type: 'blokkBilder'
  overskrift?: LokalTekst
  /** To eller tre. Rekkefølgen bestemmer plassen i oppsettet. */
  bilder: Bilde[]
}

export interface Statusrad {
  etikett: LokalTekst
  /** «solgte» og «ledige» telles i Sanity. «manuelt» skrives inn. */
  kilde: 'solgte' | 'ledige' | 'manuelt'
  /** Avgrenser tellingen til ett byggetrinn. Tom betyr hele Nyørk. */
  byggetrinn?: number
  /** Brukes kun når kilde er «manuelt». Kan være et ord, som «Kommer». */
  verdi?: LokalTekst
  ikon?: 'nokkel' | 'solgt' | 'hytte' | 'tomt' | 'heis' | 'ingen'
  fremhevet?: boolean
}

export interface BlokkStatus extends Blokkbase {
  _type: 'blokkStatus'
  overskrift?: LokalTekst
  bakgrunnsbilde?: Bilde
  rader?: Statusrad[]
}

export interface BlokkUtvalgteHytter extends Blokkbase {
  _type: 'blokkUtvalgteHytter'
  overskrift: LokalTekst
  enheter: Enhet[]
}

export interface BlokkSitat extends Blokkbase {
  _type: 'blokkSitat'
  /** Alltid norsk, og på dialekt der det er sagt på dialekt. Skal aldri normaliseres. */
  sitat: string
  navn: string
  /** Vises under sitatet på engelsk side, aldri i stedet for det. */
  oversettelse?: string
  portrett?: Bilde
}

export interface BlokkNyheter extends Blokkbase {
  _type: 'blokkNyheter'
  overskrift: LokalTekst
  artikler: ArtikkelKort[]
  knapp?: Knapp
}

export interface Kortikon {
  aktivitet: Aktivitet
  navn?: LokalTekst
  /** 3D-illustrasjonen. Mangler den, faller kortet tilbake til strekikonet. */
  illustrasjon?: Bilde
}

/** Hvilket filter kortet dukker opp i. */
export type Kortsesong = 'vinter' | 'sommer' | 'helear'

export interface Kort {
  etikett?: LokalTekst
  tittel: LokalTekst
  /** Én konkret setning — et tall eller et navn, ikke skryt. */
  detalj?: LokalTekst
  sesong?: Kortsesong
  bilde?: Bilde
  ikon?: Kortikon
  knapp?: Knapp
}

export interface BlokkKort extends Blokkbase {
  _type: 'blokkKort'
  overskrift?: LokalTekst
  visning: 'tekstUnder' | 'tekstOver'
  monster?: 'trearer' | 'hoydekurver' | 'ingen'
  visFilter?: boolean
  kort: Kort[]
}

export interface BlokkFremhevet extends Blokkbase {
  _type: 'blokkFremhevet'
  overskrift: LokalTekst
  tekst?: LokalTekst
  bilde?: Bilde
  knapp?: Knapp
}

export type Blokk =
  | BlokkHero
  | BlokkBudskap
  | BlokkArtikkel
  | BlokkStatus
  | BlokkUtvalgteHytter
  | BlokkSitat
  | BlokkKort
  | BlokkBilder
  | BlokkNyheter
  | BlokkFremhevet

/**
 * Reguleringsplanens regler. Like for alle tomtene, derfor ett dokument som
 * hver tomt peker på — verdiene skal aldri skrives inn per enhet.
 */
export interface Reguleringsregler {
  planNavn: string
  planId: string
  bebyggelse?: LokalTekst
  maksByaToEtasjer?: number
  maksByaTreEtasjer?: number
  maksGesimshoyde?: number
  takform?: LokalTekst
  maksBygningsbredde?: LokalTekst
  maksLengdeToEtasjer?: number
  maksLengdeTreEtasjer?: number
  moneretning?: LokalTekst
  parkeringskrav?: LokalTekst
  levegg?: LokalTekst
  /** Det kjøperen bør vite før kjøp, ikke oppdage etterpå. */
  ikkeTillatt?: LokalTekst[]
  infrastruktur?: LokalTekst
  terrengtilpasning?: LokalTekst
  planDokument?: {tittel?: LokalTekst; url: string}
}

/** Kontaktpersonen som selger tomtene direkte. Ikke en megler. */
export interface Tomtekontakt {
  navn: string
  telefon?: string
  epost?: string
  tekst?: LokalTekst
}

/**
 * Riktekst fra Sanity. Typen holdes løs med vilje — Portable Text har mange
 * felter, og Riktekst.astro plukker det den kjenner og hopper over resten.
 */
export type Riktekstblokk = {
  _key: string
  _type: string
  style?: string
  listItem?: string
  children?: {_key: string; _type: string; text?: string; marks?: string[]}[]
  markDefs?: {_key: string; _type: string; href?: string}[]
}

export interface LokalRiktekst {
  no?: Riktekstblokk[]
  en?: Riktekstblokk[]
}

/** Én seksjon på områdesiden, med hver sin sommer- og vintervariant. */
export interface Omradeseksjon {
  tittel: LokalTekst
  seksjonsId?: string
  rekkefolge?: number
  sommerBilde?: Bilde
  sommerInnhold?: LokalRiktekst
  vinterBilde?: Bilde
  vinterInnhold?: LokalRiktekst
}

export interface Artikkel {
  tittel: LokalTekst
  slug: string
  dato: string
  ingress?: LokalTekst
  bilde?: Bilde
  /** Valgfritt bilde i full bredde etter teksten. */
  avslutningsbilde?: Bilde
  brodtekst?: LokalRiktekst
  forfatter?: string
}

/** Tallene bak «Status nå». Telles opp fra enhetene, aldri skrevet i koden. */
export interface Statustall {
  hytterTotalt: number
  hytterLedige: number
  tomterTotalt: number
  tomterLedige: number
  /** Rå liste til telling per byggetrinn i statusblokken. */
  enheter: {enhetstype: Enhetstype; status: Status; byggetrinn?: number}[]
}

export interface Bilde {
  url: string
  altTekst: LokalTekst
  fotokreditt?: string
}

export type Enhetstype = 'hytte' | 'tomt'
export type Status = 'ledig' | 'reservert' | 'solgt'
/** Hvor langt bygget er kommet. Valgfri — uten verdi vises ingen merking. */
export type Byggestatus = 'ferdigbygget' | 'underBygging' | 'ikkePabegynt'

/** Arkitekturen — skrives én gang og gjenbrukes av alle enheter av samme type. */
export interface Hyttemodell {
  navn: string
  slug: string
  delomrade?: string
  bra: number
  prom?: number
  antallSoverom: number
  antallBad: number
  harBadstue?: boolean
  harVaskerom?: boolean
  antallBod?: number
  harTerrasse?: boolean
  harParkering?: boolean
  antallEtasjer: number
  beskrivelse?: LokalTekst
  materialer?: LokalTekst
  illustrasjonsforbehold?: LokalTekst
  plantegninger?: Bilde[]
  fasadetegninger?: Bilde[]
  interiorbilder?: Bilde[]
  // utbyggerIntern hentes aldri — se sporringer.ts.
}

/** Den konkrete hytta eller tomta. */
export interface Enhet {
  nummer: string
  slug: string
  enhetstype: Enhetstype
  status: Status
  byggestatus?: Byggestatus
  byggetrinn?: number
  delomrade?: string
  pris?: number
  /** Satt kun ved prisreduksjon. Vises overstrøket foran prisen. */
  opprinneligPris?: number
  tomtestorrelse?: number
  utsiktsretning?: LokalTekst
  solforhold?: LokalTekst
  beskrivelse?: LokalTekst
  finnAnnonseUrl?: string
  prospekt?: {tittel: LokalTekst; url: string}
  bilder?: Bilde[]
  modell?: Hyttemodell | null
}
