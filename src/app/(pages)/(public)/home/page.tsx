import Card from "@/app/components/HomeComponent/editorsPick";
import FeaturePost from "@/app/components/HomeComponent/featureProduct";
import Carousel_3 from "@/app/components/HomeComponent/neuralUniverse";
import Carousel from "@/app/components/HomeComponent/newCollection";
import ProductCard from "@/app/components/HomeComponent/product";
import Services from "@/app/components/HomeComponent/services";
import Slider from "@/app/components/HomeComponent/slider";
import Carousel_2 from "@/app/components/HomeComponent/vitaClassicProduct";

export default async function HomePage() {
  return (
    <div className="bg-gray-200">
      <Slider />
      <Carousel />
      <Card />
      <ProductCard />
      <Carousel_2 />
      <Carousel_3 />
      <FeaturePost />
      <Services />
    </div>
  );
}
