import Image from "next/image";
import Link from "next/link";

const TopHeader = () => {
    return (
      <div>
        {/* Navbar Dark */}
              <div className="w-full h-[58px] bg-myDarkGreen hidden lg:block">
                <div className="w-full h-full flex justify-evenly items-center px-6">
                  {/* Contact Info */}
                  <div className="flex gap-6">
                    {[
                      { src: "/images/phone.png", text: "(225) 555-0118" },
                      {
                        src: "/images/message.png",
                        text: "michelle.rivera@example.com",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Image src={item.src} alt="icon" width={16} height={16} />
                        <h6 className="font-bold text-sm text-white">{item.text}</h6>
                      </div>
                    ))}
                  </div>
        
                  {/* Promo */}
                  <h6 className="font-bold text-sm text-white">
                    Follow Us and get a chance to win 80% off
                  </h6>
        
                  {/* Social Media */}
                  <div className="flex items-center gap-3">
                    <h6 className="font-bold text-sm text-white">Follow Us:</h6>
                    <div className="flex gap-2">
                      {["instagram", "youtube", "facebook", "twitter"].map((social) => (
                        <Link href="#" key={social}>
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
    )
  }
  
  export default TopHeader;