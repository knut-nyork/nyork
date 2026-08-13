import Bildeplassholder from './Bildeplassholder'
import Statusmerke from './Statusmerke'
import {bildeUrl, formaterPris} from '../lib/hytter'
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
      className={`hevet group flex flex-col gap-4 rounded-stor p-4 no-underline transition-colors hover:border-border-focus ${
        solgt ? 'opacity-60' : ''
      }`}
    >
      {bilde ? (
        <img
          src={bildeUrl(bilde.url, 600)}
          alt={tekst(bilde.altTekst, sprak)}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-medium object-cover"
        />
      ) : (
        <Bildeplassholder sideforhold="4 / 3" />
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-large font-semibold text-card-text group-hover:underline">
          {enhet.nummer}
        </h3>
        <Statusmerke status={enhet.status} sprak={sprak} />
      </div>

      <dl className="flex flex-col gap-1 font-body text-xsmall text-card-text">
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
          <dd>{enhet.pris ? formaterPris(enhet.pris) : ui.prisPaForesporsel}</dd>
        </div>
      </dl>
    </a>
  )
}
