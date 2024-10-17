// import { XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { XIcon, CheckCircleIcon } from '@heroicons/react/solid';

const SecondPage = () => {
    return (
        <div className='h-screen'>
            <div className='relative md:w-[60%] h-[60%] md:h-[80%] mx-auto rounded-3xl md:rounded-[70px] p-5 my-background flex flex-col gap-5 md:gap-5'>
                <div className='flex items-center justify-center md:mt-10'>
                    <h1 className='font-bold text-xl md:text-5xl text-center'>Share Your Voice <br /> Beyond Just a Tweet</h1>
                </div>
                <p className='text-center max-w-lg mx-auto font-semibold'>Keep your online presence steady and growing by creating customizable images from your tweets, perfect for Instagram, Facebook, and more.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 md:gap-6 md:max-w-2xl md:mx-auto'>
                    <Link href={"#"} className='flex items-center gap-2 p-2 rounded-xl hover:bg-gray-600 hover:text-white'>
                        <Image
                            src={"/assets/insta.svg"}
                            alt='Logo'
                            width={20}
                            height={32}
                        />
                        <span>Facebook Post</span>
                    </Link>
                    <Link href={"#"} className='flex items-center gap-2 p-2 rounded-xl hover:bg-gray-600 hover:text-white'>
                        <Image
                            src={"/assets/insta.svg"}
                            alt='Logo'
                            width={20}
                            height={32}
                        />
                        <span>Facebook Post</span>
                    </Link>
                    <Link href={"#"} className='flex items-center gap-2 p-2 rounded-xl hover:bg-gray-600 hover:text-white'>
                        <Image
                            src={"/assets/insta.svg"}
                            alt='Logo'
                            width={20}
                            height={32}
                        />
                        <span>Facebook Post</span>
                    </Link>
                    <Link href={"#"} className='flex items-center gap-2 p-2 rounded-xl hover:bg-gray-600 hover:text-white'>
                        <Image
                            src={"/assets/insta.svg"}
                            alt='Logo'
                            width={20}
                            height={32}
                        />
                        <span>Facebook Post</span>
                    </Link>
                </div>


                {/* floating cards */}
                <div className='absolute -bottom-12 md:-bottom-20 left-1/2 transform -translate-x-1/2 min-w-96 rounded-xl h-72'>
                    <div className='border-b px-5 py-3 flex items-center gap-2 bg-gray-400 rounded-t-xl'>
                        <Image
                            src={"/assets/insta.svg"}
                            alt='Logo'
                            width={20}
                            height={32}
                            className='text-white'
                        />
                        <h1 className='text-white'>Floating cards</h1>
                    </div>
                    <div className='bg-blue-500 h-full rounded-b-xl flex items-center justify-center'>
                        <div className='mx-10 rounded-3xl px-5 py-3 bg-white'>


                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center justify-between space-x-2 w-full">
                                    <div className='flex gap-2'>
                                        <Image
                                        src={"/assets/twitter.svg"}
                                        alt='Insta'
                                        width={32}
                                        height={32}
                                        className='bg-black rounded-2xl'
                                         />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">Postable</span>
                                            <span className="text-gray-500 text-xs">@PostableApp</span>
                                        </div>
                                    </div>

                                    <div className=''>
                                            <Image
                                                src="/assets/x.svg" 
                                                alt="Postable logo"
                                                width={32}
                                                height={32}
                                                />
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-3">
                                Sharing your tweets across multiple platforms made easy. Postable helps you create engaging visuals.
                            </p>
                            <div className="text-xs text-gray-500">
                                <span>9:42 PM · Jul 29, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondPage
