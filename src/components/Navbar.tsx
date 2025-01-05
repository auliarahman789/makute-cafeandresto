import React from "react";
import Image from "next/image";

function Navbar() {


    return (
        <>
            <div className="fixed w-full z-50   ">
                <div
                    className={`absolute w-full border-b-2 border-stone-400 bg-white px-[10%] flex justify-between items-center  duration-200 
     
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
            </div>


        </>
        // ) : (
        //   <></>
        // )}
        // </>
    );
}

export default Navbar;
