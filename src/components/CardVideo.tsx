"use client";
import React from "react";

function CardVideo({
  vid,
  thumb,
  desc,
}: {
  vid: string;
  thumb: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-lg">
      {/* Video thumbnail with fixed aspect ratio */}
      <div className="relative flex-1 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          poster={thumb}
          controls
          preload="none"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Fixed height caption */}
      <div className="p-4 bg-white border-t-2 border-yellow-400">
        <h2 className="text-center text-xl font-bold">{desc}</h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2"></div>
      </div>
    </div>
  );
}

export default CardVideo;
