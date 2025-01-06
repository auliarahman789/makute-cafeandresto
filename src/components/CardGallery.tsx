import React from 'react'

function CardGallery({ foto }: { foto: string }) {
    return (
        <>

            <div className='flex w-full flex-col justify-center items-center'>
                <img className="w-[220px] h-[275px] rounded-md hover:scale-110 duration-150" src={foto}></img>

            </div>
        </>
    )
}

export default CardGallery
