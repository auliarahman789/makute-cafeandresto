"use client";
import React from "react";

function Testimoni() {
  return (
    <section
      className="w-full py-16 bg-white/90 backdrop-blur-sm"
      id="testimoni"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-xl md:text-2xl text-yellow-400 font-medium">
            TESTIMONY
          </h3>
          <h2 className="text-3xl md:text-4xl text-black font-bold mt-2">
            MAK UTE CAFE & RESTO
          </h2>
          <div className="w-24 h-2 bg-yellow-400 mt-3"></div>
        </div>

        {/* Video Container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* First Video */}
          <div className="w-full md:w-1/2 lg:w-2/5 overflow-hidden rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-video w-full">
              <video
                className="w-full h-full object-cover"
                poster="/thumbnail1.png"
                controls
                preload="none"
              >
                <source src="/makUteOpening.mp4" type="video/mp4" />
                <track
                  src="/path/to/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg text-center">Grand Opening</h3>
              <div className="w-12 h-1 bg-yellow-400 mx-auto my-2"></div>
              <p className="text-gray-600 text-center text-sm">
                Experience the excitement of our grand opening event
              </p>
            </div>
          </div>

          {/* Second Video */}
          <div className="w-full md:w-1/2 lg:w-2/5 overflow-hidden rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-video w-full">
              <video
                className="w-full h-full object-cover"
                poster="/thumbnail2.png"
                controls
                preload="none"
              >
                <source src="/revTestimoni MakUte.mp4" type="video/mp4" />
                <track
                  src="/path/to/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg text-center">
                Customer Testimonials
              </h3>
              <div className="w-12 h-1 bg-yellow-400 mx-auto my-2"></div>
              <p className="text-gray-600 text-center text-sm">
                Hear what our customers have to say about us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimoni;
