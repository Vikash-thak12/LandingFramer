import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
    return (
        <main className='min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto'>
            <div className='px-10 flex flex-col gap-12 items-center justify-center py-5 mt-40'>
                <div>
                    <h1 className='font-bold text-7xl text-center'>Convert Tweets <br /> into Engaging Social <br /> Media Posts, Instantly!</h1>
                </div>
                <span className='font-bold text-2xl'>Paste your tweet link below to get started for FREE</span>

                <div className='flex flex-col items-center justify-center gap-5 w-full'>

                
                <div className="flex items-center gap-5 justify-center shadow-xl border-2 border-neutral-100 rounded-xl mx-3 py-2 w-[90%] ml-4 px-2">
                    <input
                        type="text"
                        placeholder="Paste tweet link here..."
                        className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                    />
                    <button className="bg-neutral-300 text-white px-2 py-2 ml-5 rounded-xl flex items-center">
                        <span className='text-base text-black'>Paste</span>
                        <Image
                            src="/assets/paste.svg"
                            alt="Paste"
                            width={60}
                            height={60}
                            className='px-2'
                        />
                    </button>
                </div>
                <span className='text-sm font-medium text-neutral-400'>No signup, no credit card, no crap!</span>
                </div>
            </div>
        </main>
    )
}

export default HeroPage
