import {TagIcon} from '@sanity/icons/Tag'
import {defineField, defineType} from 'sanity'

/**
 * Den konkrete hytta eller tomta — nummer, status, pris. Hytte og tomt deler
 * denne ene typen, skilt av «enhetstype», slik at hyttevelgeren og
 * tomtekartet leser fra samme kilde. Se docs/01-byggeinstruks.md.
 */
export const enhet = defineType({
  name: 'enhet',
  title: 'Enhet (hytte/tomt)',
  type: 'document',
  icon: TagIcon,
  groups: [
    {name: 'fakta', title: 'Fakta'},
    {name: 'tekst', title: 'Tekst'},
    {name: 'bilder', title: 'Bilder og dokumenter'},
  ],
  fields: [
    defineField({
      name: 'nummer',
      title: 'Nummer',
      type: 'string',
      description: 'Enhetens nummer slik det skal vises til kjøper, for eksempel «H04».',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL-del',
      type: 'slug',
      description: 'Brukes i adressen /hytter/[denne], for eksempel «hytte-4». Skal ikke endres etter publisering.',
      options: {source: 'nummer', maxLength: 40},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'enhetstype',
      title: 'Type',
      type: 'string',
      description: 'Avgjør om enheten vises på /hytter eller /tomter, og hvilke felter som er relevante.',
      options: {
        list: [
          {title: 'Hytte', value: 'hytte'},
          {title: 'Tomt', value: 'tomt'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      description: 'Vises som merke på kortet. Solgte enheter vises fortsatt, men nedtonet.',
      group: 'fakta',
      options: {
        list: [
          {title: 'Ledig', value: 'ledig'},
          {title: 'Reservert', value: 'reservert'},
          {title: 'Solgt', value: 'solgt'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hyttemodell',
      title: 'Hyttemodell',
      type: 'reference',
      to: [{type: 'hyttemodell'}],
      description:
        'Hvilken arkitektur denne enheten er bygget etter. Valgfritt — rene tomter uten planlagt hytte har ingen modell.',
      group: 'fakta',
    }),
    defineField({
      name: 'reguleringsregler',
      title: 'Reguleringsregler',
      type: 'reference',
      to: [{type: 'reguleringsregler'}],
      description: 'Kun for tomter. Peker til de felles reguleringsreglene som gjelder for alle tomtene.',
      group: 'fakta',
      hidden: ({parent}) => parent?.enhetstype !== 'tomt',
    }),
    defineField({
      name: 'byggetrinn',
      title: 'Byggetrinn',
      type: 'number',
      description: 'Tallet på byggetrinnet enheten hører til, for eksempel 1.',
      group: 'fakta',
      validation: (Rule) => Rule.integer().positive(),
    }),
    defineField({
      name: 'delomrade',
      title: 'Delområde',
      type: 'string',
      description: 'For eksempel «Røvarklanten». Stedsnavn oversettes ikke.',
      group: 'fakta',
    }),
    defineField({
      name: 'pris',
      title: 'Pris (NOK)',
      type: 'number',
      description: 'Kun tallet, uten mellomrom eller «kr». Formateres til norsk visning automatisk på siden.',
      group: 'fakta',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'tomtestorrelse',
      title: 'Tomtestørrelse (m²)',
      type: 'number',
      group: 'fakta',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'utsiktsretning',
      title: 'Utsiktsretning',
      type: 'localeString',
      description: 'Beskriv retningen kort, for eksempel «Sør/vest».',
      group: 'tekst',
    }),
    defineField({
      name: 'solforhold',
      title: 'Solforhold',
      type: 'localeText',
      description: 'Kort beskrivelse av sol gjennom dagen/sesongen.',
      group: 'tekst',
    }),
    defineField({
      name: 'beskrivelse',
      title: 'Beskrivelse',
      type: 'localeText',
      description: 'Valgfri tilleggstekst spesifikk for denne enheten, utover det modellen allerede beskriver.',
      group: 'tekst',
    }),
    defineField({
      name: 'kartPosisjon',
      title: 'Kartposisjon',
      type: 'object',
      description:
        'Reservert felt for det interaktive kartet som kommer senere (rundt tredje byggetrinn). Kan stå tomt inntil videre.',
      group: 'fakta',
      fields: [
        defineField({name: 'x', title: 'X-koordinat', type: 'number'}),
        defineField({name: 'y', title: 'Y-koordinat', type: 'number'}),
      ],
    }),
    defineField({
      name: 'bilder',
      title: 'Bilder',
      type: 'array',
      description: 'Bilder spesifikke for denne enheten, utover modellens generelle interiørbilder.',
      group: 'bilder',
      of: [{type: 'bildeMedKreditering'}],
    }),
    defineField({
      name: 'prospekt',
      title: 'Prospekt (PDF)',
      type: 'reference',
      to: [{type: 'dokument'}],
      group: 'bilder',
    }),
    defineField({
      name: 'finnAnnonseUrl',
      title: 'Lenke til Finn.no-annonse',
      type: 'url',
      description: 'Detaljsiden skal ligge hos oss og lenke videre til Finn — ikke omvendt.',
      group: 'bilder',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    select: {
      title: 'nummer',
      enhetstype: 'enhetstype',
      status: 'status',
      media: 'bilder.0.bilde',
    },
    prepare({title, enhetstype, status, media}) {
      return {
        title,
        subtitle: [enhetstype, status].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
