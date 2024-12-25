import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const About = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col md:flex-row lg:flex-row px-4 md:px-0 lg:px-20">
      {/* about */}
      {/* Left Content */}
      <div className="w-full flex flex-col space-y-10 mx-auto items-center md:items-center lg:items-start mt-16 lg:mt-36 px-4 lg:px-0">
        <div>
          <h5
            className={`${montserrat.className} text-center font-bold text-[16px] text-myDark hover:text-blue-500

0`}
          >
            ABOUT COMPANY
          </h5>
        </div>
        <div className="mt-4">
          <h1
            className={`${montserrat.className} text-start font-bold text-3xl lg:text-5xl text-myDark hover:text-blue-500`}
          >
            ABOUT US
          </h1>
        </div>

        <div className="mt-4 w-full lg:w-[376px]">
          <h4
            className={`${montserrat.className} text-center lg:text-start font-normal text-base lg:text-lg text-myDark hover:text-blue-500`}
          >
            We know how large objects will act, but things on a small scale
          </h4>
        </div>
        <div className="w-[195px] h-[52px] flex  bg-myBlue">
          <button className="w-[214px] h-[52px]  bg-myBlue text-white font-bold  rounded-[5px] text-sm hover:text-blue-500">
            Get Quote Now
          </button>
        </div>
      </div>

      {/* Right Content Image*/}
      <div className="relative w-full mt-12 lg:mt-0">
        {/* Background Circles */}
        <div className="absolute inset-0">
          <div className="bg-myImageBackground absolute w-[300px] h-[300px] lg:w-[460px] lg:h-[460px] rounded-full right-[35px] bottom-[84px] lg:bottom-[120px] lg:right-[108px] md:w-[360px] md:h-[360px] md:right-[30px] md:bottom-[18px] " />
          <div className="bg-myImageBackground absolute w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-full top-10 lg:top-[44px] lg:bottom-[0px] left-[11px] lg:left-[-90px] md:w-[50px] md:h-[50px] md:left-[10px]" />
          <div className="bg-myImageBackground absolute w-8 h-8 lg:w-[30px] lg:h-[30px] rounded-full bottom-[215px] lg:bottom-[350px] right-[-8px] lg:right-[60px] md:bottom-[260px] md:right-[0px] " />
          <div
            className="bg-myImageBackground2 absolute w-4 h-4 lg:w-[20px] lg:h-[20px] rounded-full top-16 lg:top-32
         right-[2px] lg:right-[20px] md:right-[26px] md:bottom-[18px]"
          />
        </div>
        <Image
          src="/images/technology 2.png"
          alt="technology 2"
          className="relative lg:w-[450px] lg:h-[645px] object-cover transform transition duration-500 hover:scale-110"
          width={450}
          height={645}
        />
      </div>
    </div>
  );
};

export default About;
