
import React, { } from "react";

function Heroes() {


    return (
        <div className="h-screen w-full relative overflow-hidden ">

            <div
                className="absolute inset-0 bg-cover bg-center "
                style={{
                    backgroundImage: "url('/cover5.png')",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            ></div>

            <div
                className="w-full h-full absolute">
                <div className="w-full h-screen flex flex-col">
                    <div className=" 2xl:px-[10%] h-screen inset-0 flex md:flex-row flex-col items-end w-full px-[4%] md:py-0 py-[50%] ">
                        <div className="text-white w-full flex flex-col items-start  text-start md:text-[66px] text-[36px] font-bold md:leading-[65px] leading-[28px] md:mb-0 mb-5">
                            <h1 className="light-text text-white [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)] uppercase ">
                                Mak Ute Cafe & Resto
                            </h1>
                        </div>

                    </div>

                    <div className="w-full pt-24 h-[20%] flex flex-col items-center">
                        <a href="#menu">
                            <svg
                                className="hover:fill-yellow-500 duration-150"
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
                                    fill="black" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heroes;
