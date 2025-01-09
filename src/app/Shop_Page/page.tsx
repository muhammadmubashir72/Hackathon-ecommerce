
import React from "react";
import TopHeader from "../components/ShopComponent/TopHeader";
import Header from "../components/ShopComponent/header";
import Shop from "../components/ShopComponent/shop";
import Product from "../components/ShopComponent/prouct";
import Show from "../components/ShopComponent/show";
import Logo from "../components/ShopComponent/logo";
import Product2 from "../components/ProductComponent/product";
import Logo2 from "../components/ShopComponent/logo2";
import Pagination from "../components/ShopComponent/next";


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
      <Pagination />
      <Logo2 />
    </div>
  );
}
