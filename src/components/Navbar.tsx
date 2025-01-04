import React from "react";
import Image from "next/image";

function Navbar() {


    return (
        <>
            <div className="fixed w-full z-50  ">
                <div
                    className={`absolute w-full md:bg-transparent bg-[#000820] bg-opacity-40   px-[4%] 2xl:px-[5%] flex justify-between items-center md:py-[1%] py-2 duration-200 
     
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
