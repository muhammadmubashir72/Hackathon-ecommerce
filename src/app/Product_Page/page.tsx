import Header from "./header";
import Logo from "./logo";
import TopHeader from "./TopHeader";
import ProductShows from "./product";
import ProductCardSlide from "./productCardSlider";
import Description from "./description";

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
