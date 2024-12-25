import Image from "next/image";

const Logo2 = () => {
  return (
    //  {/* grid-cols-6 */}
    <div className="md:hidden grid grid-cols-1 items-center mt-16 px-20 space-y-10 my-10">
      {/* Image 1 */}
      <Image
        src="/company/img-1.png"
        alt="company-img-1"
        width={153}
        height={34}
        className="w-full h-auto object-cover"
      />

      {/* Image 2 */}
      <Image
        src="/company/img-2.png"
        alt="company-img-2"
        width={146}
        height={59}
        className="w-full h-auto object-contain"
      />

      {/* Image 3 */}
      <Image
        src="/company/img-3.png"
        alt="company-img-3"
        width={152}
        height={15}
        className="w-full h-auto object-cover"
      />

      {/* Image 4 */}
      <Image
        src="/company/img-4.png"
        alt="company-img-4"
        width={151}
        height={42}
        className="w-full h-auto object-cover"
      />

      {/* Image 6 */}
      <Image
        src="/company/img-6.png"
        alt="company-img-6"
        width={151}
        height={72}
        className="w-full h-auto object-cover"
      />

      {/* Image 5 */}

      <Image
        src="/company/img-5.png"
        alt="company-img-5"
        width={151}
        height={62}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default Logo2;
