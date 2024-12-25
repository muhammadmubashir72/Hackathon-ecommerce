"use client";
import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";

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
      <div className="w-full px-4 md:px-2 sm:px-8 py-4 bg-white">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h3
            className={`${montserrat.className} font-bold text-2xl text-myDark hover:text-blue-500`}
          >
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
          <ul className="hidden md:flex items-center md:space-x-1 lg:space-x-6">
            {[
              { name: "Home", link: "/" },
              { name: "Shop", link: "/Shop_Page", dropdown: true },
              { name: "Product", link: "/Product_Page", dropdown: true },
              { name: "About", link: "/About_Page" },
              { name: "Team", link: "/Team_Page" },
              { name: "Contact", link: "/Contact_Page" },
              { name: "Price", link: "/Price_Page" },
            ].map((navbar) => (
              <li key={navbar.link} className="relative">
                {/* Shop Dropdown Button */}
                {navbar.name === "Shop" ? (
                  <button
                    onClick={toggleShopDropdown}
                    className={`${montserrat.className} font-bold text-sm text-myDark flex items-center hover:text-blue-500`}
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
                    className={`${montserrat.className} font-bold text-sm text-myGrey hover:text-blue-500`}
                  >
                    {navbar.name}
                  </Link>
                )}

                {/* Shop Dropdown Menu */}
                {navbar.name === "Shop" && shopDropdownOpen && (
                  <ul className="absolute left-0 top-full bg-white shadow-lg mt-2 py-2 w-40 z-50">
                    {[
                      { name: "Men", link: "/Shop_Page/kids" },
                      { name: "Men", link: "/Shop_Page/men" },
                      { name: "Men", link: "/Shop_Page/women" },
                    ].map((category) => (
                      <li
                        key={category.name}
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        <Link href={`#${category.link}`}>
                          <span className="text-sm font-medium text-myGrey hover:text-blue-500">
                            {category.name}
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
          <div className=" hidden md:flex items-center space-x-5 lg:space-x-14">
            <div className="items-center">
              <Link
                href="#"
                className={`${montserrat.className} font-bold text-sm text-myBlue hover:text-blue-500`}
              >
                Login
              </Link>
            </div>
            <div className="w-[200px] h-[42px] lg:w-[214px] lg:h-[52px] flex rounded-md bg-myBlue">
              <button className="w-[200px] h-[42px] lg:w-[214px] lg:h-[52px]  bg-myBlue hover:text-black text-white font-bold  rounded-[5px] text-sm ">
                Become a member
              </button>
              <FaArrowRight className="text-white mx-auto items-center text-start mt-4 mr-5" />
            </div>
          </div>
        </div>

        {/* Links for Small Screens */}
        {menuOpen && (
          <div className="flex flex-col mt-4 md:hidden text-center space-y-2">
            {[
              { name: "Home", link: "/" },
              { name: "Price", link: "/Price_Page" },
              { name: "Team", link: "/Team_Page" },
              { name: "About", link: "/About_Page" },
              { name: "Product", link: "/Product_Page", dropdown: true },
              { name: "Contact", link: "/Contact_Page" },
            ].map((navbar) => (
              <Link href={navbar.link} key={navbar.name}>
                <span
                  className={`${montserrat.className} font-bold text-sm text-myGrey hover:text-blue-500`}
                >
                  {navbar.name}
                </span>
              </Link>
            ))}

            {/* Mobile Shop Dropdown */}
            <div className="relative flex justify-center">
              {/* Shop Button with Link */}
              <Link
                href="/ShopPage"
                className={`${montserrat.className} font-bold text-sm text-myGrey flex items-center justify-center hover:text-blue-500`}
              >
                Shop
              </Link>
              <button
                onClick={toggleShopDropdown}
                className="ml-1 focus:outline-none"
                aria-label="Toggle Shop Dropdown"
              >
                <FaAngleDown
                  className={`transform transition-transform duration-200 ${
                    shopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {shopDropdownOpen && (
                <ul className="absolute mt-2 bg-white shadow-md py-2 w-40 z-50">
                  {[
                    { name: "Men", link: "/Shop_Page/men" },
                    { name: "Women", link: "/Shop_Page/women" },
                    { name: "Kids", link: "/Shop_Page/kids" },
                  ].map((category) => (
                    <li
                      key={category.link}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      <Link href={category.link}>
                        <span className="text-sm font-medium text-myGrey hover:text-blue-500">
                          {category.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
