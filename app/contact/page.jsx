import CustomFooter from '@/components/CustomFooter'
import NavBar from '@/components/NavBar'
import React from 'react'
import { Marcellus, DM_Sans, Inter_Tight } from '@next/font/google'
import Image from 'next/image'


const marcellus = Marcellus({
    weight: '400',
    subsets: ['latin'],
})
const dm_sans = DM_Sans({
    subsets: ['latin'],
})
const inter = Inter_Tight({
    subsets: ['latin'],
})

const page = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <NavBar />
      <div className='flex flex-col justify-start items-center p-10  bg-gradient-to-b from-white to-[#FEEFe8]'>
        <h1 className={`${marcellus.className} text-4xl md:text-6xl lg:text-6xl text-[#171717]`}>CONTACT <span className='text-orange-500'>US</span></h1>
        <div className='flex flex-col md:flex-row lg:flex-row gap-8 py-20'>
          <div className='flex flex-col gap-8 text-[#171717]'>
            <div className='flex flex-col items-center md:items-start lg:items-start'>
              <h1 className={`${dm_sans.className} text-[#171717] font-bold`}>Name</h1>
              <input type="text" className='bg-[#e9e9e9] px-2 py-2' placeholder='John' />
            </div>
            <div className='flex flex-col items-center md:items-start lg:items-start'>
              <h1 className={`${dm_sans.className} text-[#171717] font-bold`}>Email ID</h1>
              <input type="email" className='bg-[#e9e9e9] px-2 py-2' placeholder='john@gmail.com' />
            </div>
            <div className='flex flex-col items-center md:items-start lg:items-start'>
              <h1 className={`${dm_sans.className} text-[#171717] font-bold`}>Phone Number</h1>
              <input type="tel" className='bg-[#e9e9e9] px-2 py-2' placeholder='+91 99999 99999' />
            </div>
          </div>
          <div className='flex flex-col items-center md:items-start lg:items-start mb-6'>
            <h1 className={`${dm_sans.className} text-[#171717] font-bold`}>Message</h1>
            <input className='bg-[#e9e9e9] px-2 py-2 text-[#171717] h-60' placeholder='' />
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  )
}

export default page
