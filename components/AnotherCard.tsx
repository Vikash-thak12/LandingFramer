"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface ThreeDCardDemoProps {
  src: string; 
}

const AnotherCard: React.FC<ThreeDCardDemoProps> = ({ src }) => {
  return (
    <CardContainer className="">
      <CardBody className="relative h-auto rounded-xl p-2 flex items-center justify-center max-w-80">
        <CardItem
        >
          <Image
            src={src}
            height="100"
            width="250"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default AnotherCard;
