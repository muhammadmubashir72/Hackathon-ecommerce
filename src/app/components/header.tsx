import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Header() {
  return (
    <div className="w-full">
      {/* Navbar dark */}
      <div className="w-full h-[58px] bg-myDark hidden lg:block">
        {/* collapse navbar-collapse */}
        <div className="w-full h-[46px]">
          {/* container */}
          <div className="w-full h-[46px]">
            {/* row */}
            <div className="w-full h-[46px] flex justify-between py-5 px-7">
              {/* 1st Column */}
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    className="text-white"
                    src="/images/phone.png"
                    alt="phone"
                    width={16}
                    height={16}
                  />
                  <h6 className="font-bold text-[14px] text-white">
                    (225) 555-0118
                  </h6>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    className="text-white"
                    src="/images/message.png"
                    alt="message"
                    width={16}
                    height={16}
                  />
                  <h6 className="font-bold text-[14px] text-white">
                    michelle.rivera@example.com
                  </h6>
                </div>
              </div>

              {/* 2nd Column */}
              <div className="w-full h-[46px] text-end">
                <h6 className="font-bold text-[14px] mr-5 text-white">
                  Follow Us and get a chance to win 80% off
                </h6>
              </div>

              {/* 3rd Column */}
              <div className="flex justify-end w-[700px] h-[46px] gap-[10px]">
                <h6 className="font-bold text-[14px] text-white">Follow Us:</h6>
                <div className="flex gap-2">
                  {["instagram", "youtube", "facebook", "twitter"].map((social) => (
                    <Link key={social} href="#">
                      <Image
                        className="w-[26px] h-[26px] p-[5px] text-white"
                        src={`/images/${social}.png`}
                        alt={social}
                        width={26}
                        height={26}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar light */}
      <div className="w-full px-4 sm:px-8 py-4 bg-white">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="text-center sm:text-left">
            <h3 className={`${montserrat.className} font-bold text-[24px]`}>
              Bandage
            </h3>
          </div>

          {/* Icons for small screens */}
          <div className="flex items-center space-x-4 md:hidden">
            {["serach1", "cart1", "bars1"].map((icon) => (
              <Image
                key={icon}
                src={`/images/${icon}.png`}
                alt={icon}
                width={22}
                height={22}
              />
            ))}
          </div>

          {/* Navbar Links */}
          <ul className="hidden md:flex items-center space-x-6">
            {["Home", "Shop", "About", "Blog", "Contact", "Pages"].map((link) => (
              <Link href="#" key={link}>
                <li
                  className={`${montserrat.className} font-bold text-[14px] ${
                    link === "Shop" ? "text-myDark" : "text-myGrey"
                  }`}
                >
                  {link}
                  {link === "Shop" && <FaAngleDown className="ml-1 inline" />}
                </li>
              </Link>
            ))}
          </ul>

          {/* Login and Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Image src="/images/contact.png" alt="contact" width={22} height={22} />
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

        {/* Links for small screens */}
        <div className="flex flex-col mt-4 md:hidden text-center space-y-2">
          {["Home", "Price", "Product", "Contact"].map((link) => (
            <Link href="#" key={link}>
              <span
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                {link}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
