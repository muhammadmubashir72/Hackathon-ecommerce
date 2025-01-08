import { type SchemaTypeDefinition } from 'sanity'
import { Shop } from './shop'
import { Seller } from './seller'
import { Product } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product,Shop,Seller],
}
