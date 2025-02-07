"use client";
import { urlFor } from "@/sanity/lib/image";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Cards } from "../types/ProductType";
import { FaEye, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const ProductCards = (card: Cards) => {
  const router = useRouter();
  const navigate = () => {
    router.push(card.detailsLink);
  };

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const colors = [
    { name: "blue", class: "bg-myBlue" },
    { name: "green", class: "bg-myDarkGreen" },
    { name: "orange", class: "bg-myOrange" },
    { name: "dark", class: "bg-myDark" },
  ];

  const handleColorChange = (colorClass: string) => {
    setSelectedColor(colorClass);
  };

  const openModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="px-3">
      <div className="my-4 mx-1 border-x-2 border-y-4 border-gray-300 rounded-lg hover:shadow-lg h-auto bg-gray-100 relative w-full max-w-[300px] sm:max-w-none">
        <div className="relative">
          {/* Icons */}
          <div className="absolute top-2 right-0 flex flex-col space-y-2 mr-2">
            <div
              onClick={openModal}
              title="View Image"
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 cursor-pointer"
            >
              <FaEye className="text-lg text-gray-400" />
            </div>
          </div>

          {/* Product Image */}
          <Image
            src={urlFor(card.image).url()}
            alt={card.alt}
            className="w-full h-auto lg:h-[427px] cursor-pointer"
            width={260}
            height={427}
            priority
          />

          {/* Product Details */}
          <Link href={card.detailsLink}>
            <div className="w-full h-auto flex flex-col justify-evenly my-5 space-y-2 px-6">
              <h5
                className={`${montserrat.className} text-start font-bold text-[16px] text-myDark`}
              >
                {card.heading}
              </h5>

              <h3
                className={`${montserrat.className} text-start font-bold text-[14px] text-myGrey`}
              >
                Lorem ipsum dolor sit amet, consectetur
              </h3>

              {/* Availability */}
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-600">Availability:</span>
                <span className="text-green-600">In Stock</span>
              </div>

              {/* Price Section */}
              <div className="w-full h-auto flex flex-col justify-start">
                <div>
                  <h5
                    className={`${montserrat.className} text-start font-bold text-[18px] text-myDarkGreen`}
                  >
                    {card.discountedPrice}
                  </h5>
                </div>

                <div className="flex justify-start space-x-3">
                  <h5
                    className={`${montserrat.className} line-through text-start font-bold text-[16px] text-myGrey opacity-60`}
                  >
                    {card.originalPrice}
                  </h5>
                  <h5
                    className={`${montserrat.className} mt-[2px] line-through text-start font-bold text-[13px] text-myGrey`}
                  >
                    -10%
                  </h5>
                </div>
              </div>

              {/* Color Selector */}
              <div className="flex justify-center space-x-1">
                {colors.map((color) => (
                  <div
                    key={color.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleColorChange(color.class);
                    }}
                    className={`w-[20px] h-[20px] rounded-full cursor-pointer ${
                      color.class
                    } ${
                      selectedColor === color.class
                        ? "border-4 border-white"
                        : ""
                    }`}
                  />
                ))}
              </div>

              {/* View Product Button */}
              <button
                onClick={navigate}
                className="w-full items-center bg-black text-white text-sm md:text-lg font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
              >
                View Product
              </button>
            </div>
          </Link>
        </div>

        {/* Modal for Image */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg relative max-w-[90%] sm:max-w-[500px]">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                <FaTimes className="text-xl" />
              </button>
              <Image
                src={urlFor(card.image).url()}
                alt={card.alt}
                width={500}
                height={500}
                className="rounded-lg w-full h-auto"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
