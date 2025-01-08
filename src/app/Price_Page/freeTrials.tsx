"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const FreeTrials = () => {
  return (
    <div>
      <div className="w-full md:w-[547px] lg:w-[547px] flex flex-col justify-center items-center text-center mx-auto mt-36">
        <h2
          className={`${montserrat.className} font-bold text-[20px] text-myDark hover:text-blue-500`}
        >
          Start your 14 days free trial
        </h2>

        <div className=" items-center">
          <p
            className={`${montserrat.className}  font-normal text-[10px] text-sm text-myGrey mt-4 px-6 lg:px-0 hover:text-blue-500`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent. Try it free now
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
        <div className="w-[242px]  mx-auto flex my-8  justify-evenly">
          {/* Twitter Icon */}
          <div>
            <Image
              src="/price/price-twt.png" // Small image
              alt="Twitter"
              width={30}
              height={30}
              className="w-[30px] h-[30px]"
            />
          </div>
          {/* Facebook Icon */}
          <div>
            <Image
              src="/price/price-fb.png" // Small image
              alt="Facebook"
              width={30}
              height={30}
              className="w-[30px] h-[30px]"
            />
          </div>
          {/* Instagram Icon */}
          <div>
            <Image
              src="/price/price-int.png" // Small image
              alt="Instagram"
              width={30}
              height={30}
              className="w-[30px] h-[30px]"
            />
          </div>
          {/* LinkedIn Icon */}

          <div>
            <Image
              src="/price/price-lnk.png" // Small image
              alt="LinkedIn"
              width={30}
              height={30}
              className="w-[30px] h-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrials;
