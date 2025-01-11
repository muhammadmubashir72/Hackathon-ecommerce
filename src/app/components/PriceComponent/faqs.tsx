"use client";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Faqs = () => {
  const [visible, setVisible] = useState<boolean[]>(Array(6).fill(true));

  // Toggle function
  const toggleVisibility = (index: number) => {
    setVisible((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };
  return (
    <div>
      <div className=" flex flex-col justify-center  w-full h-full lg:w-[607px] lg:h-[100px] items-center text-center mx-auto mt-20">
        <h2
          className={`${montserrat.className} font-bold text-[40px] text-myDark hover:text-blue-500`}
        >
          Pricing FAQs
        </h2>

        <div className="w-full lg:w-[469px] h-[40px] items-center">
          <p
            className={`${montserrat.className}  font-normal text-sm text-myGrey mt-4 px-6 lg:px-0 hover:text-blue-500`}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  justify-evenly items-center mt-14 mx-auto gap-y-8 px-4 space-y-10 md:space-y-0 lg:space-y-0">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex space-x-4 items-start justify-center"
          >
            <div
              onClick={() => toggleVisibility(index)}
              className="cursor-pointer"
            >
              <FaAngleRight className="text-myBlue h-5 w-5" />
            </div>
            <div>
              <div className="flex flex-col justify-start w-full h-auto">
                <h5
                  className={`${montserrat.className} font-bold text-[16px] text-myDark hover:text-blue-500`}
                >
                  the quick fox jumps over the lazy dog
                </h5>
                {visible[index] && (
                  <div className="w-full lg:w-[408px] h-[80px] items-center">
                    <p
                      className={`${montserrat.className} font-normal text-sm text-myGrey hover:text-blue-500`}
                    >
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
