"use client";
import { Montserrat } from "next/font/google";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ProductCards from "@/app/components/ProductComponent/ProductCardCom";

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
    const FetchData: Product[] = await client.fetch(`*[_type == "product"]{
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
  const [loading, setLoading] = useState<boolean>(true); // State for loading

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getData();
      console.log(data);
      setProducts(data);
      setLoading(false); // Set loading to false once data is fetched
    };
    fetchProducts();
  }, []);

  return (
    <div className="items-center my-14">
      <h4
        className={`${montserrat.className} items-center text-center font-normal text-[20px] text-myGrey hover:text-blue-500`}
      >
        Men
      </h4>

      {/* Loader - Display while data is being fetched */}
      {loading ? (
        <div className="flex justify-center items-center my-12">
          <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-solid rounded-full border-current border-t-transparent text-myBlue" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        // Product Grid - Display after data is fetched
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-12">
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

export default ProductCard;