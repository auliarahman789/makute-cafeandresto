"use client";

import { Carousel } from "flowbite-react";

export function Component() {
    return (

        <div className="grid  md:h-[500px] h-screen grid-cols-1 md:grid-cols-2 gap-4 ">
            <Carousel pauseOnHover>
                <img src="kegiatan1.jpg" alt="..." />
                <img src="kegiatan2.jpg" alt="..." />
                <img src="kegiatan3.jpg" alt="..." />

            </Carousel>
            <Carousel pauseOnHover>
                <img src="menu1.jpg" alt="..." />
                <img src="menu2.jpg" alt="..." />
                <img src="menu3.jpg" alt="..." />
                <img src="menu4.jpg" alt="..." />
            </Carousel>
        </div>
    );
}