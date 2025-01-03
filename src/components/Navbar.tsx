"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

function Navbar() {
    const [isSidebar, setIsSidebar] = useState(false);

    const [linkhover, setLinkhover] = useState(0);

    const [xbutton, setXbutton] = useState(false);
    const handleX = () => {
        // Set xbutton to true after 0.3 seconds
        setTimeout(() => {
            setXbutton(true);
        }, 300);
    };

    const [isMenuHover, setIsMenuHover] = useState(false);
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

    const OpenSidebar = () => {
        setIsSidebar(true);
        handleX();
    };

    const CloseSidebar = () => {
        setIsSidebar(false);
        setXbutton(false);
    };

    return (
        <>
            <div className="fixed w-full z-50  ">
                <div
                    className={`absolute w-full  bg-white  px-[4%] 2xl:px-[5%] flex justify-between items-center md:py-[1%] py-2 duration-200 
      ${scrollLocation >= 100
                            ? "bg-[#000820]"
                            : "md:bg-transparent bg-[#000820] bg-opacity-40"
                        }
      ${scrollLocation >= 380 && scrollDirection == "down"
                            ? "-translate-y-[90px]"
                            : ""
                        }
      `}
                >

                    <Image className=" text-black rounded-full" width={80} height={80} src={"/icon1.jpg"} alt={"logo mak ute"}>

                    </Image>
                    <div className="flex gap-12 light-text text-white text-2xl text-shadow-sm shadow-black font-semibold uppercase">
                        <div>
                            <a
                                className="hover:text-yellow-500 duration-200 "
                                href="/menu"
                            >
                                MENU
                            </a>
                        </div>
                        <div>
                            <a
                                className="hover:text-yellow-500 duration-200 "
                                href="https://wa.me/6282113469090"
                            >
                                CONTACT US
                            </a>
                        </div>

                    </div>
                </div>
            </div>


        </>
        // ) : (
        //   <></>
        // )}
        // </>
    );
}

export default Navbar;
