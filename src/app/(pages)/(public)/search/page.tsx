"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/app/components/types/ProductType";
import ProductCards from "@/app/components/HomeComponent/ProductCardComponent";
import Loader from "../Loader3D/Loader";

// Query to fetch products, sellers, and shops
const query = `*[_type == "product" || _type == "seller" || _type == "shop"]{
    _id,
    heading,
    subheading,
    image,
    price{
      originalPrice,
      discountedPrice
    },
  }`;

const ProductSearch = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch products from Sanity
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await client.fetch(query);
        setProducts(data);
        setFilteredProducts(data); // Initialize with all products
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Handle search input
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter products dynamically
    const filtered = products.filter((product) =>
      product.heading.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Search Products</h2>

      {/* Search Input Field */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full md:w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Loader */}
      {loading && (
        <div className="flex justify-center">
          {/* <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div> */}
            <Loader/>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-center text-red-500 font-semibold">Failed to load products.</p>
      )}

      {/* Product Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCards
                key={index}
                detailsLink={`/products/${product.id}`}
                image={urlFor(product.image).url()}
                alt={product.heading}
                heading={product.heading}
                department={product.subheading}
                originalPrice={`$${product.price.originalPrice}`}
                discountedPrice={`$${product.price.discountedPrice}`}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
