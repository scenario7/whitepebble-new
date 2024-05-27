import React from 'react'
import { DM_Sans, Marcellus } from '@next/font/google'

const marcellus = Marcellus({
    weight: '400',
    subsets: ['latin'],
  })
const dm_sans = DM_Sans({
    subsets: ['latin'],
  })

const ServicesCard = ({ params }) => {
  return (
    <div 
      className='relative h-80 w-56 transition-all hover:-t' 
      style={{
        backgroundImage: `url(${params.imageURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='relative p-5 flex flex-col gap-5'>
            <h1 className={`${marcellus.className} text-white text-xl`}>{params.title}</h1>
            <p className={`${dm_sans.className} text-white`}>{params.description}</p>
        </div>
        <button className='absolute right-0 bottom-0 bg-orange-500 h-10 w-10 hover:h-14 hover:w-14 transition-all ease-in-out duration-300 items-center flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
        </button>
    </div>
  )
}

export default ServicesCard
