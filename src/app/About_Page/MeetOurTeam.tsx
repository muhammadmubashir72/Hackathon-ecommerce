import Image from "next/image";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const MeetOurTeam = () => {
  return (
    // {/* Meet Our Team Section */}

    <div>
      {/* Meet Our Team */}
      <div className="flex flex-col justify-center w-full h-full lg:w-[607px] lg:h-[100px] items-center text-center mx-auto mt-28">
        <h2
          className={`${montserrat.className} font-bold text-[40px] text-myDark`}
        >
          Meet Our Team
        </h2>

        <div className="w-full lg:w-[469px] h-[40px] items-center">
          <p
            className={`${montserrat.className}  font-normal text-sm text-myGrey mt-4 px-6 lg:px-0`}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      {/* user */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center mx-auto mt-24 px-0 lg:px-28 space-x-5">
        <div className="items-center mx-auto space-y-3">
          <Image
            src="/user/user-1.jpg"
            alt="user-1"
            width={316}
            height={231}
            className="w-[316px] h-[231px] object-cover px-4 lg:px-0"
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-myDark`}
          >
            Sheza
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-myGrey`}
          >
            Profession
          </h6>

          {/* social icons */}
        {/* social icons */}
        <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook-lg.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram-lg.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter-lg.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
          </div>
        <div className="items-center mx-auto space-y-3">
          <Image
            src="/user/user-2.jpg"
            alt="user-2"
            width={316}
            height={231}
            className="w-[316px] h-[231px] object-cover pr-4 lg:pr-0 pt-6 lg:pt-0"
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-myDark`}
          >
            Anshara
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-myGrey`}
          >
            Profession
          </h6>

          {/* social icons */}
       {/* social icons */}
       <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook-lg.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram-lg.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter-lg.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
           </div>

        <div className="items-center mx-auto space-y-3">
          <Image
            src="/user/user-3.jpg"
            alt="user-3"
            width={316}
            height={231}
            className="w-[316px] h-[231px] object-cover pr-4 lg:pr-0 pt-6 lg:pt-0"
          />
          <h5
            className={`${montserrat.className} text-center font-bold text-sm sm:text-base md:text-lg lg:text-[16px] text-myDark`}
          >
            Ahmed
          </h5>

          <h6
            className={`${montserrat.className} text-center font-bold text-sm text-myGrey`}
          >
            Profession
          </h6>
          {/* social icons */}
          <div className="px-0 flex space-x-5 justify-center">
            {/* Facebook Icon */}
            <div>
              {/* Small Device Image */}
              <Image
                src="/user/w-img-fb.png" // Small image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden" // Show only on small devices
              />
              {/* Large Device Image */}
              <Image
                src="/images/facebook-lg.png" // Large image
                alt="Facebook"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block" // Show on md and larger devices
              />
            </div>

            {/* Instagram Icon */}
            <div>
              <Image
                src="/user/w-img-inst.png" // Small image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/instagram-lg.png" // Large image
                alt="Instagram"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>

            {/* Twitter Icon */}
            <div>
              <Image
                src="/user/w-img-twt.png" // Small image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[20px] h-[20px] md:hidden"
              />
              <Image
                src="/images/twitter-lg.png" // Large image
                alt="Twitter"
                width={24}
                height={24}
                className="w-[24px] h-[24px] hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
