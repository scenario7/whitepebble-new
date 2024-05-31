import React from 'react'
import { Marcellus, DM_Sans } from '@next/font/google'

const marcellus = Marcellus({
    weight: '400',
    subsets: ['latin'],
  })
const dm_sans = DM_Sans({
    subsets: ['latin'],
  })

const Statistics = () => {
  return (
    <div className='flex justify-between items-center px-5 transition ease-in-out duration-1000 overflow-hidden'>
    <div className='relative flex -translate-x-20 lg:-translate-x-36 translate-y-1/4 pl-5'>
        <div className='z-20 lg:h-36 lg:w-36 h-14 w-14 bg-orange-500 -rotate-12' style={{'left' : '-50%'}}></div>
        <div className='z-10 lg:h-36 lg:w-36 h-14 w-14 bg-[#FFAC89] -translate-x-3/4 translate-y-5 -rotate-12'></div>
    </div>
    <div className='py-20'>
        <h1 className={`${dm_sans.className} text-lg md:text-3xl lg:text-3xl text-center font-bold text-orange-900`}>WHY US?</h1>
        <div className='relative flex justify-center items-center py-16 md:py-36 lg:py-36 px-10'>
            <div className={`${marcellus.className} text-6xl lg:text-[200px] absolute z-10 flex items-center justify-center`}>
                <h1 className='bg-clip-text bg-gradient-to-t from-[#ffefe8] to-[#ffd3c1] text-transparent'>STATISTICS</h1>
                <div className={`absolute z-20 text-black flex text-3xl lg:text-8xl gap-3 lg:gap-20 mt-11 lg:mt-20 text-center`}>
                    <div className='flex flex-col items-center'>
                        <h2>50+</h2>
                        <p className={`${dm_sans.className} text-sm lg:text-lg font-semibold lg:font-extrabold md:font-extrabold text-orange-900 md:w-1/2 lg:w-1/2 text-center`}>Trademarks Registered</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2>30+</h2>
                        <p className={`${dm_sans.className} text-sm lg:text-lg font-semibold lg:font-extrabold md:font-extrabold text-orange-900 md:w-1/2 lg:w-1/2 text-center`}>Copyrights Registered</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2>17+</h2>
                        <p className={`${dm_sans.className} text-sm lg:text-lg font-semibold lg:font-extrabold md:font-extrabold text-orange-900 md:w-1/2 lg:w-1/2 text-center`}>International Trademarks</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='relative flex translate-x-20 lg:translate-x-36 translate-y-1/4 pr-5'>
        <div className='z-20 lg:h-36 lg:w-36 h-14 w-14 bg-orange-500 translate-x-3/4 -rotate-12' style={{'left' : '-50%'}}></div>
        <div className='z-10 lg:h-36 lg:w-36 h-14 w-14 bg-[#FFAC89] translate-y-5 -rotate-12'></div>
    </div>
    </div>
  )
}

export default Statistics
