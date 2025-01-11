import { Montserrat } from "next/font/google";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function ProductCardSlide() {
  return (
    <div>
      <ul className="flex justify-start gap-5 pl-[50px] my-10">
        <Link href="/">
          <li className={`${montserrat.className} hover:text-blue-500`}>
            Home
          </li>
        </Link>
        <IoIosArrowForward className="mt-1" />
        <Link href="/Shop_Page">
          <li className={`${montserrat.className} hover:text-blue-500`}>
            Shop          </li>
        </Link>      </ul>
    </div>
  );
}
