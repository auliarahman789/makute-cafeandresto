import React from 'react'

function CardVideo({ vid, thumb, desc }: { vid: string, thumb: string, desc: any }) {
    return (
        <>

            <div className='flex w-full flex-col justify-center items-center'>
                <video width="600" height="720" className="w-full" poster={thumb} controls preload="none">
                    <source src={vid} type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
                <h2 className="text-center text-black text-2xl pt-4">
                    {desc}
                </h2>
            </div>
        </>
    )
}

export default CardVideo
