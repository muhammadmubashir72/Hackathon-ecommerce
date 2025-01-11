import FeaturePost from "./components/HomeComponent/featureProduct";
import Carousel_3 from "./components/HomeComponent/neuralUniverse";
import Carousel from "./components/HomeComponent/newCollection";
import ProductCard from "./components/HomeComponent/product";
import Carousel_2 from "./components/HomeComponent/vitaClassicProduct";

export default async function Home() {
  return (
    <div>
      <Carousel />
      <ProductCard />
      <Carousel_2 />
      <Carousel_3 />
      <FeaturePost />
    </div>
  );
}
