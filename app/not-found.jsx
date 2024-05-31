import CustomFooter from '@/components/CustomFooter'
import NavBar from '@/components/NavBar'
import React from 'react'
import errorImage from '../images/404-image.png'
import Image from 'next/image'
import { Marcellus, DM_Sans, Inter_Tight } from '@next/font/google'


const marcellus = Marcellus({
    weight : '400',
    subsets: ['latin'],
})
const dm_sans = DM_Sans({
    subsets: ['latin'],
})
const inter = Inter_Tight({
    subsets: ['latin'],
})

const NotFound = () => {

  return (
    <div className='flex flex-col min-h-screen'>
        <NavBar/>
        <div className='bg-gradient-to-b from-[#ffffff] to-[#ffefe8] px-5 py-5 flex flex-col md:flex-row lg:flex-row items-center justify-evenly'>
            <Image src={errorImage} className='h-96 object-contain w-auto' alt='404 error image'/>
            <div className='flex flex-col gap-5'>
                <h1 className={`${dm_sans.className} text-black font-semibold text-center text-2xl md:text-3xl lg:text-3xl`}>Uh Oh, that page does not exist</h1>
                <div className='flex justify-evenly'>
                    <a href="/">
                    <button className="lg:text-lg text-white hover:before:bg-redborder-orange-500 relative p-2 lg:h-[50px] lg:w-40 overflow-hidden border border-orange-500 bg-orange-500 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-orange-500 hover:shadow-[#FFEFE8] hover:before:left-0 hover:before:w-full"><span className="relative z-10">Homepage</span></button>
                    </a>
                </div>
            </div>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default NotFound