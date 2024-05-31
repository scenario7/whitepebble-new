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
    <footer className='flex flex-col gap-0'>
    <div className='bg-[#171717] flex flex-col md:flex-row lg:flex-row gap-5 items-center justify-between py-10 md:py-20 lg:py-20 px-10'>
        <div className='flex flex-col items-center md:items-start lg:items-start gap-1 text-center md:text-left lg:text-left'>
            <h3 className={`${marcellus.className} text-3xl text-[#c7c7c7]`}>WHITE PEBBLE LAW LLP</h3>
            <a href='tel:+91 75069 67388' className={`${dm_sans.className} text-sm text-[#c7c7c7]`}>+91 75069 67388</a>
            <a href='mailto:bijal@whitepebblelaw.com' className={`${dm_sans.className} text-sm text-[#c7c7c7]`}>bijal@whitepebblelaw.com</a>
            <p className={`${dm_sans.className} text-sm text-[#777777]`}>912, Techno IT Park, New, Eksar, Borivali (West)</p>
            <p className={`${dm_sans.className} text-sm text-[#777777]`}>Mumbai - 400091</p>
        </div>
        <div className='flex gap-3 items-center '>
            <a href='https://instagram.com/whitepebblelaw' target='_blank'><FaInstagram className='h-8 w-8 text-[#808080] hover:text-white transition-colors'/></a>
            <a href='https://www.linkedin.com/company/white-pebble-law-llp' target='_blank'><FaLinkedinIn className='h-8 w-8 text-[#808080] hover:text-white transition-colors'/></a>
            <a href='https://www.facebook.com/whitepebblelaw/' target='_blank'><FaFacebookF className='h-6 w-6 text-[#808080] hover:text-white transition-colors'/></a>
        </div>
    </div>
    <div className='bg-black text-center'>
      <p className={`${marcellus.className} text-xs md:text-sm lg:text-sm text-stone-500 py-2`}>© 2024 White Pebble Law LLP | All Rights Reserved | Designed and Developed by <span className='underline hover:text-white transition-all'><a href='https://kevinthomas.in' target='_blank'>Kevin Thomas</a></span></p>
    </div>
    </footer>
  )
}

export default CustomFooter