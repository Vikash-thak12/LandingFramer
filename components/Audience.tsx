'use client'
import Image from 'next/image';
import React from 'react';

const AudiencePage = () => {
    // Function to handle scrolling to the top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
    };

    return (
        <>
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='text-5xl font-bold'>
                Grow your audience with powerful visuals <br />
                <span className='text-gray-300'>shared across all your social media platforms.</span>
            </h1>
            <button 
                className='border p-3 rounded-xl bg-black flex items-center gap-1 mt-20'
                onClick={scrollToTop} 
            >
                <span className='text-xl font-bold text-white'>Get Started for Free</span>
                <Image
                    src={"/assets/arrow.svg"}
                    width={20}
                    height={20}
                    alt='Arrow'
                    className='mt-2'
                />
            </button>

        </div>
        <section className='w-full'>
                <Image
                    src={"/fullpage.webp"}
                    alt='WholePage'
                    layout='responsive'  
                    width={1920}  
                    height={500}  
                    className='w-full h-auto'
                />
            </section>
            </>
    );
};

export default AudiencePage;
