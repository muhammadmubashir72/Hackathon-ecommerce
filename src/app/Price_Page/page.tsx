import Card from "./card";
import Faqs from "./faqs";
import FreeTrials from "./freeTrials";
import Logo from "./logo";
import Header from "./header";
import PriceSection from "./priceSection";

const PricePage = () => {
  return (
    <div>
      <Header />
      <PriceSection />
      <Card />
      <Logo />
      <Faqs />
      <FreeTrials />
    </div>
  );
};

export default PricePage;
