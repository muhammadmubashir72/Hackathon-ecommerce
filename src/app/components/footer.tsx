import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Footer() {
  return (
    <div className="bg-white text-white px-14 py-[60px] md:w-full lg:h-[380px] w-full justify-between">

      <div className="w-full h-[58px] flex justify-between px-10 space-x-5 sm:space-x-0 ">
        <div>
          <h3
            className={`${montserrat.className}items-center text-center font-bold text-[14px] md:text-[24px] text-myDark`}
          >
            Bandage
            </h3>
        </div>

        <div className="flex justify-between space-x-3 ">
          <Image
            src="/images/facebook1.png"
            alt="Logo"
            width={24}
            height={24}
            className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
          />
          <Image
            src="/images/instagram1.png"
            alt="Logo"
            width={24}
            height={24}
            className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
          />

          <Image
            src="/images/twitter1.png"
            alt="Logo"
            width={24}
            height={24}
            className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
          />
        </div>
      </div>
      <div>
        <hr className="border-t-[1px] border-myGrey w-full mb-8" />
      </div>

      <div className="sm:flex flex-col md:flex-row lg:flex-row sm:space-x-10">
        {/* Company Info Section */}
        <div className="space-y-4 w-full">
          <h5
            className={`${montserrat.className}font-bold text-[16px] text-myDark`}
          >
            Company Info
          </h5>
          <ul className={`${montserrat.className} space-y-2 text-sm`}>
            <Link href="">
              {" "}
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                About Us
              </li>
            </Link>
            <Link href="">
              {" "}
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                Carrier
              </li>
            </Link>
            <Link href="">
              {" "}
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                We are hiring
              </li>
            </Link>
            <Link href="">
              {" "}
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                Blog
              </li>
            </Link>
          </ul>
        </div>

        {/* Legal\ Section */}
        <div className="space-y-4 w-full">
          <h5
            className={`${montserrat.className}font-bold text-[16px] text-myDark`}
          >
            Legal
          </h5>
          <ul className={`${montserrat.className} space-y-2 text-sm`}>
            <Link href="">
              {" "}
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                About Us
              </li>
            </Link>
            <Link href="">
              {" "}
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                Carrier
              </li>
            </Link>
            <Link href="">
              {" "}
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                We are hiring
              </li>
            </Link>
            <Link href="">
              {" "}
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                Blog
              </li>
            </Link>
          </ul>
        </div>

        {/* Features\ Section */}
        <div className="space-y-4 w-full">
          <h5
            className={`${montserrat.className}font-bold text-[16px] text-myDark`}
          >
            Features
          </h5>
          <ul className={`${montserrat.className} space-y-2 text-sm`}>
            <Link href="">
            
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                Business Marketing
              </li>
            </Link>
            <Link href="">
              
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                User Analytic
              </li>
            </Link>
            <Link href="">
             
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                Live Chat
              </li>
            </Link>
            <Link href="">
          
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                Unlimited Support{" "}
              </li>
            </Link>
          </ul>
        </div>

        {/* Resources\ Section */}
        <div className="space-y-4 w-full">
          <h5
            className={`${montserrat.className}font-bold text-[16px] text-myDark`}
          >
            Resources
          </h5>
          <ul className={`${montserrat.className} space-y-2 text-sm`}>
            <Link href="">
              {" "}
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                IOS & Android{" "}
              </li>
            </Link>
            <Link href="">
              {" "}
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                Watch a Demo{" "}
              </li>
            </Link>
            <Link href="">
              {" "}
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                Customers{" "}
              </li>
            </Link>
            <Link href="">
              {" "}
              <li
                className={`${montserrat.className} font-bold text-[14px] text-myGrey`}
              >
                API{" "}
              </li>
            </Link>
          </ul>
        </div>

        {/* Join Mailing List Section */}
        <div className="flex flex-col space-y-4 w-full sm:w-[509px]">
  <h5 className={`${montserrat.className} font-bold text-[16px] text-myDark`}>
    Get In Touch
  </h5>
  <div className="flex items-center lg:w-[321px] h-[48px] lg-h-[58] w-[250px]  border border-[#E6E6E6] rounded-lg overflow-hidden">
    <input
      type="email"
      placeholder="Your Email"
      className="bg-transparent text-white px-3 py-3 lg:px-4 lg:py-3 focus:outline-none w-full"
    />
    <div className="flex-shrink-0">
      <button className="text-white bg-myBlue px-3 py-3 lg:px-6 lg:py-3 lg:w-full  lg-[58] h-[58] w-[97px] font-normal text-[14px]">
        Subscribe
      </button>
    </div>
  </div>
  <p
    className={`${montserrat.className} font-normal text-[12px] text-myGrey`}
  >
    Lore imp sum dolor Amit
  </p>
</div>
  </div>

      <p
        className={`${montserrat.className} w-[183] h-[48px] lg:w-full lg:h-full font-bold text-[12px] lg:text-[14px] text-center text-myGrey mt-10`}
      >
        Made With Love By Finland All Right Reserved
      </p>
    </div>
  );
}
