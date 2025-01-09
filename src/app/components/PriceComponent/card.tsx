"use client";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Card() {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <div className=" flex flex-col justify-center w-full h-full lg:w-[607px] lg:h-[100px] items-center text-center mx-auto mt-20">
        <h2
          className={`${montserrat.className} font-bold text-[40px] text-myDark`}
        >
          Pricing
        </h2>

        <div className="w-full lg:w-[469px] h-[40px] items-center">
          <p
            className={`${montserrat.className}  font-normal text-sm text-myGrey mt-4 px-6 lg:px-0`}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 mx-auto mt-16 px-5 sm:px-5 md:px-2 lg:px-0">
        <h2
          className={`${montserrat.className} font-bold text-[16px] text-myDark hover:text-blue-500`}
        >
          Monthly
        </h2>
        <div className="flex items-center space-x-2">
          <h2
            className={`${montserrat.className} font-bold text-[16px] text-myDark hover:text-blue-500`}
          >
            Yearly
          </h2>
          <div
            className={` w-[45px] h-[25px] rounded-full border ${
              isActive ? "bg-white border-myBlue" : "bg-white border-myBlue "
            } flex items-center cursor-pointer`}
            onClick={toggleSwitch}
          >
            <div
              className={`ml-1 px-1 w-[19px] h-[19px] rounded-full ${
                isActive ? "bg-myGreen" : "bg-myLightGrey"
              }  shadow-md transform transition-transform duration-300 ${
                isActive ? "translate-x-[20px]" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>
        <div className="w-[109px] h-[30px] sm:h-[40px] md:h-[44px] lg:h-[44px] rounded-full flex items-center bg-[#B2E3FF] mx-auto">
          <h6
            className={`${montserrat.className} text-center font-bold text-[12px] md:text-[14px] lg:text-[14px] text-[#23A6F0] mx-auto hover:text-blue-500`}
          >
            Save 25%
          </h6>
        </div>
      </div>
      {/* Contact Boxes */}
      <div className="bg-[#FAFAFA] flex justify-center flex-wrap items-center pb-[-44] mt-16 px-3 sm:px-3 md:px-0 lg:px-0 space-y-3 sm:space-y-3  space-x-0 sm:space-x-0 md:space-x-4 lg:space-x-0 md:space-y-3 lg:space-y-0">
        <div className="bg-white flex flex-col justify-evenly w-[327px] h-[664px] border border-myBlue rounded-md transform transition duration-500 hover:scale-110">
          <h3
            className={`${montserrat.className} text-center font-bold text-[24px] text-myDark mx-auto`}
          >
            FREE
          </h3>
          <h5
            className={`${montserrat.className} text-center font-bold text-[14px] text-myGrey mx-auto`}
          >
            Organize across all apps by hand
          </h5>
          <div className="flex justify-center">
            <div>
              <h2
                className={`${montserrat.className} text-center font-bold text-[40px] text-myBlue mx-auto`}
              >
                0
              </h2>
            </div>
            <div className="flex flex-col">
              <h3
                className={`${montserrat.className} text-center font-bold text-[24px] text-myBlue mx-auto`}
              >
                $
              </h3>

              <h5
                className={`${montserrat.className} text-center font-bold text-[14px] text-myBlue mx-auto`}
              >
                Per
              </h5>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mx-auto space-y-3">
            <div className="space-x-4 flex justify-center items-center">
              <IoIosCheckmark className="rounded-full bg-[#2DC071] text-white w-8 h-8 " />
              <h6
                className={`${montserrat.className} text-center font-bold text-[14px] text-myDark mx-auto`}
              >
                Unlimited product updates
              </h6>
            </div>
            <div className="space-x-4 flex justify-center items-center">
              <IoIosCheckmark className="rounded-full bg-myLightGrey text-white w-8 h-8 " />
              <h6
                className={`${montserrat.className} text-center font-bold text-[14px] text-myDark mx-auto`}
              >
                1GB Cloud storage
              </h6>
            </div>
            <div className="space-x-4 flex justify-center items-center">
              <IoIosCheckmark className="rounded-full bg-myLightGrey text-white w-8 h-8 " />
              <h6
                className={`${montserrat.className} w-[173px]  text-start font-bold text-[14px] text-myDark mx-auto `}
              >
                Email and community support
              </h6>
            </div>
          </div>

          <div className="w-[246px] h-[52px] rounded-md  bg-myBlue mx-auto py-4 mt-6">
            <h6
              className={`${montserrat.className}  text-center font-bold text-[14px] items-center text-white mx-auto`}
            >
              Try for free
            </h6>
          </div>
        </div>

        <div className="bg-myDark flex flex-col justify-evenly w-[327px] h-[699px] border border-myBlue rounded-md transform transition duration-500 hover:scale-110">
          <h3
            className={`${montserrat.className} text-center font-bold text-[24px] text-white mx-auto hover:text-blue-500`}
          >
            STANDARD
          </h3>
          <h5
            className={`${montserrat.className} text-center font-bold text-[14px] text-white mx-auto hover:text-blue-500`}
          >
            Organize across all apps by hand
          </h5>
          <div className="flex justify-center">
            <div>
              <h2
                className={`${montserrat.className} text-center font-bold text-[40px] text-myBlue mx-auto hover:text-blue-500`}
              >
                9.99
              </h2>
            </div>
            <div className="flex flex-col">
              <h3
                className={`${montserrat.className} text-center font-bold text-[24px] text-myBlue mx-auto hover:text-black`}
              >
                $
              </h3>

              <h5
                className={`${montserrat.className} text-center font-bold text-[14px] text-myBlue mx-auto hover:text-blue-500`}
              >
                Per
              </h5>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mx-auto space-y-3">
            <div className="space-x-4 flex justify-center items-center">
              <IoIosCheckmark className="rounded-full bg-[#2DC071] text-white w-8 h-8 " />
              <h6
                className={`${montserrat.className} text-center font-bold text-[14px] text-white mx-auto hover:text-blue-500`}
              >
                Unlimited product updates
              </h6>
            </div>
            <div className="space-x-4 flex justify-center items-center">
              <IoIosCheckmark className="rounded-full bg-myLightGrey text-white w-8 h-8 " />
              <h6
                className={`${montserrat.className} text-center font-bold text-[14px] text-white mx-auto hover:text-blue-500`}
              >
                1GB Cloud storage
              </h6>
            </div>
            <div className="space-x-4 flex justify-center items-center">
              <IoIosCheckmark className="rounded-full bg-myLightGrey text-white w-8 h-8 " />
              <h6
                className={`${montserrat.className} w-[173px]  text-start font-bold text-[14px] text-white mx-auto hover:text-blue-500`}
              >
                Email and community support
              </h6>
            </div>
          </div>

          <div className="w-[246px] h-[52px] rounded-md  bg-myBlue mx-auto py-4 mt-6">
            <h6
              className={`${montserrat.className}  text-center font-bold text-[14px] items-center text-white mx-auto hover:text-black`}
            >
              Try for free
            </h6>
          </div>
        </div>

        <div className="bg-white flex flex-col justify-evenly w-[327px] h-[664px] border border-myBlue rounded-md transform transition duration-500 hover:scale-110">
          <h3
            className={`${montserrat.className} text-center font-bold text-[24px] text-myDark mx-auto hover:text-blue-500`}
          >
            PREMIUM
          </h3>
          <h5
            className={`${montserrat.className} text-center font-bold text-[14px] text-myGrey mx-auto hover:text-blue-500`}
          >
            Organize across all apps by hand
          </h5>
          <div className="flex justify-center">
            <div>
              <h2
                className={`${montserrat.className} text-center font-bold text-[40px] text-myBlue mx-auto hover:text-blue-500`}
              >
                19.99
              </h2>
            </div>
            <div className="flex flex-col">
              <h3
                className={`${montserrat.className} text-center font-bold text-[24px] text-myBlue mx-auto hover:text-black`}
              >
                $
              </h3>

              <h5
                className={`${montserrat.className} text-center font-bold text-[14px] text-myBlue mx-auto hover:text-blue-500`}
              >
                Per
              </h5>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mx-auto space-y-3">
            <div className="space-x-4 flex justify-center items-center">
              <IoIosCheckmark className="rounded-full bg-[#2DC071] text-white w-8 h-8 " />
              <h6
                className={`${montserrat.className} text-center font-bold text-[14px] text-myDark mx-auto hover:text-blue-500`}
              >
                Unlimited product updates
              </h6>
            </div>
            <div className="space-x-4 flex justify-center items-center">
              <IoIosCheckmark className="rounded-full bg-myLightGrey text-white w-8 h-8 " />
              <h6
                className={`${montserrat.className} text-center font-bold text-[14px] text-myDark mx-auto hover:text-blue-500`}
              >
                1GB Cloud storage
              </h6>
            </div>
            <div className="space-x-4 flex justify-center items-center">
              <IoIosCheckmark className="rounded-full bg-myLightGrey text-white w-8 h-8 " />
              <h6
                className={`${montserrat.className} w-[173px]  text-start font-bold text-[14px] text-myDark mx-auto hover:text-blue-500`}
              >
                Email and community support
              </h6>
            </div>
          </div>

          <div className="w-[246px] h-[52px] rounded-md  bg-myBlue mx-auto py-4 mt-6">
            <h6
              className={`${montserrat.className}  text-center font-bold text-[14px] items-center text-white mx-auto hover:text-black`}
            >
              Try for free
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
