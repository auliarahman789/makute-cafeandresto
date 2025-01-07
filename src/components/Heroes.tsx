'use client'
import React, { useEffect, useState } from "react";

function Heroes() {

    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };
    useEffect(() => {

        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="h-screen w-full relative overflow-hidden  ">
            {!isMobile && (
                <>
                    <div
                        className=" absolute inset-0 bg-cover bg-center "
                        style={{
                            backgroundImage: "url('/cover10.png')",
                            backgroundPosition: "bottom",
                            backgroundSize: "cover",
                        }}
                    ></div>
                </>
            )}
            {isMobile && (
                <>
                    <div
                        className=" absolute inset-0 bg-cover bg-center "
                        style={{
                            backgroundImage: "url('/coverMobile.png')",
                            backgroundPosition: "bottom",
                            backgroundSize: "cover",
                        }}
                    ></div>
                </>
            )}
            <div
                className="w-full h-full absolute bg-black bg-opacity-25">
                <div className="w-full h-screen flex flex-col">
                    <div className=" 2xl:px-[10%] h-screen inset-0 flex md:flex-row flex-col items-end w-full px-[4%] md:py-0 py-[50%] ">
                        <div className="text-white w-full flex flex-col items-start  text-start md:text-[66px] text-[36px] font-bold md:leading-[65px] leading-[28px] md:mb-0 mb-5">
                            <h1 className="light-text text-white  uppercase md:block hidden">
                                Mak Ute Cafe & Resto
                            </h1>
                        </div>

                    </div>

                    <div className="w-full pt-24 h-[20%] flex flex-col items-center">
                        <a href="#kegiatan">
                            <svg
                                className="  duration-150"
                                width="48"
                                height="28"
                                viewBox="0 0 48 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M-6.48499e-05 -2.09815e-06L24.5903 9.14421L48 0.439014L24.1936 27.4308L-6.48499e-05 -2.09815e-06Z"
                                    fill="#faca15" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heroes;
