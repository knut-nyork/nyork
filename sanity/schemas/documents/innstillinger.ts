import {CogIcon} from '@sanity/icons/Cog'
import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * Globale innstillinger — navigasjon, footer og teksten i interesseskjemaet
 * som ligger på alle fem sider. Skal finnes som ett dokument (se
 * sanity/structure.ts, som viser den som en singleton i menyen).
 */
export const innstillinger = defineType({
  name: 'innstillinger',
  title: 'Globale innstillinger',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'navigasjon', title: 'Navigasjon og footer'},
    {name: 'skjema', title: 'Interesseskjema'},
  ],
  fields: [
    defineField({
      name: 'navigasjon',
      title: 'Menypunkter',
      type: 'array',
      description: 'Rekkefølgen her styrer rekkefølgen i menyen.',
      group: 'navigasjon',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'menypunkt',
          fields: [
            defineField({name: 'tekst', title: 'Menytekst', type: 'localeString', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'url',
              title: 'Norsk URL',
              type: 'string',
              description: 'Relativ sti, for eksempel «/hytter». Den engelske versjonen legges automatisk under /en/.',
              validation: (Rule) => Rule.required().regex(/^\//, {name: 'relativ-sti'}).error('Må starte med /'),
            }),
          ],
          preview: {select: {title: 'tekst.no', subtitle: 'url'}},
        }),
      ],
    }),
    defineField({
      name: 'footerTekst',
      title: 'Footer-tekst',
      type: 'localeText',
      group: 'navigasjon',
    }),
    defineField({
      name: 'interesseskjemaTittel',
      title: 'Skjematittel',
      type: 'localeString',
      group: 'skjema',
    }),
    defineField({
      name: 'interesseskjemaIngress',
      title: 'Ingress i skjemaet',
      type: 'localeText',
      description: 'Den korte teksten under tittelen, som forklarer hva man får ved å melde interesse.',
      group: 'skjema',
    }),
    defineField({
      name: 'sendKnappTekst',
      title: 'Knappetekst',
      type: 'localeString',
      description:
        'Teksten på send-knappen. Brukes også på «Meld interesse»-knappen i menyen, så de to alltid sier det samme.',
      group: 'skjema',
    }),
    defineField({
      name: 'samtykkeDetteProsjektet',
      title: 'Samtykketekst — dette prosjektet',
      type: 'localeString',
      description: 'Teksten ved den første av de to samtykkeavkrysningene.',
      group: 'skjema',
    }),
    defineField({
      name: 'samtykkeAndreProsjekter',
      title: 'Samtykketekst — andre prosjekter',
      type: 'localeString',
      description: 'Teksten ved den andre samtykkeavkrysningen.',
      group: 'skjema',
    }),
    defineField({
      name: 'kvitteringstekst',
      title: 'Kvitteringstekst',
      type: 'localeText',
      description: 'Vises etter at skjemaet er sendt inn.',
      group: 'skjema',
    }),
    defineField({
      name: 'feiltekst',
      title: 'Feiltekst',
      type: 'localeText',
      description: 'Vises hvis innsendingen feiler.',
      group: 'skjema',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Globale innstillinger'}
    },
  },
})
