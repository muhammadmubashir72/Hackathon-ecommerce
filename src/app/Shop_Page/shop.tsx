import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const Shop = () => {
  return (
    <div className="flex justify-between flex-col sm:lg:flex-col  md:flex-row  lg:flex-row  flex-wrap px-1 mt-10  md:px-10 lg:px-16 lg:mt-5 space-y-6 sm:space-y-6 lg:space-y-0 md:space-y-0">
      <div>
        <h3 className="text-center font-bold text-[24px] text-myDark hover:text-blue-500">Shop</h3>
      </div>

      <div className="flex justify-center sm:justify-center md:justify-evenly lg:justify-evenly space-x-2">
        <Link href="/">
          <h3 className="font-bold text-sm text-myDark hover:text-blue-500">Home</h3>
        </Link>
        <FaAngleRight className="text-myGrey" />
        <Link href="/">
          <h3 className="font-bold text-sm text-myGrey hover:text-blue-500">Shop</h3>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
