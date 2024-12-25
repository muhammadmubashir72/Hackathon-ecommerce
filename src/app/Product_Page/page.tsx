"use client";
import { Montserrat } from "next/font/google";
import Header from "./header";
import Logo from "./logo";
import ProductCards from "./product";
import TopHeader from "./TopHeader";
import Link from "next/link";
import Image from "next/image";
import ProductShows from "./product";
import { IoIosArrowForward } from "react-icons/io";
import { FaAngleLeft, FaAngleRight, FaEye, FaStar } from "react-icons/fa";
import { CiHeart, CiStar } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import ProductCardSlide from "./productCardSlider";
import Description from "./description";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function ProductPage() {
  return (
    <div>
      <TopHeader />
      <Header />
      <ProductCardSlide />
      <Description />
      <ProductShows />
      <Logo />
    </div>
  );
}
