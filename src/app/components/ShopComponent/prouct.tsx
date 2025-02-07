import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-0 md:px-0 lg:px-12 py-8 space-y-3 md:space-y-4 lg:space-y-0">
      <div className="relative mx-auto items-center group">
        <Image
          className="mt-0 md:mt-4 lg:mt-0 transform transition duration-500 hover:scale-110"
          src={`/shop images/ssop-img-1.jpg`}
          alt={"images"}
          width={205}
          height={203}
        />
        <div className="absolute bottom-20 left-16 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h5 className="font-bold text-[16px] text-white">CLOTHS</h5>
          <p className="font-normal text-sm text-white">5 Items</p>
        </div>
      </div>

      <div className="relative mx-auto items-center group">
        <Image
          className="transform transition duration-500 hover:scale-110"
          src={`/shop images/ssop-img-2.jpg`}
          alt={"images"}
          width={205}
          height={203}
        />
        <div className="absolute bottom-20 left-16 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h5 className="font-bold text-[16px] text-white">CLOTHS</h5>
          <p className="font-normal text-sm text-white">5 Items</p>
        </div>
      </div>

      <div className="relative mx-auto items-center group">
        <Image
          src={`/shop images/ssop-img-3.jpg`}
          alt={"images"}
          width={205}
          height={203}
          className="transform transition duration-500 hover:scale-110"
        />
        <div className="absolute bottom-20 left-16 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h5 className="font-bold text-[16px] text-white hover:text-blue-500">
            CLOTHS
          </h5>
          <p className="font-normal text-sm text-white hover:text-blue-500">
            5 Items
          </p>
        </div>
      </div>

      <div className="relative mx-auto items-center group">
        <Image
          src={`/shop images/ssop-img-4.jpg`}
          className="transform transition duration-500 hover:scale-110"
          alt={"images"}
          width={205}
          height={203}
        />
        <div className="absolute bottom-20 left-16 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h5 className="font-bold text-[16px] text-white">CLOTHS</h5>
          <p className="font-normal text-sm text-white">5 Items</p>
        </div>
      </div>

      <div className="relative mx-auto items-center group">
        <Image
          src={`/shop images/ssop-img-5.jpg`}
          className="transform transition duration-500 hover:scale-110"
          alt={"images"}
          width={205}
          height={203}
        />
        <div className="absolute bottom-20 left-16 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h5 className="font-bold text-[16px] text-white">CLOTHS</h5>
          <p className="font-normal text-sm text-white">5 Items</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
