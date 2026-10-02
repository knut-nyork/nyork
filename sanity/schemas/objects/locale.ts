import {defineField, defineType} from 'sanity'

/**
 * Nyørk har tre faste språk — norsk, engelsk og tysk — ikke et voksende sett.
 * Derfor et objekt med ett felt per språk, ikke et i18n-plugin bygget for
 * mange språk. Redaktøren ser og fyller ut alle tre på samme skjema.
 *
 * Norsk og engelsk er påkrevd. **Tysk er det ikke, og skal ikke bli det.**
 *
 * Tysk kom til lenge etter at innholdet var skrevet. Gjør vi feltet påkrevd,
 * blir hvert eneste dokument i datasettet ugyldig i samme øyeblikk skjemaet
 * deployes, og redaktørene kan ikke publisere noe som helst før alt er
 * oversatt. Siden faller i stedet tilbake til engelsk der tysk mangler — se
 * `tekst()` i src/lib/sprak.ts — så en tom tysk rute gir en engelsk setning,
 * ikke et hull.
 */

/** Felles beskrivelse, så redaktøren vet hvorfor tysk er den ene som kan stå tom. */
const TYSK_FORKLARING = 'Står dette tomt, viser den tyske siden den engelske teksten.'

export const localeString = defineType({
  name: 'localeString',
  title: 'Tekst (norsk/engelsk/tysk)',
  type: 'object',
  fields: [
    defineField({
      name: 'no',
      title: 'Norsk',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'en',
      title: 'Engelsk',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'de',
      title: 'Tysk',
      type: 'string',
      description: TYSK_FORKLARING,
    }),
  ],
})

export const localeText = defineType({
  name: 'localeText',
  title: 'Brødtekst (norsk/engelsk/tysk)',
  type: 'object',
  fields: [
    defineField({
      name: 'no',
      title: 'Norsk',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'en',
      title: 'Engelsk',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'de',
      title: 'Tysk',
      type: 'text',
      rows: 4,
      description: TYSK_FORKLARING,
    }),
  ],
})

export const localeBlockContent = defineType({
  name: 'localeBlockContent',
  title: 'Riktekst (norsk/engelsk/tysk)',
  type: 'object',
  fields: [
    defineField({
      name: 'no',
      title: 'Norsk',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'en',
      title: 'Engelsk',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'de',
      title: 'Tysk',
      type: 'array',
      of: [{type: 'block'}],
      description: TYSK_FORKLARING,
    }),
  ],
})
