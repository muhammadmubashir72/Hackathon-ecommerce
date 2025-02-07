import Card from "@/app/components/PriceComponent/card";
import Faqs from "@/app/components/PriceComponent/faqs";
import FreeTrials from "@/app/components/PriceComponent/freeTrials";
import Logo from "@/app/components/PriceComponent/logo";
import PriceSection from "@/app/components/PriceComponent/priceSection";


const PricePage = () => {
  return (
    <div>
      <PriceSection />
      <Card />
      <Logo />
      <Faqs />
      <FreeTrials />
    </div>
  );
};

export default PricePage;
