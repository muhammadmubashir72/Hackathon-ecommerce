import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import React from "react";

const TopHeader = () => {
  return (
    <div>
      {/* Navbar Dark */}
      <div className="w-full h-[58px] items-center bg-myDark px-6 sm:px-6 lg:px-8 lg:pt-5 hidden lg:block">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {[
              { icon: <FaPhoneAlt />, text: "(225) 555-0118" },
              { icon: <FaEnvelope />, text: "mubashirsaeedi@gmail.com" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="text-white">{item.icon}</div>
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
              {[
                { name: "instagram", icon: <FaInstagram /> },
                { name: "youtube", icon: <FaYoutube /> },
                { name: "facebook", icon: <FaFacebook /> },
                { name: "twitter", icon: <FaTwitter /> },
              ].map((social) => (
                <Link href="" key={social.name}>
                  <div className="text-md text-white hover:text-blue-500">{social.icon}</div>
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
