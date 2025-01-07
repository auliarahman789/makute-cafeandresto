
import React from "react";
function Testimoni() {


    return (
        <section className=" md:py-2">
            <div>
                <div className="px-[4%] py-[4%] w-full flex-col  items-center text-start">

                    <div className="flex flex-wrap justify-center items-center">
                        <div className=" flex flex-col justify-center text-center items-center ">
                            <h1 className="text-[24px] text-yellow-300  font-medium">
                                TESTIMONY
                            </h1>
                            <h1 className="text-[34px] text-black  font-extrabold">
                                MAK UTE CAFE & RESTO
                            </h1>
                            <div className="w-[80%] h-3 bg-yellow-300  font-extrabold">

                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex flex-col gap-10 pt-10 justify-center">
                        <video width="400" height="720" poster="thumbnail1.png" controls preload="none">
                            <source src="/makUteOpening.mp4" type="video/mp4" />
                            <track
                                src="/path/to/captions.vtt"
                                kind="subtitles"
                                srcLang="en"
                                label="English"
                            />
                            Your browser does not support the video tag.
                        </video>
                        <video width="400" height="720" poster="thumbnail2.png" controls preload="none">
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
                </div>

            </div>

        </section >
    );
}

export default Testimoni;
