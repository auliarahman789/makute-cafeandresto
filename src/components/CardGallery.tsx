// CardGallery.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardGalleryProps {
  foto: string;
  alt: string;
  isActive?: boolean;
}

function CardGallery({ foto, alt, isActive = false }: CardGalleryProps) {
  return (
    <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden group">
      {/* Image with hover effects */}
      <Image
        src={foto}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
        className={`object-cover transition-all duration-700 ${
          isActive ? "scale-110 grayscale-0" : "grayscale hover:grayscale-0"
        }`}
        priority={false}
      />

      {/* Overlay that shows on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-white font-bold text-lg">Mak Ute</h4>
          <p className="text-yellow-300 text-sm">Authentic Experience</p>
        </motion.div>
      </div>

      {/* Decorative element in corner */}
      <div className="absolute top-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 9L13 3L5 9V21H21V9Z"
            stroke="#FACA15"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Zoom Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3h-6"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

export default CardGallery;
