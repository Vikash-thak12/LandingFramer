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
            <div className='max-w-7xl mx-auto my-10 px-5'>
                <h1 className='text-2xl md:text-5xl font-bold'>
                    Grow your audience with powerful visuals <br />
                    <span className='text-gray-300'>shared across all your social media platforms.</span>
                </h1>
                <button
                    className='border p-3 rounded-xl bg-black flex items-center gap-1 mt-10'
                    onClick={scrollToTop}
                >
                    <span className='text-base md:text-xl font-bold text-white'>Get Started for Free</span>
                    <Image
                        src={"/assets/arrow.svg"}
                        width={20}
                        height={20}
                        alt='Arrow'
                        className='mt-1'
                    />
                </button>

            </div>
            <section className='w-full'>
                <Image
                    src="/fullpage.webp"
                    alt="WholePage"
                    width={1920}
                    height={500}
                    sizes="(max-width: 1920px) 100vw, 1920px"  // Automatically adjusts for responsiveness
                    className='w-full h-auto'
                />
            </section>
        </>
    );
};

export default AudiencePage;
