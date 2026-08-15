import {formaterPris} from '../lib/hytter'
import {UI} from '../lib/tekster'
import type {Sprak} from '../lib/sprak'

/**
 * Prisen, med den opprinnelige overstrøket foran når den er satt ned.
 *
 * `<s>` og ikke bare gjennomstreking i CSS: en overstrøket pris betyr noe —
 * «dette gjaldt før» — og den betydningen skal også nå den som hører siden
 * lest opp, ikke bare den som ser den.
 *
 * Begge prisene får en skjult etikett foran seg. Uten den leser en skjermleser
 * to tall etter hverandre uten å si hvilket som gjelder nå.
 *
 * Reduksjonen vises bare når den opprinnelige prisen faktisk er høyere. Er
 * den lik eller lavere, er det ikke et avslag, og da er tallet støy.
 */
interface Props {
  pris?: number
  opprinneligPris?: number
  sprak: Sprak
}

export default function Pris({pris, opprinneligPris, sprak}: Props) {
  const ui = UI[sprak].hytter

  if (!pris) return <>{ui.prisPaForesporsel}</>

  const satt_ned = Boolean(opprinneligPris && opprinneligPris > pris)

  if (!satt_ned) return <>{formaterPris(pris)}</>

  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-2">
      <s className="text-card-text-lighter">
        <span className="sr-only">{ui.forPris}: </span>
        {formaterPris(opprinneligPris!)}
      </s>
      <span>
        <span className="sr-only">{ui.naaPris}: </span>
        {formaterPris(pris)}
      </span>
    </span>
  )
}
