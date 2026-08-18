import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'kh2746mt',
    dataset: 'production',
  },

  /**
   * Adressen Studio publiseres på: nyork-hemsedal.sanity.studio
   *
   * Står her og ikke bare i hodet på den som deployer, slik at `npx sanity
   * deploy` treffer samme sted hver gang. Uten den spør CLI-en om vertsnavn,
   * og et feilskrevet svar lager et nytt studio i stedet for å oppdatere det
   * som finnes.
   */
  studioHost: 'nyork-hemsedal',

  /** Samme id hver gang, så deploy oppdaterer studioet i stedet for å lage et nytt. */
  deployment: {
    appId: 'ps0zxc37yugvy74m6qt7wnwf',
  },
})
