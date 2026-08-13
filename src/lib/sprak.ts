import type {LokalTekst} from './typer'

export const SPRAK = ['no', 'en'] as const
export type Sprak = (typeof SPRAK)[number]

export const HOVEDSPRAK: Sprak = 'no'

/**
 * Rutekartet fra docs/01-byggeinstruks.md. Norsk sti er nøkkelen — det er den
 * Sanity lagrer i navigasjonen — og den engelske motparten slås opp her.
 *
 * Legger du til en side, skal begge språk inn samtidig. Endrer du en norsk sti
 * på en side som allerede er publisert, må du sette opp 301-redirect i
 * netlify.toml: siden har rangering på Google siden 2021.
 */
export const RUTER: readonly {no: string; en: string}[] = [
  {no: '/', en: '/en/'},
  {no: '/hytter', en: '/en/cabins'},
  {no: '/tomter', en: '/en/plots'},
  {no: '/omradet', en: '/en/area'},
  {no: '/siste-nytt', en: '/en/news'},
  {no: '/personvern', en: '/en/privacy'},
]

export function sprakFraSti(sti: string): Sprak {
  return sti === '/en' || sti.startsWith('/en/') ? 'en' : 'no'
}

/**
 * Oversetter en norsk sti til det gitte språket. Undersider arver forelderens
 * engelske sti, slik at /hytter/hytte-5 blir /en/cabins/hytte-5 — slugen selv
 * er den samme på begge språk, som stedsnavn.
 */
export function stiForSprak(norskSti: string, sprak: Sprak): string {
  if (sprak === 'no') return norskSti

  const rute = RUTER.find((r) => r.no === norskSti)
  if (rute) return rute.en

  const forelder = RUTER.find((r) => r.no !== '/' && norskSti.startsWith(`${r.no}/`))
  if (forelder) return forelder.en + norskSti.slice(forelder.no.length)

  return `/en${norskSti}`
}

/**
 * Henter riktig språkvariant av et Sanity-felt. Faller tilbake til norsk hvis
 * engelsk mangler — norsk er hovedspråket, og en tom overskrift er verre enn
 * en uoversatt.
 */
export function tekst(felt: LokalTekst | undefined | null, sprak: Sprak): string {
  if (!felt) return ''
  return felt[sprak] || felt.no || ''
}
