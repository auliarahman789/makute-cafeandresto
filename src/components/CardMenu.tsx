import React from 'react'

function CardMenu({ nama, foto, desc }: { nama: string, foto: string, desc: string }) {
    return (
        <>

            <div className='grid grid-cols-2  justify-between  items-center w-full border-2 rounded-md border-stone-400 shadow-xl pr-[2%]'>
                <img className="w-[180px] h-[275px] rounded-l-md hover:scale-110 duration-150" src={foto}></img>
                <div className='flex flex-col gap-4 px-[1%]'>
                    <h2 className="text-center text-black text-xl font-bold uppercase  ">
                        {nama}
                    </h2>
                    <h3 className="text-center text-black text-medium font-medium  line-clamp-6">
                        {desc}
                    </h3>
                </div>
            </div>
        </>
    )
}

export default CardMenu
