// Gallery.tsx
"use client";
import React, { useState, useEffect } from "react";
import CardGallery from "./CardGallery";
import { motion, AnimatePresence } from "framer-motion";

function Gallery() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // Initial and additional gallery images with proper typing
  const initialGalleryImages = [
    { src: "/galeri1.jpg", alt: "Gallery Image 1" },
    { src: "/galeri2.jpg", alt: "Gallery Image 2" },
    { src: "/galeri3.jpg", alt: "Gallery Image 3" },
    { src: "/galeri4.jpg", alt: "Gallery Image 4" },
    { src: "/galeri5.jpg", alt: "Gallery Image 5" },
  ];

  const additionalGalleryImages = [
    { src: "/galery6.png", alt: "Gallery Image 6" },
    { src: "/galery7.png", alt: "Gallery Image 7" },
    { src: "/galery8.png", alt: "Gallery Image 8" },
    { src: "/galery9.png", alt: "Gallery Image 9" },
    { src: "/galery10.png", alt: "Gallery Image 10" },
  ];

  // Get all images based on showMore state
  const galleryImages = showMore
    ? [...initialGalleryImages, ...additionalGalleryImages]
    : initialGalleryImages;

  // Intersection Observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      observer.observe(gallerySection);
    }

    return () => {
      if (gallerySection) {
        observer.unobserve(gallerySection);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Toggle function for the "View More" button
  const toggleShowMore = () => {
    setShowMore(!showMore);
    // Scroll into view if showing more images
    if (!showMore) {
      setTimeout(() => {
        const additionalImages = document.getElementById("additional-images");
        if (additionalImages) {
          additionalImages.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden relative" id="gallery">
      {/* Decorative accent similar to Heroes component */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>

      {/* Section Header - Styled to match Hero section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center mb-16"
      >
        <h3 className="text-xl md:text-2xl text-yellow-400 font-medium tracking-wide">
          OUR MOMENTS
        </h3>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-extrabold mt-2 text-center">
          GALLERY
        </h2>
        <div className="w-24 md:w-36 h-2 bg-yellow-400 mt-3 relative">
          <span className="absolute -left-2 -top-1 w-4 h-4 rounded-full bg-yellow-300"></span>
          <span className="absolute -right-2 -top-1 w-4 h-4 rounded-full bg-yellow-300"></span>
        </div>
      </motion.div>

      {/* Gallery Grid with animations */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {/* Initial images */}
          {initialGalleryImages.map((image, index) => (
            <motion.div
              key={`initial-${index}`}
              variants={itemVariants}
              className={`rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:z-10 hover:shadow-xl ${
                hoveredImage === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <CardGallery
                foto={image.src}
                alt={image.alt}
                isActive={hoveredImage === index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional images that appear when "View More" is clicked */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              id="additional-images"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-8"
            >
              {additionalGalleryImages.map((image, index) => (
                <motion.div
                  key={`additional-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className={`rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:z-10 hover:shadow-xl ${
                    hoveredImage === index + initialGalleryImages.length
                      ? "scale-105"
                      : ""
                  }`}
                  onMouseEnter={() =>
                    setHoveredImage(index + initialGalleryImages.length)
                  }
                  onMouseLeave={() => setHoveredImage(null)}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <CardGallery
                    foto={image.src}
                    alt={image.alt}
                    isActive={
                      hoveredImage === index + initialGalleryImages.length
                    }
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* View More/Less Button - Styled like Hero section buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="flex justify-center mt-12"
      >
        <button
          onClick={toggleShowMore}
          className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition-all duration-300 text-center text-sm md:text-base shadow-md hover:shadow-lg flex items-center gap-2"
        >
          {showMore ? (
            <>
              <span>Show Less</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          ) : (
            <>
              <span>View More Photos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          )}
        </button>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}

export default Gallery;
