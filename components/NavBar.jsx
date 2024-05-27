import React from 'react'
import companyLogo from '@/images/white-pebble-logo.png'
import Image from 'next/image'
import { DM_Sans } from '@next/font/google'

const dm_sans = DM_Sans({
  weight: '400',
  subsets: ['latin'],
})

const NavBar = () => {
  return (
    <div className='flex lg:flex-row md:flex-row flex-col sticky items-center justify-between px-10 lg:pt-10 bg-white text-center'>
      <a href="/">
        <Image src={companyLogo} height={100} width={150} className='object-contain'/>
      </a>
        <div className={`${dm_sans.className} text-sm lg:text-md md:text-md text-black lg:px-10 px-5 flex gap-10`}>
            <a href='/'>HOME</a>
            <a href='/services'>SERVICES</a>
            <a href='/blog'>OUR BLOG</a>
        </div>
        <a href="/contact" className='hidden md:block lg:block'>
        <button class="hidden md:block lg:block text-lg text-white hover:before:bg-redborder-orange-500 relative h-[50px] w-40 overflow-hidden border border-white bg-orange-500 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-orange-500 hover:shadow-[#FFEFE8] hover:before:left-0 hover:before:w-full"><span class="relative z-10">Contact Us</span></button>
        </a>
    </div>
  )
}

export default NavBar