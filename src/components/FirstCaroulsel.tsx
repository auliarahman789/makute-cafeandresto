"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import CardVideo from "./CardVideo";

export default function GallerySection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid h-auto  grid-cols-1 md:grid-cols-5 gap-6">
          {/* Carousel section */}
          <div className="col-span-full md:col-span-3  md:h-full rounded-lg overflow-hidden shadow-xl">
            <Carousel
              pauseOnHover
              slideInterval={5000}
              className="h-full rounded-lg"
            >
              {["kegiatan1.jpg", "kegiatan2.jpg", "kegiatan3.jpg"].map(
                (img, index) => (
                  <div key={index} className="relative h-full w-full">
                    <img
                      src={img}
                      alt={`Gallery image ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                )
              )}
            </Carousel>
          </div>

          {/* Videos section */}
          <div className="col-span-full md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 h-auto">
            <div className=" sm:h-full">
              <CardVideo
                vid="/kegiatan1Vid.mp4"
                thumb="thumb3.png"
                desc="Grand Opening"
              />
            </div>
            <div className=" sm:h-full">
              <CardVideo
                vid="/kegiatan2Vid.mp4"
                thumb="thumb4.png"
                desc="Special Event"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
