"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React, { useEffect, useState } from "react";
import { Product } from "../types/ProductType";
import ProductCards from "../HomeComponent/ProductCardComponent";
import { Montserrat } from "next/font/google";
import Loader from "@/app/(pages)/(public)/Loader3D/Loader";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

async function getData(): Promise<Product[]> {
  try {
    const query = `*[_type == "shop"]{
      id,
      heading,
      subheading,
      image,
      price{
        originalPrice,
        discountedPrice
      },
    }`;
    const FetchData: Product[] = await client.fetch(query);
    return FetchData;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
}

const ProductCardListingShop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await getData();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="items-center space-y-14">
      <p
        className={`${montserrat.className} mt-10 text-center text-3xl font-semibold text-gray-800`}
      >
        Best Selling Products
      </p>

      {loading ? (
        <Loader/>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-2">
          {products.map((product) => (
            <ProductCards
              key={product.id}
              detailsLink={`/products/${product.id}`}
              image={urlFor(product.image).url()}
              alt={product.heading}
              heading={product.heading}
              department={product.subheading}
              originalPrice={`$${product.price.originalPrice}`}
              discountedPrice={`$${product.price.discountedPrice}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCardListingShop;
