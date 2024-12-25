"use client";
import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Header from "./header";
import FreeTrials from "./freeTrials";
import MeetOurTeam from "./MeetOurTeam";
import Tailored from "./tailored";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Team() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false); // State for Shop Dropdown

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!shopDropdownOpen);
  };

  return (
    <div className="w-full">
      <Header />
      <Tailored />
      <MeetOurTeam />
      <FreeTrials />
    </div>
  );
}
