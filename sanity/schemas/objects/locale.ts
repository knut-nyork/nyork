import {defineField, defineType} from 'sanity'

/**
 * Nyørk har to faste språk — norsk og engelsk — ikke et voksende sett.
 * Derfor et objekt med ett felt per språk, ikke et i18n-plugin bygget for
 * mange språk. Redaktøren ser og fyller ut begge språk på samme skjema.
 */

export const localeString = defineType({
  name: 'localeString',
  title: 'Tekst (norsk/engelsk)',
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
  ],
})

export const localeText = defineType({
  name: 'localeText',
  title: 'Brødtekst (norsk/engelsk)',
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
  ],
})

export const localeBlockContent = defineType({
  name: 'localeBlockContent',
  title: 'Riktekst (norsk/engelsk)',
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
  ],
})
