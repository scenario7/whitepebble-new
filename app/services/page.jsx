import React from 'react'
import NavBar from '@/components/NavBar'
import { Marcellus, DM_Sans, Inter_Tight } from '@next/font/google'
import CustomFooter from '@/components/CustomFooter'


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
        <img src="https://images.unsplash.com/photo-1625419693247-fe1712a18a46?q=80&w=3010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[500px] w-[500px] object-cover'/>
        <div className='flex flex-col lg:text-left text-center md:text-left lg:items-start items-center md:items-start gap-10 px-10 md:px-0 lg:px-0 py-5 md:py-0 lg:py-0'>
            <h1 className={`${dm_sans.className} text-2xl font-medium text-[#171717]`}>Trademark Monitoring</h1>
            <h1 className={`${dm_sans.className} text-xl font-medium text-[#585858] `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque id diam vel. Varius vel pharetra vel turpis nunc eget. Vestibulum lectus mauris ultrices eros in cursus turpis. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Ut porttitor leo a diam sollicitudin tempor. Elementum facilisis leo vel fringilla est ullamcorper eget. Lorem ipsum dolor sit amet consectetur. Diam maecenas sed enim ut sem viverra aliquet eget.</h1>
        </div>
      </div>
      <div className='flex flex-col md:flex-row-reverse lg:flex-row-reverse gap-10 items-center w-full lg:pl-20 md:pl-20'>
        <img src="https://images.unsplash.com/photo-1617549505261-eeaed53d514e?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1617549505261-eeaed53d514e?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[500px] w-[500px] object-cover'/>
        <div className='flex flex-col lg:text-right text-center md:text-right lg:items-end items-center md:items-end gap-10 px-10 md:px-0 lg:px-0 py-5 md:py-0 lg:py-0'>
            <h1 className={`${dm_sans.className} text-2xl font-medium text-[#171717]`}>Copyright Registration</h1>
            <h1 className={`${dm_sans.className} text-xl font-medium text-[#585858] `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque id diam vel. Varius vel pharetra vel turpis nunc eget. Vestibulum lectus mauris ultrices eros in cursus turpis. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Ut porttitor leo a diam sollicitudin tempor. Elementum facilisis leo vel fringilla est ullamcorper eget. Lorem ipsum dolor sit amet consectetur. Diam maecenas sed enim ut sem viverra aliquet eget.</h1>
        </div>
      </div>
      <div className='flex flex-col md:flex-row lg:flex-row gap-10 items-center w-full lg:pr-20 md:pr-20'>
        <img src="https://images.unsplash.com/photo-1595069474137-c52abdfaaad6?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[500px] w-[500px] object-cover'/>
        <div className='flex flex-col lg:text-left text-center md:text-left lg:items-start items-center md:items-start gap-10 px-10 md:px-0 lg:px-0 py-5 md:py-0 lg:py-0'>
            <h1 className={`${dm_sans.className} text-2xl font-medium text-[#171717]`}>Digital Protection</h1>
            <h1 className={`${dm_sans.className} text-xl font-medium text-[#585858] `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque id diam vel. Varius vel pharetra vel turpis nunc eget. Vestibulum lectus mauris ultrices eros in cursus turpis. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Ut porttitor leo a diam sollicitudin tempor. Elementum facilisis leo vel fringilla est ullamcorper eget. Lorem ipsum dolor sit amet consectetur. Diam maecenas sed enim ut sem viverra aliquet eget.</h1>
        </div>
      </div>
      <div className='flex flex-col md:flex-row-reverse lg:flex-row-reverse gap-10 items-center w-full lg:pl-20 md:pl-20'>
        <img src="https://images.unsplash.com/photo-1529612700005-e35377bf1415?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[500px] w-[500px] object-cover'/>
        <div className='flex flex-col lg:text-right text-center md:text-right lg:items-end items-center md:items-end gap-10 px-10 md:px-0 lg:px-0 py-5 md:py-0 lg:py-0'>
            <h1 className={`${dm_sans.className} text-2xl font-medium text-[#171717]`}>Agreement Settlement</h1>
            <h1 className={`${dm_sans.className} text-xl font-medium text-[#585858] `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque id diam vel. Varius vel pharetra vel turpis nunc eget. Vestibulum lectus mauris ultrices eros in cursus turpis. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Ut porttitor leo a diam sollicitudin tempor. Elementum facilisis leo vel fringilla est ullamcorper eget. Lorem ipsum dolor sit amet consectetur. Diam maecenas sed enim ut sem viverra aliquet eget.</h1>
        </div>
      </div>
    </div>
    <CustomFooter/>
    </div>
  )
}

export default Services