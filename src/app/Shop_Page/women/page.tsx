import ProductCardShow from "@/app/Product_Page/ProductCardCom";
import { client } from "@/sanity/lib/client";
import { Montserrat } from "next/font/google";
import ProductCards from "../ProductCardComponent";
import { urlFor } from "@/sanity/lib/image";
import React from "react";

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
}
`);
    return FetchData;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
const Women = async () => {
  
  const ShopProduct = await getData();
  console.log(ShopProduct);
  return (
    <div>
      <h3
        className={`${montserrat.className} pl-0 md:lg:pl-[40px] pb-10 pt-9 text-center md:lg:text-center font-bold text-[20px] md:lg:text-[24px] text-myDark hover:text-blue-500`}
      >
        Women
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          
      {ShopProduct.map((shop:any,index:number)=>(
             <ProductCards
             key={index}
             imagePath={urlFor(shop.image).url()} // Pass the image
             heading={shop.heading} // Pass the heading
             alt={shop.heading} // Use heading as alt text
             department={shop.subheading} // Pass the department
             price1={`$${shop.price.originalPrice}`} // Pass the original price
             price2={`$${shop.price.discountedPrice}`} // Pass the discounted price
           />
           ))}
            
      </div>
    </div>
  );
};

export default Women;
