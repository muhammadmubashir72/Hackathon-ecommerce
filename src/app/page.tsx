import Image from "next/image";
import Header from "./components/header";
import Carousel from "./components/carousel-1";
import Card from "./components/card";
import ProductCard from "./components/product";
import Carousel_2 from "./components/carousel-2";
import Carousel_3 from "./components/carousel-3";
import FeaturePost from "./components/featurePost";
import Footer from "./components/footer";
import Footer1 from "./components/footer";

export default function Home() {
  return (
    <div>
         
        <Carousel/>
      <Card/>
         <ProductCard/>
      <Carousel_2/>
  <Carousel_3/>
{/*                  <FeaturePost/> */}
       

    </div>
  );
}
