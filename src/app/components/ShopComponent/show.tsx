import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import React from "react";

const Show = () => {
  return (
    <div>
      <div className="w-full h-[46px] flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between px-0 md:px-12 lg:px-24 items-center py-0 md:lg:my-10 lg:my-10 space-y-4 mb-24 md:mb-0 lg:mb-0">
        <div className="mt-0 md:pt-4 lg:pt-4">
          <h6 className="font-bold text-[14px] text-myGrey">
            Showing all 12 results
          </h6>
        </div>

        <div className="w-[177px] h-[46px] flex justify-evenly items-center space-x-5">
          <h6 className=" font-bold text-sm text-myGrey">Views:</h6>
          <div className=" w-[46px] h-[46px] outline outline-[#ECECEC]">
            <Image
              src={`/shop images/square.png`}
              alt={"images"}
              width={14}
              height={14}
              className="mx-auto pt-4"
            />
          </div>
          <div className="w-[46px] h-[46px] outline outline-[#ECECEC]">
            <Image
              src={`/shop images/bars.png`}
              alt={"images"}
              width={14}
              height={14}
              className="mx-auto pt-4"
            />
          </div>
        </div>

        <div className="flex justify-between w-[252px] h-[50px] space-x-6  ">
          <div className="flex justify-center items-center w-[141px] h-[50px] rounded-sm outline outline-[#ECECEC] space-x-2">
            <h6 className="font-normal text-sm text-myGrey">Popularity</h6>
            <FaAngleDown className="mt-1" />
          </div>
          <div className="flex justify-center items-center w-[141px] h-[50px] rounded-sm bg-myBlue outline outline-myBlue space-x-2">
            <h6 className="font-bold text-sm text-white ">Filter</h6>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Show;
