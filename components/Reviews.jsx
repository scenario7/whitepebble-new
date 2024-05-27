"use client"
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { Marcellus, DM_Sans, Inter_Tight } from '@next/font/google';

const marcellus = Marcellus({
    weight: '400',
    subsets: ['latin'],
});
const dm_sans = DM_Sans({
    subsets: ['latin'],
});
const inter = Inter_Tight({
    weight: '400',
    subsets: ['latin'],
});

const Reviews = () => {
    const [displayedReviews, setDisplayedReviews] = useState([]);
    const reviews = [
        {
            name: 'Aditya J',
            stars: 5,
            description: 'White Pebble is the best law firm in Mumbai for trademark matters. I got my company\'s trademark registration through them. It was such a smooth and quick process. I will definitely recommend contacting them for all your trademark registration in India',
        },
        {
            name: 'John Doe',
            stars: 4,
            description: 'The team at White Pebble provided excellent service. They were very professional and efficient in handling my trademark issues.',
        },
        {
            name: 'Jane Smith',
            stars: 5,
            description: 'Amazing experience! The staff at White Pebble is very knowledgeable and helpful. They made the trademark registration process so easy.',
        },
        {
            name: 'Robert Brown',
            stars: 5,
            description: 'Highly recommend White Pebble for their outstanding service and expertise in trademark law. They took care of everything for my business.',
        },
        {
            name: 'Emily Davis',
            stars: 4,
            description: 'Great service and support from White Pebble. They were very responsive and helped me understand the entire process.',
        },
        {
            name: 'Michael Wilson',
            stars: 5,
            description: 'White Pebble made the trademark registration process a breeze. Their team is very professional and efficient. I will definitely use their services again.',
        },
    ];

    useEffect(() => {
        const updateReviews = () => {
            if (window.innerWidth < 768) {
                setDisplayedReviews(reviews.slice(0, 3));
            } else {
                setDisplayedReviews(reviews);
            }
        };

        if (typeof window !== 'undefined') {
            updateReviews();
            window.addEventListener('resize', updateReviews);
            return () => window.removeEventListener('resize', updateReviews);
        }
    }, [reviews]);

    return (
        <div className='px-20 py-20'>
            <h1 className={`${dm_sans.className} text-lg md:text-3xl lg:text-3xl text-center font-bold text-orange-900 pb-10`}>WHAT OUR CLIENTS SAY</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {displayedReviews.map((review, index) => (
                    <div key={index} className='flex flex-col items-center gap-5'>
                        <h1 className={`${dm_sans.className} text-xl text-black font-semibold`}>{review.name}</h1>
                        <div className='flex gap-2'>
                            {[...Array(review.stars)].map((_, i) => (
                                <FaStar key={i} color='black' className='h-5 w-5'/>
                            ))}
                        </div>
                        <p className={`${marcellus.className} text-xl text-center text-black`}>{review.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
