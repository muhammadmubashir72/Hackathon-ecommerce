import { Montserrat } from "next/font/google";
import { IoIosArrowForward } from "react-icons/io";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function ProductCardSlide() {
  return (
    <div>
      <ul className="flex justify-start gap-5 pl-[50px] my-10">
        <li className={`${montserrat.className} hover:text-blue-500`}>Home</li>
        <IoIosArrowForward className="mt-1" />
        <li className={`${montserrat.className} hover:text-blue-500`}>Team</li>
      </ul>
    </div>
  );
}
