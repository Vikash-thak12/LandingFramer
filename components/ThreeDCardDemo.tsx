"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface ThreeDCardDemoProps {
  src: string; 
  content: string; 
  step: string; 
  title: string; 
}

const ThreeDCardDemo: React.FC<ThreeDCardDemoProps> = ({ src, step, title, content }) => {
  return (
    <CardContainer>
      <CardBody className="bg-[#F6F7F7] relative min-w-56 h-auto rounded-xl p-2 -mb-36 md:mb-0">
        <CardItem
        >
          <Image
            src={src}
            height="1000"
            width="1000"
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col justify-between items-start mt-10 md:mt-20 px-5">
          <div>
            <h1 className="text-gray-500">{step}</h1>
            <h1 className="font-semibold">{title}</h1>
          </div>
          <p className="mt-5 text-gray-500 line-clamp-3">{content}</p>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default ThreeDCardDemo;
