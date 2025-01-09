import FeaturePost from "./components/HomeComponent/featureProduct";
import Header from "./components/HomeComponent/header";
import Carousel_3 from "./components/HomeComponent/neuralUniverse";
import Carousel from "./components/HomeComponent/newCollection";
import ProductCard from "./components/HomeComponent/product";
import TopHeader from "./components/HomeComponent/TopHeader";
import Carousel_2 from "./components/HomeComponent/vitaClassicProduct";


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
