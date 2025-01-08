import Header from "./header";
import TopHeader from "./TopHeader";
import Product from "./prouct";
import Shop from "./shop";
import Show from "./show";
import Logo from "./logo";
import Product2 from "./prouct2";
import Next from "./next";
import Logo2 from "./logo2";
import React from "react";


export default function ShopPager() {
 
  return (
    <div>
      <TopHeader />
       <Header />
      <Shop />
      <Product />
      <Show />
      <Logo />
     <Product2 />
      <Next />
      <Logo2 />
    </div>
  );
}
