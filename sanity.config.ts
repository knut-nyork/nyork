import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './sanity/schemas'
import {structure} from './sanity/structure'

export default defineConfig({
  name: 'nyork',
  title: 'Nyørk',

  projectId: 'kh2746mt',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
