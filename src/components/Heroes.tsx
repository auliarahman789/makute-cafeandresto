// Heroes.js
"use client";
import React, { useState, useEffect } from "react";

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  // Images to use in the slideshow with aspect ratio information
  const images = [
    { src: "/about2.png", type: "landscape" }, // Landscape
    { src: "/2.jpg", type: "portrait" }, // Portrait
    { src: "/3.jpg", type: "portrait" }, // Portrait
    { src: "/4.jpg", type: "portrait" },
    { src: "/galeri1.jpg", type: "portrait" },
    { src: "/galeri3.jpg", type: "portrait" },
    { src: "/galeri5.jpg", type: "portrait" }, // Portrait
  ];

  useEffect(() => {
    // Set initial dimensions
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Image slideshow timer
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [images.length]);

  const isMobile = windowWidth < 768;
  const aspectRatio = windowWidth / windowHeight;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => {
          // Determine optimal background styling based on image type and screen
          let bgPosition = "center";
          let bgSize = "cover";

          // Special handling for portrait images on wide screens
          if (image.type === "portrait" && aspectRatio > 1.2) {
            bgPosition = "50% 25%"; // Position higher to show more of subject
          }

          // Special handling for landscape images on narrow screens
          if (image.type === "landscape" && aspectRatio < 0.8) {
            bgPosition = "50% 30%"; // Adjust to show important parts
          }

          return (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url('${image.src}')`,
                backgroundPosition: bgPosition,
                backgroundSize: bgSize,
                backgroundRepeat: "no-repeat",
              }}
            />
          );
        })}
      </div>

      {/* Enhanced Overlay with stronger gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70">
        {/* Image Navigation Dots */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-yellow-400 scale-125"
                  : "bg-white/60"
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex flex-col h-full">
          {/* Content - centered for mobile, more dramatic position for desktop */}
          <div
            className={`flex-grow flex ${
              isMobile
                ? "items-center justify-center"
                : "items-center md:items-end"
            } px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 ${
              isMobile ? "pb-20" : "pb-32"
            }`}
          >
            <div className="text-white max-w-xl text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase text-shadow-lg">
                Mak Ute <span className="text-yellow-300">Cafe</span> &{" "}
                <span className="text-yellow-300">Resto</span>
              </h1>

              <p className="mt-4 text-lg md:text-xl text-white font-medium max-w-lg">
                Experience authentic flavors in a cozy atmosphere
              </p>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="#menu"
                  className="w-full sm:w-auto sm:min-w-[140px] px-6 py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition-all duration-300 text-center text-sm md:text-base"
                >
                  Explore Menu
                </a>
                <a
                  href="#about"
                  className="w-full sm:w-auto sm:min-w-[140px] px-6 py-3 bg-black/30 backdrop-blur-sm border-2 border-white text-white font-bold rounded-md hover:bg-white/20 transition-all duration-300 text-center text-sm md:text-base"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Button - positioned higher to avoid overlap with nav dots */}
          <div className="flex justify-center pb-4">
            <a
              href="#about"
              className="animate-bounce hover:opacity-80 transition-opacity"
              aria-label="Scroll to About section"
            >
              <svg
                width="36"
                height="24"
                viewBox="0 0 48 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M-6.48499e-05 -2.09815e-06L24.5903 9.14421L48 0.439014L24.1936 27.4308L-6.48499e-05 -2.09815e-06Z"
                  fill="#faca15"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;
