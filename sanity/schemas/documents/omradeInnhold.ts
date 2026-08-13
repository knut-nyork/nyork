import {ImageIcon} from '@sanity/icons/Image'
import {defineField, defineType} from 'sanity'

/**
 * Én seksjon på /omradet. Sommer og vinter skrives inn hver for seg, men
 * begge ligger alltid i HTML-en samtidig — sesongvelgeren bytter bare
 * synlighet, den henter ikke innhold på klikk. Se docs/01-byggeinstruks.md,
 * «Sommer/vinter-toggle — teknisk».
 */
export const omradeInnhold = defineType({
  name: 'omradeInnhold',
  title: 'Området — seksjon',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'tittel',
      title: 'Tittel',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seksjonsId',
      title: 'Anker-ID',
      type: 'string',
      description:
        'Teknisk navn brukt i lenker til denne seksjonen, for eksempel «historia» (gir /omradet#historia). Kun små bokstaver, ingen mellomrom. La stå tomt hvis seksjonen ikke trenger direkte lenke.',
      validation: (Rule) => Rule.regex(/^[a-z0-9-]*$/, {name: 'anker-id', invert: false}).warning('Bruk kun små bokstaver, tall og bindestrek.'),
    }),
    defineField({
      name: 'rekkefolge',
      title: 'Rekkefølge',
      type: 'number',
      description: 'Lavest tall vises øverst på siden.',
      validation: (Rule) => Rule.required().integer(),
    }),
    defineField({
      name: 'sommerBilde',
      title: 'Bilde (sommer)',
      type: 'bildeMedKreditering',
    }),
    defineField({
      name: 'sommerInnhold',
      title: 'Tekst (sommer)',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'vinterBilde',
      title: 'Bilde (vinter)',
      type: 'bildeMedKreditering',
    }),
    defineField({
      name: 'vinterInnhold',
      title: 'Tekst (vinter)',
      type: 'localeBlockContent',
    }),
  ],
  orderings: [
    {
      title: 'Rekkefølge',
      name: 'rekkefolgeAsc',
      by: [{field: 'rekkefolge', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'tittel.no', subtitle: 'seksjonsId', media: 'sommerBilde.bilde'},
  },
})
