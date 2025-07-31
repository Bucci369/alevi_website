"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

// Custom smooth scroll hook
const useSmoothScroll = () => {
  useEffect(() => {
    let isScrolling = false;
    let scrollEndTimer: NodeJS.Timeout;

    const smoothScrollHandler = (e: WheelEvent) => {
      e.preventDefault();
      
      const delta = e.deltaY;
      const scrollAmount = delta * 1.5; // Adjust scroll sensitivity
      
      // Clear the scrolling end timer
      clearTimeout(scrollEndTimer);
      
      // Smooth scroll animation
      const currentScroll = window.pageYOffset;
      const targetScroll = currentScroll + scrollAmount;
      
      // Use requestAnimationFrame for smooth animation
      const animateScroll = (start: number, end: number, duration: number) => {
        const startTime = performance.now();
        
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          
          const currentPosition = start + (end - start) * easeOutCubic;
          window.scrollTo(0, currentPosition);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      };
      
      animateScroll(currentScroll, targetScroll, 150); // 150ms smooth animation
      
      // Set scrolling end timer
      scrollEndTimer = setTimeout(() => {
        isScrolling = false;
      }, 150);
    };

    // Add smooth scroll listener
    window.addEventListener('wheel', smoothScrollHandler, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', smoothScrollHandler);
      clearTimeout(scrollEndTimer);
    };
  }, []);
};

export const TextParallaxContentExample = () => {
  // Enable smooth scrolling
  useSmoothScroll();
  
  return (
    <>
      <style jsx global>{`
        /* Remove default scroll behavior */
        html {
          scroll-behavior: auto;
        }
        
        /* Enhanced scroll performance */
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

const IMG_PADDING = 12;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
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

  // Smooth spring animations for better performance with scroll smoothing
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.85]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  
  const opacity = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
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

  // Smooth spring animations with optimized physics for mouse wheel smoothing
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [250, -250]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  
  const opacity = useSpring(useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
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