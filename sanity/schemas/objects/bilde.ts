import {ImageIcon} from '@sanity/icons/Image'
import {defineField, defineType} from 'sanity'

/**
 * Standard bildefelt for hele siden. Brukes overalt et bilde trengs, slik at
 * alt-tekst og fotokreditt aldri kan glemmes — se CLAUDE.md: «Alt-tekst er
 * påkrevd» og «Fotokreditt er eget felt i Sanity og følger bildet».
 */
export const bildeMedKreditering = defineType({
  name: 'bildeMedKreditering',
  title: 'Bilde',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'bilde',
      title: 'Bilde',
      type: 'image',
      description: 'Last opp i høyest tilgjengelige kvalitet — nettsiden beskjærer og komprimerer selv ved visning.',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altTekst',
      title: 'Alt-tekst',
      type: 'localeString',
      description:
        'Beskriv hva som faktisk vises på bildet, for eksempel «Hytte A1 sett fra sørøst med kveldslys». Brukes av skjermlesere og av Google — ikke la det stå tomt, og ikke skriv bare «bilde».',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fotokreditt',
      title: 'Fotokreditt',
      type: 'string',
      description:
        'Navnet som skal krediteres, for eksempel «Kalle Hägglund». Vises sammen med bildet. La stå tomt kun hvis bildet ikke er et fotografi (f.eks. en tegning eller illustrasjon).',
    }),
  ],
  preview: {
    select: {
      media: 'bilde',
      title: 'altTekst.no',
      subtitle: 'fotokreditt',
    },
  },
})
