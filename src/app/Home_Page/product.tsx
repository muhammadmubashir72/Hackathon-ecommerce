import { Montserrat } from "next/font/google";
import ProductCards from "./ProductCardComponent";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const ProductCard = () => {
  return (
    <div className="items-center my-14">
      {/* h2 #feature-section.1 */}

      <h4
        className={`${montserrat.className}items-center text-center font-normal text-[20px] text-myGrey`}
      >
        Featured Products
      </h4>

      <h3
        className={`${montserrat.className} font-normal text-[24px] text-center text-myDark`}
      >
        Problems trying to resolve the conflict between
      </h3>

      <p
        className={`${montserrat.className}items-center text-center font-normal text-[14px]  text-myGrey mb-16 mt-2`}
      >
        Problems trying to resolve the conflict between
      </p>

      {/*  Product*/}

      <div className="grid grid-cols-1 lg:grid-cols-4 mx-12 sm:mx-0 sm:px-[118px]">
        <ProductCards
          imagePath="/images/product-cover-1.png"
          heading="Graphic Design"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />

        <ProductCards
          imagePath="/images/product-cover-2.png"
          heading="Graphic Design"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />

        <ProductCards
          imagePath="/images/product-cover-3.png"
          heading="Graphic Design"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />

        <ProductCards
          imagePath="/images/product-cover-4.png"
          heading="Graphic Design"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />

        <ProductCards
          imagePath="/images/product-cover-5.png"
          heading="Graphic Design"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />

        <ProductCards
          imagePath="/images/product-cover-6.png"
          heading="Graphic Design"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />

        <ProductCards
          imagePath="/images/product-cover-7.png"
          heading="Graphic Design"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />

        <ProductCards
          imagePath="/images/product-cover-8.png"
          heading="Graphic Design"
          department="English Department"
          price1="$16.48"
          price2="$6.48"
        />
      </div>
    </div>
  );
};

export default ProductCard;
