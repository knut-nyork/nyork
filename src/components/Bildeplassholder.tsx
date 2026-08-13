/**
 * Vises der et bilde skal komme, men ennå ikke finnes.
 *
 * Bilderettighetene er ikke avklart, så de fleste bildefeltene i Sanity står
 * tomme en stund. Vi legger aldri placeholder-bilder inn i Sanity — feltet
 * står tomt, og denne rendres i stedet. Da kan «hva mangler bilder?» besvares
 * med én GROQ-spørring. Se docs/01-byggeinstruks.md.
 *
 * Sideforholdet må være det samme som det ekte bildet skal ha, ellers hopper
 * layouten den dagen bildene kommer.
 *
 * Merket er `Placeholder` fra designsystemet (components/data-display).
 */
interface Props {
  /** CSS aspect-ratio, for eksempel «16 / 9». */
  sideforhold?: string
  className?: string
}

export default function Bildeplassholder({sideforhold = '4 / 3', className = ''}: Props) {
  return (
    <div
      style={{aspectRatio: sideforhold}}
      className={`flex items-center justify-center rounded-medium bg-background-surface-3 text-foreground-muted ${className}`}
      aria-hidden="true"
    >
      <svg width="28" height="28" viewBox="0 0 16 16" fill="none">
        <path
          d="M 8 16 C 7.778 16 7.583 15.965 7.417 15.896 C 7.25 15.826 7.09 15.715 6.938 15.563 L 0.438 9.063 C 0.285 8.91 0.174 8.75 0.104 8.583 C 0.035 8.417 0 8.222 0 8 C 0 7.778 0.035 7.583 0.104 7.417 C 0.174 7.25 0.285 7.09 0.438 6.938 L 6.938 0.438 C 7.09 0.285 7.25 0.174 7.417 0.104 C 7.583 0.035 7.778 0 8 0 C 8.222 0 8.417 0.035 8.583 0.104 C 8.75 0.174 8.91 0.285 9.063 0.438 L 15.563 6.938 C 15.715 7.09 15.826 7.25 15.896 7.417 C 15.965 7.583 16 7.778 16 8 C 16 8.222 15.965 8.417 15.896 8.583 C 15.826 8.75 15.715 8.91 15.563 9.063 L 9.063 15.563 C 8.91 15.715 8.75 15.826 8.583 15.896 C 8.417 15.965 8.222 16 8 16 Z M 8 14.5 L 14.5 8 L 8 1.5 L 1.5 8 L 8 14.5 Z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </svg>
    </div>
  )
}
