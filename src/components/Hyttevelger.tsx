import {useMemo, useState} from 'react'
import Enhetsliste from './Enhetsliste'
import {STATUSREKKEFOLGE} from '../lib/hytter'
import {UI} from '../lib/tekster'
import type {Sprak} from '../lib/sprak'
import type {Enhet, Status} from '../lib/typer'

/**
 * Filteret over hyttelista. Rendres bare når det er nok ledige enheter til at
 * det gir mening — terskelen ligger i lib/hytter.ts, og siden avgjør ut fra
 * data om denne komponenten i det hele tatt tas i bruk.
 *
 * Valgene fylles fra enhetene, ikke fra en liste i koden, slik at nye
 * byggetrinn og modeller dukker opp av seg selv.
 */

const ALLE = 'alle'

export default function Hyttevelger({enheter, sprak}: {enheter: Enhet[]; sprak: Sprak}) {
  const ui = UI[sprak].hytter

  const [status, setStatus] = useState<string>(ALLE)
  const [byggetrinn, setByggetrinn] = useState<string>(ALLE)
  const [modell, setModell] = useState<string>(ALLE)
  const [soverom, setSoverom] = useState<string>(ALLE)

  const valg = useMemo(() => {
    const unike = <T,>(verdier: (T | undefined | null)[]) =>
      [...new Set(verdier.filter((v): v is T => v !== undefined && v !== null))]

    return {
      status: STATUSREKKEFOLGE.filter((s) => enheter.some((e) => e.status === s)),
      byggetrinn: unike(enheter.map((e) => e.byggetrinn)).sort((a, b) => a - b),
      modell: unike(enheter.map((e) => e.modell?.navn)).sort(),
      soverom: unike(enheter.map((e) => e.modell?.antallSoverom)).sort((a, b) => a - b),
    }
  }, [enheter])

  const filtrerte = enheter.filter((enhet) => {
    if (status !== ALLE && enhet.status !== status) return false
    if (byggetrinn !== ALLE && String(enhet.byggetrinn) !== byggetrinn) return false
    if (modell !== ALLE && enhet.modell?.navn !== modell) return false
    if (soverom !== ALLE && String(enhet.modell?.antallSoverom) !== soverom) return false
    return true
  })

  const harValg = status !== ALLE || byggetrinn !== ALLE || modell !== ALLE || soverom !== ALLE

  function nullstill() {
    setStatus(ALLE)
    setByggetrinn(ALLE)
    setModell(ALLE)
    setSoverom(ALLE)
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 rounded-medium border border-border-default p-5">
        <div className="flex flex-wrap items-end gap-4">
          <Velger
            etikett={ui.statusEtikett}
            verdi={status}
            settVerdi={setStatus}
            alle={ui.alle}
            valg={valg.status.map((s) => ({verdi: s, etikett: ui.status[s]}))}
          />
          <Velger
            etikett={ui.byggetrinn}
            verdi={byggetrinn}
            settVerdi={setByggetrinn}
            alle={ui.alle}
            valg={valg.byggetrinn.map((b) => ({verdi: String(b), etikett: String(b)}))}
          />
          <Velger
            etikett={ui.hyttetype}
            verdi={modell}
            settVerdi={setModell}
            alle={ui.alle}
            valg={valg.modell.map((m) => ({verdi: m, etikett: m}))}
          />
          <Velger
            etikett={ui.soverom}
            verdi={soverom}
            settVerdi={setSoverom}
            alle={ui.alle}
            valg={valg.soverom.map((s) => ({verdi: String(s), etikett: String(s)}))}
          />
          {harValg && (
            <button type="button" onClick={nullstill} className="knapp knapp--sekundar">
              {ui.nullstill}
            </button>
          )}
        </div>
        <p aria-live="polite" className="font-body text-2xsmall text-foreground-muted">
          {filtrerte.length} {ui.antallTreff}
        </p>
      </div>

      <Enhetsliste enheter={filtrerte} sprak={sprak} />
    </div>
  )
}

interface VelgerProps {
  etikett: string
  verdi: string
  settVerdi: (verdi: string) => void
  alle: string
  valg: {verdi: string; etikett: string}[]
}

function Velger({etikett, verdi, settVerdi, alle, valg}: VelgerProps) {
  return (
    <label className="flex min-w-[9rem] flex-1 flex-col gap-2">
      <span className="font-body text-2xsmall text-foreground-muted">{etikett}</span>
      <select value={verdi} onChange={(e) => settVerdi(e.target.value)} className="felt">
        <option value={ALLE}>{alle}</option>
        {valg.map((v) => (
          <option key={v.verdi} value={v.verdi}>
            {v.etikett}
          </option>
        ))}
      </select>
    </label>
  )
}
