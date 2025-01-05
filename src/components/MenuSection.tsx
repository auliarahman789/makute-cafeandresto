"use client"
import React, { useState } from "react";
import CardMenu from "./CardMenu";


function MenuSection() {
    const [hoveredImage, setHoveredImage] = useState<any>();
    return (
        <section className=" md:py-2">

            <div>

                <div className="px-[4%] py-[4%] w-full flex-col   items-center text-start">

                    <div className="flex flex-wrap justify-center items-center">
                        <div className=" flex flex-col justify-center items-center ">
                            <h1 className="text-[24px] text-yellow-300  font-extrabold">
                                MENU
                            </h1>
                            <h1 className="text-[34px] text-black  font-extrabold">
                                MAK UTE CAFE & RESTO
                            </h1>
                            <div className="w-[80%] h-3 bg-yellow-300  font-extrabold">

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row px-[4%] py-[4%] justify-center gap-6">
                        <div className={` ${hoveredImage === 0 ? 'grayscale-0' : 'grayscale'
                            }`}
                            onMouseEnter={() => setHoveredImage(0)}
                            onMouseLeave={() => setHoveredImage(null)} >

                            <CardMenu nama={'Kopi'} foto={'/cardMenu1.jpg'} />
                        </div>
                        <div className={` ${hoveredImage === 1 ? 'grayscale-0' : 'grayscale'
                            }`}
                            onMouseEnter={() => setHoveredImage(1)}
                            onMouseLeave={() => setHoveredImage(null)} >

                            <CardMenu nama={'Kopi'} foto={'/cardMenu2.jpg'} />
                        </div>
                        <div className={` ${hoveredImage === 2 ? 'grayscale-0' : 'grayscale'
                            }`}
                            onMouseEnter={() => setHoveredImage(2)}
                            onMouseLeave={() => setHoveredImage(null)} >

                            <CardMenu nama={'Chicken'} foto={'/cardMenu3.jpg'} />
                        </div>
                        <div className={` ${hoveredImage === 3 ? 'grayscale-0' : 'grayscale'
                            }`}
                            onMouseEnter={() => setHoveredImage(3)}
                            onMouseLeave={() => setHoveredImage(null)} >

                            <CardMenu nama={'Kopi Durin'} foto={'/cardMenu4.jpg'} />
                        </div>
                        <div className={` ${hoveredImage === 4 ? 'grayscale-0' : 'grayscale'
                            }`}
                            onMouseEnter={() => setHoveredImage(4)}
                            onMouseLeave={() => setHoveredImage(null)} >

                            <CardMenu nama={'Makanan'} foto={'/cardMenu5.jpg'} />
                        </div>

                    </div>
                </div>

            </div>

        </section >
    );
}

export default MenuSection;
