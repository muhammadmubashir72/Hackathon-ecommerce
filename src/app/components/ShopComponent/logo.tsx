import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    //  {/* grid-cols-6 */}
    <div className="space-y-5 md:space-y-0 lg:space-y-0 my-12 px-0 md:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6">
      {/* Image 1 */}
      <Image
        src="/company/img-1.png"
        alt="company-img-1"
        width={153}
        height={34}
        className="mx-auto lg:w-full lg:h-auto object-cover transform transition duration-500 hover:scale-110"
      />
      
      {/* Image 2 */}
      <Image
        src="/company/img-2.png"
        alt="company-img-2"
        width={146}
        height={59}
        className="mx-auto lg:w-full lg:h-auto object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 3 */}
      <Image
        src="/company/img-3.png"
        alt="company-img-3"
        width={152}
        height={15}
        className="mx-auto lg:w-full lg:h-auto object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 4 */}
      <Image
        src="/company/img-4.png"
        alt="company-img-4"
        width={161}
        height={42}
        className="mx-auto lg:w-full lg:h-auto object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 5 */}
      <Image
        src="/company/img-5.png"
        alt="company-img-5"
        width={151}
        height={62}
        className="mx-auto lg:w-full lg:h-auto object-cover transform transition duration-500 hover:scale-110"
      />

      {/* Image 6 */}
      <Image
        src="/company/img-6.png"
        alt="company-img-6"
        width={151}
        height={72}
        className="mx-auto lg:w-full lg:h-auto object-cover transform transition duration-500 hover:scale-110"
      />

    </div>
  );
};

export default Logo;
