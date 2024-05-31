import React from 'react'
import NavBar from '@/components/NavBar'
import { Marcellus, DM_Sans, Inter_Tight } from '@next/font/google'
import CustomFooter from '@/components/CustomFooter'
import ContactFooter from '@/components/ContactFooter'


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

const Services = () => {
  return (
    <div className='flex flex-col'>
    <NavBar />
    <div className='flex flex-col justify-start items-center  bg-gradient-to-b from-white to-[#FEEFe8] py-10'>
      <h1 className={`${marcellus.className} text-4xl md:text-6xl lg:text-6xl text-[#171717] pb-20`}>OUR <span className='text-orange-500'>SERVICES</span></h1>
      <div className='flex flex-col md:flex-row lg:flex-row gap-10 items-center w-full lg:pr-20 md:pr-20'>
        <img src="https://images.unsplash.com/photo-1625419693247-fe1712a18a46?q=80&w=3010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of trademarked logos" className='h-[350px] w-[350px] object-cover rounded-none md:rounded-r-full lg:rounded-r-full'/>
        <div className='flex flex-col lg:text-left text-center md:text-left lg:items-start items-center md:items-start gap-10 px-10 md:px-0 lg:px-0 py-5 md:py-0 lg:py-0'>
            <h1 className={`${marcellus.className} text-2xl md:text-3xl lg:text-3xl font-medium text-[#171717]`}>Trademark Registration</h1>
            <h1 className={`${dm_sans.className} text-xl font-medium text-[#585858] `}>Trademark registration secures your right to use the mark with your goods or services. The process provides strong protection against infringement, enabling you to take legal action against unauthorized use. Once your application is successful, the status of your trademark remains valid for ten years from the filing date, with the option to renew indefinitely.</h1>
            <a href='https://ipindia.gov.in/trade-marks.htm'>
            <button className='bg-[#171717] text-orange-500 hover:bg-orange-500 hover:text-black transition-all ease-in-out py-2 px-3'>Official Website<span className={`${inter.className}`}>-&gt;</span></button>
            </a>
        </div>
      </div>
      <div className='flex flex-col md:flex-row-reverse lg:flex-row-reverse gap-10 items-center w-full lg:pl-20 md:pl-20'>
        <img src="https://images.unsplash.com/photo-1617549505261-eeaed53d514e?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1617549505261-eeaed53d514e?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of brand logos" className='h-[350px] w-[350px] object-cover rounded-none md:rounded-l-full lg:rounded-l-full'/>
        <div className='flex flex-col lg:text-right text-center md:text-right lg:items-end items-center md:items-end gap-10 px-10 md:px-0 lg:px-0 py-5 md:py-0 lg:py-0'>
            <h1 className={`${marcellus.className} text-2xl md:text-3xl lg:text-3xl font-medium text-[#171717]`}>Copyright Registration</h1>
            <h1 className={`${dm_sans.className} text-xl font-medium text-[#585858] `}>Copyright is a legal entitlement granted to the owner of intellectual property, allowing them to duplicate or reproduce a creative work. Essentially, it signifies that when someone produces intellectual property, they gain ownership rights. This means only the creator or those they authorize can reproduce or use that work. Copyright law grants original creators exclusive rights to utilize or copy it for a designated period. Over time, through a specific process, the copyrighted work may eventually enter the public domain upon application.</h1>
            <a href='https://copyright.gov.in'>
            <button className='bg-[#171717] text-orange-500 hover:bg-orange-500 hover:text-black transition-all ease-in-out py-2 px-3'>Official Website<span className={`${inter.className}`}>-&gt;</span></button>
            </a>
        </div>
      </div>
      <div className='flex flex-col md:flex-row lg:flex-row gap-10 items-center w-full lg:pr-20 md:pr-20'>
        <img src="https://images.unsplash.com/photo-1638537690617-ebc561143de0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of people designing something" className='h-[350px] w-[350px] object-cover rounded-none md:rounded-r-full lg:rounded-r-full'/>
        <div className='flex flex-col lg:text-left text-center md:text-left lg:items-start items-center md:items-start gap-10 px-10 md:px-0 lg:px-0 py-5 md:py-0 lg:py-0'>
            <h1 className={`${marcellus.className} text-2xl md:text-3xl lg:text-3xl font-medium text-[#171717]`}>Design Registration</h1>
            <h1 className={`${dm_sans.className} text-xl font-medium text-[#585858] `}>Design registration protects newly created designs applied to articles made through industrial processes from counterfeiting. This grants the owner the right to use the design for ten years, extendable by five years. Understanding its importance helps creators safeguard their intellectual property. This article outlines the design registration process in India, helping you protect your unique designs.</h1>
            <a href='https://www.ipindia.gov.in/designs.htm'>
            <button className='bg-[#171717] text-orange-500 hover:bg-orange-500 hover:text-black transition-all ease-in-out py-2 px-3'>Official Website<span className={`${inter.className}`}>-&gt;</span></button>
            </a>
        </div>
      </div>
      <div className='flex flex-col md:flex-row-reverse lg:flex-row-reverse gap-10 items-center w-full lg:pl-20 md:pl-20'>
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFncmVlbWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Image of people shaking hands in agreement" className='h-[350px] w-[350px] object-cover rounded-none md:rounded-l-full lg:rounded-l-full'/>
        <div className='flex flex-col lg:text-right text-center md:text-right lg:items-end items-center md:items-end gap-10 px-10 md:px-0 lg:px-0 py-5 md:py-0 lg:py-0'>
            <h1 className={`${marcellus.className} text-2xl md:text-3xl lg:text-3xl font-medium text-[#171717]`}>Co-Existence Agreements</h1>
            <h1 className={`${dm_sans.className} text-xl font-medium text-[#585858] `}>A coexistence agreement is a pact between a trademark owner and another entity, allowing the latter to use or register a similar trademark for specific goods or services. It provides more protection than a simple consent agreement, often outlining limits on where, how, and when the marks can be used. This agreement is typically a less combative form of settlement, imposing few or no obligations or concessions.</h1>
            <a href='https://ipindia.gov.in/trade-marks.htm'>
            <button className='bg-[#171717] text-orange-500 hover:bg-orange-500 hover:text-black transition-all ease-in-out py-2 px-3'>Official Website<span className={`${inter.className}`}>-&gt;</span></button>
            </a>
        </div>
      </div>
    </div>
    <ContactFooter/>
    <CustomFooter/>
    </div>
  )
}

export default Services