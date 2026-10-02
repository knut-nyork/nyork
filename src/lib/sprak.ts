import type {LokalRiktekst, LokalTekst, Riktekstblokk} from './typer'

export const SPRAK = ['no', 'en', 'de'] as const
export type Sprak = (typeof SPRAK)[number]

export const HOVEDSPRAK: Sprak = 'no'

/**
 * Rutekartet fra docs/01-byggeinstruks.md. Norsk sti er nøkkelen — det er den
 * Sanity lagrer i navigasjonen — og de andre språkenes motparter slås opp her.
 *
 * Legger du til en side, skal alle tre språk inn samtidig. Endrer du en norsk
 * sti på en side som allerede er publisert, må du sette opp 301-redirect i
 * netlify.toml: siden har rangering på Google siden 2021.
 *
 * De tyske stiene er skrevet uten omlyder — «huetten», ikke «hütten». En ü i
 * en URL må prosentkodes, og da blir lenken uleselig overalt den limes inn.
 * ue/ae/oe er den vanlige skrivemåten på tyske nettadresser.
 */
export const RUTER: readonly Record<Sprak, string>[] = [
  {no: '/', en: '/en/', de: '/de/'},
  {no: '/hytter', en: '/en/cabins', de: '/de/huetten'},
  {no: '/tomter', en: '/en/plots', de: '/de/grundstuecke'},
  {no: '/omradet', en: '/en/area', de: '/de/umgebung'},
  {no: '/siste-nytt', en: '/en/news', de: '/de/aktuelles'},
  /* Står ikke i menyen. Den lenkes til fra fremhevet-blokka på forsiden. */
  {no: '/slik-blir-nyork', en: '/en/how-nyork-grows', de: '/de/so-waechst-nyork'},
  {no: '/personvern', en: '/en/privacy', de: '/de/datenschutz'},
]

export function sprakFraSti(sti: string): Sprak {
  for (const sprak of SPRAK) {
    /* Hovedspråket har ingen mappe — det ligger i roten og er svaret når
       ingen av de andre kjenner seg igjen. */
    if (sprak === HOVEDSPRAK) continue
    if (sti === `/${sprak}` || sti.startsWith(`/${sprak}/`)) return sprak
  }
  return HOVEDSPRAK
}

/**
 * Oversetter en norsk sti til det gitte språket. Undersider arver forelderens
 * sti, slik at /hytter/hytte-5 blir /de/huetten/hytte-5 — slugen selv er den
 * samme på alle språk, som stedsnavn.
 */
export function stiForSprak(norskSti: string, sprak: Sprak): string {
  if (sprak === HOVEDSPRAK) return norskSti

  const rute = RUTER.find((r) => r.no === norskSti)
  if (rute) return rute[sprak]

  const forelder = RUTER.find((r) => r.no !== '/' && norskSti.startsWith(`${r.no}/`))
  if (forelder) return forelder[sprak] + norskSti.slice(forelder.no.length)

  return `/${sprak}${norskSti}`
}

/**
 * Hvilke språk et felt kan hentes fra, i tur og orden.
 *
 * Tysk faller tilbake til engelsk før norsk. En tysk leser som møter et
 * uoversatt felt kommer lenger med den engelske teksten enn med den norske,
 * og norsk ligger sist som garantien for at det aldri blir stående tomt.
 *
 * Norsk er hovedspråket og har ingenting å falle tilbake på — der er feltet
 * påkrevd i Sanity.
 */
const FALLBACK: Record<Sprak, readonly Sprak[]> = {
  no: ['no'],
  en: ['en', 'no'],
  de: ['de', 'en', 'no'],
}

/**
 * Henter riktig språkvariant av et Sanity-felt. Går nedover fallback-kjeden
 * til noe finnes — en tom overskrift er verre enn en uoversatt.
 */
export function tekst(felt: LokalTekst | undefined | null, sprak: Sprak): string {
  if (!felt) return ''
  for (const kandidat of FALLBACK[sprak]) {
    const verdi = felt[kandidat]
    if (verdi) return verdi
  }
  return ''
}

/**
 * Samme for riktekst fra Sanity. Egen funksjon fordi Portable Text er en
 * liste av blokker og ikke en streng, og fordi en tom liste er noe annet enn
 * en manglende verdi — `?? []` nederst gjør at Riktekst.astro alltid får en
 * liste å gå gjennom.
 */
export function riktekst(felt: LokalRiktekst | undefined | null, sprak: Sprak): Riktekstblokk[] {
  if (!felt) return []
  for (const kandidat of FALLBACK[sprak]) {
    const verdi = felt[kandidat]
    if (verdi && verdi.length > 0) return verdi
  }
  return []
}
