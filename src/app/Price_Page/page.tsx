
import React from "react";
import Header from "../components/PriceComponent/header";
import PriceSection from "../components/PriceComponent/priceSection";
import Card from "../components/PriceComponent/card";
import Logo from "../components/PriceComponent/logo";
import Faqs from "../components/PriceComponent/faqs";
import FreeTrials from "../components/PriceComponent/freeTrials";

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
