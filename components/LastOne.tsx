import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LastOnePage = () => {
    return (
        <div className='md:min-h-screen bg-custom-gradient px-4 md:px-20 py-5 '>
            <div className='flex flex-col gap-10'>
                <div className='w-full'>
                    <h1 className='text-3xl text-white/60'>We help you to create postable content!</h1>
                    <p className='max-w-lg font-semibold mt-5 text-white/60'>Postable is a free, unlimited tool designed to empower individuals, influencers, and businesses to amplify their voice and effortlessly create engaging content that go beyond the ordinary.</p>
                </div>
                <div>
                    <h2 className='font-bold mb-2 text-white'>Products</h2>
                    <ul className='flex flex-col gap-1'>
                        <li className='text-white/60'>Tweet Converter</li>
                        <li className='text-white/60'>Post scheduler</li>
                        <li className='text-white/60'>Screenshot designer</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold mb-2 text-white'>Company</h2>
                    <div className='flex flex-col gap-1'>
                        <Link className='text-white/60' href={"#"}>Privacy Policy</Link>
                        <Link className='text-white/60' href={"#"}>Terms And Conditions</Link>
                        <Link className='text-white/60' href={"#"}>Refund Policy</Link>
                    </div>
                </div>
            </div>
            <div className='h-[2px] w-full bg-gray-600 mt-5'></div>
            <div>
                <div className='grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-10 my-10'>
                    <a
                        className="flex items-center gap-4 rounded-lg px-2 py-2 bg-[#9b2e99] hover:bg-[#622761]"
                        target="_blank"
                        href="https://x.com/Postable_App"
                    >
                        <Image
                        src={"/assets/twitter.svg"}
                        alt='Twitter'
                        width={32}
                        height={32}
                         />
                        <div>
                            <div className="line-clamp-1 block text-xs font-semibold text-white/80">Follow us on</div>
                            <span className="block text-sm font-bold text-white">X / Twitter</span>
                        </div>
                    </a>

                    <a
                        className="flex items-center gap-4 rounded-lg px-2 py-2 bg-[#9b2e99] hover:bg-[#622761]"
                        target="_blank"
                        href="https://www.instagram.com/Postable_App"
                    >
                        <Image
                        src={"/assets/insta.svg"}
                        alt='Insta'
                        width={28}
                        height={32}
                         />

                        <div>
                            <div className="line-clamp-1 block text-xs font-semibold text-white/80">Follow us on</div>
                            <span className="block text-sm font-bold text-white">Instagram</span>
                        </div>
                    </a>


                    <a
                        className="flex items-center gap-4 rounded-lg px-2 py-2 bg-[#9b2e99] hover:bg-[#622761]"
                        target="_blank"
                        href="https://discord.com/invite/D857XpAFWE"
                    >
                        <Image
                        src={"/assets/discord.svg"}
                        alt='Discord'
                        width={32}
                        height={32}
                         />
                         
                        <div>
                            <div className="line-clamp-1 block text-xs font-semibold text-white/80">Join Community</div>
                            <span className="block text-sm font-bold text-white">Discord</span>
                        </div>
                    </a>

                    <a
                        className="flex items-center gap-4 rounded-lg px-2 py-2 bg-[#9b2e99]  hover:bg-[#622761]"
                        target="_blank"
                        href="https://ko-fi.com/postable?ref=postable.app"
                    >
                    <Image
                        src={"/assets/delete.svg"}
                        alt='Delete'
                        width={20}
                        height={20}
                         />
                        <div>
                            <div className="line-clamp-1 block text-xs font-semibold text-white/80">Support Us</div>
                            <span className="block text-sm font-bold text-white">Buy Coffee</span>
                        </div>
                    </a>

                </div>
                <span className='text-white/50'>Copyright 2024 Postable</span>
            </div>
        </div>
    )
}

export default LastOnePage
