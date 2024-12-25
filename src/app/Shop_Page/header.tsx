"use client";
import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!shopDropdownOpen);
  };

  return (
    <div className="w-full bg-white">
      {/* Navbar */}
      <div className="w-full px-4 sm:px-8 py-4 bg-white shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h3
            className={`${montserrat.className} font-bold text-2xl text-myDark hover:text-blue-500`}
          >
            Bandage
          </h3>
          {/* Mobile Menu Icon */}
          <button
            onClick={toggleMenu}
            className="focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            <Image
              src={
                menuOpen ? `/images/close-icon.png` : `/images/bars-icon.png`
              }
              alt={menuOpen ? "close" : "bars"}
              width={22}
              height={22}
            />
          </button>
          {/*
           */}
          {/* Navbar Links */}
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5  bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
          >
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
                  <div className="flex items-center">
                    <Link
                      href="/Shop_Page"
                      className={`${montserrat.className} font-bold md:text-[12px] lg:text-[14px] text-myDark hover:text-blue-500`}
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
                ) : (
                  <Link
                    href={navbar.link}
                    className={`${montserrat.className} font-bold md:text-[12px] lg:text-[14px] text-myGrey hover:text-blue-500`}
                  >
                    {navbar.name}
                  </Link>
                )}
              </li>
            ))}

            {/* Additional Section After Pages */}
            <div className=" pl-0 md:pl-0 lg:pl-36 flex flex-row items-center justify-start lg:justify-center  md:flex-row md:space-x-2 md:space-y-0 lg:flex-row lg:space-x-4 lg:space-y-0 mt-4 md:mt-0">
              <div className="flex space-x-0 md:space-x-1 lg:space-x-3  ">
                <Image
                  src="/images/contact.png"
                  alt="contact"
                  width={22}
                  height={22}
                  className="object-cover w-4 h-4 md:w-[16px] md:h-[16px] lg:w-[16px] lg:h-[16px]"
                />
                <Link
                  href="#"
                  className={`${montserrat.className} font-normal md:text-[12px] lg:text-[14px] text-myBlue hover:text-blue-500`}
                >
                  Login / Register
                </Link>
              </div>

              {/* Icons in a single row */}
              <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-1 md:mt-0 lg:flex-row lg:space-y-0 lg:space-x-3 lg:mt-0 items-center space-y-3  mt-2 space-x-0 ">
                {["search", "cart", "heart"].map((icon) => (
                  <Image
                    key={icon}
                    src={`/images/${icon}.png`}
                    alt={icon}
                    width={22}
                    height={22}
                    className="object-cover w-4 h-4 md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px]"
                  />
                ))}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
