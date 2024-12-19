import Carousel from "./Home_Page/newCollection";
import Card from "./Home_Page/editorsPick";
import ProductCard from "./Home_Page/product";
import Carousel_2 from "./Home_Page/vitaClassicProduct";
import Carousel_3 from "./Home_Page/neuralUniverse";
import FeaturePost from "./Home_Page/featureProduct";
import Header from "./Home_Page/header";
import TopHeader from "./Home_Page/TopHeader";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}

      <Header />

      <TopHeader />
      <Carousel />
      <Card />
      <ProductCard />
      <Carousel_2 />
      <Carousel_3 />
      <FeaturePost />
    </div>
  );
}
