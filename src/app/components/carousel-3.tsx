import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Carousel_3 = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-full">
      {/* Image Section */}
      <div className="w-full h-auto">
        <Image
          src="/images/hero-cover-1.png" // Update with your background image path
          alt="Hero Image 2"
          layout="responsive"
          width={725}
          height={774}
          className="w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="absolute top-0 left-0 w-full sm:w-[90%] md:w-[573px] lg:w-[573px] h-auto flex flex-col justify-center items-start px-6 sm:px-8 md:px-10 lg:px-16 py-4 sm:py-6 md:py-8 lg:py-10 z-10">
        <div className="flex flex-col justify-between space-y-4">
          <h5 className={`${montserrat.className} font-bold text-sm sm:text-base md:text-lg lg:text-xl text-myGrey`}>
            SUMMER 2020
          </h5>

          <h1 className={`${montserrat.className} font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-myDark`}>
            Part of the Neural Universe
          </h1>

          <h4 className={`${montserrat.className} font-normal text-sm sm:text-base md:text-lg text-myGrey`}>
            We know how large objects will act, but things on a small scale.
          </h4>

          <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[90%] md:w-[90%] lg:w-[100%] mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[48%] h-[52px] rounded items-center pt-4 text-center bg-myGreen">
              <h3 className={`${montserrat.className} font-bold text-sm sm:text-base md:text-lg text-white`}>
                BUY NOW
              </h3>
            </div>
            <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[48%] h-[52px] rounded items-center pt-4 text-center bg-white outline outline-myGreen">
              <h3 className={`${montserrat.className} font-bold text-sm sm:text-base md:text-lg text-myGreen`}>
                READ MORE
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel_3;
