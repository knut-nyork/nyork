import Bildeplassholder from './Bildeplassholder'
import Pris from './Pris'
import Statusmerke from './Statusmerke'
import {bildeUrl} from '../lib/hytter'
import {stiForSprak, tekst, type Sprak} from '../lib/sprak'
import {UI} from '../lib/tekster'
import type {Enhet} from '../lib/typer'

/**
 * Kortet for én konkret hytte. Rendres både statisk fra Astro og inne i
 * hyttevelger-øya, derfor React.
 *
 * Solgte hytter vises nedtonet, ikke skjult — de er sosialt bevis på at
 * prosjektet går bra.
 */
export default function Hyttekort({enhet, sprak}: {enhet: Enhet; sprak: Sprak}) {
  const ui = UI[sprak].hytter
  const solgt = enhet.status === 'solgt'
  const bilde = enhet.bilder?.[0]
  const href = stiForSprak(`/hytter/${enhet.slug}`, sprak)

  return (
    <a
      href={href}
      data-status={enhet.status}
      className={`hevet group flex h-full flex-col gap-3 rounded-stor p-3 no-underline transition-colors hover:border-border-focus ${
        solgt ? 'opacity-60' : ''
      }`}
    >
      {bilde ? (
        <img
          src={bildeUrl(bilde.url, 600)}
          alt={tekst(bilde.altTekst, sprak)}
          loading="lazy"
          className="aspect-[3/2] w-full rounded-medium object-cover"
        />
      ) : (
        <Bildeplassholder sideforhold="3 / 2" />
      )}

      <div className="flex items-start justify-between gap-2 px-1">
        <h3 className="font-heading text-medium font-semibold text-card-text group-hover:underline">
          {enhet.nummer}
        </h3>
        <Statusmerke status={enhet.status} sprak={sprak} />
      </div>

      <dl className="flex flex-col gap-1 px-1 pb-1 font-body text-2xsmall text-card-text">
        {enhet.modell && (
          <div className="flex justify-between gap-3">
            <dt className="text-card-text-lighter">{ui.hyttetype}</dt>
            <dd>{enhet.modell.navn}</dd>
          </div>
        )}
        {enhet.modell?.bra && (
          <div className="flex justify-between gap-3">
            <dt className="text-card-text-lighter">{ui.bra}</dt>
            <dd>{enhet.modell.bra} m²</dd>
          </div>
        )}
        {enhet.modell?.antallSoverom && (
          <div className="flex justify-between gap-3">
            <dt className="text-card-text-lighter">{ui.soverom}</dt>
            <dd>{enhet.modell.antallSoverom}</dd>
          </div>
        )}
        <div className="flex justify-between gap-3">
          <dt className="text-card-text-lighter">{ui.pris}</dt>
          <dd>
            <Pris pris={enhet.pris} opprinneligPris={enhet.opprinneligPris} sprak={sprak} />
          </dd>
        </div>
      </dl>
    </a>
  )
}
