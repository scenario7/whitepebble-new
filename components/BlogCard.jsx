import React from 'react'
import { Marcellus, DM_Sans, Inter_Tight } from '@next/font/google'

const marcellus = Marcellus({
    weight: '400',
    subsets: ['latin'],
})
const dm_sans = DM_Sans({
    subsets: ['latin'],
})
const inter = Inter_Tight({
    weight: '400',
    subsets: ['latin'],
})

const BlogCard = ({ params }) => {
  return (
    <div className='relative flex flex-col gap-2 items-center text-center'>
      <div className='relative'>
        <img src={params.imageURL} alt="" className='h-60 w-60 outline outline-4 outline-black'/>
        <button className='absolute right-0 bottom-0 bg-orange-500 h-10 w-10 hover:h-14 hover:w-14 transition-all ease-in-out duration-300 items-center flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
        </button>
      </div>
      <div className='pt-2'>
        <h1 className={`${dm_sans.className} text-black w-60 font-medium text-2xl`}>{params.title}</h1>
        <h2 className={`${dm_sans.className} text-[#808080] w-60`}>{params.date}</h2>
      </div>
    </div>
  )
}

export default BlogCard
