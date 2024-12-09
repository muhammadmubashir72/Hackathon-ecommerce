import { Montserrat } from "next/font/google";
import Image from "next/image";
import { FaAngleRight, FaClock } from "react-icons/fa";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface FeatureCards {
  imagePath: string;
}

const FeatureCard = (card: FeatureCards) => {
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
          NEW
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex gap-3 text-xs text-myGrey mb-3">
          <span className="text-myLightBlue">Google</span>
          <span>Trending</span>
          <span>New</span>
        </div>
        <h4 className="text-lg text-myDark font-medium mb-3">
          Loudest à la Madison #1 (L'integral)
        </h4>
        <p className="text-sm text-myGrey mb-4">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex justify-between text-xs text-myGrey">
          <div className="flex items-center gap-2">
            <FaClock className="text-myBlue" />
            <span>22 April 2021</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/chart.png"
              alt="chart-icon"
              width={13}
              height={13}
            />
            <span>10 comments</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 text-myBlue">
          <span>Learn More</span>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
