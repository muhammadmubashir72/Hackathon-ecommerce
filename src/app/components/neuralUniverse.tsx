import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Carousel_3 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full h-auto px-4 sm:px-8 lg:px-16 py-10 lg:py-20 gap-8 lg:gap-16">
      {/* Image Section */}
      <div className="w-full lg:w-[725px] h-auto">
        <Image
          src="/images/hero-cover-1.png" // Update with your image path
          alt="Hero Image 2"
          width={725}
          height={774}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[573px] flex flex-col justify-center space-y-6 lg:space-y-8">
        <h5
          className={`${montserrat.className} font-bold text-sm sm:text-base lg:text-lg text-myGrey`}
        >
          SUMMER 2020
        </h5>

        <h1
          className={`${montserrat.className} font-bold text-2xl sm:text-3xl lg:text-4xl text-myDark`}
        >
          Part of the Neural Universe
        </h1>

        <p
          className={`${montserrat.className} font-normal text-sm sm:text-base lg:text-lg text-myGrey`}
        >
          We know how large objects will act, but things on a small scale.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="w-full sm:w-[156px] px-6 py-3 text-sm lg:text-base bg-myGreen text-white rounded-lg text-center">
            BUY NOW
          </button>
          <button className="w-full sm:w-[156px] px-6 py-3 text-sm lg:text-base bg-white text-myGreen border border-myGreen rounded-lg text-center">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel_3;
