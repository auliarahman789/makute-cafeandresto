import React from 'react'

function CardMenu({ nama, foto }: { nama: string, foto: string }) {
    return (
        <>

            <div className='flex w-full flex-col justify-center items-center'>
                <img className="w-[180px] h-[275px] rounded-md hover:scale-110 duration-150" src={foto}></img>
                <h2 className="text-center text-black text-2xl font-bold pt-4">
                    {nama}
                </h2>
            </div>
        </>
    )
}

export default CardMenu
