
import React from "react";
import PriceSection from "../components/PriceComponent/priceSection";
import Card from "../components/PriceComponent/card";
import Logo from "../components/PriceComponent/logo";
import Faqs from "../components/PriceComponent/faqs";
import FreeTrials from "../components/PriceComponent/freeTrials";

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
