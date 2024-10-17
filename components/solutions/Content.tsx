import React from 'react'

const dataA = [
    { id: 1, content: "Effortless Post Creation" },
    { id: 2, content: "Enhanced Visual Appeal" },
    { id: 3, content: "Easy Sharing Across Platforms" },
    { id: 3, content: "Consistent Social Media Presence" },
]
const dataB = [
    { id: 1, content: "Quick Post Creation" },
    { id: 2, content: "Boosted Follower Engagement" },
    { id: 3, content: "Consistent Multi-Platform Presence" },
    { id: 4, content: "Content Diversification" },
];

const dataC = [
    { id: 1, content: "Content Repurposing" },
    { id: 2, content: "Cross-Platform Marketing" },
    { id: 3, content: "Consistent Branding" },
    { id: 4, content: "Higher Engagement" },
];

export const ContentA = () => {
    return (
        <div className="relative mt-10">
            <span className='text-xl text-gray-500'>Postable is perfect for individuals who want to elevate their social media presence without the hassle. Whether you&apos;re sharing thoughts, opinions, or everyday moments, Postable makes it easy to create and share beautiful, impactful posts from your tweets.</span>
            <ul className='mt-10 block items-center justify-center gap-20'>
                {
                    dataA.map((item) => (
                        <li key={item.id} className='flex items-center gap-2 mb-3'>
                            <div className="relative size-1.5 rounded bg-gray-500 md:size-2" />
                            <span>{item.content}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export const ContentB = () => {
    return (
        <div className="relative mt-10">
            <span className='text-xl text-gray-500'>For influencers, maintaining a consistent and visually appealing social media presence is crucial. Postable empowers you to convert your tweets into captivating images that align with your brand, helping you to keep your content fresh and engaging across all platforms.</span>
            <ul className='mt-10'>
            {
                    dataB.map((item) => (
                        <li key={item.id} className='flex items-center gap-2 mb-3'>
                            <div className="relative size-1.5 rounded bg-gray-500 md:size-2" />
                            <span>{item.content}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export const ContentC = () => {
    return (
        <div className="relative mt-10">
            <span className='text-xl text-gray-500'>Businesses need to stay agile and maintain a strong social media presence. Postable helps you quickly turn tweets into polished visuals that resonate with your audience, reinforcing your brand and driving engagement without the need for a full design team.</span>
            <ul className='mt-10'>
            {
                    dataC.map((item) => (
                        <li key={item.id} className='flex items-center gap-2 mb-3'>
                            <div className="relative size-1.5 rounded bg-gray-500 md:size-2" />
                            <span>{item.content}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}








