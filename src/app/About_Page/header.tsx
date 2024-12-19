"use client";
import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaAngleDown,FaArrowRight } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Header() {
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
      {/* Navbar Light */}
      <div className="w-full px-4 sm:px-8 py-4 lg:bg-white bg-black/5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h3 className={`${montserrat.className} font-bold text-2xl`}>
            Bandage
          </h3>

          {/* Icons for Small Screens */}
          <div className="flex items-center md:hidden gap-4">
            {["searching", "cart1"].map((icon) => (
              <Image
                key={icon}
                src={`/images/${icon}.png`}
                alt={icon}
                width={22}
                height={22}
              />
            ))}
            <button onClick={toggleMenu} className="focus:outline-none">
              <Image
                src={`/images/${menuOpen ? "close-icon.png" : "bars-icon.png"}`}
                alt={menuOpen ? "Close Menu" : "Open Menu"}
                width={22}
                height={22}
              />
            </button>
          </div>

          {/* Navbar Links */}
          <ul className="hidden md:flex items-center space-x-6 ">
            {[
              { name: "Home", link: "/" },
              { name: "Shop", link: "#", dropdown: true }, // Added dropdown flag
              { name: "About", link: "#" },
              { name: "Blog", link: "/#" },
              { name: "Contact", link: "/Contact_Page" },
              { name: "Pages", link: "/pages" },
            ].map((navbar) => (
              <li key={navbar.link} className="relative">
                {/* Shop Dropdown Button */}
                {navbar.name === "Shop" ? (
                  <button
                    onClick={toggleShopDropdown}
                    className={`${montserrat.className} font-bold text-sm text-myDark flex items-center`}
                  >
                    {navbar.name}
                    <FaAngleDown
                      className={`ml-1 transform ${
                        shopDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={navbar.link}
                    className={`${montserrat.className} font-bold text-sm text-myGrey`}
                  >
                    {navbar.name}
                  </Link>
                )}

                {/* Shop Dropdown Menu */}
                {navbar.name === "Shop" && shopDropdownOpen && (
                  <ul className="absolute left-0 top-full bg-white shadow-lg mt-2 py-2 w-40 z-50">
                    {["Men", "Women", "Kids"].map((category) => (
                      <li
                        key={category}
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        <Link href={`#${category.toLowerCase()}`}>
                          <span className="text-sm font-medium text-myGrey">
                            {category}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Login and Icons */}
          <div className="w-[300px] h-[52px] hidden md:flex items-center space-x-4">
            <div className="w-[86px] items-center">
              <Link
                href="#"
                className={`${montserrat.className} font-bold text-sm text-myBlue`}
              >
                Login
              </Link>
            </div>
            <div className="w-[214px] h-[52px] flex  bg-myBlue">
            <button className="w-[214px] h-[52px]  bg-myBlue text-white font-bold  rounded-[5px] text-sm ">
            Become a member 
              </button>
              <FaArrowRight className="text-white mx-auto items-center text-start mt-4 mr-5"/>
            </div>
            

          </div>
        </div>

        {/* Links for Small Screens */}
        {menuOpen && (
          <div className="flex flex-col mt-4 md:hidden text-center space-y-2 ">
            {[
              { name: "Home", link: "/" },
              { name: "Price", link: "#" },
              { name: "Product", link: "#" },
              { name: "Contact", link: "/Contact_Page" },
            ].map((navbar) => (
              <Link href={navbar.link} key={navbar.name}>
                <span
                  className={`${montserrat.className} font-bold text-sm text-myGrey`}
                >
                  {navbar.name}
                </span>
              </Link>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}
