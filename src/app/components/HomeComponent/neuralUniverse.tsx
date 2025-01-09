import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Carousel_3 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full h-auto lg:px-16 py-10 lg:py-20 gap-8 lg:gap-16">
      {/* Image Section */}
      <div className="w-full h-auto lg:w-[725px] mx-auto items-center pl-5 md:lg:pl-0">
        <Image
          src="/images/hero-cover-1.png" // Update with your image path
          alt="Hero Image 2"
          width={725}
          height={774}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[573px] flex flex-col justify-center px-8 md:lg:px-0 space-y-6 lg:space-y-8">
        <h5
          className={`${montserrat.className} font-bold text-sm sm:text-base lg:text-lg text-myGrey hover:text-blue-500`}
        >
          SUMMER 2020
        </h5>

        <h1
          className={`${montserrat.className} font-bold text-2xl sm:text-3xl lg:text-4xl text-myDark hover:text-blue-500`}
        >
          Part of the Neural Universe
        </h1>

        <p
          className={`${montserrat.className} font-normal text-sm sm:text-base lg:text-lg text-myGrey hover:text-blue-500`}
        >
          We know how large objects will act, but things on a small scale.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="w-full sm:w-[156px] px-6 py-3 text-sm lg:text-base bg-myGreen text-white rounded-lg text-center hover:text-blue-500">
            BUY NOW
          </button>
          <button className="w-full sm:w-[156px] px-6 py-3 text-sm lg:text-base bg-white text-myGreen border border-myGreen rounded-lg text-center hover:text-blue-500">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel_3;
