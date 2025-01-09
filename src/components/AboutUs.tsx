import React from "react";
import Image from "next/image";
function AboutUs() {

    return (
        <section className=" md:py-2">

            <div>

                <div className="px-[4%] py-[4%] w-full flex-col   items-center text-start">

                    <div className="flex flex-wrap justify-center items-center">
                        <div className=" flex flex-col justify-center text-center items-center ">
                            <h1 className="text-[24px] text-yellow-300  font-medium">
                                ABOUT
                            </h1>
                            <h1 className="text-[34px] text-black  font-extrabold">
                                TENTANG MAK UTE CAFE & RESTO
                            </h1>
                            <div className="w-[80%] h-3 bg-yellow-300  font-extrabold">

                            </div>
                        </div>
                    </div>
                    <div className="pt-[4%] flex justify-between   w-full items-center ">
                        <Image
                            src={"/about.png"}
                            alt={"Gambar Lokasi Kerupuk Cap Keluarga"}
                            height={300}
                            width={400}
                            className="rounded-sm "
                        />
                        <p className="text-medium text-black text-center w-[50%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse a lorem et diam rhoncus mattis. Ut commodo porta ipsum et commodo.
                            Nam elementum at ex ut elementum.
                        </p>
                    </div>
                    <div className="pb-[4%] flex justify-between   w-full items-center ">
                        <p className="text-medium text-black text-center w-[50%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse a lorem et diam rhoncus mattis. Ut commodo porta ipsum et commodo.
                            Nam elementum at ex ut elementum.
                        </p>
                        <Image
                            src={"/about2.png"}
                            alt={"Gambar Lokasi Kerupuk Cap Keluarga"}
                            height={300}
                            width={400}
                            className="rounded-sm justify-end flex items-end"
                        />
                    </div>
                </div>

            </div>

        </section >
    );
}

export default AboutUs;
