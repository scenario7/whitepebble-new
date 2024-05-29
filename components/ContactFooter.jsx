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

const ContactFooter = () => {
  return (
    <div className='py-20 px-10 flex flex-col gap-5 items-center bg-[#ffefe8]'>
        <h1 className={`${dm_sans.className} text-[#171717] text-4xl font-semibold`}>Get in touch <span className=''>now!</span></h1>
        <a href="/contact">
            <button className="lg:text-lg text-white hover:before:bg-redborder-orange-500 relative p-2 lg:h-[50px] lg:w-40 overflow-hidden border border-orange-500 bg-orange-500 text-white-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-orange-500 hover:shadow-[#FFEFE8] hover:before:left-0 hover:before:w-full"><span className="relative z-10">Contact Us</span></button>
            </a>
    </div>
  )
}

export default ContactFooter