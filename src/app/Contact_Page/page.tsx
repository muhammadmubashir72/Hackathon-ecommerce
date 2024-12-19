import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Contact = () => {
  return (
    <div className="w-full h-full items-center mx-auto">
      <Header />
      <div className="w-full h-full bg-white flex flex-wrap px-4 lg:px-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between mx-auto items-start mt-16 lg:mt-36 px-4 lg:px-0">
          <div>
            <h5
              className={`${montserrat.className} text-center font-bold text-[16px] text-myDark`}
            >
              CONTACT US
            </h5>
          </div>
          <div className="mt-4">
            <h1
              className={`${montserrat.className} text-start font-bold text-3xl lg:text-5xl text-myDark`}
            >
              Get in touch today!
            </h1>
          </div>
          <div className="mt-4">
            <h4
              className={`${montserrat.className} text-start font-normal text-base lg:text-lg text-myDark`}
            >
              We know how large objects will act, but things on a small scale
            </h4>
          </div>
          <div className="flex flex-col mt-6">
            <h4
              className={`${montserrat.className} text-start font-bold text-lg lg:text-xl text-myDark`}
            >
              Phone : +451 215 215
            </h4>
            <h4
              className={`${montserrat.className} text-start font-bold text-lg lg:text-xl text-myDark`}
            >
              Fax : +451 215 215
            </h4>
          </div>
          {/* Social Media */}
          <div className="flex gap-4 mt-6">
            {["logo_twitter", "logo_facebook", "logo_instagram", "logo_linkedin"].map((social) => (
              <Link href="#" key={social}>
                <Image
                  src={`/images/${social}.png`}
                  alt={social}
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px]"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="relative w-full lg:w-1/2 mt-12 lg:mt-0">
          {/* Background Circles */}
          <div className="absolute inset-0">
            <div className="bg-myImageBackground absolute w-56 h-56 lg:w-[460px] lg:h-[460px] rounded-full bottom-[84px] lg:bottom-[148px] right-[45px] lg:right-[82px]" />
            <div className="bg-myImageBackground absolute w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-full top-0 lg:top-[10px] lg:bottom-[0px] left-[-10px] lg:left-[-50px]" />
            <div className="bg-myImageBackground absolute w-8 h-8 lg:w-[30px] lg:h-[30px] rounded-full bottom-[175px] lg:bottom-[380px] right-[5px] lg:right-[40px]" />
            <div className="bg-myImageBackground2 absolute w-4 h-4 lg:w-[20px] lg:h-[20px] rounded-full top-16 lg:top-32
             right-[2px] lg:right-[20px]" />
          </div>
          <Image
            src="/images/technology 1.png"
            alt="technology 1"
            className="relative w-full h-auto object-cover"
            width={450}
            height={645}
          />
        </div>
      </div>

      {/* Office Section */}
      <div className="w-full bg-myGreyBackground py-8 px-4 text-center">
        <h6 className={`${montserrat.className} font-bold text-sm text-myDark`}>
          VISIT OUR OFFICE
        </h6>
        <h2 className={`${montserrat.className} font-normal text-2xl lg:text-4xl text-myDark mt-2`}>
          We help small businesses with big ideas
        </h2>
      </div>

      {/* Contact Boxes */}
      <div className="w-full flex flex-wrap justify-center bg-myGreyBackground py-8">
        {[
          { icon: "call", title: "Get Support", emails: ["georgia.young@example.com", "georgia.young@ple.com"] },
          { icon: "location", title: "Visit Us", emails: ["123 Street", "City, Country"], bg: "bg-myDark", text: "text-white" },
          { icon: "msg", title: "Send a Message", emails: ["contact@domain.com", "info@domain.com"] },
        ].map(({ icon, title, emails, bg = "", text = "text-myDark" }, index) => (
          <div
            key={index}
            className={` w-[328px] sm:w-1/2 lg:w-[328px] lg:h-[403px] h-[403px] p-4 flex flex-col justify-center items-center ${bg} rounded-lg`}
          >
            <Image src={`/images/${icon}.png`} alt={icon} width={72} height={72} />
            <div className="mt-3">
              {emails.map((email, i) => (
                <h6
                  key={i}
                  className={`${montserrat.className} text-center font-bold text-sm ${text}`}
                >
                  {email}
                </h6>
              ))}
            </div>
            <h5 className={`${montserrat.className} text-center font-bold text-lg mt-3 ${text}`}>
              {title}
            </h5>
            <button className="w-[189px] mt-4 text-myBlue font-bold py-2 px-4 rounded-full outline outline-1 outline-myBlue">
              Submit Request
            </button>
          </div>
        ))}
      </div>

      {/* Final Section */}
      <div className="w-full text-center py-8 ">
        <Image src={`/images/Arrow 2.png`} alt="Arrow 2" width={72} height={72} className="mx-auto" />
        <h5 className={`${montserrat.className} font-bold text-base text-myDark mt-5`}>
          WE Can't WAIT TO MEET YOU
        </h5>
        <h2 className={`${montserrat.className} font-normal text-3xl lg:text-5xl text-myDark mt-4`}>
          Let’s Talk
        </h2>
        <button className="w-48 mt-4 text-white font-bold py-2 px-6 rounded-md bg-myBlue">
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default Contact;
