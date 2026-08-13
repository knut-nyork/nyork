import {HomeIcon} from '@sanity/icons/Home'
import {defineField, defineType} from 'sanity'

/**
 * Arkitekturen — skrives én gang, gjenbrukes av alle enheter av samme type.
 * Se docs/01-byggeinstruks.md: «Modell og enhet er to forskjellige ting».
 * Hvilke enheter (H04, H05 …) som er av denne modellen vises automatisk på
 * frontend ved å slå opp enhet-dokumenter som peker hit — det skal ikke
 * skrives inn her.
 */
export const hyttemodell = defineType({
  name: 'hyttemodell',
  title: 'Hyttemodell',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {name: 'fakta', title: 'Fakta og mål'},
    {name: 'tekst', title: 'Tekst'},
    {name: 'bilder', title: 'Tegninger og bilder'},
    {name: 'internt', title: 'Internt'},
  ],
  fields: [
    defineField({
      name: 'navn',
      title: 'Modellnavn',
      type: 'string',
      description: 'Kortkoden brukt i salgsoppgaven, for eksempel «A1». Vises som overskrift på modellsiden.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL-del',
      type: 'slug',
      description: 'Brukes i adressen /hytter/[denne]. Skal ikke endres etter at siden er publisert — det ødelegger delte lenker.',
      options: {source: 'navn', maxLength: 40},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'delomrade',
      title: 'Delområde',
      type: 'string',
      description: 'Hvilket område hytta ligger i, for eksempel «Røvarklanten». Stedsnavn oversettes ikke.',
      group: 'fakta',
    }),
    defineField({
      name: 'bra',
      title: 'BRA (m²)',
      type: 'number',
      description: 'Bruksareal i kvadratmeter.',
      group: 'fakta',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'prom',
      title: 'P-rom (m²)',
      type: 'number',
      description: 'Primærrom i kvadratmeter.',
      group: 'fakta',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'antallSoverom',
      title: 'Antall soverom',
      type: 'number',
      group: 'fakta',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'antallBad',
      title: 'Antall bad',
      type: 'number',
      group: 'fakta',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'harBadstue',
      title: 'Har badstue',
      type: 'boolean',
      group: 'fakta',
      initialValue: true,
    }),
    defineField({
      name: 'harVaskerom',
      title: 'Har vaskerom',
      type: 'boolean',
      group: 'fakta',
      initialValue: true,
    }),
    defineField({
      name: 'antallBod',
      title: 'Antall boder',
      type: 'number',
      group: 'fakta',
      validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({
      name: 'harTerrasse',
      title: 'Har terrasse',
      type: 'boolean',
      group: 'fakta',
      initialValue: true,
    }),
    defineField({
      name: 'harParkering',
      title: 'Har parkering',
      type: 'boolean',
      group: 'fakta',
      initialValue: true,
    }),
    defineField({
      name: 'antallEtasjer',
      title: 'Antall etasjer',
      type: 'number',
      group: 'fakta',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'beskrivelse',
      title: 'Beskrivelse',
      type: 'localeText',
      description: 'Den emosjonelle teksten om modellen, slik brosjyren beskriver den (plassering av rom, utsikt, følelse).',
      group: 'tekst',
    }),
    defineField({
      name: 'materialer',
      title: 'Materialer',
      type: 'localeText',
      description: 'Standardleveranse og materialvalg, for eksempel kjøkken og fasade.',
      group: 'tekst',
    }),
    defineField({
      name: 'illustrasjonsforbehold',
      title: 'Forbehold om illustrasjoner',
      type: 'localeText',
      description:
        'Standardteksten som vises under 3D-illustrasjoner og tegninger. Forhåndsutfylt på norsk — engelsk må oversettes før publisering.',
      group: 'tekst',
      initialValue: {
        no: '3D-illustrasjoner og tegninger i salgsoppgave vil avvike fra faktisk leveranse, som f.eks. møblering, garderober, solskjerming, lamper, material- og fargevalg, bygningsdetaljer, utsikt, utsyn og detaljer på ute- og fellesarealer m.m.',
      },
    }),
    defineField({
      name: 'plantegninger',
      title: 'Plantegninger',
      type: 'array',
      description: 'Én rad per etasje, i rekkefølge.',
      group: 'bilder',
      of: [{type: 'bildeMedKreditering'}],
    }),
    defineField({
      name: 'fasadetegninger',
      title: 'Fasadetegninger',
      type: 'array',
      description: 'De fire himmelretningene.',
      group: 'bilder',
      of: [{type: 'bildeMedKreditering'}],
    }),
    defineField({
      name: 'interiorbilder',
      title: 'Interiørbilder',
      type: 'array',
      group: 'bilder',
      of: [{type: 'bildeMedKreditering'}],
    }),
    defineField({
      name: 'utbyggerIntern',
      title: '⚠️ Utbygger (internt, vises ALDRI på nettsiden)',
      type: 'string',
      description:
        'Kun til intern oversikt over hvilken utbygger som står bak modellen. Modellene presenteres som Nyørks eget utvalg — dette feltet skal aldri hentes i en spørring frontend bruker, og redaktører trenger ikke fylle det ut.',
      group: 'internt',
    }),
  ],
  preview: {
    select: {
      title: 'navn',
      bra: 'bra',
      soverom: 'antallSoverom',
      media: 'interiorbilder.0.bilde',
    },
    prepare({title, bra, soverom, media}) {
      return {
        title,
        subtitle: bra ? `${bra} m² · ${soverom ?? '?'} soverom` : undefined,
        media,
      }
    },
  },
})
