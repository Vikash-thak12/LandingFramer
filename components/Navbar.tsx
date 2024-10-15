import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <nav className='bg-[#262525] border py-4 max-w-3xl mx-auto fixed right-0 left-0 mt-5 rounded-2xl flex items-center z-50'>
                <div>
                    <h1 className='text-white font-bold text-3xl px-8'>Postable</h1>
                </div>
                <div className="flex items-center gap-5 justify-center bg-[#363535] rounded-xl mx-3 py-2 w-full ml-4 px-2 hover:bg-[#414040]">
                    <input
                        type="text"
                        placeholder="Paste tweet link here..."
                        className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                    />
                    <button className="bg-[#4A4A4A] text-white px-2 py-2 ml-5 rounded-xl flex items-center hover:bg-[#676565]">
                        <span className='font-semibold text-base'>Paste</span>
                        <Image
                        src="/assets/paste.svg"
                        alt="Paste"
                        width={60}
                        height={60}
                        className='px-2'
                         />
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
