import Header from "./header";
import Logo from "./logo";
import TopHeader from "./TopHeader";
import ProductShows from "./product";
import Description from "./description";
import React from "react";
import ProductCardSlide from "./productCardSlider";

export default function ProductPage() {
  return (
    <div>
      <TopHeader />
      <Header />
      <ProductCardSlide />
      <Description />
      <ProductShows />
      <Logo />
    </div>
  );
}
