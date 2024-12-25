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
const ProductCardShow = (card: Cards) => {
  return (
    <div className="w-[238px] h-[442px] mx-auto">
      <div className="items-center mx-auto">
        <Image
          src={card.imagePath} // Corrected image path
          alt="card.imagePath"
          className="object-cover w-[239px] h-[280px] transform transition duration-500 hover:scale-110"
          width={239}
          height={162}
        />
      </div>
      <div className="w-[239px] h-[168px] flex flex-col justify-evenly items-start pl-10">
        <h5
          className={`${montserrat.className} text-start font-bold text-[16px] text-myDark hover:text-blue-500`}
        >
          {card.heading}
        </h5>
        <Link
          href={""}
          className={`${montserrat.className} text-start font-bold text-[14px] text-myGrey hover:text-blue-500`}
        >
          {card.department}
        </Link>

        <div className="w-[108px] h-[34px] flex justify-between">
          <h5
            className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myGrey hover:text-blue-500`}
          >
            {card.price1}
          </h5>
          <h5
            className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myDarkGreen hover:text-blue-500`}
          >
            {card.price2}
          </h5>
        </div>
      </div>
    </div>
  );
};
export default ProductCardShow;
