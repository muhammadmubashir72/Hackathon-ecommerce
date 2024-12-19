"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Header from "./header";
import WorkWithUs from "./workWithUs";
import BigCompanies from "./BigCompanies";
import MeetOurTeam from "./MeetOurTeam";
import ContentStatsVideo from "./ContentStatsVideo";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
export default function Contact() {
  return (
    <div className="w-full h-full items-center mx-auto">
      <Header />
      <div className="w-full h-full bg-white flex flex-wrap px-4 lg:px-16">
        {/* about */}
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-10 mx-auto items-center lg:items-start mt-16 lg:mt-36 px-4 lg:px-0">
          <div>
            <h5
              className={`${montserrat.className} text-center font-bold text-[16px] text-myDark`}
            >
              ABOUT COMPANY
            </h5>
          </div>
          <div className="mt-4">
            <h1
              className={`${montserrat.className} text-start font-bold text-3xl lg:text-5xl text-myDark`}
            >
              ABOUT US
            </h1>
          </div>
          <div className="mt-4 w-full lg:w-[376px]">
            <h4
              className={`${montserrat.className} text-start font-normal text-base lg:text-lg text-myDark`}
            >
              We know how large objects will act, but things on a small scale{" "}
            </h4>
          </div>
          <div className="w-[195px] h-[52px] flex  bg-myBlue">
            <button className="w-[214px] h-[52px]  bg-myBlue text-white font-bold  rounded-[5px] text-sm ">
              Get Quote Now
            </button>
          </div>
        </div>

        {/* Right Content Image*/}
        <div className="relative w-full lg:w-1/2 mt-12 lg:mt-0">
          {/* Background Circles */}
          <div className="absolute inset-0">
            <div className="bg-myImageBackground absolute w-56 h-56 lg:w-[460px] lg:h-[460px] rounded-full bottom-[84px] lg:bottom-[148px] right-[45px] lg:right-[82px]" />
            <div className="bg-myImageBackground absolute w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-full top-0 lg:top-[44px] lg:bottom-[0px] left-[-10px] lg:left-[-20px]" />
            <div className="bg-myImageBackground absolute w-8 h-8 lg:w-[30px] lg:h-[30px] rounded-full bottom-[175px] lg:bottom-[380px] right-[5px] lg:right-[40px]" />
            <div
              className="bg-myImageBackground2 absolute w-4 h-4 lg:w-[20px] lg:h-[20px] rounded-full top-16 lg:top-32
             right-[2px] lg:right-[20px]"
            />
          </div>
          <Image
            src="/images/technology 2.png"
            alt="technology 2"
            className="relative w-full h-auto object-cover"
            width={450}
            height={645}
          />
        </div>
      </div>
      <ContentStatsVideo />
      <MeetOurTeam />
      <BigCompanies />
      <WorkWithUs />
    </div>
  );
}
