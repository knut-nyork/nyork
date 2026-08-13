import {UserIcon} from '@sanity/icons/User'
import {defineField, defineType} from 'sanity'

/**
 * Meglerkontakt, vist i seksjonen med id="megler" på /hytter.
 */
export const megler = defineType({
  name: 'megler',
  title: 'Megler',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'navn',
      title: 'Navn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tittel',
      title: 'Tittel',
      type: 'localeString',
      description: 'Stillingstittel, for eksempel «Eiendomsmegler».',
    }),
    defineField({
      name: 'meglerhusNavn',
      title: 'Meglerhus',
      type: 'string',
      description: 'For eksempel «EIE Fjellmegleren». Oversettes ikke.',
    }),
    defineField({
      name: 'meglerhusLogo',
      title: 'Meglerhusets logo',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt-tekst',
          type: 'string',
          description: 'For eksempel «EIE Fjellmegleren-logo».',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'telefon',
      title: 'Telefon',
      type: 'string',
      description: 'Skriv med landkode, for eksempel «+47 900 00 000».',
      validation: (Rule) =>
        Rule.regex(/^\+?[0-9 ]{8,}$/, {name: 'telefonnummer'}).error('Skriv et gyldig telefonnummer, gjerne med landkode.'),
    }),
    defineField({
      name: 'epost',
      title: 'E-post',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'bilde',
      title: 'Bilde av megler',
      type: 'bildeMedKreditering',
    }),
  ],
  preview: {
    select: {title: 'navn', subtitle: 'meglerhusNavn', media: 'bilde.bilde'},
  },
})
