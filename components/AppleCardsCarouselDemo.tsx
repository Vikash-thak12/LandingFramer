"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold font-sans">
        Our Features
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    // category: "Artificial Intelligence",
    // title: "You can do more with AI.",
    src: "/featureimages/first.webp",
  },
  {
    // category: "Productivity",
    // title: "Enhance your productivity.",
    src: "/featureimages/second.webp",
  },
//   keep it same
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/featureimages/third.webp",
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/featureimages/fourth.webp",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/featureimages/fifth.webp",
  },
];
