"use client";
import { Montserrat } from "next/font/google";
import ProductCards from "./ProductCardComponent";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface Product {
  id: string;
  heading: string;
  subheading: string;
  image: string;
  price: {
    originalPrice: number;
    discountedPrice: number;
  };
}

async function getData(): Promise<Product[]> {
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
    <div className="items-center my-14">
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

      {loading ? (
        <div
          className="flex justify-center items-center pointer-events-none"
          style={{ height: "200px" }}
        >
          <div
            className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
            aria-label="Loading..."
          ></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-12">
          {products.map((product, index) => (
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
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
