import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Header() {
  return (
    <div className="w-full">
      {/* Navbar Dark */}
      <div className="w-full h-[58px] bg-myDark hidden lg:block">
        <div className="w-full h-full flex justify-between items-center px-6">
          {/* Contact Info */}
          <div className="flex gap-6">
            {[
              { src: "/images/phone.png", text: "(225) 555-0118" },
              { src: "/images/message.png", text: "michelle.rivera@example.com" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Image src={item.src} alt="icon" width={16} height={16} />
                <h6 className="font-bold text-sm text-white">{item.text}</h6>
              </div>
            ))}
          </div>

          {/* Promo */}
          <h6 className="font-bold text-sm text-white">
            Follow Us and get a chance to win 80% off
          </h6>

          {/* Social Media */}
          <div className="flex items-center gap-3">
            <h6 className="font-bold text-sm text-white">Follow Us:</h6>
            <div className="flex gap-2">
              {["instagram", "youtube", "facebook", "twitter"].map((social) => (
                <Link href="#" key={social}>
                  <Image
                    src={`/images/${social}.png`}
                    alt={social}
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Light */}
      <div className="w-full px-4 sm:px-8 py-4 bg-white">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h3 className={`${montserrat.className} font-bold text-2xl`}>Bandage</h3>

          {/* Icons for Small Screens */}
          <div className="flex items-center md:hidden gap-4">
            {["searching", "cart1", "bars1"].map((icon) => (
              <Image key={icon} src={`/images/${icon}.png`} alt={icon} width={22} height={22} />
            ))}
          </div>

          {/* Navbar Links */}
          <ul className="hidden md:flex items-center space-x-6">
            {["Home", "Shop", "About", "Blog", "Contact", "Pages"].map((link) => (
              <li
                key={link}
                className={`${montserrat.className} font-bold text-sm ${
                  link === "Shop" ? "text-myDark" : "text-myGrey"
                }`}
              >
                {link}
                {link === "Shop" && <FaAngleDown className="ml-1 inline" />}
              </li>
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
              <Image key={icon} src={`/images/${icon}.png`} alt={icon} width={22} height={22} />
            ))}
          </div>
        </div>

        {/* Links for Small Screens */}
        <div className="flex flex-col mt-4 md:hidden text-center space-y-2">
          {["Home", "Price", "Product", "Contact"].map((link) => (
            <Link href="#" key={link}>
              <span
                className={`${montserrat.className} font-bold text-sm text-myGrey`}
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
