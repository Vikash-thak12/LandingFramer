'use client'
import Image from 'next/image';
import React from 'react';

const MobNavbar = () => {
    return (
        <>
            <nav className='bg-[#262525] border max-w-[13rem] flex items-center justify-center gap-5 px-20 fixed mx-auto right-0 left-0 mt-10 rounded-2xl py-4 z-50'>
                <Image
                src={"/assets/mainlogo.svg"}
                alt='Logo'
                width={32}
                height={32}
                 />
                <div>
                    <h1 className='text-white font-bold text-3xl'>Postable</h1>
                </div>
            </nav>
        </>
    );
};

export default MobNavbar ;
