import {UI} from '../lib/tekster'
import type {Sprak} from '../lib/sprak'
import type {Byggestatus} from '../lib/typer'

/**
 * Hvor langt bygget er kommet. Står ved siden av salgsstatusen på
 * hyttesiden, og bare der — ikke på hyttekortene. På et kort er det bare
 * plass til ett svar, og der er «kan jeg kjøpe den?» spørsmålet.
 *
 * Dempet med vilje, i omriss framfor fylt flate. De to merkene svarer på
 * ulike spørsmål — «kan jeg kjøpe den?» og «når kan jeg flytte inn?» — og
 * det første er det viktigste. To like merker ved siden av hverandre
 * ville konkurrert i stedet for å utfylle.
 *
 * Feltet er valgfritt i Sanity. Er det ikke satt, vises ingenting: en
 * usikker byggestatus er verre enn ingen.
 */
export default function Byggestatusmerke({byggestatus, sprak}: {byggestatus: Byggestatus; sprak: Sprak}) {
  return (
    <span
      data-byggestatus={byggestatus}
      className="inline-flex shrink-0 items-center rounded-liten border border-border-default px-3 py-1 font-body text-2xsmall text-foreground-muted"
    >
      {UI[sprak].hytter.byggestatus[byggestatus]}
    </span>
  )
}
