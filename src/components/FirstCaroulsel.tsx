"use client";

import { Carousel } from "flowbite-react";

export function Component() {
    return (

        <div className="grid md:h-[600px] w-full h-screen  grid-cols-1 md:grid-cols-3 gap-3 ">
            <Carousel pauseOnHover>
                <img src="kegiatan1.jpg" alt="..." />
                <img src="kegiatan2.jpg" alt="..." />
                <img src="kegiatan3.jpg" alt="..." />

            </Carousel>
            <div className="flex gap-2">
                <video width="400" height="720" className="w-[70%]" poster="thumb3.png" controls preload="none">
                    <source src="/kegiatan1Vid.mp4" type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
                <video width="400" height="720" className="w-[70%]" poster="thumb4.png" controls preload="none">
                    <source src="/kegiatan2Vid.mp4" type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

    );
}