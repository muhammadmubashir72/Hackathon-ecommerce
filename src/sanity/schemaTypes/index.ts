import { type SchemaTypeDefinition } from 'sanity'
import { Shop } from './shop'
import { Seller } from './seller'
import { Product } from './product'
import { Order } from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product,Shop,Seller,Order],
}
