import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Carousel_2 = () => {
  return (
    <div className="w-full h-auto flex items-center bg-myDarkGreen bg-no-repeat bg-right px-4 sm:px-8 lg:px-16 py-10 lg:py-20">
      {/* Main Container */}
      <div className="flex flex-wrap lg:flex-nowrap items-center w-full max-w-7xl mx-auto">
        {/* Content Section */}
        <div className="w-full lg:w-[509px] h-auto space-y-6 lg:space-y-8">
          <h5
            className={`${montserrat.className} font-bold text-sm sm:text-base lg:text-lg text-white`}
          >
            SUMMER 2020
          </h5>
          <h1
            className={`${montserrat.className} font-bold text-2xl sm:text-3xl lg:text-4xl text-white`}
          >
            Vita Classic Product
          </h1>
          <p
            className={`${montserrat.className} font-normal text-sm sm:text-base lg:text-lg text-white`}
          >
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex items-center space-x-4">
            <h3
              className={`${montserrat.className} font-bold text-lg sm:text-xl lg:text-2xl text-white`}
            >
              $16.48
            </h3>
            <button className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base lg:text-lg bg-myGreen text-white rounded-lg">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[510px] lg:h-[685px] mt-10 lg:mt-0">
          <Image
            src="/images/shop-hero-2-png-picture-1.png"
            alt="Product"
            width={510}
            height={500}
            className="w-full h-full object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel_2;
