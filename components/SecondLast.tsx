'use client'
import Image from 'next/image'
import React from 'react'

const SecondLastPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <>
      <div className='bg-[#121010] mt-5 md:min-h-screen rounded-t-[64px] p-5 md:p-10'>
        <div className='text-white text-center md:max-w-[50%] mx-auto'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold'>One-Click to Create</h1>
          <p className='text-neutral-500 font-bold text-balance leading-relaxed py-5'>Postable is built with simplicity and fun at its core. No design skills? No problem. We handle the heavy lifting so you can effortlessly create stunning posts.</p>
          <button
            className='border rounded-xl bg-black w-auto inline-flex items-center gap-1 mt-5 px-5 py-2'
            onClick={scrollToTop}
          >
            <span className='text-lg md:text-xl font-bold text-white'>Get Started for Free</span>
            <Image
              src={"/assets/arrow.svg"}
              width={20}
              height={20}
              alt='Arrow'
              className='mt-2'
            />
          </button>
        </div>
        <div className='w-full mt-10'>
          <Image
            src={"/lastone.webp"}
            alt='Backcover'
            layout='responsive'
            width={1920}
            height={500}
            className='w-full h-auto'
          />
        </div>
      </div>
    </>
  )
}

export default SecondLastPage
