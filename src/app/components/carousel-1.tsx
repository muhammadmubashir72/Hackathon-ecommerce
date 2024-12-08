import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Carousel = () => {
  return (
    <div
      className="w-full h-screen items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-image.jpg')", // Update with your background image path
      }}
    >
      {/* Main Container */}
      <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        {/* Content Wrapper */}
        <div className="w-full max-w-[800px] text-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
          {/* Header */}
          <h5
            className={`${montserrat.className} font-bold text-xs sm:text-sm md:text-lg lg:text-xl text-white mb-4`}
          >
            SUMMER 2020
          </h5>
          <h1
            className={`${montserrat.className} font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight`}
          >
            NEW COLLECTION
          </h1>
          <p
            className={`${montserrat.className} font-normal text-sm sm:text-base md:text-lg lg:text-xl text-white mt-4`}
          >
            We know how large objects will act, but things on a small scale.
          </p>
          {/* Button */}
          <div className="mt-6">
            <button className="bg-myGreen text-white font-bold py-3 px-6 rounded sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 text-sm sm:text-base md:text-lg lg:text-xl">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
