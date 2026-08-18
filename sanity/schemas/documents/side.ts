import {DocumentIcon} from '@sanity/icons/Document'
import {defineArrayMember, defineField, defineType} from 'sanity'

import {BLOKKTYPER} from '../objects/blokker'

/**
 * Redaksjonelt innhold per side — meta-tittel, meta-beskrivelse og valgfri
 * fritekst — slik at dette kan endres uten utvikler. Faste seksjoner som
 * hero og «utvalgte hytter» bygges som egne typer/komponenter når hver side
 * lages, ikke her.
 */
export const side = defineType({
  name: 'side',
  title: 'Side',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'sideNavn',
      title: 'Hvilken side',
      type: 'string',
      description: 'Hvilken av de faste sidene denne teksten hører til. Det skal kun finnes ett dokument per side.',
      options: {
        list: [
          {title: 'Hjem', value: 'forside'},
          {title: 'Hytter', value: 'hytter'},
          {title: 'Tomter', value: 'tomter'},
          {title: 'Området', value: 'omradet'},
          {title: 'Nyheter', value: 'siste-nytt'},
          {title: 'Personvern', value: 'personvern'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overskrift',
      title: 'Overskrift',
      type: 'localeString',
      description: 'Den store overskriften øverst på siden. Er ofte kortere enn meta-tittelen under.',
    }),
    defineField({
      name: 'ingress',
      title: 'Ingress',
      type: 'localeText',
      description: 'Én til to setninger rett under overskriften.',
    }),
    defineField({
      name: 'tittel',
      title: 'Meta-tittel',
      type: 'localeString',
      description: 'Vises i browser-fanen og som overskrift i Google-treff.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaBeskrivelse',
      title: 'Meta-beskrivelse',
      type: 'localeText',
      description: 'Teksten under tittelen i Google-treff. Hold den under ca. 160 tegn.',
      /*
       * Lengden må sjekkes per språk, ikke på feltet.
       *
       * `localeText` er et objekt med `no` og `en` inni, og `Rule.max()`
       * finnes ikke for objekter — Studio stopper med «Validator for flag
       * "max" not found for type "Object"» og lar deg ikke redigere siden.
       * Samme felle venter på alle localeString- og localeText-felter.
       */
      validation: (Rule) =>
        Rule.custom((felt?: {no?: string; en?: string}) => {
          const forLangt = [felt?.no, felt?.en].some((tekst) => typeof tekst === 'string' && tekst.length > 160)
          return forLangt ? 'Lengre enn 160 tegn kan bli avkuttet i søkeresultater.' : true
        }).warning(),
    }),
    defineField({
      name: 'sommerBilde',
      title: 'Toppbilde — sommer',
      type: 'bildeMedKreditering',
      description: 'Vises øverst på områdesiden når sommer er valgt. Byttes sammen med teksten.',
      hidden: ({document}) => document?.sideNavn !== 'omradet',
    }),
    defineField({
      name: 'vinterBilde',
      title: 'Toppbilde — vinter',
      type: 'bildeMedKreditering',
      description: 'Vises øverst på områdesiden når vinter er valgt.',
      hidden: ({document}) => document?.sideNavn !== 'omradet',
    }),
    defineField({
      name: 'tomtekontakt',
      title: 'Kontakt for tomtesalg',
      type: 'object',
      description:
        'Tomtene selges direkte av utbygger, ikke gjennom megler — derfor står denne kontakten her og ikke som et meglerkort. Brukes kun på tomtesiden.',
      hidden: ({document}) => document?.sideNavn !== 'tomter',
      fields: [
        defineField({name: 'navn', title: 'Navn', type: 'string', validation: (Rule) => Rule.required()}),
        defineField({name: 'telefon', title: 'Telefon', type: 'string'}),
        defineField({name: 'epost', title: 'E-post', type: 'string'}),
        defineField({
          name: 'tekst',
          title: 'Kort tekst',
          type: 'localeText',
          description: 'For eksempel «Tomtene selges direkte av oss».',
        }),
      ],
    }),
    defineField({
      name: 'blokker',
      title: 'Blokker på siden',
      type: 'array',
      description:
        'Siden bygges av blokker. Dra for å endre rekkefølge, og bruk «Vis blokken» inne i hver blokk for å skjule den midlertidig uten å miste teksten. Brukes på forsiden.',
      of: BLOKKTYPER.map((type) => defineArrayMember({type})),
    }),
    defineField({
      name: 'hyttetyperIngress',
      title: 'Ingress over hyttetypene',
      type: 'localeText',
      description:
        'Kort tekst over kortene med hyttetypene på /hytter. Forklarer valget: en av våre typer, tilpasset tomten — eller egen hytte innenfor reguleringsplanen. Ikke skriv konkrete mål her; de hører hjemme i Reguleringsregler, så de bare finnes ett sted.',
    }),
    defineField({
      name: 'situasjonsplan',
      title: 'Situasjonsplan',
      type: 'bildeMedKreditering',
      description:
        'Kartet over feltet, med nummer på hyttene. Brukes på /hytter og /tomter. Ett bilde per byggetrinn er ikke støttet ennå — last opp det som gjelder nå.',
    }),
    defineField({
      name: 'seksjoner',
      title: 'Seksjoner',
      type: 'array',
      description: 'Tekstseksjoner på siden, i den rekkefølgen de skal vises.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'sideseksjon',
          fields: [
            defineField({
              name: 'overskrift',
              title: 'Overskrift',
              type: 'localeString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'ankerId',
              title: 'Anker-ID',
              type: 'string',
              description:
                'Gjør seksjonen lenkbar, for eksempel «finansiering» gir /hytter#finansiering. ADVARSEL: «finansiering» og «megler» er lenket til fra gamle URL-er i netlify.toml — endrer eller sletter du dem, lander de lenkene på toppen av siden i stedet. Kun små bokstaver, tall og bindestrek.',
              validation: (Rule) =>
                Rule.regex(/^[a-z0-9-]*$/, {name: 'anker-id'}).warning('Bruk kun små bokstaver, tall og bindestrek.'),
            }),
            defineField({
              name: 'tekst',
              title: 'Tekst',
              type: 'localeText',
              description: 'Tom linje mellom avsnittene gir nytt avsnitt. Kan stå tom hvis innholdet ikke er avklart ennå.',
            }),
          ],
          preview: {select: {title: 'overskrift.no', subtitle: 'ankerId'}},
        }),
      ],
    }),
    defineField({
      name: 'tomTilstand',
      title: 'Tekst når ingenting er ledig',
      type: 'localeText',
      description:
        'Vises i stedet for en tom liste når ingen enheter er ledige. Gjelder /hytter og /tomter.',
    }),
    defineField({
      name: 'innhold',
      title: 'Fritekst',
      type: 'localeBlockContent',
      description: 'Valgfritt — ekstra redaksjonell tekst for denne siden, utover de faste seksjonene.',
    }),
  ],
  preview: {
    select: {title: 'tittel.no', subtitle: 'sideNavn'},
  },
})
