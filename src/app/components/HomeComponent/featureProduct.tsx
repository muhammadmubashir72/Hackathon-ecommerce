import { Montserrat } from "next/font/google";
import FeatureCardComponent from "./FeatureCardComponent";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const FeaturePost = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-14 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center">
        <h6
          className={`${montserrat.className} font-bold text-sm sm:text-base md:text-lg text-myBlue `}
        >
          Practice Advice
        </h6>
        <h3
          className={`${montserrat.className} font-normal text-2xl sm:text-3xl md:text-4xl text-myDark mt-2 `}
        >
          Featured Posts
        </h3>
        <p
          className={`${montserrat.className} font-normal text-xs sm:text-sm md:text-base text-myGrey mt-4 `}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Feature Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <FeatureCardComponent imagePath="/images/featureCard-1.png" />
        <FeatureCardComponent imagePath="/images/featureCard-2.png" />
        <FeatureCardComponent imagePath="/images/featureCard-3.png" />
      </div>
    </div>
  );
};

export default FeaturePost;
