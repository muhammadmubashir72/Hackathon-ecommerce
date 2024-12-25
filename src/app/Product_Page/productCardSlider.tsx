"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight, FaEye, FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function ProductCardSlide() {
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

  const [currentImage, setCurrentImage] = useState<number>(0);

  // Array of image paths
  const images: string[] = [
    "/product/cover-1.png", // Default main image
    "/product/cover-2.jpg",
    "/product/cover-3.png",
    "/product/cover-4.png",
  ];

  // Move to the next image
  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Move to the previous image
  const handlePrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Set main image when a thumbnail is clicked
  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
  };
  console.log(`Current Image Path: ${images[currentImage]}`); // Debugging the current image path

  return (
    <div>
      <ul className="flex justify-start gap-5 pl-[50px] my-10">
        <li className="hover:text-blue-500">Home</li>
        <IoIosArrowForward className="mt-1" />
        <li className="hover:text-blue-500">Team</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col items-center space-y-4">
          {/* Main Image with Navigation Arrows */}
          <div className="relative w-full h-full md:w-[506px] md:h-[450px] lg:w-[506px] lg:h-[450px] flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="absolute left-2 bg-gray-300 rounded-full p-2 hover:bg-gray-400"
            >
              <FaAngleLeft className="text-xl" />
            </button>

            {/* Main Image */}
            <div className="w-full h-full">
              {/* Using 'key' to force re-render */}
              <Image
                key={`${currentImage}-${Date.now()}`} // Ensures the image component re-renders on state change
                src={images[currentImage]}
                alt={`Main Image ${currentImage + 1}`}
                className="object-contain w-full h-full transform transition duration-500 hover:scale-110"
                width={506}
                height={450}
                priority
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 bg-gray-300 rounded-full p-2 hover:bg-gray-400"
            >
              <FaAngleRight className="text-xl" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-3">
            {images.map((img, index) => (
              <div
                key={index} // Ensure each thumbnail has a unique key
                className={`cursor-pointer ${
                  currentImage === index ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="object-cover w-[100px] h-[75px] transform transition duration-500 hover:scale-110"
                  width={100}
                  height={75}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between mx-6 mt-5 md:mx-[130px] md:mt-14 lg:mx-10 lg:mt-0">
          <div className="flex flex-col space-y-5">
            <h4
              className={`${montserrat.className} text-start font-normal text-[20px] text-myDark hover:text-blue-500`}
            >
              Floating Phone
            </h4>
            <div className="flex">
              <FaStar className="w-[19px] h-[19px] text-[#F3CD03]" />
              <FaStar className="w-[19px] h-[19px] text-[#F3CD03]" />
              <FaStar className="w-[19px] h-[19px] text-[#F3CD03]" />
              <FaStar className="w-[19px] h-[19px] text-[#F3CD03]" />
              <CiStar className="w-[19px] h-[19px] text-[#F3CD03]" />
              <h6
                className={`${montserrat.className} text-start font-bold text-[14px] text-myGrey ml-3 hover:text-blue-500`}
              >
                10 Reviews
              </h6>
            </div>
            <h3
              className={`${montserrat.className} text-start font-bold text-[24px] text-myDark hover:text-blue-500`}
            >
              $1,139.33
            </h3>
            <div className="flex justify-between w-[159px]">
              <h6
                className={`${montserrat.className} text-start font-bold text-[14px] text-myGrey hover:text-blue-500`}
              >
                Availability :
              </h6>

              <h6
                className={`${montserrat.className} text-start font-bold text-[14px] text-myBlue hover:text-blue-500`}
              >
                In Stock
              </h6>
            </div>
            <p
              className={`${montserrat.className} text-start font-normal text-[14px] text-myGrey w-[85%] hover:text-blue-500`}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr className="w-[80%] border-1 text-myLightGrey" />
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
                      selectedColor === color.class
                        ? "border-4 border-white"
                        : ""
                    }`} // Add border to the selected color
                  />
                ))}
              </div>
            </div>
            <div className="flex pt-7 space-x-3">
              <button className="w-[148px] h-[44px]  bg-myBlue text-white font-bold  rounded-[5px] text-sm hover:text-black">
                Select Options
              </button>
              <div className="w-[40px] h-[40px] rounded-full border border-[#E8E8E8]">
                <CiHeart className="w-[20px] h-[20px] text-myDark mx-auto mt-2" />
              </div>

              <div className="w-[40] h-[40px] rounded-full border border-[#E8E8E8]">
                <IoCartOutline className="w-[20px] h-[20px] text-myDark mx-auto mt-2" />
              </div>

              <div className="w-[40] h-[40px] rounded-full border border-[#E8E8E8]">
                <FaEye className="w-[20px] h-[20px] text-myDark mx-auto mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
