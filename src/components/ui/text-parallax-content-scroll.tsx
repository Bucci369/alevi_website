"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <>
      <style jsx global>{`
        /* Enhanced scroll performance */
        html {
          scroll-behavior: smooth;
        }
        
        body {
          -webkit-overflow-scrolling: touch;
          overflow-scrolling: touch;
        }
      `}</style>
      <div className="bg-white">
        <TextParallaxContent
          imgUrl="/1.png"
          subheading="Gemeinschaft"
          heading="Birlikte güçlüyüz."
        >
          <ExampleContent />
        </TextParallaxContent>
        <TextParallaxContent
          imgUrl="/2.png"
          subheading="Tradition"
          heading="Köklerimizi yaşatıyoruz."
        >
          <ExampleContent />
        </TextParallaxContent>
        <TextParallaxContent
          imgUrl="/3.png"
          subheading="Zukunft"
          heading="Yarın için bugün."
        >
          <ExampleContent />
        </TextParallaxContent>
      </div>
    </>
  );
};

const IMG_PADDING = 48;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: TextParallaxContentProps) => {
  return (
    <div className="px-0 md:px-12">
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

interface StickyImageProps {
  imgUrl: string;
}

const StickyImage = ({ imgUrl }: StickyImageProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden h-screen top-0 rounded-none md:rounded-[2rem] md:h-[calc(100vh-96px)] md:top-12"
    >
      <div className="absolute inset-0 bg-neutral-950/70" />
    </motion.div>
  );
};

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
        textShadow: '3px 3px 12px rgba(0, 0, 0, 0.9), 1px 1px 6px rgba(0, 0, 0, 0.7)',
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl font-bold">
        {subheading}
      </p>
      <p className="text-center text-4xl font-black md:text-7xl drop-shadow-2xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Unsere lebendige Gemeinschaft in Dortmund
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Die Alevitische Gemeinde Dortmund ist ein Ort der Begegnung, des Lernens und des gemeinsamen Wachsens. 
        Hier kommen Menschen unterschiedlicher Generationen zusammen, um ihre Kultur zu leben und weiterzugeben.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Von Cem-Zeremonien bis hin zu kulturellen Veranstaltungen - wir schaffen Räume für authentische Gemeinschaftserlebnisse.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Mehr erfahren <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);