import React from 'react'
import  ThreeDCardDemo  from './ThreeDCardDemo'

const WorkPage = () => {
  const cardData = [
    {
      src: '/step1.webp',
      step: "Step 1",
      title: "Copy tweet's link",
      content: 'On X/Twitter, click the share icon at the bottom-right of the tweet and select "Copy Link" Then, paste the link into the box above.',
    },
    {
      src: '/step2.webp',
      step: "Step 2",
      title: "Customize Design",
      content: 'Choose social media sizes, adjust the style, set the border radius, and customise the design to your liking and preferred branding—all with a single click.',
    },
    {
      src: '/step3.webp',
      step: "Step 3",
      title: "Export!",
      content: 'Simply export and publish your meticulously crafted posts, tailored to meet each social media’s standards and format.',
    },
  ];
  return (
    <div className='px-2 md:px-10 max-w-7xl mx-auto -mt-16 md:mt-10'>
      <h1 className='font-bold text-2xl md:text-5xl -mb-14 md:mb-0'>How it Works?</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5'>
        {
          cardData.map((card, index) => (
            <ThreeDCardDemo key={index} src={card.src} step={card.step} title={card.title} content={card.content} />
          ))
        }
      </div>
    </div>
  )
}

export default WorkPage
