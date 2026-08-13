import type {Enhet, Status} from './typer'

/**
 * Under denne terskelen er et filtreringsgrensesnitt bare støy — da vises
 * kortene rett fram. Terskelen leses av data, ikke av at noen husker å skru
 * filteret av. Se docs/01-byggeinstruks.md, «Hyttevelgeren».
 */
export const FILTERTERSKEL = 5

export function antallLedige(enheter: Enhet[]): number {
  return enheter.filter((enhet) => enhet.status === 'ledig').length
}

export function skalViseFilter(enheter: Enhet[]): boolean {
  return antallLedige(enheter) >= FILTERTERSKEL
}

/**
 * Menypunkter som skal vises.
 *
 * `/tomter` skjules når ingen tomter er ledige. Det følger av data, ikke av at
 * noen husker å skru av punktet i Sanity — selges den siste tomta, forsvinner
 * lenken ved neste publisering av seg selv.
 *
 * Selve siden bygges likevel og svarer på sin egen URL. Den er bare ikke lenket
 * fra menyen, og viser da den tomme tilstanden med lenke til interesseskjemaet.
 * Å la den gi 404 ville brutt lenker som allerede er delt.
 */
export function synligNavigasjon<T extends {url: string}>(
  navigasjon: T[],
  antallLedigeTomter: number,
): T[] {
  if (antallLedigeTomter > 0) return navigasjon
  return navigasjon.filter((punkt) => punkt.url !== '/tomter')
}

export interface Byggetrinngruppe {
  byggetrinn: number | null
  enheter: Enhet[]
}

/** Grupperer på byggetrinn, laveste først. Enheter uten byggetrinn havner sist. */
export function grupperPaByggetrinn(enheter: Enhet[]): Byggetrinngruppe[] {
  const grupper = new Map<number | null, Enhet[]>()

  for (const enhet of enheter) {
    const nokkel = enhet.byggetrinn ?? null
    const gruppe = grupper.get(nokkel)
    if (gruppe) gruppe.push(enhet)
    else grupper.set(nokkel, [enhet])
  }

  return [...grupper.entries()]
    .map(([byggetrinn, gruppeenheter]) => ({byggetrinn, enheter: gruppeenheter}))
    .sort((a, b) => {
      if (a.byggetrinn === null) return 1
      if (b.byggetrinn === null) return -1
      return a.byggetrinn - b.byggetrinn
    })
}

/**
 * Norsk prisformat: mellomrom som tusenskille og komma-bindestrek til slutt —
 * «10 050 000 ,-». Hardt mellomrom, så tallet aldri brekker over to linjer.
 * Formateres for hånd framfor med Intl, som gir ulikt resultat alt etter
 * hvilke locale-data Node er bygget med.
 */
export function formaterPris(pris: number): string {
  const tall = Math.round(pris)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return `${tall} ,-`
}

/**
 * Legger på bredde slik at bilder aldri hentes i full oppløsning.
 * `auto=format` gir webp til nettlesere som takler det.
 */
export function bildeUrl(url: string, bredde: number): string {
  return `${url}?w=${bredde}&auto=format&fit=max`
}

const MANEDER_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/**
 * Dato på nyhetskort. Norsk gir «18.11.2024», engelsk «18 Nov 2024» — den
 * norske rekkefølgen dag-måned leses feil av engelske lesere når begge tall
 * er under 13. Formateres for hånd av samme grunn som prisen, se over.
 */
export function formaterDato(dato: string, sprak: 'no' | 'en'): string {
  // Artikler lagres som full tidsstempel (2026-02-10T09:00:00Z), enheter som
  // ren dato. Klokkeslettet kuttes her, ellers havner det i datoen.
  const [ar, maned, dag] = dato.slice(0, 10).split('-')
  if (!ar || !maned || !dag) return dato

  if (sprak === 'en') {
    const manedsnavn = MANEDER_EN[Number(maned) - 1] ?? maned
    return `${Number(dag)} ${manedsnavn} ${ar}`
  }
  return `${dag}.${maned}.${ar}`
}

export const STATUSREKKEFOLGE: Status[] = ['ledig', 'reservert', 'solgt']

/**
 * Første avsnitt, kuttet til meta-beskrivelseslengde. Brukes på sider der
 * beskrivelsen skrives for siden selv og ikke har en egen meta-tekst.
 */
export function forstAvsnitt(tekst: string, maksLengde = 155): string {
  const avsnitt = tekst.split(/\n\s*\n/)[0]?.trim() ?? ''
  if (avsnitt.length <= maksLengde) return avsnitt
  return `${avsnitt.slice(0, maksLengde - 1).trimEnd()}…`
}
