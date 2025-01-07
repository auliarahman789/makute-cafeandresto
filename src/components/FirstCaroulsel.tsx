"use client";

import { Carousel } from "flowbite-react";
import CardVideo from "./CardVideo";

export function Component() {
    return (

        <div className="grid md:h-[600px] w-full h-screen  grid-cols-1 md:grid-cols-5 gap-3 ">
            <div className="col-span-3">
                <Carousel pauseOnHover>
                    <img src="kegiatan1.jpg" alt="..." />
                    <img src="kegiatan2.jpg" alt="..." />
                    <img src="kegiatan3.jpg" alt="..." />

                </Carousel>
            </div>
            <div className="flex  col-span-2 gap-4">
                <CardVideo vid={"/kegiatan1Vid.mp4"} thumb={"thumb3.png"} desc={'Grand Opening'} />
                <CardVideo vid={"/kegiatan2Vid.mp4"} thumb={"thumb4.png"} desc={'Grand Opening'} />

            </div>
        </div>

    );
}