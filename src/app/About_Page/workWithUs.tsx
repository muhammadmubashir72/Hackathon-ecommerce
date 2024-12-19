import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const WorkWithUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch mt-28">
      {/* Content Section */}
      <div className="w-full lg:w-[70%] bg-mybackgroundblue flex flex-col justify-center p-6 lg:p-12">
        <div className="max-w-md mx-auto space-y-6 text-center lg:text-left">
          <h5
            className={`${montserrat.className} font-bold text-sm sm:text-base lg:text-lg text-white`}
          >
            WORK WITH US
          </h5>
          <h1
            className={`${montserrat.className} font-bold text-2xl sm:text-3xl lg:text-4xl text-white`}
          >
            Now Let’s grow Yours
          </h1>
          <p
            className={`${montserrat.className} font-normal text-sm sm:text-base lg:text-lg text-white`}
          >
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th.
          </p>
          <div>
            <button className="w-[132px] h-[52px] text-white font-bold outline outline-white rounded-[5px] text-sm">
              Button
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 bg-myGrey/20 flex items-center justify-center h-full">
        <Image
          src="/work/work-img.png"
          alt="work-img"
          width={510}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default WorkWithUs;
