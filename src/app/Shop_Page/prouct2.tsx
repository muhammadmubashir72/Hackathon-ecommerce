"use client"
import { Montserrat } from "next/font/google";
import ProductCards from "./ProductCardComponent";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

async function getData() {
  try {
    const FetchData = await client.fetch(`*[_type == "shop"]{
      id,
      heading,
      subheading,
      image,
      price{
        originalPrice,
        discountedPrice
      },
    }`);
    return FetchData;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
}

const Product2 = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getData();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="items-center my-14">
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-12">
        {products.map((product, index) => (
          <ProductCards
            key={index}
            detailsLink={`/products/${product.id}`}
            image={urlFor(product.image).url()} // Pass the image
            alt={product.heading}
            heading={product.heading} // Pass the heading
            department={product.subheading} // Pass the department
            originalPrice={`$${product.price.originalPrice}`} // Pass the original price
            discountedPrice={`$${product.price.discountedPrice}`} // Pass the discounted price
          />
        ))}
      </div>
    </div>
  );
};

export default Product2;
