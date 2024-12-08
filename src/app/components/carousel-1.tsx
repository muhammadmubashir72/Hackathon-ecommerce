import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Carousel = () => {
  return (
    <div
      className="w-full h-full items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-image.jpg')", // Update with your background image path
      }}
    >
      {/* Main container */}
      <div className="w-full h-full flex items-center justify-center">
        {/* Row */}
        <div className="w-full sm:px-6 md:px-12 lg:px-32 py-20 sm:py-16 md:py-28">
          {/* Placeholder Divs */}
          <div className="w-full h-full flex flex-col justify-center items-start mx-0 sm:mx-0  space-y-4 sm:space-y-2">
            <h5
              className={`${montserrat.className} font-bold text-xs sm:text-sm md:text-lg lg:text-xl text-white`}
            >
              SUMMER 2020
            </h5>
            <h1
              className={`${montserrat.className} font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white`}
            >
              NEW COLLECTION
            </h1>
            <h4
              className={`${montserrat.className} font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-white`}
            >
              We know how large objects will act, but things on a small scale.
            </h4>

            <div className="w-[221px] h-[62px] rounded py-2 sm:w-[180px] sm:h-[50px] md:w-[200px] md:h-[55px] bg-myGreen flex items-center justify-center">
              <h3
                className={`${montserrat.className} font-bold text-lg sm:text-xl md:text-2xl text-center text-white`}
              >
                SHOP NOW
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
