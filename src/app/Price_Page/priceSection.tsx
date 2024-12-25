"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function PriceSection() {
  return (
    <div>
      <div className="items-center space-y-6 mt-10">
        <h3 className="text-center font-bold text-[16px] text-myDark hover:text-blue-500">
          PRICING
        </h3>
        <h1 className="text-center font-bold text-[38px] md:text-[48px] lg:text-[58px] text-myDark hover:text-blue-500">
          Simple Pricing
        </h1>
        <div className="flex justify-center sm:justify-center md:justify-center lg:justify-center space-x-4">
          <Link href="/">
            <h3 className="font-bold text-sm text-myDark hover:text-blue-500">
              Home
            </h3>
          </Link>
          <FaAngleRight className="text-myGrey" />
          <Link href="/shop">
            <h3 className="font-bold text-sm text-myGrey hover:text-blue-500">
              Shop
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
