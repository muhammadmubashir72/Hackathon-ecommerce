"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
import React from "react";

export default function PriceSection() {
  return (
    <div>
      <div className="items-center space-y-6 mt-10">
        <h3
          className={`${montserrat.className} text-center font-bold text-[16px] text-myDark `}
        >
          PRICING
        </h3>
        <h1
          className={`${montserrat.className} text-center font-bold text-[38px] md:text-[48px] lg:text-[58px] text-myDark `}
        >
          Simple Pricing
        </h1>
        <div className="flex justify-center sm:justify-center md:justify-center lg:justify-center space-x-4">
          <Link href="/">
            <h3
              className={`${montserrat.className}font-bold text-sm text-myDark `}
            >
              Home
            </h3>
          </Link>
          <FaAngleRight className="text-myGrey" />
          <Link href="/shop">
            <h3
              className={`${montserrat.className}font-bold text-sm text-myGrey `}
            >
              Shop
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
