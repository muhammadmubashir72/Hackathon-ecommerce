"use client";
import { useState } from "react";

export default function Pagination() {
  // State to track the active button
  const [active, setActive] = useState(2); // Default is the second button

  // Function to handle button click
  const handleClick = (index: number) => {
    if (index !== 0 && index !== 4) {
      // Ignore clicks on "First" and "Next"
      setActive(index);
    }
  };

  // Function to handle "Next" button
  const handleNext = () => {
    if (active < 3) {
      // Only increment if not at the last button
      setActive((prev) => prev + 1);
    }
  };

  return (
    <div className="w-[260px] lg:w-[313px] md:w-[313px] h-auto lg:h-[74px] md:h-[74px] flex border-[2px] border-[#BDBDBD] rounded justify-center items-center mx-auto mt-10">
      {/* "First" button */}
      <div className="flex justify-center bg-[#F3F3F3] items-center w-[64px] md:w-[84px] lg:w-[84px] h-[70px] border-r-[1px] border-[#BDBDBD] cursor-default">
        <h6 className="font-normal text-sm text-[#BDBDBD] hover:text-blue-500">First</h6>
      </div>

      {/* Numbered buttons */}
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index + 1}
          className={`flex justify-center items-center w-[46px] h-[74px] border-l-[1px] border-[#BDBDBD] cursor-pointer ${
            active === index + 1 ? "bg-myBlue" : ""
          }`}
          onClick={() => handleClick(index + 1)}
        >
          <h6
            className={`font-normal text-sm ${
              active === index + 1 ? "text-white" : "text-myBlue"
            }`}
          >
            {index + 1}
          </h6>
        </div>
      ))}

      {/* "Next" button */}
      <div
        className="flex justify-center items-center w-[64px] md:w-[85px] lg:w-[85px] h-[74px] border-l-[1px] border-[#BDBDBD] cursor-pointer"
        onClick={handleNext}
      >
        <h6 className="font-normal text-sm text-myBlue">Next</h6>
      </div>
    </div>
  );
}
