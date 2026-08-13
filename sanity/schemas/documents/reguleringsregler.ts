import {DocumentIcon} from '@sanity/icons/Document'
import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * Reguleringsplanens regler — samme for alle tomtene, skrives derfor kun ett
 * sted og refereres fra hver tomt-enhet. Skal finnes som ett dokument (se
 * sanity/structure.ts, som viser den som en singleton i menyen).
 */
export const reguleringsregler = defineType({
  name: 'reguleringsregler',
  title: 'Reguleringsregler',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {name: 'bestemmelser', title: 'Bestemmelser'},
    {name: 'infrastruktur', title: 'Infrastruktur'},
  ],
  fields: [
    defineField({
      name: 'planNavn',
      title: 'Plannavn',
      type: 'string',
      description: 'Det offisielle navnet på reguleringsplanen, for eksempel «Detaljreguleringsplan NYØRK II». Oversettes ikke.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'planId',
      title: 'Plan-ID',
      type: 'string',
      description: 'Kommunens saksnummer for planen, for eksempel «2019001».',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bebyggelse',
      title: 'Bebyggelse',
      type: 'localeString',
      description: 'Hva som kan bebygges per felt, for eksempel «Én boenhet per felt (F1–F21)».',
      group: 'bestemmelser',
    }),
    defineField({
      name: 'maksByaToEtasjer',
      title: 'Maks BYA, to etasjer (m²)',
      type: 'number',
      group: 'bestemmelser',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'maksByaTreEtasjer',
      title: 'Maks BYA, tre etasjer (m²)',
      type: 'number',
      group: 'bestemmelser',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'maksGesimshoyde',
      title: 'Maks gesimshøyde (m)',
      type: 'number',
      description: 'For eksempel 8,7 — skriv med punktum: 8.7.',
      group: 'bestemmelser',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'takform',
      title: 'Takform',
      type: 'localeString',
      description: 'For eksempel «Saltak, 12–36 graders vinkel».',
      group: 'bestemmelser',
    }),
    defineField({
      name: 'maksBygningsbredde',
      title: 'Maks bygningsbredde',
      type: 'localeString',
      description: 'For eksempel «6,0 m (+ 0,7 m utkraging per side i øverste etasje)».',
      group: 'bestemmelser',
    }),
    defineField({
      name: 'maksLengdeToEtasjer',
      title: 'Maks lengde, to etasjer (m)',
      type: 'number',
      group: 'bestemmelser',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'maksLengdeTreEtasjer',
      title: 'Maks lengde, tre etasjer (m)',
      type: 'number',
      group: 'bestemmelser',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'moneretning',
      title: 'Møneretning',
      type: 'localeString',
      description: 'For eksempel «På tvers av kotene».',
      group: 'bestemmelser',
    }),
    defineField({
      name: 'parkeringskrav',
      title: 'Parkeringskrav',
      type: 'localeString',
      description: 'For eksempel «2 biloppstillingsplasser per enhet».',
      group: 'bestemmelser',
    }),
    defineField({
      name: 'levegg',
      title: 'Levegg',
      type: 'localeString',
      description: 'For eksempel «Maks 4 m samlet lengde, 1,8 m høyde».',
      group: 'bestemmelser',
    }),
    defineField({
      name: 'ikkeTillatt',
      title: 'Ikke tillatt',
      type: 'array',
      description:
        'Én rad per ting som ikke er lov å bygge, for eksempel «Frittstående bod». Vises som liste på tomtesiden — dette er informasjon kjøpere bør se før de kjøper, ikke etterpå.',
      group: 'bestemmelser',
      of: [defineArrayMember({type: 'localeString'})],
    }),
    defineField({
      name: 'maksAntallEnheterPerFelt',
      title: 'Maks antall enheter per felt',
      type: 'array',
      description: 'Én rad per felt (F1, F2 …). Fyll ut etter hvert som tallene hentes fra plandokumentet.',
      group: 'bestemmelser',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'feltGrense',
          fields: [
            defineField({name: 'feltNavn', title: 'Felt', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'maksAntallEnheter',
              title: 'Maks antall enheter',
              type: 'number',
              validation: (Rule) => Rule.required().integer().positive(),
            }),
          ],
          preview: {
            select: {title: 'feltNavn', subtitle: 'maksAntallEnheter'},
          },
        }),
      ],
    }),
    defineField({
      name: 'infrastruktur',
      title: 'Infrastruktur',
      type: 'localeText',
      description: 'Vei, vann, avløp, strøm og fiber — hva som er framført til tomtegrensen.',
      group: 'infrastruktur',
    }),
    defineField({
      name: 'terrengtilpasning',
      title: 'Terrengtilpasning',
      type: 'localeText',
      group: 'infrastruktur',
    }),
    defineField({
      name: 'planDokument',
      title: 'Plankart (PDF)',
      type: 'reference',
      to: [{type: 'dokument'}],
      description: 'Lenke til plankartet som PDF, for de som vil lese hele reguleringsplanen.',
      group: 'infrastruktur',
    }),
  ],
  preview: {
    select: {title: 'planNavn', subtitle: 'planId'},
  },
})
