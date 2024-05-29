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

const BlogCard = ({ params }) => {
    // Function to convert title to lowercase and replace spaces with hyphens
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

    return (
        <div className='relative flex flex-col gap-2 items-center text-center'>
            <div className='relative'>
                <img src={params.mainImage.asset.url} alt="" className='object-cover h-60 w-60 outline outline-4 outline-black'/>
                <a href={`/blog/${generateSlug(params.title)}`}>
                    <button className='absolute right-0 bottom-0 bg-orange-500 h-10 w-10 hover:h-14 hover:w-14 transition-all ease-in-out duration-300 items-center flex justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                </a>
            </div>
            <div className='pt-2 justify-between'>
                <h1 className={`${dm_sans.className} text-black w-60 font-medium text-2xl`}>{params.title}</h1>
                <h2 className={`${dm_sans.className} text-[#808080] w-60`}>{formatDate(params.publishedAt)}</h2>
            </div>
        </div>
    );
}

export default BlogCard;
