import NavBar from '@/components/NavBar'
import React from 'react'
import { Marcellus, DM_Sans, Inter_Tight } from '@next/font/google'
import CustomFooter from '@/components/CustomFooter'

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

const Page = ({ params }) => {
    return (
        <div className='min-h-screen'>
            <NavBar />
            <div className='flex flex-col justify-start items-center py-10 bg-gradient-to-b from-white to-[#FEEFe8]'>
                <div className='relative w-full h-96'>
                    <img className='w-full h-full object-cover absolute' src='https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Background Image' />
                    <div className='absolute inset-0 bg-black opacity-60'></div>
                    <div className={`${marcellus.className} flex flex-col absolute gap-10 inset-0 items-center justify-center text-white text-6xl`}>
                      <h1>{params.blogID}</h1>
                      <div className='flex gap-5 items-center'>
                        <img src='https://img.freepik.com/free-photo/front-view-smiley-woman-with-earbuds_23-2148613052.jpg' className='h-14 w-14 rounded-full object-cover'></img>
                        <div className='flex flex-col items-start text-left'>
                        <p className={`${dm_sans.className} text-sm text-gray-300`}>Written by</p>
                        <h1 className={`${dm_sans.className} text-xl text-white`}>Julia Smith</h1>
                        </div>
                      </div>
                    </div>
                    </div>
                <p className={`px-20 py-20 ${dm_sans.className} text-[#171717] text-xl`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut. Blandit massa enim nec dui nunc mattis. Eget lorem dolor sed viverra ipsum. Amet consectetur adipiscing elit duis. Urna id volutpat lacus laoreet non. Facilisis volutpat est velit egestas dui. Lacinia quis vel eros donec ac odio tempor orci. Lacinia quis vel eros donec. At quis risus sed vulputate. Faucibus in ornare quam viverra orci sagittis. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Proin nibh nisl condimentum id. Sollicitudin tempor id eu nisl. Sit amet aliquam id diam maecenas ultricies mi eget mauris. At urna condimentum mattis pellentesque id nibh tortor id. Id aliquet risus feugiat in ante metus dictum. Odio eu feugiat pretium nibh ipsum. <span className='block pb-5'></span>

                Volutpat consequat mauris nunc congue nisi. Porta non pulvinar neque laoreet. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Id consectetur purus ut faucibus. Proin fermentum leo vel orci porta non. Sapien faucibus et molestie ac feugiat sed lectus. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Arcu risus quis varius quam. Mattis vulputate enim nulla aliquet porttitor. <span className='block pb-5'></span>

                Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Semper risus in hendrerit gravida rutrum quisque non. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nunc scelerisque viverra mauris in aliquam sem. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Commodo viverra maecenas accumsan lacus vel facilisis. Id eu nisl nunc mi ipsum faucibus. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit duis tristique sollicitudin nibh sit amet. Rhoncus aenean vel elit scelerisque mauris. Euismod quis viverra nibh cras pulvinar. Suspendisse potenti nullam ac tortor. Suscipit tellus mauris a diam. Auctor eu augue ut lectus arcu. Mauris commodo quis imperdiet massa tincidunt nunc. Ultrices sagittis orci a scelerisque purus semper eget.
                </p>
            </div>
            <CustomFooter />
        </div>
    )
}

export default Page
