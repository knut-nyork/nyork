import {useState} from 'react'
import {UI} from '../lib/tekster'
import {stiForSprak, tekst, type Sprak} from '../lib/sprak'
import type {Innstillinger} from '../lib/typer'

/**
 * Interesseskjemaet, som ligger på alle sider.
 *
 * Skjemaet er satt opp for Netlify Forms (`data-netlify`, `form-name` og
 * honeypot), men **Netlify Forms er ikke aktivert ennå**. Fram til det skrus
 * på i Netlify vil innsending svare 404, og brukeren får feilteksten fra
 * Sanity. Markupen er den Netlify trenger for å oppdage skjemaet ved bygg —
 * derfor rendres den statisk, ikke først når React tar over.
 *
 * Sendingen går som AJAX slik at kvittering og feil kan vises på stedet, på
 * riktig språk, uten en egen takkeside.
 */

const SKJEMANAVN = 'interesse'

type Status = 'klar' | 'sender' | 'sendt' | 'feil'

interface Props {
  sprak: Sprak
  innstillinger: Innstillinger | null
}

export default function Interesseskjema({sprak, innstillinger}: Props) {
  const [status, setStatus] = useState<Status>('klar')
  const ui = UI[sprak]

  const tittel = tekst(innstillinger?.interesseskjemaTittel, sprak)
  const ingress = tekst(innstillinger?.interesseskjemaIngress, sprak)
  const samtykkeDette = tekst(innstillinger?.samtykkeDetteProsjektet, sprak)
  const samtykkeAndre = tekst(innstillinger?.samtykkeAndreProsjekter, sprak)
  const sendTekst = tekst(innstillinger?.sendKnappTekst, sprak) || ui.send
  const kvittering = tekst(innstillinger?.kvitteringstekst, sprak)
  const feiltekst = tekst(innstillinger?.feiltekst, sprak)

  async function send(hendelse: React.FormEvent<HTMLFormElement>) {
    hendelse.preventDefault()
    setStatus('sender')

    const data = new FormData(hendelse.currentTarget)
    // Samtykket skal logges med tidspunkt, ikke bare som avkrysset.
    data.set('samtykke-tidspunkt', new Date().toISOString())

    const felter = new URLSearchParams()
    for (const [navn, verdi] of data.entries()) {
      if (typeof verdi === 'string') felter.append(navn, verdi)
    }

    try {
      const svar = await fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: felter.toString(),
      })
      setStatus(svar.ok ? 'sendt' : 'feil')
    } catch {
      setStatus('feil')
    }
  }

  if (status === 'sendt') {
    return (
      <section id="meld-interesse" className="bg-background-surface-1">
        <div className="mx-auto max-w-[720px] px-5 py-20 md:px-10">
          <p role="status" className="font-body text-xsmall whitespace-pre-line">
            {kvittering}
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="meld-interesse" className="bg-background-surface-1">
      <div className="mx-auto max-w-[720px] px-5 py-20 md:px-10">
        {tittel && <h2 className="font-heading font-semibold text-2xlarge">{tittel}</h2>}
        {ingress && (
          <p className="mt-4 font-body text-xsmall whitespace-pre-line">{ingress}</p>
        )}

        <form
          name={SKJEMANAVN}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={send}
          className="mt-10 flex flex-col gap-6"
        >
          <input type="hidden" name="form-name" value={SKJEMANAVN} />
          <input type="hidden" name="samtykke-tidspunkt" />
          <input type="hidden" name="sprak" value={sprak} />

          {/* Honeypot: skjult for folk, fristende for roboter. */}
          <p className="hidden">
            <label>
              {ui.honeypot}
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="font-body text-xsmall">{ui.navn}</span>
              <input type="text" name="navn" required autoComplete="name" className="felt" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-body text-xsmall">{ui.epost}</span>
              <input type="email" name="epost" required autoComplete="email" className="felt" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-body text-xsmall">
                {ui.telefon} <span className="text-foreground-muted">({ui.valgfritt})</span>
              </span>
              <input type="tel" name="telefon" autoComplete="tel" className="felt" />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="font-body text-xsmall">
              {ui.melding} <span className="text-foreground-muted">({ui.valgfritt})</span>
            </span>
            <textarea name="melding" rows={4} className="felt" />
          </label>

          <fieldset className="flex flex-col gap-3">
            <legend className="font-body text-xsmall">{ui.jegVilHoreOm}</legend>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="samtykke-nyork"
                className="mt-1 h-4 w-4 accent-[var(--semantic-color-foreground-default)]"
              />
              <span className="font-body text-xsmall">{samtykkeDette}</span>
            </label>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="samtykke-andre-prosjekter"
                className="mt-1 h-4 w-4 accent-[var(--semantic-color-foreground-default)]"
              />
              <span className="font-body text-xsmall">{samtykkeAndre}</span>
            </label>
          </fieldset>

          <p className="font-body text-2xsmall text-foreground-muted">
            {ui.personvernFor}{' '}
            <a href={stiForSprak('/personvern', sprak)} className="underline">
              {ui.personvernLenke}
            </a>
            .
          </p>

          {status === 'feil' && (
            <p role="alert" className="font-body text-xsmall text-feedback-error-foreground">
              {feiltekst}
            </p>
          )}

          <button type="submit" disabled={status === 'sender'} className="knapp knapp--primar self-start">
            {status === 'sender' ? ui.sender : sendTekst}
          </button>
        </form>
      </div>
    </section>
  )
}
