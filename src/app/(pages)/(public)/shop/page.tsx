import Logo from "@/app/components/ShopComponent/logo";
import Pagination from "@/app/components/ShopComponent/next";
import ProductCardListingShop from "@/app/components/ShopComponent/productListing";
import Product from "@/app/components/ShopComponent/prouct";
import Shop from "@/app/components/ShopComponent/shop";
import Show from "@/app/components/ShopComponent/show";

export default function ShopPager() {
  return (
    <div>
      <Shop />
      <Product />
      <Show />
      <ProductCardListingShop />
      <Logo />
      <Pagination />
    </div>
  );
}
