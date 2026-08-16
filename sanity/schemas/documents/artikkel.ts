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
    defineField({
      name: 'avslutningsbilde',
      title: 'Bilde nederst',
      type: 'bildeMedKreditering',
      description:
        'Valgfritt. Vises i full bredde etter teksten. Bruk det når saken slutter med noe som er verdt å se — et ferdig resultat, en tegning av det som kommer.',
    }),
    defineField({
      name: 'skjulIListe',
      title: 'Ligger på sin egen adresse',
      type: 'boolean',
      description:
        'Saken står ikke under Siste nytt, og får heller ingen side der. Skru dette på bare for sider som har fått sin egen adresse i koden — som «Slik blir Nyørk» på /slik-blir-nyork. Skrur du det på for en vanlig sak, blir den utilgjengelig.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'tittel.no', subtitle: 'dato', media: 'bilde.bilde'},
  },
})
