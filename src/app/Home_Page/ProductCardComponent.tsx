"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface Cards {
  imagePath: string;
  heading: string;
  department: string;
  price1: string;
  price2: string;
}

const ProductCards = (card: Cards) => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  // Array of colors to use
  const colors = [
    { name: "blue", class: "bg-myBlue" },
    { name: "green", class: "bg-myDarkGreen" },
    { name: "orange", class: "bg-myOrange" },
    { name: "dark", class: "bg-myDark" },
  ];

  // Function to handle color change
  const handleColorChange = (colorClass: string) => {
    setSelectedColor(colorClass); // Update the selected color state
  };

  return (
    <div className="w-full h-auto pr-0 md:pr-5 lg:pr-5 items-center mx-auto">
      <div className="">
        <Image
          src={card.imagePath} // Corrected image path
          alt="card-image-1"
          className="object-cover w-full h-auto md:lg:w-[239px] md:lg:h-[427px] transform transition duration-500 hover:scale-110 "
          width={239}
          height={427}
        />
      </div>
      <div className="w-[239px] h-[188px] flex flex-col justify-evenly items-center ">
        <h5
          className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
        >
          {card.heading}
        </h5>
        <Link
          href={""}
          className={`${montserrat.className}items-center text-center font-bold text-[14px] text-myGrey hover:text-blue-500`}
        >
          {card.department}
        </Link>

        <div className="w-[108px] h-[34px] flex justify-between">
          <h5
            className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myGrey hover:text-blue-500`}
          >
            {card.price1}
          </h5>
          <h5
            className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myDarkGreen hover:text-blue-500`}
          >
            {card.price2}
          </h5>
        </div>

        <div>
          {/* Color selector */}
          <div className="flex justify-start space-x-1">
            {colors.map((color) => (
              <div
                key={color.name}
                onClick={() => handleColorChange(color.class)} // Change color on click
                className={`w-[30px] h-[30px] rounded-full cursor-pointer ${
                  color.class
                } ${
                  selectedColor === color.class ? "border-4 border-white" : ""
                }`} // Add border to the selected color
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
