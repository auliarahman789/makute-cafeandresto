import React from 'react'

function CardMenu({ nama, foto }: { nama: string, foto: string }) {
    return (
        <>

            <div className='grid grid-cols-2  justify-between items-center w-full border-2 rounded-md border-stone-400 shadow-xl'>
                <img className="w-[180px] h-[275px] rounded-l-md hover:scale-110 duration-150" src={foto}></img>
                <h2 className="text-center text-black text-xl font-bold uppercase ml-[4%] ">
                    {nama}
                </h2>
            </div>
        </>
    )
}

export default CardMenu
