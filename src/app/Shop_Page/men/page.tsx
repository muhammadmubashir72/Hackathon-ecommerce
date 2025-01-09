"use client";
import { Montserrat } from "next/font/google";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ProductCards from "../ProductCardComponent";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

// Define the Product type
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

// Fetch data function with type annotations
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
  const [products, setProducts] = useState<Product[]>([]); // Use Product[] instead of any[]

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getData();
      console.log(data);
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
        Men
      </h4>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-12">
        {products.map((product) => (
          <ProductCards
            key={product.id}
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
