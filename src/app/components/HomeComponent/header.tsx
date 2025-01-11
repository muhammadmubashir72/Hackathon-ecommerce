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

  const closeShopDropdown = () => {
    setShopDropdownOpen(false);
  };

  return (
    <div className="w-full">
      {/* Navbar Light */}
      <div className="w-full px-4 sm:px-8 py-4 bg-white ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h3
            className={`${montserrat.className} font-bold text-xl lg:text-2xl text-myDark hover:text-myBlue`}
          >
            Bandage
          </h3>

          {/* Icons for Small Screens */}
          <div className="flex items-center md:hidden gap-4">
            <Link href="/cart">
              <Image
                src={`/images/cart.png`}
                alt={"cart"}
                width={22}
                height={22}
              />
            </Link>
            <button onClick={toggleMenu} className="focus:outline-none">
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#2eabe8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#2eabe8]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navbar Links */}
          <ul className="hidden md:flex items-center  md:space-x-2 lg:space-x-6">
            {[
              { name: "Home", link: "/" },
              { name: "Shop", link: "/shop", dropdown: true },
              { name: "Product", link: "/product", dropdown: true },
              { name: "About", link: "/about" },
              { name: "Team", link: "/team" },
              { name: "Contact", link: "/contact" },
              { name: "Price", link: "/price" },
            ].map((navbar) => (
              <li key={navbar.link} className="relative">
                {navbar.name === "Shop" ? (
                  <div className="mt-0 md:mt-1 flex items-center relative">
                    {/* Shop Link */}
                    <Link
                      href="/shop" // Navigate to main Shop page
                      className={`${montserrat.className} font-bold text-[12px] lg:text-sm text-myBlue hover:text-myDark`}
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
                        className={` text-myBlue hover:text-myDark transform transition-transform duration-200 ${
                          shopDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* Dropdown Menu */}
                    {shopDropdownOpen && (
                      <ul className="absolute mt-2 bg-white shadow-md py-2 w-40 z-50">
                        {[
                          { name: "Men", link: "/shop/men" },
                          { name: "Women", link: "/shop/women" },
                          { name: "Kids", link: "/shop/kids" },
                        ].map((category) => (
                          <li
                            key={category.link}
                            className="px-4 py-2 hover:bg-gray-100"
                          >
                            <Link
                              href={category.link}
                              onClick={closeShopDropdown} // Close dropdown when a category is clicked
                            >
                              <span className="text-[12px] lg:text-sm font-medium text-myBlue hover:text-myDark">
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
                    className={`${montserrat.className} font-bold text-[12px] lg:text-sm text-myBlue hover:text-myDark`}
                  >
                    {navbar.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Login and Icons */}
          <div className="hidden md:flex items-center md:space-x-2 lg:space-x-4">
            <Image
              src="/images/contact.png"
              alt="contact"
              className="w-5 h-5 md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px]"
              width={22}
              height={22}
            />
            <Link
              href=""
              className={`${montserrat.className} text-[12px] font-bold lg:text-sm text-myBlue hover:text-myDark`}
            >
              Login / Register
            </Link>
            <div className="flex md:space-x-2 lg:space-x-4 items-center">
              {[
                { name: "search", link: "" },
                { name: "cart", link: "/cart" },
                { name: "heart", link: "" },
              ].map((icon) => (
                <Link
                  key={icon.name}
                  href={icon.link}
                  className="hover:opacity-80"
                >
                  <Image
                    src={`/images/${icon.name}.png`}
                    alt={icon.name}
                    width={22}
                    height={22}
                    className="object-cover w-5 h-5 md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Links for Small Screens */}
        {menuOpen && (
          <div className="flex flex-col mt-4 md:hidden text-center space-y-2">
            {[
              { name: "Home", link: "/" },
              { name: "Shop", link: "/shop", dropdown: true },
              { name: "Product", link: "/product", dropdown: true },
              { name: "About", link: "/about" },
              { name: "Team", link: "/team" },
              { name: "Contact", link: "/contact" },
              { name: "Price", link: "/price" },
            ].map((navbar) => (
              <Link href={navbar.link} key={navbar.name}>
                <span
                  className={`${montserrat.className} font-bold text-sm text-myBlue hover:text-myDark`}
                >
                  {navbar.name}
                </span>
              </Link>
            ))}

            {/* Mobile Shop Dropdown */}
            <div className="relative flex justify-center">
              {/* Shop Button with Link */}
              <Link
                href="/shop"
                className={`${montserrat.className} font-bold text-sm text-myBlue flex items-center justify-center hover:text-myDark`}
              >
                Shop
              </Link>
              <button
                onClick={toggleShopDropdown}
                className="ml-1 focus:outline-none"
                aria-label="Toggle Shop Dropdown"
              >
                <FaAngleDown
                  className={`text-myBlue hover:text-myDark transform transition-transform duration-200 ${
                    shopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* Dropdown Menu */}
              {shopDropdownOpen && (
                <ul className="absolute mt-2 bg-white shadow-md py-2 w-40 z-50">
                  {[
                    { name: "Men", link: "/shop/men" },
                    { name: "Women", link: "/shop/women" },
                    { name: "Kids", link: "/shop/kids" },
                  ].map((category) => (
                    <li
                      key={category.link}
                      className="px-4 py-2  hover:bg-gray-100"
                    >
                      <Link
                        href={category.link}
                        onClick={closeShopDropdown} // Close dropdown when a category is clicked
                      >
                        <span className="text-sm font-medium text-myBlue hover:text-myDark">
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
                  className={`${montserrat.className} font-normal text-[30] text-myBlue hover:text-myDark`}
                >
                  Login / Register
                </Link>
              </div>

              {/* Icons in a block-wise layout */}
              <div className="flex flex-col space-y-4 items-center my-4">
                {[
                  { name: "search", Link: "" },
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
