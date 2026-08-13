/**
 * Aktivitetene Nyørk viser ikoner for, og hvilket MDI-ikon hver av dem bruker.
 *
 * Sanity lagrer den norske nøkkelen — «langrenn», ikke «mdi:ski-cross-country».
 * Da slipper redaktørene å kjenne til ikonbiblioteket, og bytter vi sett en
 * dag, er det denne ene tabellen som endres og ingenting annet.
 *
 * Ikonene kommer fra Material Design Icons (Apache 2.0) gjennom astro-icon.
 * Bare ikoner som faktisk brukes havner i bygget.
 *
 * Legger du til en aktivitet: nøkkel her, og engelsk navn i samme slengen.
 */
export const AKTIVITETER = {
  skiInnUt: {ikon: 'mdi:ski', no: 'Ski inn/ut', en: 'Ski in/out'},
  alpint: {ikon: 'mdi:ski', no: 'Alpint', en: 'Downhill'},
  langrenn: {ikon: 'mdi:ski-cross-country', no: 'Langrenn', en: 'Cross-country'},
  sykkel: {ikon: 'mdi:bike', no: 'Sykkel', en: 'Cycling'},
  tur: {ikon: 'mdi:hiking', no: 'Tur', en: 'Hiking'},
  heis: {ikon: 'mdi:gondola', no: 'Heis', en: 'Lift'},
  kafe: {ikon: 'mdi:coffee', no: 'Kafé', en: 'Café'},
  butikk: {ikon: 'mdi:shopping', no: 'Butikk', en: 'Shop'},
  parkering: {ikon: 'mdi:parking', no: 'Parkering', en: 'Parking'},
  booking: {ikon: 'mdi:calendar-month', no: 'Booking', en: 'Booking'},
  kart: {ikon: 'mdi:map-marker', no: 'Kart', en: 'Map'},
} as const

export type Aktivitet = keyof typeof AKTIVITETER

/** Til `options.list` i Sanity, så redaktøren velger fra en liste og ikke skriver fritekst. */
export const AKTIVITETSVALG = Object.entries(AKTIVITETER).map(([verdi, a]) => ({
  title: a.no,
  value: verdi,
}))
