import {DocumentIcon} from '@sanity/icons/Document'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {HomeIcon} from '@sanity/icons/Home'
import {ImageIcon} from '@sanity/icons/Image'
import {ImagesIcon} from '@sanity/icons/Images'
import {LinkIcon} from '@sanity/icons/Link'
import {TagIcon} from '@sanity/icons/Tag'
import {UserIcon} from '@sanity/icons/User'
import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * Blokkene forsiden bygges av.
 *
 * Rekkefølgen på siden er rekkefølgen i lista, og hver blokk kan skrus av med
 * «Vis blokken» uten å slettes — da beholdes teksten til neste gang. Blokker
 * som er av filtreres bort allerede i GROQ, så de havner aldri i HTML-en.
 */

/** Felles av/på-bryter. Ligger først i hver blokk, så den er lett å finne. */
const aktiv = defineField({
  name: 'aktiv',
  title: 'Vis blokken',
  type: 'boolean',
  description: 'Skru av for å skjule blokken på siden uten å slette innholdet.',
  initialValue: true,
})

/**
 * Knapp. Interne lenker skrives som norsk sti — den engelske slås opp i
 * rutekartet, slik at /hytter blir /en/cabins av seg selv.
 */
export const blokkKnapp = defineType({
  name: 'blokkKnapp',
  title: 'Knapp',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'tekst',
      title: 'Knappetekst',
      type: 'localeString',
      description: 'Verb først: «Se hyttene», «Meld interesse». Ikke «Les mer» alene.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sti',
      title: 'Lenke',
      type: 'string',
      description:
        'Norsk sti på egen side, for eksempel «/hytter» — engelsk versjon finner seg selv. Eller full adresse til en annen nettside, som begynner med https://',
      validation: (Rule) =>
        Rule.required()
          .regex(/^(\/|https?:\/\/)/, {name: 'sti-eller-url'})
          .error('Må begynne med / eller https://'),
    }),
  ],
  preview: {select: {title: 'tekst.no', subtitle: 'sti'}},
})

export const blokkHero = defineType({
  name: 'blokkHero',
  title: 'Hero',
  type: 'object',
  icon: ImageIcon,
  description: 'Toppen av siden — stort bilde med overskrift oppå.',
  fields: [
    aktiv,
    defineField({name: 'overskrift', title: 'Overskrift', type: 'localeString', validation: (Rule) => Rule.required()}),
    defineField({name: 'ingress', title: 'Ingress', type: 'localeText'}),
    defineField({
      name: 'bilde',
      title: 'Bakgrunnsbilde',
      type: 'bildeMedKreditering',
      description: 'Vises alltid på mobil, og som stillbilde bak videoen mens den laster.',
    }),
    defineField({
      name: 'video',
      title: 'Bakgrunnsvideo',
      type: 'file',
      options: {accept: 'video/mp4'},
      description:
        'Valgfritt. Lastes ikke på mobil — der vises bakgrunnsbildet i stedet, så det feltet må fylles ut selv om du legger inn video.',
    }),
    defineField({
      name: 'knapper',
      title: 'Knapper',
      type: 'array',
      of: [defineArrayMember({type: 'blokkKnapp'})],
      validation: (Rule) => Rule.max(2).warning('To knapper er nok — flere konkurrerer med hverandre.'),
    }),
  ],
  preview: {
    select: {title: 'overskrift.no', aktiv: 'aktiv', media: 'bilde.bilde'},
    prepare: ({title, aktiv, media}) => ({title: title || 'Hero', subtitle: aktiv ? 'Hero' : 'Hero — skrudd av', media}),
  },
})

export const blokkBudskap = defineType({
  name: 'blokkBudskap',
  title: 'Budskap',
  type: 'object',
  icon: DocumentTextIcon,
  description: 'Kort budskap på farget flate, med overskrift til venstre og tekst til høyre.',
  fields: [
    aktiv,
    defineField({name: 'overskrift', title: 'Overskrift', type: 'localeString', validation: (Rule) => Rule.required()}),
    defineField({name: 'tekst', title: 'Tekst', type: 'localeText'}),
    defineField({name: 'knapp', title: 'Knapp', type: 'blokkKnapp'}),
  ],
  preview: {
    select: {title: 'overskrift.no', aktiv: 'aktiv'},
    prepare: ({title, aktiv}) => ({title: title || 'Budskap', subtitle: aktiv ? 'Budskap' : 'Budskap — skrudd av'}),
  },
})

export const blokkArtikkel = defineType({
  name: 'blokkArtikkel',
  title: 'Bilde og tekst',
  type: 'object',
  icon: DocumentIcon,
  description: 'Bilde på den ene siden, overskrift og tekst på den andre.',
  fields: [
    aktiv,
    defineField({name: 'overskrift', title: 'Overskrift', type: 'localeString', validation: (Rule) => Rule.required()}),
    defineField({name: 'tekst', title: 'Tekst', type: 'localeText'}),
    defineField({name: 'bilde', title: 'Bilde', type: 'bildeMedKreditering'}),
    defineField({
      name: 'ekstrabilde',
      title: 'Ekstra bilde',
      type: 'bildeMedKreditering',
      description:
        'Valgfritt. Legges mindre og forskjøvet oppå hovedbildet, med et hjørne inn mot teksten. La det stå tomt, så vises bare hovedbildet.',
    }),
    defineField({
      name: 'bildeplassering',
      title: 'Bildet ligger',
      type: 'string',
      description: 'Veksle mellom venstre og høyre nedover siden, så den ikke blir ensformig.',
      options: {
        list: [
          {title: 'Til venstre', value: 'venstre'},
          {title: 'Til høyre', value: 'hoyre'},
        ],
        layout: 'radio',
      },
      initialValue: 'venstre',
    }),
    defineField({name: 'knapp', title: 'Knapp', type: 'blokkKnapp'}),
  ],
  preview: {
    select: {title: 'overskrift.no', aktiv: 'aktiv', media: 'bilde.bilde'},
    prepare: ({title, aktiv, media}) => ({
      title: title || 'Bilde og tekst',
      subtitle: aktiv ? 'Bilde og tekst' : 'Bilde og tekst — skrudd av',
      media,
    }),
  },
})

export const blokkBilder = defineType({
  name: 'blokkBilder',
  title: 'Bilder',
  type: 'object',
  icon: ImagesIcon,
  description: 'To eller tre bilder i ulik størrelse, forskjøvet i forhold til hverandre.',
  fields: [
    aktiv,
    defineField({
      name: 'overskrift',
      title: 'Overskrift',
      type: 'localeString',
      description: 'Valgfri. La den stå tom om bildene skal tale for seg.',
    }),
    defineField({
      name: 'bilder',
      title: 'Bilder',
      type: 'array',
      of: [defineArrayMember({type: 'bildeMedKreditering'})],
      description:
        'To til seks bilder. Rekkefølgen bestemmer plassen: første, tredje og femte havner i venstre spalte, resten i høyre. Høyre spalte ligger lavere enn venstre, og bildene beveger seg i ulik takt når du ruller.',
      validation: (Rule) => Rule.required().min(2).max(6),
    }),
  ],
  preview: {
    select: {title: 'overskrift.no', aktiv: 'aktiv', media: 'bilder.0.bilde', antall: 'bilder'},
    prepare: ({title, aktiv, media, antall}) => ({
      title: title || 'Bilder',
      subtitle: `${aktiv ? 'Bilder' : 'Bilder — skrudd av'} · ${antall?.length ?? 0} stk`,
      media,
    }),
  },
})

export const blokkNyheter = defineType({
  name: 'blokkNyheter',
  title: 'Nyheter',
  type: 'object',
  icon: DocumentTextIcon,
  description: 'Rad med nyhetssaker — enten de nyeste automatisk, eller saker du velger selv.',
  fields: [
    aktiv,
    defineField({name: 'overskrift', title: 'Overskrift', type: 'localeString', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'utvalg',
      title: 'Hvilke saker',
      type: 'string',
      options: {
        list: [
          {title: 'De nyeste automatisk', value: 'nyeste'},
          {title: 'Saker jeg velger selv', value: 'manuelt'},
        ],
        layout: 'radio',
      },
      initialValue: 'nyeste',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'antall',
      title: 'Hvor mange',
      type: 'number',
      description: 'Brukes bare når sakene velges automatisk.',
      initialValue: 6,
      hidden: ({parent}) => parent?.utvalg !== 'nyeste',
      validation: (Rule) => Rule.integer().min(1).max(12),
    }),
    defineField({
      name: 'artikler',
      title: 'Saker',
      type: 'array',
      description: 'Rekkefølgen her er rekkefølgen på siden.',
      of: [defineArrayMember({type: 'reference', to: [{type: 'artikkel'}]})],
      hidden: ({parent}) => parent?.utvalg !== 'manuelt',
    }),
    defineField({name: 'knapp', title: 'Knapp', type: 'blokkKnapp'}),
  ],
  preview: {
    select: {title: 'overskrift.no', aktiv: 'aktiv', utvalg: 'utvalg'},
    prepare: ({title, aktiv, utvalg}) => ({
      title: title || 'Nyheter',
      subtitle: `Nyheter, ${utvalg === 'manuelt' ? 'valgt selv' : 'nyeste'}${aktiv ? '' : ' — skrudd av'}`,
    }),
  },
})

export const blokkUtvalgteHytter = defineType({
  name: 'blokkUtvalgteHytter',
  title: 'Utvalgte hytter',
  type: 'object',
  icon: HomeIcon,
  description:
    'Noen få hyttekort. Kortene ligger i en vannrett rulle — blir de mange, drar du bortover. Blokken har med vilje ingen knapp: rullen viser selv at det finnes mer.',
  fields: [
    aktiv,
    defineField({name: 'overskrift', title: 'Overskrift', type: 'localeString', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'utvalg',
      title: 'Hvilke hytter',
      type: 'string',
      options: {
        list: [
          {title: 'De ledige automatisk', value: 'ledige'},
          {title: 'Hytter jeg velger selv', value: 'manuelt'},
        ],
        layout: 'radio',
      },
      initialValue: 'ledige',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'antall',
      title: 'Hvor mange',
      type: 'number',
      initialValue: 3,
      hidden: ({parent}) => parent?.utvalg !== 'ledige',
      validation: (Rule) => Rule.integer().min(1).max(9),
    }),
    defineField({
      name: 'enheter',
      title: 'Hytter',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'enhet'}]})],
      hidden: ({parent}) => parent?.utvalg !== 'manuelt',
    }),
  ],
  preview: {
    select: {title: 'overskrift.no', aktiv: 'aktiv'},
    prepare: ({title, aktiv}) => ({
      title: title || 'Utvalgte hytter',
      subtitle: aktiv ? 'Utvalgte hytter' : 'Utvalgte hytter — skrudd av',
    }),
  },
})

export const blokkStatus = defineType({
  name: 'blokkStatus',
  title: 'Status nå',
  type: 'object',
  icon: TagIcon,
  description: 'Noen få nøkkeltall om salget.',
  fields: [
    aktiv,
    defineField({
      name: 'overskrift',
      title: 'Overskrift',
      type: 'localeString',
      description: 'Valgfritt. La stå tom for bare å vise tallene.',
    }),
    defineField({
      name: 'bakgrunnsbilde',
      title: 'Bakgrunnsbilde',
      type: 'bildeMedKreditering',
      description:
        'Valgfritt. Tallene legges som hvite kort oppå. Velg et lyst, rolig bilde — snø og himmel framfor noe med mye detaljer, ellers blir tallene vanskelige å lese.',
    }),
    defineField({
      name: 'rader',
      title: 'Tallene',
      type: 'array',
      validation: (Rule) => Rule.max(4).warning('Fire tall er nok. Flere blir en tabell ingen leser.'),
      description:
        'Velg «Telles i Sanity» der det går an. Da retter tallet seg selv når en hytte selges, og kan aldri bli utdatert. Skriv bare inn tallet når det ikke kan telles — som salg fra tidligere byggetrinn, eller en status som «Kommer».',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'statusrad',
          fields: [
            defineField({
              name: 'etikett',
              title: 'Tekst under tallet',
              type: 'localeString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'kilde',
              title: 'Hvor kommer tallet fra',
              type: 'string',
              options: {
                list: [
                  {title: 'Telles i Sanity — solgte hytter', value: 'solgte'},
                  {title: 'Telles i Sanity — ledige hytter', value: 'ledige'},
                  {title: 'Skrives inn manuelt', value: 'manuelt'},
                ],
                layout: 'radio',
              },
              initialValue: 'ledige',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'byggetrinn',
              title: 'Bare dette byggetrinnet',
              type: 'number',
              description: 'La stå tom for å telle i hele Nyørk.',
              hidden: ({parent}) => parent?.kilde === 'manuelt',
              validation: (Rule) => Rule.integer().positive(),
            }),
            defineField({
              name: 'verdi',
              title: 'Verdi',
              type: 'localeString',
              description: 'Kan være et tall eller et ord, for eksempel «Kommer».',
              hidden: ({parent}) => parent?.kilde !== 'manuelt',
            }),
            defineField({
              name: 'ikon',
              title: 'Ikon',
              type: 'string',
              options: {
                list: [
                  {title: 'Nøkkel — ledig', value: 'nokkel'},
                  {title: 'Hake — solgt', value: 'solgt'},
                  {title: 'Hytter', value: 'hytte'},
                  {title: 'Tomt', value: 'tomt'},
                  {title: 'Heis', value: 'heis'},
                  {title: 'Uten ikon', value: 'ingen'},
                ],
              },
              initialValue: 'ingen',
            }),
            defineField({
              name: 'fremhevet',
              title: 'Framhev denne',
              type: 'boolean',
              description:
                'Gir tallet farge og løfter det fram. Bruk på det ene tallet en kjøper leter etter — er alle framhevet, er ingen det.',
              initialValue: false,
            }),
          ],
          preview: {
            select: {title: 'etikett.no', kilde: 'kilde', verdi: 'verdi.no', byggetrinn: 'byggetrinn'},
            prepare: ({title, kilde, verdi, byggetrinn}) => ({
              title,
              subtitle:
                kilde === 'manuelt'
                  ? `Skrevet inn: ${verdi ?? '—'}`
                  : `Telles${byggetrinn ? ` i byggetrinn ${byggetrinn}` : ' i hele Nyørk'}`,
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {aktiv: 'aktiv', rader: 'rader'},
    prepare: ({aktiv, rader}) => ({
      title: 'Status nå',
      subtitle: `${rader?.length ?? 0} tall${aktiv ? '' : ' — skrudd av'}`,
    }),
  },
})

export const blokkSitat = defineType({
  name: 'blokkSitat',
  title: 'Sitat',
  type: 'object',
  icon: UserIcon,
  description: 'Sitat fra familien bak Nyørk.',
  fields: [
    aktiv,
    defineField({
      name: 'sitat',
      title: 'Sitat',
      type: 'text',
      rows: 5,
      description:
        'Skrives på norsk, og på dialekt der det er sagt på dialekt. VIKTIG: dialekten skal aldri rettes til bokmål — den er poenget. Ikke rør ord som «meinar», «væra» eller «utbyggjar».',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navn',
      title: 'Hvem sa det',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'portrett',
      title: 'Portrett',
      type: 'bildeMedKreditering',
      description:
        'Bilde av den som er sitert. Vises ved siden av sitatet. Uten bilde står sitatet alene i full bredde.',
    }),
    defineField({
      name: 'oversettelse',
      title: 'Engelsk oversettelse',
      type: 'text',
      rows: 5,
      description:
        'Vises under sitatet på den engelske siden — aldri i stedet for det. Sitatet på norsk blir stående uansett språk.',
    }),
  ],
  preview: {
    select: {title: 'navn', sitat: 'sitat', aktiv: 'aktiv'},
    prepare: ({title, sitat, aktiv}) => ({
      title: title || 'Sitat',
      subtitle: aktiv ? sitat?.slice(0, 60) : 'Skrudd av',
    }),
  },
})

export const blokkKort = defineType({
  name: 'blokkKort',
  title: 'Kort',
  type: 'object',
  icon: DocumentIcon,
  description: 'Rad med kort — for eksempel årstider, aktiviteter eller temaer.',
  fields: [
    aktiv,
    defineField({name: 'overskrift', title: 'Overskrift', type: 'localeString'}),
    defineField({
      name: 'visning',
      title: 'Hvordan kortene ser ut',
      type: 'string',
      description:
        'Med tekst under er bildet et fotografi. Med tekst over ligger en illustrasjon på mønsterbakgrunn, og teksten oppå — den passer når du ikke har et fotografi som fyller kortet.',
      options: {
        list: [
          {title: 'Bilde øverst, tekst under', value: 'tekstUnder'},
          {title: 'Tekst over illustrasjon', value: 'tekstOver'},
        ],
        layout: 'radio',
      },
      initialValue: 'tekstUnder',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'monster',
      title: 'Mønster bak illustrasjonen',
      type: 'string',
      options: {
        list: [
          {title: 'Treårer', value: 'trearer'},
          {title: 'Høydekurver', value: 'hoydekurver'},
          {title: 'Uten mønster', value: 'ingen'},
        ],
        layout: 'radio',
      },
      initialValue: 'hoydekurver',
      hidden: ({parent}) => parent?.visning !== 'tekstOver',
    }),
    defineField({
      name: 'visFilter',
      title: 'Vis sesongfilter',
      type: 'boolean',
      description:
        'Setter tre knapper over kortene — Alle, Vinter, Sommer — så leseren kan se hva som er mulig i den sesongen hen kommer. Krever at kortene har sesong satt. Skru av når kortene ikke handler om årstider.',
      initialValue: false,
      hidden: ({parent}) => parent?.visning === 'tekstOver',
    }),
    defineField({
      name: 'kort',
      title: 'Kortene',
      type: 'array',
      validation: (Rule) => Rule.min(1).max(12),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'kort',
          fields: [
            defineField({
              name: 'etikett',
              title: 'Etikett',
              type: 'localeString',
              description: 'Den lille teksten over tittelen, for eksempel «Sommer». Valgfri.',
            }),
            defineField({
              name: 'tittel',
              title: 'Tittel',
              type: 'localeString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'detalj',
              title: 'Detaljen',
              type: 'localeString',
              description:
                'Én konkret setning som viser at vi vet hva vi snakker om — «100 meter til oppkjørte løyper», «ti kilometer sammenhengende flyt». Ikke skryt, bare et tall eller et navn.',
            }),
            defineField({
              name: 'sesong',
              title: 'Sesong',
              type: 'string',
              description: 'Styrer hvilket filter kortet dukker opp i.',
              options: {
                list: [
                  {title: 'Vinter', value: 'vinter'},
                  {title: 'Sommer', value: 'sommer'},
                  {title: 'Hele året', value: 'helear'},
                ],
                layout: 'radio',
              },
              initialValue: 'helear',
            }),
            defineField({name: 'bilde', title: 'Bilde', type: 'bildeMedKreditering'}),
            defineField({
              name: 'ikon',
              title: 'Ikon',
              type: 'reference',
              to: [{type: 'ikon'}],
              description: 'Brukes i stedet for bilde når kortet viser en aktivitet framfor et fotografi.',
            }),
            defineField({name: 'knapp', title: 'Lenke', type: 'blokkKnapp'}),
          ],
          preview: {
            select: {title: 'tittel.no', subtitle: 'detalj.no', media: 'bilde.bilde'},
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'overskrift.no', aktiv: 'aktiv', kort: 'kort'},
    prepare: ({title, aktiv, kort}) => ({
      title: title || 'Kort',
      subtitle: `${kort?.length ?? 0} kort${aktiv ? '' : ' — skrudd av'}`,
    }),
  },
})

export const blokkFremhevet = defineType({
  name: 'blokkFremhevet',
  title: 'Fremhevet',
  type: 'object',
  icon: ImageIcon,
  description: 'Bilde i full bredde med tekstpanel oppå.',
  fields: [
    aktiv,
    defineField({name: 'overskrift', title: 'Overskrift', type: 'localeString', validation: (Rule) => Rule.required()}),
    defineField({name: 'tekst', title: 'Tekst', type: 'localeText'}),
    defineField({name: 'bilde', title: 'Bakgrunnsbilde', type: 'bildeMedKreditering'}),
    defineField({
      name: 'knapp',
      title: 'Lenke',
      type: 'blokkKnapp',
      description:
        'Setter du en lenke her, blir hele blokka klikkbar. Teksten vises som knapp på mobil, der det verken finnes peker eller hover å gå etter.',
    }),
  ],
  preview: {
    select: {title: 'overskrift.no', aktiv: 'aktiv', media: 'bilde.bilde'},
    prepare: ({title, aktiv, media}) => ({
      title: title || 'Fremhevet',
      subtitle: aktiv ? 'Fremhevet' : 'Fremhevet — skrudd av',
      media,
    }),
  },
})

/** Alle blokktypene, i den rekkefølgen de tilbys redaktøren. */
export const BLOKKTYPER = [
  'blokkHero',
  'blokkBudskap',
  'blokkArtikkel',
  'blokkStatus',
  'blokkUtvalgteHytter',
  'blokkSitat',
  'blokkKort',
  'blokkBilder',
  'blokkNyheter',
  'blokkFremhevet',
] as const
