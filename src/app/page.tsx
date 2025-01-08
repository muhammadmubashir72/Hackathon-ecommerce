import FeaturePost from "./Home_Page/featureProduct";
import Header from "./Home_Page/header";
import Carousel_3 from "./Home_Page/neuralUniverse";
import Carousel from "./Home_Page/newCollection";
import ProductCard from "./Home_Page/product";
import TopHeader from "./Home_Page/TopHeader";
import Carousel_2 from "./Home_Page/vitaClassicProduct";


export default async function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Carousel />
      <ProductCard />
      <Carousel_2 />
      <Carousel_3 />
      <FeaturePost />
    </div>
  );
}
