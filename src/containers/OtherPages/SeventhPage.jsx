import React from 'react'

const SeventhPage = () => {
  return (
    <div className='flex flex-col justify-center'>
        <div className='flex gap-2 flex-col md:flex-row '>
            <img src="public/assets/OtherPages/CallIcon.webp"></img>
            <div className='text-center'>
            <p className=' text-xl font-black uppercase'>CALL US NOW</p>
            <h3 className=' text-4xl font-semibold'>(786) 788-0295</h3>
            </div>
        </div>
        <h2 className=' uppercase text-5xl'>project portfolio</h2>
        <h5 className=' text-2xl text-center font-thin bg-black text-white py-2 px-1'>We are transparent with our quality of designs and on time submissions.
Take a look at some of our past work.
</h5>
    </div>
  )
}

export default SeventhPage