import Description from "../components/ProductComponent/description";
import Header from "../components/ProductComponent/header";
import Logo from "../components/ProductComponent/logo";
import Product2 from "../components/ProductComponent/product";
import ProductCardSlide from "../components/ProductComponent/productCardSlider";
import TopHeader from "../components/ProductComponent/TopHeader";

export default function ProductPage() {
  return (
    <div>
      <TopHeader />
      <Header />
      <ProductCardSlide />
      <Description />
      <Product2 />
      <Logo />
    </div>
  );
}
