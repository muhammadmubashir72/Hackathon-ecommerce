"use client";
import { FaPlay } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import { useRef, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const ContentStatsVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayIcon, setShowPlayIcon] = useState(true);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayIcon(false);
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setShowPlayIcon(true);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        handlePlayVideo();
      } else {
        handlePauseVideo();
      }
    }
  };

  return (
    <div className="bg-black/[0.02] lg:bg-white">
      {/* content */}
      <div className="w-full flex justify-evenly flex-wrap mt-8">
        <div className="w-[394px] h-[140px] flex flex-col justify-between ">
          <p
            className={`${montserrat.className} text-center lg:text-start font-normal text-sm text-myDarkOrange `}
          >
            Problems trying
          </p>
          <h3
            className={`${montserrat.className} text-center lg:text-start font-bold text-[24px] text-myDark `}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div className="w-[529px] h-[40px]">
          <p
            className={`${montserrat.className} text-justify lg:text-start font-normal text-sm text-myGrey mt-16 lg:mt-0 px-8 lg:px-0 `}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      {/* stats review customers */}
      <div className="w-full space-y-12 lg:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-32">
        <div className="space-y-4">
          <h1
            className={`${montserrat.className} text-center font-bold text-[58px] text-myDark`}
          >
            15K
          </h1>
          <h5
            className={`${montserrat.className} text-center font-bold text-[16px] text-myDark `}
          >
            Happy Customers
          </h5>
        </div>
        <div className="space-y-4">
          <h1
            className={`${montserrat.className} text-center font-bold text-[58px] text-myDark `}
          >
            150K
          </h1>
          <h5
            className={`${montserrat.className} text-center font-bold text-[16px] text-myDark `}
          >
            Monthly Visitors
          </h5>
        </div>
        <div className="space-y-4">
          <h1
            className={`${montserrat.className} text-center font-bold text-[58px] text-myDark `}
          >
            15
          </h1>
          <h5
            className={`${montserrat.className} text-center font-bold text-[16px] text-myDark `}
          >
            Countries Worldwide
          </h5>
        </div>
        <div className="space-y-4">
          <h1
            className={`${montserrat.className} text-center font-bold text-[58px] text-myDark `}
          >
            100+
          </h1>
          <h5
            className={`${montserrat.className} text-center font-bold text-[16px] text-myDark `}
          >
            Top Partners
          </h5>
        </div>
      </div>

      {/* video */}

      <div className="relative w-full flex justify-center items-center mt-6 px-5">
        <video
          ref={videoRef}
          width={540}
          height={989}
          poster="/video/media bg-cover.png"
          className="rounded-lg shadow-lg transform transition duration-500 hover:scale-110"
          controls
          onClick={togglePlayPause}
          onPlay={() => setShowPlayIcon(false)}
          onPause={() => setShowPlayIcon(true)}
        >
          <source src="/video/nature.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Icon - Shown Initially or When Paused */}
        {showPlayIcon && (
          <div
            onClick={handlePlayVideo}
            className="absolute flex items-center justify-center w-[93px] h-[93px] bg-myBlue rounded-full cursor-pointer"
          >
            <FaPlay size={32} className="text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentStatsVideo;
