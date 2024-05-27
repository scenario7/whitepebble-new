import React from 'react'
import { DM_Sans, Marcellus } from '@next/font/google'
import ServicesCard from './ServicesCard'
const marcellus = Marcellus({
    weight: '400',
    subsets: ['latin'],
  })
  const dm_sans = DM_Sans({
    subsets: ['latin'],
  })

  const services = [
    {
        title : 'Trademark Monitoring',
        description : 'Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus.',
        link : '',
        imageURL : 'https://plus.unsplash.com/premium_photo-1661600494728-0d95fb50f924?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title : 'Copyright Registration',
        description : 'Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus.',
        link : '',
        imageURL : 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title : 'Agreement Settlement',
        description : 'Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus.',
        link : '',
        imageURL : 'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ]

const Services = () => {
  return (
    <div className='flex justify-between px-5 md:px-10 lg:px-10 items-center' id='services'>
        <div className='flex text-[#171717] gap-5 text-2xl font-black'>
            <div className='flex flex-col'>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>
            <div className='flex flex-col'>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>
        </div>
        <div className='flex flex-col items-center lg:py-20 pb-10'>
            <h1 className={`${dm_sans.className} text-lg md:text-3xl lg:text-3xl text-center font-bold text-orange-900`}>OUR AREAS OF EXPERTISE</h1>
            <div className={`${dm_sans.className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-14`}>
                {services.map((service) => {
                    return(
                        <ServicesCard params={service} key={service.title}/>
                    )
                })}
            </div>
        </div>
        <div className='flex text-[#171717] gap-5 text-2xl font-black'>
            <div className='flex flex-col'>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>
            <div className='flex flex-col'>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>
        </div>
    </div>
  )
}

export default Services