import React from 'react'
import { Marcellus, DM_Sans, Inter_Tight } from '@next/font/google'
import companyLogo from '@/images/white-pebble-logo.png'
import Image from 'next/image'
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const marcellus = Marcellus({
    weight: '400',
    subsets: ['latin'],
  })
  const dm_sans = DM_Sans({
    weight: '400',
    subsets: ['latin'],
  })
  const inter = Inter_Tight({
    weight: '400',
    subsets: ['latin'],
  })


const CustomFooter = () => {
  return (
    <div className='bg-[#171717] flex flex-col md:flex-row lg:flex-row gap-5 items-center justify-between py-10 md:py-20 lg:py-20 px-10'>
        <div className='flex flex-col items-center md:items-start lg:items-start gap-1 text-center md:text-left lg:text-left'>
            <h1 className={`${marcellus.className} text-3xl text-[#c7c7c7]`}>WHITE PEBBLE LAW LLP</h1>
            <a className={`${dm_sans.className} text-sm text-[#c7c7c7]`}>+91 99999 99999</a>
            <a className={`${dm_sans.className} text-sm text-[#c7c7c7]`}>support@whitepebble.com</a>
            <a className={`${dm_sans.className} text-sm text-[#777777]`}>912, Techno IT Park, New, Eksar, Borivali (West)</a>
            <a className={`${dm_sans.className} text-sm text-[#777777]`}>Mumbai - 400091</a>
        </div>
        <div className='flex gap-3 items-center'>
            <FaInstagram className='h-8 w-8'/>
            <FaLinkedinIn className='h-8 w-8'/>
            <FaFacebookF className='h-6 w-6'/>
        </div>
    </div>
  )
}

export default CustomFooter