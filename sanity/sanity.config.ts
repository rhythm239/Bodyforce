// sanity/sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas' // <-- Import from the new folder

export default defineConfig({
  name: 'default',
  title: 'Gym Content Studio',

  projectId: 'iv259gk1',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes, // <-- Use the imported schemas
  },
})