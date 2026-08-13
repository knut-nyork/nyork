import {UI} from '../lib/tekster'
import type {Sprak} from '../lib/sprak'
import type {Status} from '../lib/typer'

/**
 * Status som data, aldri som innbrent bilde — ellers kan ingen filtrere på
 * den, og Google leser den ikke. `data-status` gjør den også lesbar for
 * testing og for et framtidig kart.
 */
const FARGER: Record<Status, string> = {
  ledig: 'bg-background-surface-4 text-foreground-default',
  reservert: 'bg-feedback-warning-background text-feedback-warning-foreground',
  solgt: 'bg-background-surface-3 text-foreground-muted',
}

export default function Statusmerke({status, sprak}: {status: Status; sprak: Sprak}) {
  return (
    <span
      data-status={status}
      className={`inline-flex shrink-0 items-center rounded-liten px-3 py-1 font-body text-2xsmall ${FARGER[status]}`}
    >
      {UI[sprak].hytter.status[status]}
    </span>
  )
}
