import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    //  {/* grid-cols-6 */}
    <div className="hidden sm:grid mx-auto w-full lg:w-[1000] grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 items-start mt-16 px-8">
      {/* Image 1 */}
      <Image
        src="/company/img-1.png"
        alt="company-img-1"
        width={153}
        height={34}
        className="w-[153px] h-[34px] object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 2 */}
      <Image
        src="/company/img-2.png"
        alt="company-img-2"
        width={146}
        height={59}
        className="w-[143px] h-[59px]  object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 3 */}
      <Image
        src="/company/img-3.png"
        alt="company-img-3"
        width={152}
        height={15}
        className="w-[153px] h-[74px]  object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 4 */}
      <Image
        src="/company/img-4.png"
        alt="company-img-4"
        width={151}
        height={42}
        className="w-[153px] h-[62px]  object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 5 */}
      <Image
        src="/company/img-5.png"
        alt="company-img-5"
        width={151}
        height={62}
        className="w-[153px] h-[81px]  object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 6 */}
      <Image
        src="/company/img-6.png"
        alt="company-img-6"
        width={151}
        height={72}
        className="w-full h-auto lg:w-[153px] lg:h-[72px]  object-cover transform transition duration-500 hover:scale-110"
      />
    </div>
  );
};

export default Logo;
