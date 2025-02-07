import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const BigCompanies = () => {
  return (
    //{/* Big Companies Are Here */}

    <div className="bg-black/[0.02] flex flex-col justify-center w-full h-auto items-center text-center mx-auto mt-40 px-6 lg:px-0">
      <h2
        className={`${montserrat.className} font-bold text-[40px] text-myDark py-12 `}
      >
        Big Companies Are Here
      </h2>

      <div className="w-full h-auto lg:w-[547px] lg:h-[40px] items-center mt-5">
        <p
          className={`${montserrat.className}  font-normal text-sm text-myGrey mt-4 `}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      {/* grid-cols-6 */}
      <div className="w-full lg:w-[900px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center mx-auto mt-12">
        {/* Image 1 */}
        <Image
          src="/company/img-1.png"
          alt="company-img-1"
          width={153}
          height={34}
          className=" items-center mx-auto "
        />

        {/* Image 2 */}
        <Image
          src="/company/img-2.png"
          alt="company-img-2"
          width={146}
          height={59}
          className="items-center mx-auto "
        />

        {/* Image 3 */}
        <Image
          src="/company/img-3.png"
          alt="company-img-3"
          width={152}
          height={15}
          className="items-center mx-auto "
        />

        {/* Image 4 */}
        <Image
          src="/company/img-4.png"
          alt="company-img-4"
          width={151}
          height={42}
          className="items-center mx-auto "
        />

        {/* Image 5 */}
        <Image
          src="/company/img-5.png"
          alt="company-img-5"
          width={151}
          height={62}
          className="items-center mx-auto"
        />

        {/* Image 6 */}
        <Image
          src="/company/img-6.png"
          alt="company-img-6"
          width={151}
          height={72}
          className="items-center mx-auto"
        />
      </div>
    </div>
  );
};

export default BigCompanies;
