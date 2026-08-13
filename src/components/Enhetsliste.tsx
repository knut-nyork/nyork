import Hyttekort from './Hyttekort'
import {grupperPaByggetrinn} from '../lib/hytter'
import {UI} from '../lib/tekster'
import type {Sprak} from '../lib/sprak'
import type {Enhet} from '../lib/typer'

/**
 * Kortene i liste, gruppert på byggetrinn. Brukes både statisk fra Astro og
 * inne i hyttevelgeren, slik at grupperingen ser lik ut begge steder.
 */
export default function Enhetsliste({enheter, sprak}: {enheter: Enhet[]; sprak: Sprak}) {
  const ui = UI[sprak].hytter
  const grupper = grupperPaByggetrinn(enheter)

  if (enheter.length === 0) {
    return <p className="font-body text-small text-foreground-muted">{ui.ingenTreff}</p>
  }

  return (
    <div className="flex flex-col gap-12">
      {grupper.map((gruppe) => (
        <section key={gruppe.byggetrinn ?? 'ukjent'} className="flex flex-col gap-6">
          <h3 className="font-heading text-large font-medium">
            {gruppe.byggetrinn === null
              ? ui.utenByggetrinn
              : `${ui.byggetrinn} ${gruppe.byggetrinn}`}
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gruppe.enheter.map((enhet) => (
              <Hyttekort key={enhet.slug} enhet={enhet} sprak={sprak} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
