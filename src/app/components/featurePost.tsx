import { Montserrat } from "next/font/google";
import FeatureCard from "./FeatureCardComponent";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const FeaturePost = () => {
  return (
    <div className="items-center my-14">
      {/* h2 #feature-section.1 */}
      <div className="w-[691px] h-4-[134] items-center text-center mx-auto">
        <h6
          className={`${montserrat.className}items-center text-center font-bold text-[14px] text-myBlue`}
        >
          Practice Advice
        </h6>

        <h3
          className={`${montserrat.className} font-normal text-[40px] text-center text-myDark`}
        >
          Featured Posts
        </h3>

        <p
          className={`${montserrat.className}items-center text-center font-normal text-[14px]  text-myGrey mb-5`}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Feature Post */}
      <div className="grid grid-cols-3 px-24">
        <FeatureCard imagePath="/images/featureCard-1.png" />
        <FeatureCard imagePath="/images/featureCard-2.png" />
        <FeatureCard imagePath="/images/featureCard-3.png" />
      </div>
      

    </div>
  );
};

export default FeaturePost;
