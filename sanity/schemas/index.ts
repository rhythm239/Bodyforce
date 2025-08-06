
// sanity/schemas/index.ts
import category from './category'
import product from './product'
import pkg from './package' // 'package' is a reserved word, so we use 'pkg'

export const schemaTypes = [category, product, pkg]