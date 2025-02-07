import Image from "next/image";
import { Montserrat } from "next/font/google";
import { FaAngleRight, FaClock } from "react-icons/fa";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface FeatureCards {
  imagePath: string;
}

const FeatureCardComponent = (card: FeatureCards) => {
  return (
    <div className="w-full max-w-[348px] mx-auto shadow-md rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={card.imagePath}
          alt="feature-card-image"
          className="object-cover w-full h-[200px]"
          width={348}
          height={200}
        />
        <div className="absolute top-4 left-4 bg-myDarkOrange text-white px-3 py-1 text-sm rounded">
          <h6
            className={`${montserrat.className}items-center text-center font-bold text-[14px] text-white `}
          >
            NEW
          </h6>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex gap-3 text-xs text-myGrey mb-3">
          <h5
            className={`${montserrat.className}items-center text-center font-normal text-[12px] text-myLightBlue `}
          >
            Google
          </h5>
          <h5
            className={`${montserrat.className}items-center text-center font-normal text-[12px] text-myGrey `}
          >
            Trending
          </h5>

          <h5
            className={`${montserrat.className}items-center text-center font-normal text-[12px] text-myGrey `}
          >
            New
          </h5>
        </div>

        <h4
          className={`${montserrat.className}items-center text-start mb-3  font-normal text-[20px] text-myDark my-3 `}
        >
          Loudest à la Madison #1 (L'integral)
        </h4>
        <h4
          className={`${montserrat.className}items-center text-start font-normal text-sm lg:text-[14px] text-myGrey mb-4 `}
        >
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </h4>
        <div className="flex justify-between text-xs text-myGrey">
          <div className="flex items-center gap-2">
            <FaClock className="text-myBlue" />
            <h4
              className={`${montserrat.className}items-center text-center font-normal text-[12px]  text-myGrey `}
            >
              22 April 2021
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/chart.png"
              alt="chart-icon"
              width={13}
              height={13}
            />
            <h4
              className={`${montserrat.className}items-center text-center font-normal text-[12px] text-myGrey hover:text-blue-500`}
            >
              10 comments
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 text-myBlue">
          <h6
            className={`${montserrat.className}items-center text-center font-bold text-[14px] text-myGrey hover:text-blue-500`}
          >
            Learn More
          </h6>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default FeatureCardComponent;
