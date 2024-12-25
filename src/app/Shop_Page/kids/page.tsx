import ProductCardShow from "@/app/Product_Page/ProductCardCom";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Kids = () => {
  return (
    <div>
      <h3
        className={`${montserrat.className} pl-0 md:lg:pl-[40px] pb-10 pt-9 text-center md:lg:text-center font-bold text-[20px] md:lg:text-[24px] text-myDark hover:text-blue-500`}
      >
        Kids
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ProductCardShow
          imagePath="/product/product-cover-1.png"
          heading="Graphic Design"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />
        <ProductCardShow
          imagePath="/product/single-product-4-cover-2.png"
          heading="Web Design"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />

        <ProductCardShow
          imagePath="/product/product-cover-3.png"
          heading="Web Development"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />

        <ProductCardShow
          imagePath="/product/product-cover-4.png"
          heading="App Development"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />

        <ProductCardShow
          imagePath="/product/product-cover-5.png"
          heading="Digital Marketing"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />

        <ProductCardShow
          imagePath="/product/product-cover-6.png"
          heading="E Commerce"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />

        <ProductCardShow
          imagePath="/product/product-cover-7.png"
          heading="Cloud Computing"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />

        <ProductCardShow
          imagePath="/product/product-cover-8.png"
          heading="AI Agentic"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />
      </div>
    </div>
  );
};

export default Kids;
