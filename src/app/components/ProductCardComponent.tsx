import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface Cards {
  imagePath: string;
  heading: string;
  department: string;
  price1: string;
  price2: string;
}

const ProductCards = (card: Cards) => {
  return (
    <div className="w-[238px] h-[615px]">
      <div className="bg-myGrey items-center">
        <Image
          src={card.imagePath} // Corrected image path
          alt="card-image-1"
          className="object-cover w-[239px] h-[427px]"
          width={239}
          height={427}
        />
      </div>
      <div className="w-[239px] h-[188px] flex flex-col justify-evenly items-center ">
        <h5
          className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myDark`}
        >
          {card.heading}
        </h5>
        <Link
          href={""}
          className={`${montserrat.className}items-center text-center font-bold text-[14px] text-myGrey`}
        >
          {card.department}
        </Link>

        <div className="w-[108px] h-[34px] flex justify-between">
          <h5
            className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myGrey`}
          >
            {card.price1}
          </h5>
          <h5
            className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myDarkGreen`}
          >
            {card.price2}
          </h5>
        </div>

        <div className="w-[108px] h-[34px] flex justify-center space-x-1">
          <div className="w-[16px] h-[16px] bg-myBlue rounded-full" />
          <div className="w-[16px] h-[16px] bg-myDarkGreen rounded-full" />
          <div className="w-[16px] h-[16px] bg-myOrange rounded-full" />
          <div className="w-[16px] h-[16px] bg-myDark rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
