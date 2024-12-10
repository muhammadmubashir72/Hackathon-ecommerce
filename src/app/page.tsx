import Carousel from "./components/newCollection";
import Card from "./components/editorsPick";
import ProductCard from "./components/product";
import Carousel_2 from "./components/vitaClassicProduct";
import Carousel_3 from "./components/neuralUniverse";
import FeaturePost from "./components/featureProduct";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Card />
      <ProductCard />
      <Carousel_2 />
      <Carousel_3 />
      <FeaturePost />
    </div>
  );
}
