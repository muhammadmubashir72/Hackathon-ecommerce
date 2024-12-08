import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Carousel_2 = () => {
  return (
    <div
      className="w-full h-full items-center bg-myDarkGreen bg-no-repeat bg-cover bg-center relative px-4 sm:px-8 md:px-16 lg:px-32"
      style={{
        backgroundImage: "url('/images/shop-hero-2-png-picture-1.png')", // Background image path
      }}
    >
      {/* Main container */}
      <div className="w-full h-full flex items-center justify-center">
      
        
        {/* Row */}
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-auto py-16 sm:py-20 md:py-28 relative z-10">
          {/* Text container - delayed on small screens */}
          <div className="w-full h-full flex flex-col justify-between space-y-4 sm:space-y-6">
            <h5
              className={`${montserrat.className} font-bold text-xs sm:text-sm md:text-lg text-white`}
            >
              SUMMER 2020
            </h5>

            <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%]">
              <h1
                className={`${montserrat.className} font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white`}
              >
                Vita Classic Product
              </h1>
            </div>

            <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%]">
              <h4
                className={`${montserrat.className} font-normal text-sm sm:text-base md:text-lg lg:text-xl text-white`}
              >
                We know how large objects will act, We know how are objects will
                act, We know
              </h4>
            </div>

            <div className="flex items-center justify-between w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mt-2 space-x-4">
              <h3
                className={`${montserrat.className} text-lg sm:text-xl md:text-2xl font-bold text-white`}
              >
                $16.48
              </h3>
              <div className="w-[160px] sm:w-[180px] md:w-[200px] h-[50px] rounded items-center pt-3 sm:pt-4 md:pt-5 text-center bg-myGreen">
                <h3
                  className={`${montserrat.className} font-bold text-sm sm:text-base md:text-lg text-center text-white`}
                >
                  ADD TO CART
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay for background image to ensure content is visible */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default Carousel_2;
