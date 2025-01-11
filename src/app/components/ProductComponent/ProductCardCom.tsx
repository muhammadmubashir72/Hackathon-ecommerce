"use client";
import { urlFor } from "@/sanity/lib/image";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface Cards {
  image: string;
  heading: string;
  alt: string;
  department: string;
  originalPrice: string;
  discountedPrice: string;
  detailsLink: string;
}

const ProductCards = (card: Cards) => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const colors = [
    { name: "blue", class: "bg-myBlue" },
    { name: "green", class: "bg-myDarkGreen" },
    { name: "orange", class: "bg-myOrange" },
    { name: "dark", class: "bg-myDark" },
  ];

  const handleColorChange = (colorClass: string) => {
    setSelectedColor(colorClass);
  };

  return (
    <div className="w-full h-auto pr-0 md:pr-5 lg:pr-5 items-center mx-auto transform transition duration-500 hover:scale-105">
      <Link href={card.detailsLink}>
        <Image
          src={urlFor(card.image).url()}
          alt={card.alt}
          className="object-cover w-full h-auto md:lg:w-[239px] md:lg:h-[427px]  "
          width={239}
          height={427}
        />
        <div className="w-[239px] h-[188px] flex flex-col justify-evenly items-center ">
          <h5
            className={`${montserrat.className} items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
          >
            {card.heading}
          </h5>

          <h3
            className={`${montserrat.className} items-center text-center font-bold text-[14px] text-myGrey hover:text-blue-500`}
          >
            {card.department}
          </h3>

          <div className="w-[108px] h-[34px] flex justify-center space-x-3">
            <h5
              className={`${montserrat.className} items-center text-center font-bold text-[18px] text-myDarkGreen hover:text-blue-500`}
            >
              {card.discountedPrice}
            </h5>
            <h5
              className={`${montserrat.className} line-through items-center text-center font-bold text-[16px] text-myGrey hover:text-blue-500`}
            >
              {card.originalPrice}
            </h5>
          </div>

          {/* Color selector */}
          <div className="flex justify-start space-x-1">
            {colors.map((color) => (
              <div
                key={color.name}
                onClick={() => handleColorChange(color.class)}
                className={`w-[20px] h-[20px] rounded-full cursor-pointer ${
                  color.class
                } ${
                  selectedColor === color.class ? "border-4 border-white" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCards;
