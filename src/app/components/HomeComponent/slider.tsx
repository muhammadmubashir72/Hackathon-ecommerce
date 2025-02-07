"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Slider = () => {
  const router = useRouter();
  const navigate = () => {
    router.push("/shop");
  };

  const slides = [
    { id: 1, image: "/slider/slide1.png" },
    { id: 2, image: "/slider/slide2.png" },
    { id: 3, image: "/slider/slide3.png" },
    { id: 4, image: "/slider/slide4.png" },
    { id: 5, image: "/slider/slide5.png" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full h-[180px] md:h-[500px] lg:h-[650px] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <Image
              src={slide.image}
              alt="slider image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow hover:bg-blue-700 transition z-10"
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-3 w-3 lg:w-6 lg:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow hover:bg-blue-700 transition z-10"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-3 w-3 lg:w-6 lg:h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Shop Now Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={navigate}
          className="flex items-center bg-black text-white text-sm md:text-lg font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Shop Now
          <span className="ml-2">
            <FaAngleRight className="w-5 h-5 md:w-7 md:h-7 text-white" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
