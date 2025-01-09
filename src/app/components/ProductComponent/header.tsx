"use client";
import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import React from "react";

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
      <div className="w-full px-4 sm:px-8 py-4 bg-white">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h3
            className={`${montserrat.className} font-bold text-xl lg:text-2xl text-myDark hover:text-blue-500`}
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
          <ul className="hidden md:flex items-center md:space-x-2 lg:space-x-6">
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
                {navbar.name === "Shop" ? (
                  <div className="flex items-center relative">
                    {/* Shop Link */}
                    <Link
                      href="/Shop_Page" // Navigate to main Shop page
                      className={`${montserrat.className} font-bold text-sm text-myDark hover:text-blue-500`}
                    >
                      Shop
                    </Link>

                    {/* Dropdown Toggle (Arrow Button) */}
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
                ) : (
                  <Link
                    href={navbar.link}
                    className={`${montserrat.className} font-bold text-sm text-myGrey hover:text-blue-500`}
                  >
                    {navbar.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Login and Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Image
              src="/images/contact.png"
              alt="contact"
              className="w-5 h-5 lg:w-[22px] lg:h-[22px]"
              width={22}
              height={22}
            />
            <Link
              href=""
              className={`${montserrat.className} font-bold text-sm text-myBlue hover:text-blue-500`}
            >
              Login / Register
            </Link>

            <div className="flex space-x-4 items-center">
              {[
                { name: "search", Link: "" },
                { name: "cart", Link: "/Product_Page" },
                { name: "heart", Link: "" },
              ].map((icon) => (
                <div key={icon.Link} className="relative flex items-center">
                  <Link href={icon.Link} className="hover:opacity-80">
                    <Image
                      src={`/images/${icon.name}.png`}
                      alt={icon.name}
                      width={22}
                      height={22}
                      className="object-contain w-5 h-5 lg:w-[22px] lg:h-[22px]"
                    />
                  </Link>
                  {/* Conditionally render "1" for cart and heart */}
                  {(icon.name === "cart" || icon.name === "heart") && (
                    <span
                      className={`${montserrat.className} absolute top-1 -right-[9px] bg-transparent text-myBlue text-[12px] font-[400] hover:text-blue-500`}
                    >
                      1
                    </span>
                  )}
                </div>
              ))}
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
                href="/Shop_Page"
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
            {/* Additional Section After Pages */}
            <div className="flex flex-col flex-wrap  items-center justify-center md:flex-row md:space-x-4 md:space-y-0 lg:flex-row lg:space-x-4 lg:space-y-0 mt-4 md:mt-0">
              <div className="flex space-x-3">
                <Image
                  src="/images/contact.png"
                  alt="contact"
                  width={22}
                  height={22}
                />
                <Link
                  href=""
                  className={`${montserrat.className} font-normal text-[30] text-myBlue hover:text-blue-500`}
                >
                  Login / Register
                </Link>
              </div>

              {/* Icons in a block-wise layout */}
              <div className="flex flex-col space-y-4 items-center my-4">
                {[
                  { name: "search", Link: "" },
                  { name: "cart", Link: "/Product_Page" },
                  { name: "heart", Link: "" },
                ].map((icon) => (
                  <div key={icon.Link} className="relative flex items-center">
                    <Link href={icon.Link} className="hover:opacity-80">
                      <Image
                        src={`/images/${icon.name}.png`}
                        alt={icon.name}
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </Link>
                    {/* Conditionally render "1" for cart and heart */}
                    {(icon.name === "cart" || icon.name === "heart") && (
                      <span
                        className={`${montserrat.className} absolute top-1 -right-[9px] bg-transparent text-myBlue text-[12px] font-[400] hover:text-blue-500`}
                      >
                        1
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )} 
      </div>
    </div>
  );
}
