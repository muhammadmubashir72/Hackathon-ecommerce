"use client";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import Header from "./header";
import TopHeader from "./TopHeader";
import Product from "./prouct";
import Shop from "./shop";
import Show from "./show";
import Logo from "./logo";
import Product2 from "./prouct2";
import Next from "./next";
import Logo2 from "./logo2";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function ShopPager() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false); // State for Shop Dropdown

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!shopDropdownOpen);
  };

  return (
    <div>
      <TopHeader />
      <Header />
      <Shop />
      <Product />
      <Show />
      <Logo />
      <Product2 />
      <Next />
      <Logo2 />
    </div>
  );
}
