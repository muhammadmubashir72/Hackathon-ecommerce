import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Description = () => {
  return (
    <div className="mt-16">
      <div className="flex items-center flex-wrap justify-center space-x-2  md:space-x-20 lg:space-x-20  mb-8">
        <Link href="/">
          <h6
            className={`${montserrat.className} text-start font-semibold text-[12px] md:lg:text-[14px] text-myGrey mb-5 hover:text-blue-500`}
          >
            Description
          </h6>
        </Link>
        <Link href="/">
          <h6
            className={`${montserrat.className} text-start font-bold text-[12px] md:lg:text-[14px] text-myGrey mb-5 hover:text-blue-500`}
          >
            Additional Information
          </h6>
        </Link>

        <Link href="/">
          <h6
            className={`${montserrat.className} text-start font-bold text-[12px] md:lg:text-[14px] text-myGrey mb-5 hover:text-blue-500`}
          >
            Reviews
            <span
              className={`${montserrat.className} text-start font-bold text-[12px] md:lg:text-[14px] text-myGreen mb-5 ml-2 hover:text-blue-500`}
            >
              (0)
            </span>
          </h6>
        </Link>
      </div>
      <div className="flex flex-col md:lg:flex-row justify-center md:lg:justify-evenly flex-wrap mx-5 md:lg:mx-0">
        <Image
          src="/product/single-product-3.png" // Corrected image path
          alt="card.imagePath"
          className="object-cover w-full h-auto md:lg:w-[316px] md:lg:h-[372px] transform transition duration-500 hover:scale-110"
          width={316}
          height={372}
        />

        <div className="flex flex-col justify-between w-full md:lg:w-[332px]">
          <h3
            className={`${montserrat.className} text-start font-bold text-[20px] md:lg:text-[24px] text-myDark mb-5 mt-8 md:lg:mt-0 hover:text-blue-500`}
          >
            the quick fox jumps over
          </h3>
          <p
            className={`${montserrat.className} text-start font-normal text-[14px] text-myGrey hover:text-blue-500`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p
            className={`${montserrat.className} text-start font-normal text-[14px] text-myGrey mt-5 hover:text-blue-500`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p
            className={`${montserrat.className} text-start font-normal text-[14px] text-myGrey mt-5 hover:text-blue-500`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="flex flex-col justify-between w-full md:lg:w-[332px]">
          <h3
            className={`${montserrat.className} text-start font-bold text-[20px] md:lg:text-[24px] text-myDark mb-5 mt-8 md:lg:mt-0 hover:text-blue-500`}
          >
            the quick fox jumps over
          </h3>
          <p
            className={`${montserrat.className} text-start font-normal text-[14px] text-myGrey hover:text-blue-500`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p
            className={`${montserrat.className} text-start font-normal text-[14px] text-myGrey mt-5 hover:text-blue-500`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p
            className={`${montserrat.className} text-start font-normal text-[14px] text-myGrey mt-5 hover:text-blue-500`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
