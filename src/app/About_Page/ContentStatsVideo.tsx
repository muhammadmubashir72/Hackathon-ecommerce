"use client";
import { FaPlay } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import { useRef, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const ContentStatsVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Video reference
  const [showPlayIcon, setShowPlayIcon] = useState(true); // Play icon visibility

  // Play the video and hide the play icon
  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayIcon(false); // Hide the play icon when video starts
    }
  };

  // Pause the video and show the play icon
  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setShowPlayIcon(true); // Show the play icon when video is paused
    }
  };

  // Toggle Play/Pause
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
            className={`${montserrat.className} text-center lg:text-start font-normal text-sm text-myDarkOrange hover:text-blue-500`}
          >
            Problems trying
          </p>
          <h3
            className={`${montserrat.className} text-center lg:text-start font-bold text-[24px] text-myDark hover:text-blue-500`}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div className="w-[529px] h-[40px]">
          <p
            className={`${montserrat.className} text-justify lg:text-start font-normal text-sm text-myGrey mt-16 lg:mt-0 px-8 lg:px-0 hover:text-blue-500`}
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
            className={`${montserrat.className} text-center font-bold text-[58px] text-myDark hover:text-blue-500`}
          >
            15K
          </h1>
          <h5
            className={`${montserrat.className} text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
          >
            Happy Customers
          </h5>
        </div>
        <div className="space-y-4">
          <h1
            className={`${montserrat.className} text-center font-bold text-[58px] text-myDark hover:text-blue-500`}
          >
            150K
          </h1>
          <h5
            className={`${montserrat.className} text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
          >
            Monthly Visitors
          </h5>
        </div>
        <div className="space-y-4">
          <h1
            className={`${montserrat.className} text-center font-bold text-[58px] text-myDark hover:text-blue-500`}
          >
            15
          </h1>
          <h5
            className={`${montserrat.className} text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
          >
            Countries Worldwide
          </h5>
        </div>
        <div className="space-y-4">
          <h1
            className={`${montserrat.className} text-center font-bold text-[58px] text-myDark hover:text-blue-500`}
          >
            100+
          </h1>
          <h5
            className={`${montserrat.className} text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
          >
            Top Partners
          </h5>
        </div>
      </div>

      {/* video */}

      <div className="relative w-full flex justify-center items-center mt-6 px-5">
        {/* Video Element */}
        <video
          ref={videoRef}
          width={540}
          height={989}
          poster="/video/media bg-cover.png" // Path to the cover image
          className="rounded-lg shadow-lg transform transition duration-500 hover:scale-110"
          controls // Video controls will show when the video plays
          onClick={togglePlayPause} // Toggle play/pause on video click
          onPlay={() => setShowPlayIcon(false)} // Hide icon when playing
          onPause={() => setShowPlayIcon(true)} // Show icon when paused
        >
          <source src="/video/nature.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Icon - Shown Initially or When Paused */}
        {showPlayIcon && (
          <div
            onClick={handlePlayVideo} // Play video when clicking the icon
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
