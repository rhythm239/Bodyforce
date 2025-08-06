// sanity.cli.ts
import {defineCliConfig} from 'sanity/cli'

const projectId = 'iv259gk1'
const dataset = 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})
