import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Image } from 'next/image'
// import { XIcon, CheckCircleIcon } from '@heroicons/react/solid';

const FeaturePage = () => {
    return (
        <div className='h-screen'>
            <div className='relative w-[60%] h-[80%] mx-auto rounded-[70px] p-5 my-background flex flex-col gap-10'>
                <div className='flex items-center justify-center'>
                    <h1 className='font-bold text-6xl text-center'>Share Your Voice <br /> Beyond Just a Tweet</h1>
                </div>
                <p className='text-center w-[80%] border mx-auto'>Keep your online presence steady and growing by creating customizable images from your tweets, perfect for Instagram, Facebook, and more.</p>
                <div className='flex items-center justify-center gap-6'>
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
                <div className='absolute -bottom-32 left-1/2 transform -translate-x-1/2 min-w-96 rounded-xl h-72'>
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
                        <div className='mx-10 rounded-3xl px-5 py-3'>


                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center justify-between space-x-2 border w-full">
                                    {/* Logo */}
                                    <div>
                                        <Image
                                        src
                                         />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">Postable</span>
                                            <span className="text-gray-500 text-xs">@PostableApp</span>
                                        </div>
                                    </div>

                                    {/* Text Info */}
                                    <div className=''>
                                            <Image
                                                src="/assets/x.svg" 
                                                alt="Postable logo"
                                                width={32}
                                                height={32}
                                                />
                                    </div>
                                </div>
                                {/* Close Icon */}
                                <button className="p-1 hover:bg-gray-200 rounded-full">
                                    {/* <XIcon className="h-4 w-4 text-gray-600" /> */}
                                </button>
                            </div>

                            {/* Body Section */}
                            <p className="text-gray-700 mb-3">
                                Sharing your tweets across multiple platforms made easy. Postable helps you create engaging visuals.
                            </p>

                            {/* Footer Section */}
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

export default FeaturePage
