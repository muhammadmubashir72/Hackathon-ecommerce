import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Card = () => {
  return (
    <div className="items-center mx-auto my-14">
      {/* h2 #feature-Fsection.1 */}
      <h2
        className={`${montserrat.className}items-center text-center font-bold text-[24px] text-myDark hover:text-blue-500`}
      >
        EDITOR’S PICK
      </h2>
      <p
        className={`${montserrat.className} font-normal text-[14px] text-center text-myDark hover:text-blue-500`}
      >
        Problems trying to resolve the conflict between
      </p>
      {/* row */}
      <div className="flex flex-wrap gap-2 items-center justify-center mt-8">
        {/* Image 1 */}
        <div className="relative">
          <Image
            src="/images/card-image-1.png" // Corrected image path
            alt="card-image-1"
            className="object-cover w-full h-auto md:w-[510px] md:h-[500px] px-8 md:px-0 transform transition duration-500 hover:scale-110"
            width={510}
            height={500}
          />
          <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white text-center px-4 py-3 shadow-lg">
            <p
              className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
            >
              MEN
            </p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative">
          <Image
            src="/images/card-image-2.png" // Corrected image path
            alt="card-image-2"
            className="w-[255] h-[500px] md:w-[240px] md:h-[500px] transform transition duration-500 hover:scale-110"
            width={240}
            height={500}
          />
          <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
            <h5
              className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
            >
              WOMEN
            </h5>
          </div>
        </div>

        {/* Nested grid */}
        <div className="flex flex-row lg:flex-col gap-4 flex-wrap">
          {/* Image 3 */}
          <div className="relative  mx-auto items-center">
            <Image
              src="/images/card-image-4.png" // Corrected image path
              alt="card-image-3"
              className="w-[240px] h-[242px] transform transition duration-500 hover:scale-110"
              width={240}
              height={242}
            />
            <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
              <h5
                className={`${montserrat.className}items-center text-center font-bold text-[16px]  text-myDark hover:text-blue-500`}
              >
                ACCESSORIES
              </h5>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative  mx-auto items-center">
            <Image
              src="/images/card-image-5.png" // Corrected image path
              alt="card-image-4"
              className="w-[240px] h-[242px] object-cover transform transition duration-500 hover:scale-110"
              width={240}
              height={242}
            />
            <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
              <h5
                className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
              >
                KIDS
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* h2 #feature-section.1 */}
      <h4
        className={`${montserrat.className}items-center text-center font-normal text-[20px] text-myGrey hover:text-blue-500`}
      >
        Featured Products
      </h4>

      <h3
        className={`${montserrat.className} font-normal text-[24px] text-center text-myDark hover:text-blue-500`}
      >
        Problems trying to resolve the conflict between
      </h3>

      <p
        className={`${montserrat.className}items-center text-center font-normal text-[14px]  text-myGrey mb-16 mt-2 hover:text-blue-500`}
      >
        Problems trying to resolve the conflict between
      </p>
    </div>
  );
};

export default Card;
