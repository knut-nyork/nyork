import {LinkIcon} from '@sanity/icons/Link'
import {defineField, defineType} from 'sanity'

/**
 * PDF-er som lastes ned eller lenkes til — prospekt, prisliste,
 * plantegninger, reguleringsplan. Referert fra `enhet` og `reguleringsregler`.
 */
export const dokument = defineType({
  name: 'dokument',
  title: 'Dokument (PDF)',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'tittel',
      title: 'Tittel',
      type: 'localeString',
      description: 'Teksten som vises på nedlastingslenken, for eksempel «Prospekt hytte H04».',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type dokument',
      type: 'string',
      options: {
        list: [
          {title: 'Prospekt', value: 'prospekt'},
          {title: 'Prisliste', value: 'prisliste'},
          {title: 'Plantegning', value: 'plantegning'},
          {title: 'Reguleringsplan', value: 'reguleringsplan'},
          {title: 'Annet', value: 'annet'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fil',
      title: 'Fil',
      type: 'file',
      options: {accept: '.pdf'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'beskrivelse',
      title: 'Beskrivelse',
      type: 'localeText',
      description: 'Valgfritt — kort forklaring hvis tittelen alene ikke er tydelig nok.',
    }),
  ],
  preview: {
    select: {title: 'tittel.no', subtitle: 'type'},
  },
})
