"use client";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const FreeTrials = () => {
  return (
    <div>
      <div className="w-full md:w-[547px] lg:w-[547px] flex flex-col justify-center items-center text-center mx-auto mt-36">
        <h2
          className={`${montserrat.className} font-bold text-[20px] text-myDark `}
        >
          Start your 14 days free trial
        </h2>

        <div className=" items-center">
          <p
            className={`${montserrat.className}  font-normal text-[10px] text-sm text-myGrey mt-4 px-6 lg:px-0 `}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent. Try it free now
          </p>
        </div>
        <div className="w-[186px] h-[52px] rounded-md  bg-myBlue mx-auto py-4 mt-6">
          <h6
            className={`${montserrat.className}  text-center font-bold text-[14px] items-center text-white mx-auto hover:text-black`}
          >
            Try for free
          </h6>
        </div>
        {/* social icons */}

<div className="w-[242px] mx-auto flex my-8 justify-evenly">
  {/* Twitter Icon */}
  <div>
    <FaTwitter className="w-[30px] h-[30px] text-[#1DA1F2]" />
  </div>
  {/* Facebook Icon */}
  <div>
    <FaFacebookF className="w-[30px] h-[30px] text-[#1877F2]" />
  </div>
  {/* Instagram Icon */}
  <div>
    <FaInstagram className="w-[30px] h-[30px] text-[#E4405F]" />
  </div>
  {/* LinkedIn Icon */}
  <div>
    <FaLinkedinIn className="w-[30px] h-[30px] text-[#0077B5]" />
  </div>
</div>
      </div>
    </div>
  );
};

export default FreeTrials;
