"use client";
import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Header from "./header";
import TopHeader from "./TopHeader";

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
      <div className="flex justify-between px-16">
        <div>
          <h3 className="font-bold text-[24px] text-myDark">Shop</h3>
        </div>

        <div className="flex justify-evenly space-x-2">
          <Link href="/">
            <h3 className="font-bold text-sm text-myDark">Home</h3>
          </Link>
          <FaAngleRight className="text-myGrey" />
          <Link href="/">
            <h3 className="font-bold text-sm text-myGrey">Shop</h3>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-5 px-12">
        
        <div className="relative">
          <Image
            src={`/shop images/ssop-img-1.jpg`}
            alt={"images"}
            width={205}
            height={203}
          />
          <div className="absolute bottom-20 left-16 space-y-3">
          <h5 className="font-bold text-[16px] text-white">CLOTHS</h5>

         <p className="font-normal text-sm text-white">5 Items</p>
            
          </div>
        </div>

        <div className="relative">
          <Image
            src={`/shop images/ssop-img-2.jpg`}
            alt={"images"}
            width={205}
            height={203}
          />
          <div className="absolute bottom-20 left-16 space-y-3">
          <h5 className="font-bold text-[16px] text-white">CLOTHS</h5>

         <p className="font-normal text-sm text-white">5 Items</p>
            
          </div>
        </div>

        <div className="relative">
          <Image
            src={`/shop images/ssop-img-3.jpg`}
            alt={"images"}
            width={205}
            height={203}
          />
          <div className="absolute bottom-20 left-16 space-y-3">
          <h5 className="font-bold text-[16px] text-white">CLOTHS</h5>

         <p className="font-normal text-sm text-white">5 Items</p>
            
          </div>
        </div>

        <div className="relative">
          <Image
            src={`/shop images/ssop-img-4.jpg`}
            alt={"images"}
            width={205}
            height={203}
          />
          <div className="absolute bottom-20 left-16 space-y-3">
          <h5 className="font-bold text-[16px] text-white">CLOTHS</h5>

         <p className="font-normal text-sm text-white">5 Items</p>
            
          </div>
        </div>

        <div className="relative">
          <Image
            src={`/shop images/ssop-img-5.jpg`}
            alt={"images"}
            width={205}
            height={203}
          />
          <div className="absolute bottom-20 left-16 space-y-3">
          <h5 className="font-bold text-[16px] text-white">CLOTHS</h5>

         <p className="font-normal text-sm text-white">5 Items</p>
            
          </div>
        </div>
        
      </div>

      <div className="w-[177px] h-[46px] flex justify-between px-16">
        
        <div>
          <h6 className="font-bold text-[14px] text-myGrey">Showing all 12 results
          </h6>
        </div>

        <div>
        <h6 className="font-bold text-sm text-myGrey">Views:</h6>

        
        </div>

        {/* <div className="flex justify-evenly space-x-2">
          <Link href="/">
            <h3 className="font-bold text-sm text-myDark">Home</h3>
          </Link>
          <FaAngleRight className="text-myGrey" />
          <Link href="/">
            <h3 className="font-bold text-sm text-myGrey">Shop</h3>
          </Link>
        </div> */}
      </div>

      
    </div>
  );
}
