"use client";
import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

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
          <ul className="hidden md:flex items-center space-x-6">
            {[
              { name: "Home", link: "/" },
              { name: "Shop", link: "Shop_Page", dropdown: true }, // Added dropdown flag
              { name: "About", link: "/About_Page" },
              { name: "Blog", link: "/Blog_Page" },
              { name: "Contact", link: "/Contact_Page" },
              { name: "Pages", link: "/pages" },
            ].map((navbar) => (
              <li key={navbar.link} className="relative">
                {navbar.name === "Shop" ? (
                  <div className="flex items-center relative">
                    {/* Shop Link */}
                    <Link
                      href="/shop" // Navigate to main Shop page
                      className={`${montserrat.className} font-bold text-sm text-myDark`}
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
                      <ul className="absolute left-0 top-full bg-white shadow-lg mt-2 py-2 w-40 z-50">
                        {["Men", "Women", "Kids"].map((category) => (
                          <li
                            key={category}
                            className="px-4 py-2 hover:bg-gray-100"
                          >
                            <Link href={`/shop/${category.toLowerCase()}`}>
                              <span className="text-sm font-medium text-myGrey">
                                {category}
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
                    className={`${montserrat.className} font-bold text-sm text-myGrey`}
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
              width={22}
              height={22}
            />
            <Link
              href="#"
              className={`${montserrat.className} font-bold text-sm text-myBlue`}
            >
              Login / Register
            </Link>
            {["search", "cart", "heart"].map((icon) => (
              <Image
                key={icon}
                src={`/images/${icon}.png`}
                alt={icon}
                width={22}
                height={22}
              />
            ))}
          </div>
        </div>

        {/* Links for Small Screens */}
        {menuOpen && (
          <div className="flex flex-col mt-4 md:hidden text-center space-y-2">
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

            {/* Mobile Shop Dropdown */}
            <div className="relative">
              <button
                onClick={toggleShopDropdown}
                className={`${montserrat.className} mx-auto font-bold text-sm text-myGrey flex items-center justify-center`}
              >
                Shop
                <FaAngleDown
                  className={`ml-1 transform ${
                    shopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {shopDropdownOpen && (
                <ul className="flex flex-col mt-2 space-y-2">
                  {["Men", "Women", "Kids"].map((category) => (
                    <li key={category}>
                      <Link href="/Product_List_Page">
                        <span className="text-sm font-medium">{category}</span>
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
