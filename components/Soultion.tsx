'use client'
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ComponentA, ComponentB, ComponentC } from './solutions/Components';
import { ContentA, ContentB, ContentC } from './solutions/Content';

export const data = [
    { name: "Individual", component: "A", path: "/individual" },
    { name: "Influencers", component: "B", path: "/influencers" },
    { name: "Businesses", component: "C", path: "/businesses" },
];

const variants = {
    hidden: { opacity: 0, z: -100 },
    enter: { opacity: 1, z: 0 },
    exit: { opacity: 0, z: 100 }
};

const SolutionPage = () => {
    const [currentComponent, setCurrentComponent] = useState('A');

    return (
        <div className='max-w-7xl mx-auto min-h-screen px-4 lg:px-10'>
            <h1 className='font-semibold text-3xl md:text-4xl lg:text-5xl py-5 text-center lg:text-left'>
                One Solution for All!
            </h1>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <div className='w-full lg:w-1/2 py-3 h-auto lg:h-96'>
                    <p className='pb-6 md:pb-10 font-semibold text-base md:text-lg lg:text-xl text-center lg:text-left'>
                        Postable helps everyone to share their thoughts across multiple platforms.
                    </p>
                    <div className='w-[90%] mx-auto flex justify-center gap-2 lg:justify-between bg-[#F2F3F3] border p-2 rounded-2xl'>
                        {
                            data.map((item, index) => {
                                const isActive = currentComponent === item.component;

                                return (
                                    <button
                                        className={`px-4 md:px-8 lg:px-10 py-3 md:py-4 font-bold rounded-2xl text-sm ${isActive ? 'bg-white text-black' : 'bg-transparent text-gray-500'}`}
                                        key={index}
                                        onClick={() => setCurrentComponent(item.component)}
                                    >
                                        {item.name}
                                    </button>
                                );
                            })
                        }
                    </div>
                    <div className='mt-6'>
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
                <div className='lg:w-1/2 h-72 lg:h-96 flex items-center justify-center lg:p-10 mt-5 lg:mt-0'>
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
                                transition={{ duration: 0.5 }}
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
                                transition={{ duration: 0.5 }}
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
