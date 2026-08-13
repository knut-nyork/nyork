import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineField, defineType} from 'sanity'

/**
 * Nyhetsartikkel til /siste-nytt. Liste + detaljside på /siste-nytt/[slug].
 */
export const artikkel = defineType({
  name: 'artikkel',
  title: 'Artikkel',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'tittel',
      title: 'Tittel',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL-del',
      type: 'slug',
      description: 'Brukes i adressen /siste-nytt/[denne]. Genereres fra den norske tittelen, kan justeres manuelt.',
      options: {source: 'tittel.no', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dato',
      title: 'Publiseringsdato',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bilde',
      title: 'Bilde',
      type: 'bildeMedKreditering',
      description: 'Toppbildet — vises i listen og øverst på artikkelen.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ingress',
      title: 'Ingress',
      type: 'localeText',
      description: 'Kort tekst som vises i listeoversikten, én til to setninger.',
    }),
    defineField({
      name: 'brodtekst',
      title: 'Brødtekst',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'forfatter',
      title: 'Forfatter',
      type: 'string',
      description: 'Valgfritt — navnet som skal stå på artikkelen.',
    }),
  ],
  preview: {
    select: {title: 'tittel.no', subtitle: 'dato', media: 'bilde.bilde'},
  },
})
