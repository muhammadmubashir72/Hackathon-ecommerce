import React from "react";
import Shop from "../components/ShopComponent/shop";
import Product from "../components/ShopComponent/prouct";
import Show from "../components/ShopComponent/show";
import Logo from "../components/ShopComponent/logo";
import Logo2 from "../components/ShopComponent/logo2";
import Pagination from "../components/ShopComponent/next";
import ProductCard from "../components/ShopComponent/product2";

export default function ShopPager() {
  return (
    <div>
      <Shop />
      <Product />
      <Show />
      <Logo />
      <ProductCard />
      <Pagination />
      <Logo2 />
    </div>
  );
}
