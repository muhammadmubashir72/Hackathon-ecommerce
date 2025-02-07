"use client";
import { Montserrat } from "next/font/google";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import React from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const FreeTrials = () => {
  return (
    <div>
      <div className="w-full h-[282px] flex flex-col justify-center items-center text-center space-y-12 mx-auto mt-36">
        <h2
          className={`${montserrat.className} w-full md:w-full lg:w-full text-center font-bold text-[32px] md:text-[40px] lg:text-[30px] text-myDark`}
        >
          <span className="block md:inline">Start your</span>
          <span className="block md:inline">14 days free trial</span>
        </h2>

        <div className=" items-center">
          <p
            className={`${montserrat.className} w-full md:w-[451px] lg:w-[451px] font-normal text-[8] md:text-sm  text-myGrey px-4`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
        </div>

        <div className="w-[186px] h-[52px] rounded-md  bg-myBlue mx-auto py-4 mt-6">
          <h6
            className={`${montserrat.className}  text-center font-bold text-[14px] items-center text-white mx-auto hover:text-black`}
          >
            Try for free
          </h6>
        </div>
        {/* social icons */}

        <div className="mx-auto flex justify-center pb-24 md:pb-0 lg:pb-0 space-x-5">
          {/* Twitter Icon */}
          <div className="transform transition duration-300 hover:scale-110">
            <FaTwitter className="w-[30px] h-[30px] text-blue-500" />
          </div>

          {/* Facebook Icon */}
          <div className="transform transition duration-300 hover:scale-110">
            <FaFacebookF className="w-[30px] h-[30px] text-blue-700" />
          </div>

          {/* Instagram Icon */}
          <div className="transform transition duration-300 hover:scale-110">
            <FaInstagram className="w-[30px] h-[30px] text-pink-500" />
          </div>

          {/* LinkedIn Icon */}
          <div className="transform transition duration-300 hover:scale-110">
            <FaLinkedinIn className="w-[30px] h-[30px] text-blue-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrials;
