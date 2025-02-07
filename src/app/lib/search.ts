import { client } from "@/sanity/lib/client"

// Define the product interface based on your schema
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string; // Adjust based on your image field type
}

// Define the function that searches products
export async function searchProducts(query: string): Promise<Product[]> {
  // Query definition
  const queryStr = `*[_type == "product" && name match $query] {
    _id,
    name,
    description,
    price,
    image
  }`

  // Define params object to pass to the query
  const params = { query: `${query}*` }

  // Perform the fetch with the query string and params
  const results = await client.fetch(queryStr, params as Record<string, unknown>)

  return results
}
