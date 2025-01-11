import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopHeader = () => {
  return (
    <div>
      {/* Navbar Dark */}
      {/*  Navbar */}
      <div className="w-full h-[58px] items-center bg-myDark px-6 sm:px-6 lg:px-8 lg:pt-5 hidden lg:block">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 ">
            {[
              { src: "/images/phone.png", text: "(225) 555-0118" },
              {
                src: "/images/message.png",
                text: "michelle.rivera@example.com",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Image src={item.src} alt="icon" width={16} height={16} />
                <h6 className="font-bold text-sm text-white hover:text-blue-500">
                  {item.text}
                </h6>
              </div>
            ))}
          </div>

          {/* Promo */}
          <h6 className="font-bold text-sm text-white text-center hover:text-blue-500">
            Follow Us and get a chance to win 80% off
          </h6>

          {/* Social Media */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <h6 className="font-bold text-sm text-white hover:text-blue-500">
              Follow Us:
            </h6>
            <div className="flex gap-2">
              {["instagram", "youtube", "facebook", "twitter"].map((social) => (
                <Link href="" key={social}>
                  <Image
                    src={`/images/${social}.png`}
                    alt={social}
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
