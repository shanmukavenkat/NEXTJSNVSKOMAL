"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Money from "../media-src/Money.png";
import FullMoney from "../media-src/FullMoney.png";
import Ipl from "../media-src/Ipl.png";
import ClickSpark from "@/components/ui/ClickSpark/ClickSpark";

interface CardData {
  category: string;
  title: string;
  src: string | StaticImageData;
  content: JSX.Element;
}

interface DummyContentProps {
  link: string;
  src?: string | StaticImageData;
}

const DummyContent: React.FC<DummyContentProps> = ({ link, src }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="p-8 md:p-14 rounded-3xl cursor-pointer hover:scale-105 transition-transform duration-300 backdrop-blur-[20px] backdrop-saturate-[200%] bg-[#dfcef9d9] border border-opacity-20 border-[#ffffffd0]">
        <p className="text-dark-600 dark:text-emerald-200 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-center text-neutral-700 dark:text-neutral-200">
            Explore this project in detail.
          </span>{" "}
          Click to view the full project page.
        </p>
        <Image
          src={src || "/default-image.png"}
          alt="Project preview"
          height={500}
          width={500}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-cover rounded-lg"
        />
      </div>
    </a>
  );
};

const data: CardData[] = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/images/ai-project.jpg",
    content: <DummyContent link="https://your-ai-project.com" />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/images/productivity.jpg",
    content: <DummyContent link="https://your-productivity-tool.com" />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/images/apple-vision.jpg",
    content: <DummyContent link="https://your-apple-vision.com" />,
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/images/maps-iphone.jpg",
    content: <DummyContent link="https://your-maps-project.com" />,
  },
  {
    category: "IPL",
    title: "IPL Dashboard for cricket fans.",
    src: Ipl.src,
    content: <DummyContent link="https://snvsipl.ccbp.tech" src={Ipl} />,
  },
  {
    category: "Money Management",
    title: "Manage your finances with ease.",
    src: Money,
    content: <DummyContent link="https://snvs-money-manager.netlify.app/" src={FullMoney} />,
  },
];

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={typeof card.src === "string" ? card.src : card.src.src} card={card} index={index} />
  ));

  return (
    <ClickSpark
    sparkColor='#2c35ea'
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={400}> 
    <div id="projects" className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        PROJECTS
      </h2>
      <Carousel items={cards} />
    </div>
    </ClickSpark>
  );
}
