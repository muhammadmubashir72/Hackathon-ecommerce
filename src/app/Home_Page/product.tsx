"use client"
import { Montserrat } from "next/font/google";
import ProductCards from "./ProductCardComponent";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

async function getData() {
  try {
    const FetchData = await client.fetch(`*[_type == "product"]{
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

const ProductCard = () => {
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
      {/* h2 #feature-section.1 */}
      <h4
        className={`${montserrat.className} items-center text-center font-normal text-[20px] text-myGrey hover:text-blue-500`}
      >
        Featured Products
      </h4>

      <h3
        className={`${montserrat.className} font-normal text-[24px] text-center text-myDark hover:text-blue-500`}
      >
        Problems trying to resolve the conflict between
      </h3>

      <p
        className={`${montserrat.className} items-center text-center font-normal text-[14px] text-myGrey mb-16 mt-2 hover:text-blue-500`}
      >
        Problems trying to resolve the conflict between
      </p>

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

export default ProductCard;
