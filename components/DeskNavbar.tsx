'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import MobNavbar from './MobNavbar';

const DeskNavbar = () => {
    const [pasteValue, setPasteValue] = useState('');
    const [showMobNavbar, setShowMobNavbar] = useState(false); // State to show MobNavbar

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setPasteValue(text);
        } catch (error) {
            console.log("Error while pasting the data: ", error)
        }
    }


    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight * 0.8; // 80% of the viewport height
            if (scrollPosition > viewportHeight) {
                setShowMobNavbar(true); // Show MobNavbar when scrolled beyond 80vh
            } else {
                setShowMobNavbar(false); // Hide MobNavbar otherwise
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            {showMobNavbar ? (
                            <nav className='bg-[#262525] border py-4 max-w-3xl mx-2 md:mx-auto fixed right-0 left-0 mt-5 rounded-2xl flex items-center z-50'>
                            <div>
                                <h1 className='text-white font-bold text-3xl px-5'>Postable</h1>
                            </div>
                            <div className="flex items-center gap-5 justify-center bg-[#363535] rounded-xl mx-3 py-2 w-full ml-4 px-2 hover:bg-[#414040]">
                                <input
                                    type="text"
                                    placeholder="Paste tweet link here..."
                                    value={pasteValue}
                                    onChange={(e) => setPasteValue(e.target.value)}
                                    className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                                />
                                <button 
                                onClick={handlePaste}
                                className="bg-[#4A4A4A] text-white px-2 py-2 ml-5 rounded-xl flex items-center hover:bg-[#676565]"
                                >
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
            ) : (
                <div>
                    <MobNavbar />
                </div>
            ) }
        </>
    );
};

export default DeskNavbar;
