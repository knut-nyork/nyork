import {ImageIcon} from '@sanity/icons/Image'
import {defineField, defineType} from 'sanity'

import {AKTIVITETSVALG} from '../../../src/lib/ikoner'

/**
 * Ikonbiblioteket. Ett dokument per aktivitet — heis, langrenn, kafé — som
 * kan brukes om igjen på tvers av kort og seksjoner.
 *
 * Hvert ikon har to former: en 3D-illustrasjon som lastes opp her, og et
 * strekikon som følger av aktiviteten og alltid finnes. Mangler 3D-filen,
 * vises strekikonet i stedet. Siden er altså hel før illustrasjonene kommer,
 * og blir rikere etter hvert som de lastes opp.
 */
export const ikon = defineType({
  name: 'ikon',
  title: 'Ikon',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'aktivitet',
      title: 'Aktivitet',
      type: 'string',
      description:
        'Bestemmer hvilket strekikon som brukes, og hva ikonet heter for skjermlesere. Velg fra lista — den er den samme som koden kjenner.',
      options: {list: AKTIVITETSVALG},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navn',
      title: 'Navn',
      type: 'localeString',
      description: 'Teksten som står under ikonet. La stå tom for å bruke aktivitetens standardnavn.',
    }),
    defineField({
      name: 'illustrasjon',
      title: '3D-illustrasjon',
      type: 'image',
      description:
        'Valgfri. PNG med gjennomsiktig bakgrunn. Uten den vises strekikonet — siden virker uansett. VIKTIG: alle 3D-ikonene bør lages i samme økt med samme lyssetting og vinkel, ellers ser rutenettet rotete ut selv om hvert enkelt ikon er fint.',
      options: {hotspot: false},
    }),
    defineField({
      name: 'altTekst',
      title: 'Alt-tekst',
      type: 'localeString',
      description:
        'Beskriv illustrasjonen. Trengs bare når 3D-bildet er lastet opp — strekikonet henter navnet sitt fra aktiviteten.',
      hidden: ({parent}) => !parent?.illustrasjon,
    }),
  ],
  preview: {
    select: {title: 'navn.no', aktivitet: 'aktivitet', media: 'illustrasjon'},
    prepare: ({title, aktivitet, media}) => ({
      title: title || AKTIVITETSVALG.find((v) => v.value === aktivitet)?.title || 'Ikon',
      subtitle: media ? '3D-illustrasjon' : 'Strekikon — illustrasjon mangler',
      media,
    }),
  },
})
