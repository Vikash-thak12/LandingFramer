'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { ComponentA, ComponentB, ComponentC, } from './solutions/Components';
import { ContentA, ContentB, ContentC } from './solutions/Content';
// import { usePathname } from 'next/navigation';

export const data = [
    { name: "Individual", component: "A", path: "/individual" },
    { name: "Influencers", component: "B", path: "/influencers" },
    { name: "Businesses", component: "C", path: "/businesses" },
]

const variants = {
    hidden: { opacity: 0, z: -100 },
    enter: { opacity: 1, z: 0 },
    exit: { opacity: 0, z: 100 }
};

const SolutionPage = () => {
    const [currentComponent, setCurrentComponent] = useState('A');

    return (
        <div className='max-w-7xl mx-auto min-h-screen'>
            <h1 className='font-semibold text-5xl py-5'>One Solution for All!</h1>
            <div className='flex items-center justify-between'>
                <div className='w-full py-3 h-96'>
                    <p className='pb-10 font-semibold text-lg'>Postable helps everyone to share their thoughts across multiple platforms</p>
                    <div className='flex items-center justify-between bg-[#F2F3F3] border p-2 rounded-2xl'>
                        {
                            data.map((item, index) => {
                                // Determine if this is the active component
                                const isActive = currentComponent === item.component;

                                return (
                                    <button
                                        className={`px-10 py-4 font-bold rounded-2xl ${isActive ? 'bg-white text-black' : 'bg-transparent text-gray-500'}`}
                                        key={index}
                                        onClick={() => setCurrentComponent(item.component)}
                                    >
                                        {item.name}
                                    </button>
                                );
                            })
                        }
                    </div>
                    <div>
                    <AnimatePresence mode="wait">
                        {currentComponent === 'A' && (
                            <motion.div
                                key="A"
                                variants={variants}
                                initial="hidden"
                                animate="enter"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                            >
                                <ContentA />
                            </motion.div>
                        )}
                        {currentComponent === 'B' && (
                            <motion.div
                                key="B"
                                variants={variants}
                                initial="hidden"
                                animate="enter"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                            >
                                <ContentB />
                            </motion.div>
                        )}
                        {currentComponent === 'C' && (
                            <motion.div
                                key="C"
                                variants={variants}
                                initial="hidden"
                                animate="enter"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                            >
                                <ContentC />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    </div>
                </div>
                <div className='w-full h-96 flex items-center justify-center p-10 '>
                    <AnimatePresence mode="wait">
                        {currentComponent === 'A' && (
                            <motion.div
                                key="A"
                                variants={variants}
                                initial="hidden"
                                animate="enter"
                                exit="exit"
                                transition={{ duration: 0.5}}
                            >
                                <ComponentA />
                            </motion.div>
                        )}
                        {currentComponent === 'B' && (
                            <motion.div
                                key="B"
                                variants={variants}
                                initial="hidden"
                                animate="enter"
                                exit="exit"
                                transition={{ duration: 0.5}}
                            >
                                <ComponentB />
                            </motion.div>
                        )}
                        {currentComponent === 'C' && (
                            <motion.div
                                key="C"
                                variants={variants}
                                initial="hidden"
                                animate="enter"
                                exit="exit"
                                transition={{ duration: 0.5}}
                            >
                                <ComponentC />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default SolutionPage;
