import {createClient} from '@sanity/client'

/**
 * Datasettet «production» er public, så publisert innhold leses uten token.
 * SANITY_READ_TOKEN trengs først når vi skal hente utkast eller skrive.
 * Prosjekt-ID og datasett er ikke hemmeligheter — de ligger allerede i
 * sanity.config.ts — så fallbacken her gjør at bygget virker uten .env-fil.
 *
 * `useCdn: false` er med vilje. Siden bygges statisk, så alle spørringene
 * kjøres én gang under bygget og aldri fra nettleseren — da er det ingenting
 * å spare på å lese fra kantnettet. Med CDN-en på leverer den et hurtiglagret
 * svar i opptil et minutt, og et bygg som starter rett etter at redaktøren
 * trykket «publiser» rakk å hente det gamle innholdet. Det er akkurat det
 * Netlify gjør: publisering i Sanity utløser bygg med det samme.
 */
export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? 'kh2746mt',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-10-01',
  useCdn: false,
})
