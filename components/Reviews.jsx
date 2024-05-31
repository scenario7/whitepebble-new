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
            description: 'White Pebble is the best law firm in Mumbai for trademark matters. I got my company\'s trademark registration through them. It was such a smooth and quick process. Would highly recommend.',
        },
        {
            name: 'Rajan Iyengar',
            stars: 5,
            description: 'Thoroughly professional. Excellently equipped technicals - the kind that one needs from a legal professional.',
        },
        {
            name: 'Pratick Tanna',
            stars: 5,
            description: 'My trademark registration matter was professionally handled from start to finish. I received prompt service and everything was done smoothly.',
        },
        {
            name: 'Jinagna Doshi',
            stars: 5,
            description: 'Outstanding trademark registration providers in Mumbai. Fab job done for my company registration in a time efficient manner.',
        },
        {
            name: 'Desi Rider',
            stars: 4,
            description: 'One of the best lawyers I met. Very knowledgable and very helpful. She has the solutions to all the legal matters and makes it look like everything is easy for her.',
        },
        {
            name: 'Farzana Rahman',
            stars: 5,
            description: 'Received extremely professional service for my trademark registration. Highly recommend',
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
                        <h2 className={`${dm_sans.className} text-xl text-black font-semibold`}>{review.name}</h2>
                        <div className='flex gap-2'>
                            {[...Array(review.stars)].map((_, i) => (
                                <FaStar key={i} color='#f18a5e' className='h-5 w-5'/>
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
