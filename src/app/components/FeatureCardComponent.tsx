import { Montserrat } from "next/font/google";
import Image from "next/image";
import { FaAngleRight, FaClock } from "react-icons/fa";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface FeatureCards {
  imagePath: string;
}

const FeatureCard = (card: FeatureCards) => {
  return (
    <div className="w-[100%] h-[100%] md:w-[348px] md:h-[606px] py-5">
      <div className="relative">
        <Image
          src={card.imagePath} // Corrected image path
          alt="card-image-1"
          className="object-cover w-[348px] h-[300px]"
          width={348}
          height={300}
        />
        <div className="w-[58px] h-[24px] absolute top-5 left-5 rounded-[3px] bg-myDarkOrange text-center px-[10px] pt-[2px] shadow-lg">
          <h6
            className={`${montserrat.className}items-center text-center font-bold text-[14px] text-white`}
          >
            NEW
          </h6>
        </div>
      </div>

      <div className="flex flex-col w-[348px] h-[306px] shadow-md space-x-0 md:space-x-4">
        <div className="flex w-[159px] h-[16px] space-x-4 ml-0 md:ml-4 mt-7">
          <h5
            className={`${montserrat.className}items-center text-center font-normal text-[12px] text-myLightBlue`}
          >
            Google
          </h5>
          <h5
            className={`${montserrat.className}items-center text-center font-normal text-[12px] text-myGrey`}
          >
            Trending
          </h5>

          <h5
            className={`${montserrat.className}items-center text-center font-normal text-[12px] text-myGrey`}
          >
            New
          </h5>
        </div>

        <div className="flex justify-start w-[247px] h-[60px] ">
          <h4
            className={`${montserrat.className}items-center text-start  font-normal text-[20px] text-myDark my-3`}
          >
            Loudest à la Madison #1 (L'integral)
          </h4>
        </div>

        <div className="flex w-[280px] h-[60px]  my-6">
          <h4
            className={`${montserrat.className}items-center text-start font-normal text-[14px] text-myGrey`}
          >
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </h4>
        </div>

        <div className="flex justify-between w-[298px] h-[46px] space-x-3">
          <div className="w-[98px] h-[16px] flex justify-between">
            <FaClock className="w-[13px] h-[13px] text-myBlue" />
            <h4
              className={`${montserrat.className}items-center text-center font-normal text-[12px]  text-myGrey`}
            >
              22 April 2021
            </h4>
          </div>

          <div className="w-[98px] h-[16px] flex justify-between">
            <Image
              src={"/images/chart.png"} // Corrected image path
              alt="card-image-1"
              className="object-cover w-[13px] h-[13px]"
              width={13}
              height={13}
            />
            <h4
              className={`${montserrat.className}items-center text-center font-normal text-[12px] text-myGrey`}
            >
              10 comments
            </h4>
          </div>
        </div>

        <div className="flex justify-between w-[104px] h-[24px] space-x-3">
          <h6
            className={`${montserrat.className}items-center text-center font-bold text-[14px] text-myGrey`}
          >
            Learn More
          </h6>
          <FaAngleRight className="w-[9px] h-[16px] text-myBlue" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
