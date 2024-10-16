import React from 'react'
import AnotherCard from '../AnotherCard';

const dummyData = {
    src: '/solutions/one.webp',
    src2: '/solutions/two.webp',
    src3: '/solutions/three.webp',
};


export const ComponentA = () => {
    return (
        <div>
            <AnotherCard src={dummyData.src} />
        </div>
    )
}


export const ComponentB = () => {
    return (
        <div>
            <AnotherCard src={dummyData.src2} />
        </div>
    )
}

export const ComponentC = () => {
    return (
        <div>
            <AnotherCard src={dummyData.src3} />
        </div>
    )
}
