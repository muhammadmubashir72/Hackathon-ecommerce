"use client";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaAngleDown, FaTimes, FaUserCircle } from "react-icons/fa";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { useSession } from "next-auth/react";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Header() {
  const { data: session, status } = useSession();

  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!shopDropdownOpen);
  };

  const closeShopDropdown = () => {
    setShopDropdownOpen(false);
  };
  // Fetch products based on search term

  // Fetch products based on search term
  // useEffect(() => {
  //   if (searchTerm.length > 2) {
  //     client
  //       .fetch(
  //         `*[_type == "seller" || _type == "shop" || _type == "product"
  //         " && title match "${searchTerm}*"]`
  //       ) // Adjust query based on your schema
  //       .then((data) => setSearchResults(data))
  //       .catch((err) => console.log(err));
  //   } else {
  //     setSearchResults([]); // Clear results if search term is too short
  //   }
  // }, [searchTerm]);

  return (
    <div className="w-full">
      {/* Navbar Light */}
      <div className="w-full px-4 sm:px-8 py-4 bg-white ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"}>
            <h3
              className={`${montserrat.className} font-bold text-xl lg:text-2xl text-myDark `}
            >
              Bandage
            </h3>
          </Link>
          {/* Icons for Small Screens */}
          <div className="flex items-center md:hidden gap-4">
            {/* Search Icon */}
            {/* Search Icon with Toggle Input */}
            {/* <div className="relative"> */}
            {/* <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                // onChange={handleSearchChange}
                className="border-2 border-myBlue w-40 p-2"
              /> */}
            {/* <FaSearch className="absolute text-[#2eabe8]" /> */}
            {/* </div> */}

            {/* Search Results Dialog */}
            {/* {isSearchDialogOpen && searchResults.length > 0 && (
              <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-500 z-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded-md shadow-lg w-1/3">
                  <h3 className="font-bold text-lg mb-2">Search Results</h3>
                  <ul>
                    {searchResults.map((product: Product) => (
                      <li
                        key={product.id}
                        className="p-2 hover:bg-gray-100 flex items-center"
                      >
                        <img
                          src={product.image}
                          alt={product.heading}
                          className="w-10 h-10 object-cover mr-2"
                        />
                        <span>{product.heading}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setIsSearchDialogOpen(false)}
                    className="absolute top-2 right-2 text-2xl text-myBlue"
                  >
                    ×
                  </button>
                </div>
              </div>
            )} */}
            {/* Wishlist Icon */}
            <Link href="">
              <FaSearch className="text-[#2eabe8] w-[17px] h-[17px]" />
            </Link>
            <Link href="/wishlist">
              <FaHeart className="text-[#2eabe8] w-[17px] h-[17px]" />
            </Link>
            {/* Cart Icon */}
            <Link href="/cart">
              <FaShoppingCart className="text-[#2eabe8] w-[17px] h-[17px]" />
            </Link>
            {/* User Profile Icon */}
            {/* User Profile or Login/Register */}
            {status === "authenticated" ? (
              <Link href="/user-profile">
                <Image
                  src={session.user?.image || "/user/user-profile.avif"} // Fallback to a default image
                  alt="User Profile"
                  width={20}
                  height={20}
                  objectFit="cover"
                  className="rounded-full"
                />
              </Link>
            ) : (
              <Link href="/signin">
                <FaUserCircle className="w-5 h-5 text-2xl text-myBlue hover:text-myDark" />
              </Link>
            )}
            {/* <Link href="/user-profile">
            {/* Menu Toggle Button */}
            <button onClick={toggleMenu} className="focus:outline-none">
              {menuOpen ? (
                <HiOutlineX className="h-6 w-6 text-[#2eabe8]" />
              ) : (
                <RiMenu3Fill className="h-6 w-6 text-[#2eabe8]" />
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
                      href="/shop"
                      className={`${montserrat.className} font-bold text-[12px] lg:text-sm text-myBlue hover:text-myDark`}
                    >
                      Shop
                    </Link>

                    {/* Dropdown Toggle */}
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
                      <div className="relative">
                        <ul className="absolute mt-2 bg-white shadow-md py-2 w-40 z-50">
                          {[
                            { name: "Men", link: "/shop/men" },
                            { name: "Women", link: "/shop/women" },
                            { name: "Chair", link: "/shop/chair" },
                            { name: "Drinkware", link: "/shop/drinkware" },
                            { name: "Cutlery", link: "/shop/cutlery" },
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
                      </div>
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
            {/* User Profile or Login/Register */}
            {status === "authenticated" ? (
              <Link href="/user-profile">
                <Image
                  src={session.user?.image || "/user/user-profile.avif"} // Fallback to a default image
                  alt="User Profile"
                  width={25}
                  height={25}
                  objectFit="cover"
                  className="rounded-full"
                />
              </Link>
            ) : (
              <Link
                href="/signin"
                className={`${montserrat.className} text-[12px] font-bold lg:text-sm text-myBlue hover:text-myDark`}
              >
                Login / Register
              </Link>
            )}
            <div className=" flex md:space-x-2 lg:space-x-4 items-center relative">
              {[
                {
                  name: "search",
                  icon: <FaSearch size={20} color="#23A6F0" />,
                  link: "",
                  isSearch: true, // Mark the search item to be handled differently
                },
                {
                  name: "cart",
                  icon: <FaShoppingCart size={20} color="#23A6F0" />,
                  link: "/cart",
                },
                {
                  name: "heart",
                  icon: <FaHeart size={20} color="#23A6F0" />,
                  link: "/wishlist",
                },
              ].map((icon) => (
                <div key={icon.name} className="relative">
                  {/* Render search button */}
                  {icon.isSearch ? (
                    <button
                      // onClick={() =>
                      //   setIsSearchInputVisible(!isSearchInputVisible)
                      // }
                      className="hover:opacity-80 mt-2"
                    >
                      <div className="w-5 h-5 md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px]">
                        {icon.icon}
                      </div>
                    </button>
                  ) : (
                    // Render other icons normally
                    <Link href={icon.link} className="hover:opacity-80">
                      <div className="w-5 h-5 md:w-[18px] md:h-[18px] lg:w-[22px] lg:h-[22px]">
                        {icon.icon}
                      </div>
                    </Link>
                  )}

                  {/* Conditionally render search input */}
                  {/* Conditionally render search input */}
                  {/* {isSearchInputVisible && icon.isSearch && (
                    <div className="border-2 border-myBlue absolute right-3 transform -translate-x-1/2 top-0  md:w-40 lg:w-40">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border p-2 rounded w-full"
                      />
                    </div>
                  )} */}

                  {/* Search Results Dropdown */}

                  {/* Search Results Dropdown */}
                  {/* {isSearchInputVisible && searchResults.length > 0 && (
                    <div className="absolute mt-2 bg-white shadow-md w-40">
                      <ul>
                        {searchResults.map((product: Product) => (
                          <li
                            key={product.id}
                            className="p-2 hover:bg-gray-100"
                          >
                            <div>
                              <Image
                                width={200}
                                height={200}
                                src={product.image}
                                alt={product.heading}
                                className="w-10 h-10 object-cover"
                              />
                              <span>{product.heading}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Links for Small Screens */}
        {menuOpen && (
          <div
            className={`fixed top-0 right-0 h-full w-[75%] bg-white shadow-md z-50 transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col mt-4 text-center space-y-2">
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-2xl text-myBlue"
              >
                <FaTimes />
              </button>

              {/* Navbar Links */}
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
                  <span className="font-medium text-sm text-myBlue hover:text-myDark">
                    {navbar.name}
                  </span>
                </Link>
              ))}

              {/* Mobile Shop Dropdown */}
              <div className="relative flex justify-center">
                <Link
                  href="/shop"
                  className="font-medium text-sm text-myBlue flex items-center justify-center hover:text-myDark"
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
                      { name: "Chair", link: "/shop/chair" },
                      { name: "Drinkware", link: "/shop/drinkware" },
                      { name: "Cutlery", link: "/shop/cutlery" },
                    ].map((category) => (
                      <li
                        key={category.link}
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        <Link
                          href={category.link}
                          onClick={closeShopDropdown} // Close dropdown when a category is clicked
                        >
                          <span className="text-sm font-mono text-myBlue hover:text-myDark">
                            {category.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
