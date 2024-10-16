// import React from 'react'
// import { AccordionDemo } from './AccordionDemo'
  

// const QuestionPage = () => {
//     return (
//         <div className='min-h-screen relative w-full max-w-7xl mx-auto'>
//             <div className='w-full px-20'>
//                 <div className='pt-20 px-10 w-1/2'>
//                     <h1 className='text-4xl font-bold'>FAQ</h1>
//                     <p className='font-bold text-2xl'>Let’s help you with some of your frequently asked questions.</p>
//                     <div className='flex flex-col items-start mt-10'>
//                         <span className='font-bold text-gray-500'>Couldn&apos;t find your answer?</span>
//                         <button
//                             className='rounded-xl flex items-center gap-1'
//                         >
//                             <span className='font-bold text-purple-600'>Ask a Question</span>
//                         </button>
//                     </div>
//                 </div>
//                 <div className='absolute bottom-20 right-10 w-[45%]'>
//                     <AccordionDemo />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default QuestionPage


import React from 'react';
import { AccordionDemo } from './AccordionDemo';

const QuestionPage = () => {
    return (
        <div className='min-h-screen relative w-full max-w-7xl mx-auto'>
            <div className='w-full px-4 md:px-10 lg:px-20'>
                <div className='pt-10 px-2 md:px-5 lg:px-10 w-full md:w-2/3 lg:w-1/2'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>FAQ</h1>
                    <p className='font-bold text-lg md:text-xl lg:text-2xl mt-4'>
                        Let’s help you with some of your frequently asked questions.
                    </p>
                    <div className='flex flex-col items-start mt-6'>
                        <span className='font-bold text-gray-500 text-base md:text-lg lg:text-xl'>
                            Couldn&apos;t find your answer?
                        </span>
                        <button className='rounded-xl flex items-center gap-1 mt-2'>
                            <span className='font-bold text-purple-600 text-base md:text-lg lg:text-xl'>
                                Ask a Question
                            </span>
                        </button>
                    </div>
                </div>
                <div className='relative mt-10 md:absolute md:bottom-20 md:right-10 w-full md:w-[60%] lg:w-[45%]'>
                    <AccordionDemo />
                </div>
            </div>
        </div>
    );
};

export default QuestionPage;
