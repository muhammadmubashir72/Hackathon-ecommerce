import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto">
        <div className=" py-0 md:py-0 md:w-full lg:h-[380px] h-full w-full justify-between">
          {/* top footer */}

          <div>
            <hr className="border-t-[1px] border-myGrey w-full opacity-30" />
          </div>
          <div className="bg-myGrey/5 px-14 w-full h-full md:w-full md:h-[138px] flex flex-col md:flex-row ju stify-between items-start space-y-3 py-12 ">
            <div>
              {/* Logo */}
              <Link href={"/"}>
                <h3
                  className={`${montserrat.className} font-bold text-xl lg:text-2xl text-myDark `}
                >
                  Bandage
                </h3>
              </Link>
            </div>
            <div className="px-0 md:px-4 flex justify-between space-x-3 ">
            <div className="px-0 md:px-4 flex justify-between space-x-3">
      {/* Facebook Icon */}
      <FaFacebook className="w-[23px] h-[20px] md:w-[24px] md:h-[24px]" color="#23A6F0" />

      {/* Instagram Icon */}
      <FaInstagram className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" color="#23A6F0" />

      {/* Twitter Icon */}
      <FaTwitter className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" color="#23A6F0" />
    </div>
            </div>
          </div>
          <div>
            <hr className="border-t-[1px] border-myGrey w-full mb-8 opacity-30" />
          </div>

          {/* footer */}
          <div className="mx-auto px-10 py-5 sm:flex flex-col md:flex-row lg:flex-row sm:space-x-10">
            {/* Company Info Section */}
            <div className="space-y-4 w-full">
              <h5
                className={`${montserrat.className} font-bold text-[16px] text-myDark -500`}
              >
                Company Info
              </h5>
              <ul className={`${montserrat.className} space-y-2 text-sm`}>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    We are hiring
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="space-y-4 w-full">
              <h5
                className={`${montserrat.className} font-bold text-[16px] text-myDark -500`}
              >
                Legal
              </h5>
              <ul className={`${montserrat.className} space-y-2 text-sm`}>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Features Section */}
            <div className="space-y-4 w-full">
              <h5
                className={`${montserrat.className} font-bold text-[16px] text-myDark -500`}
              >
                Features
              </h5>
              <ul className={`${montserrat.className} space-y-2 text-sm`}>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    Business Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    User Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    Live Chat
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    Unlimited Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="space-y-4 w-full">
              <h5
                className={`${montserrat.className} font-bold text-[16px] text-myDark -500`}
              >
                Resources
              </h5>
              <ul className={`${montserrat.className} space-y-2 text-sm`}>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    iOS & Android
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    Watch a Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    Customers
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className={`${montserrat.className} font-bold text-[14px] text-myGrey -500`}
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>

            {/* Join Mailing List Section */}
            <div className="flex flex-col space-y-4 w-full sm:w-[509px]">
              <h5
                className={`${montserrat.className} font-bold text-[16px] text-myDark -500`}
              >
                Get In Touch
              </h5>
              <div className="flex items-center lg:w-[321px] h-[48px] lg-h-[58] w-[250px] md:w-[221px] md:h-[48px] border border-[#E6E6E6] rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent text-white px-3 py-3 lg:px-4 lg:py-3 focus:outline-none w-full"
                />
                <div className="flex-shrink-0">
                  <button className="text-white bg-myBlue  px-3 py-3 lg:px-6 lg:py-3 lg:w-full  lg-[58] h-[58] w-[97px] font-normal text-[14px]">
                    Subscribe
                  </button>
                </div>
              </div>
              <p
                className={`${montserrat.className} font-normal text-[12px] text-myGrey -500`}
              >
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>

          <div className="bg-myGrey/5">
            <p
              className={`${montserrat.className} mx-auto items-center w-[80%] h-full lg:w-full lg:h-full font-bold text-[12px] lg:text-[14px] text-center text-myGrey -500 mt-10 py-5`}
            >
              Made With Love By Mubashir Saeedi All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
