"use client";
import React from "react";

function CardMenu({
  nama,
  foto,
  desc,
}: {
  nama: string;
  foto: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col h-[400px] overflow-hidden rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
      {/* Image - fixed height */}
      <div className="h-[200px] overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
          src={foto}
          alt={nama}
        />
      </div>

      {/* Content - fixed layout */}
      <div className="flex flex-col justify-between p-4 flex-1 bg-white">
        {/* Title */}
        <div>
          <h2 className="text-center text-2xl font-bold mb-2">{nama}</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-3"></div>

          {/* Description with fixed height */}
          <div className="h-[80px] overflow-hidden text-center">
            <p className="text-gray-700">{desc}</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-3 flex justify-center">
          <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-500 hover:text-black transition-colors duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardMenu;
