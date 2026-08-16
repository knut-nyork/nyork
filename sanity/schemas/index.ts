import {localeBlockContent, localeString, localeText} from './objects/locale'
import {bildeMedKreditering} from './objects/bilde'
import {
  blokkArtikkel,
  blokkBilder,
  blokkKort,
  blokkBudskap,
  blokkFremhevet,
  blokkHero,
  blokkKnapp,
  blokkNyheter,
  blokkSitat,
  blokkStatus,
  blokkUtvalgteHytter,
} from './objects/blokker'

import {hyttemodell} from './documents/hyttemodell'
import {enhet} from './documents/enhet'
import {reguleringsregler} from './documents/reguleringsregler'
import {artikkel} from './documents/artikkel'
import {side} from './documents/side'
import {omradeInnhold} from './documents/omradeInnhold'
import {megler} from './documents/megler'
import {dokument} from './documents/dokument'
import {innstillinger} from './documents/innstillinger'
import {ikon} from './documents/ikon'

export const schemaTypes = [
  // Delte objekttyper
  localeString,
  localeText,
  localeBlockContent,
  bildeMedKreditering,

  // Blokkene forsiden bygges av
  blokkKnapp,
  blokkHero,
  blokkBudskap,
  blokkArtikkel,
  blokkStatus,
  blokkUtvalgteHytter,
  blokkSitat,
  blokkKort,
  blokkBilder,
  blokkNyheter,
  blokkFremhevet,

  // Innholdstyper
  ikon,
  hyttemodell,
  enhet,
  reguleringsregler,
  artikkel,
  side,
  omradeInnhold,
  megler,
  dokument,
  innstillinger,
]
