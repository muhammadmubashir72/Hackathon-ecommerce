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

export default function ProductCards(card: Cards) {
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
    <div className="items-center mx-auto w-full h-auto lg:w-[239px] lg:h-[488px] mt-6 px-4 md:px-3 lg:-px-0 ml-0 md:ml-0 lg:ml-10">
      <div className="items-center mx-auto">
        <Image
          src={card.imagePath} // Corrected image path
          alt="card-image-1"
          className="w-full h-auto lg:w-[239px] lg:h-[300px] transform transition duration-500 hover:scale-110"
          width={239}
          height={427}
        />
      </div>
      <div className="w-full h-auto lg:w-[239px] lg:h-[188px] flex flex-col justify-evenly mx-auto items-center space-y-2 mt-4 ">
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

        {/* Color selector */}
        <div className="flex justify-start space-x-1">
          {colors.map((color) => (
            <div
              key={color.name}
              onClick={() => handleColorChange(color.class)} // Change color on click
              className={`w-[16px] h-[16px] rounded-full cursor-pointer ${
                color.class
              } ${
                selectedColor === color.class ? "border-4 border-white" : ""
              }`} // Add border to the selected color
            />
          ))}
        </div>
      </div>
    </div>
  );
}
