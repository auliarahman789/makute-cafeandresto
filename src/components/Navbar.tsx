'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Navbar() {
    const [scrollLocation, setScrollLocation] = useState(0);
    const [prevScrollLocation, setPrevScrollLocation] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollLocation = window.scrollY;
            setScrollLocation(currentScrollLocation);

            // Check if scrollLocation is decreasing
            if (currentScrollLocation < prevScrollLocation) {
                // Scroll location is decreasing
                setScrollDirection("up");
            } else if (currentScrollLocation > prevScrollLocation) {
                // Scroll location is increasing
                setScrollDirection("down");
            }

            // Update prevScrollLocation with currentScrollLocation
            setPrevScrollLocation(currentScrollLocation);
        };

        // Add event listener when component mounts
        window.addEventListener("scroll", handleScroll);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollLocation]);
    return (
        <>
            <div className="fixed w-full z-50">
                <div
                    className={`absolute w-full border-b-2 border-stone-400 bg-white px-[10%] flex justify-between items-center  duration-200 
      ${scrollLocation >= 100
                            ? "bg-white"
                            : " bg-white "
                        }
      ${scrollLocation >= 380 && scrollDirection == "down"
                            ? "-translate-y-[90px]"
                            : ""
                        }
      `}
                >


                    <Image className=" text-black rounded-full" width={80} height={80} src={"/icon1.jpg"} alt={"logo mak ute"}>

                    </Image>
                    <div className="flex gap-12 light-text text-black text-2xl font-semibold uppercase">
                        <div>
                            <a
                                className="hover:text-yellow-300 duration-200 "
                                href="#menu"
                            >
                                MENU
                            </a>
                        </div>
                        <div>
                            <a
                                className="hover:text-yellow-300 duration-200 "
                                href="https://wa.me/6282113469090"
                            >
                                CONTACT US
                            </a>
                        </div>

                    </div>
                </div>
            </div >


        </>
        // ) : (
        //   <></>
        // )}
        // </>
    );
}

export default Navbar;
