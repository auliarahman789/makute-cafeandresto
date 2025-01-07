import React from "react";
import Image from "next/image";
function Footer() {
    return (
        <>
            <div className="w-full flex flex-col bg-black bg-opacity-25 px-[4%] 2xl:px-[10%] md:pt-[2%] md:gap-3 pt-5">
                <div className="flex w-full justify-center">

                </div>
                <div className="flex w-full justify-center">
                    <div className="w-2/6 text-black ">
                        <p className="text-center leading-5 py-5 text-[20px] font-semibold">
                            SIJUK, INDONESIA
                        </p>
                    </div>
                </div>
                <div className="w-full h-[2px] bg-black"></div>
                <div className="grid md:grid-cols-5 py-[1%] md:gap-5 gap-5 grid-cols-2 items-center  text-[16px] text-black">
                    <Image className=" text-black rounded-full" width={150} height={150} src={"/icon1.jpg"} alt={"logo mak ute"}>
                    </Image>
                    <div className="md:flex flex flex-col  justify-start ">
                        <a
                            className="hover:text-yellow-300 duration-200 "
                            href="https://wa.me/6282113469090"
                        >
                            CONTACT US
                        </a>
                        <a
                            className="hover:text-yellow-300 duration-200 "
                            href="#menu"
                        >
                            OUR MENU
                        </a>
                        <a
                            className="hover:text-yellow-300 duration-200 "
                            href="https://maps.app.goo.gl/MLhuwBhEby4RBSck7"
                            target="_blank"
                        >
                            OUR OUTLET
                        </a>
                    </div>
                    <div></div>

                </div>
            </div>
            <div className="px-[4%] 2xl:px-[10%] py-2 md:py-0 flex flex-col items-center md:items-start text-[14px] text-[#F0FDFF] bg-black pb-[2%]">
                <div className="flex flex-col gap-2 md:pb-5">

                </div>
            </div>
            <div className="w-full flex justify-center  py-5 bg-black bg-opacity-25 text-black text-[14px] md:text-start text-center">
                <p>© 2025 MAK UTE CAFE & RESTO - ALL RIGHTS RESERVED</p>
            </div>
        </>
    );
}

export default Footer;
