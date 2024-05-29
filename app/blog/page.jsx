import CustomFooter from '@/components/CustomFooter'
import NavBar from '@/components/NavBar'
import React from 'react'
import { Marcellus, DM_Sans, Inter_Tight } from '@next/font/google'
import Image from 'next/image'
import BlogCard from '@/components/BlogCard'
import client from '../client'
import ContactFooter from '@/components/ContactFooter'

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

async function getData() {
    const data = await client.fetch(
        `*[_type == "post"]{
            _id,
            title,
            slug,
            author->{
                name,
                image {
                    asset -> {
                        _id,
                        url
                    }
                }
            },
            publishedAt,
            body,
            mainImage {
                asset -> {
                  _id,
                  url
                },
                alt
              },
        } | order(publishedAt)`,
    );

    if (data) {
        return data; // Return the first item from the array
    } else {
        console.error('No data found');
        return null;
    }
}

const generateSlug = (title) => {
    // Remove special characters and replace them with hyphens
    const cleanedTitle = title.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');

    // Remove hyphens from the beginning and end of the string
    const trimmedTitle = cleanedTitle.replace(/^-+|-+$/g, '');

    return trimmedTitle.toLowerCase();
};

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Get the day with the ordinal suffix (e.g., 21st, 22nd, 23rd, etc.)
    const day = date.getDate();
    const suffix = day === 1 ? 'st' : day === 2 ? 'nd' : day === 3 ? 'rd' : 'th';
    const formattedDay = `${day}${suffix}`;

    // Construct the final formatted date
    return formattedDate.replace(String(day), formattedDay);
};

const page = async () => {

    const posts = await getData()

  return (
    <div className='flex flex-col min-h-screen justify-between '>
      <NavBar />
        <div className='flex flex-col justify-start items-center py-10 bg-gradient-to-b from-white to-[#FEEFe8]'>
            <h1 className={`${marcellus.className} text-4xl md:text-6xl lg:text-6xl text-[#171717]`}>OUR <span className='text-orange-500'>BLOG</span></h1>
            <div className='flex flex-col py-20 items-center w-full px-4 md:px-10 lg:px-20'>
                <div className='flex flex-col md:flex-row gap-10 justify-center md:items-start lg:items-start items-center w-full px-14'>
                    <img className='md:w-[300px] h-72 w-72 lg:w-[600px] object-cover md:h-[300px] lg:h-[300px]' src={posts[0].mainImage.asset.url}/>
                    <div className={`${dm_sans.className} text-center md:text-left lg:text-left flex flex-col gap-5 md:items-start lg:items-start items-center justify-between`}>
                        <div className='flex flex-col items-center md:items-start lg:items-start w-3/4'>
                            <div className='outline outline-1 outline-orange-500 bg-transparent text-orange-500 w-fit px-2 py-1 rounded-md'>LATEST</div>
                            <h1 className={`${dm_sans.className} text-[#171717] text-4xl font-semibold pt-5`}>{posts[0].title}</h1>
                            <h2 className='text-lg font-light text-[#808080]'>{formatDate(posts[0].publishedAt)}</h2>
                            <p className='text-lg font-light text-[#171717]'>{posts[0].description}</p>
                        </div>
                        <a href={`/blog/${generateSlug(posts[0].title)}`}>
                        <button className='bg-[#171717] text-orange-500 hover:bg-orange-500 hover:text-black transition-all ease-in-out py-2 px-3'>Read More <span className={`${inter.className}`}>-&gt;</span></button>
                        </a>
                    </div>
                </div>
                <h1 className={`${dm_sans.className} text-lg md:text-3xl lg:text-3xl text-left font-bold text-orange-900 pb-10 pt-20`}>POSTS ARCHIVE</h1>
                <div className='flex flex-col md:flex-row lg:flex-row md:overflow-scroll lg:overflow-scroll lg:overflow-y-hidden md:overflow-y-hidden gap-20 px-20 pt-5 w-full items-center md:items-start lg:items-start justify-center'>
                    {posts.map((post, index) => {
                        if (index > 0) {
                            return (
                                <BlogCard key={index} params={post} />
                            )
                        }
                    })}
                </div>
            </div>
        </div>
        <ContactFooter/>
      <CustomFooter />
    </div>
  )
}

export default page
