import Header from "./header";
import Logo from "./logo";
import TopHeader from "./TopHeader";
import ProductShows from "./product";
import Description from "./description";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";

export default function ProductPage() {
  return (
    <div>
      <TopHeader />
      <Header />
      <ul className="flex justify-start gap-5 pl-[50px] my-10">
        <li className="hover:text-blue-500">Home</li>
        <IoIosArrowForward className="mt-1" />
        <li className="hover:text-blue-500">Team</li>
      </ul>
      {/* <ProductCardSlide /> */}
      <Description />
      <ProductShows />
      <Logo />
    </div>
  );
}
