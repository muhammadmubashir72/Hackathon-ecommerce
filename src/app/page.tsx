import Carousel from "./components/carousel-1";
import Card from "./components/card";
import ProductCard from "./components/product";
import Carousel_2 from "./components/carousel-2";
import Carousel_3 from "./components/carousel-3";
import FeaturePost from "./components/featurePost";


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
