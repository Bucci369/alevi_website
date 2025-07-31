"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

// Hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

export const TextParallaxContentExample = () => {
  const isMobile = useIsMobile();
  
  // Add smooth scrolling behavior
  useEffect(() => {
    // Enable smooth scrolling globally
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Reduce motion for users who prefer it
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        document.documentElement.style.scrollBehavior = 'auto';
      }
      
      return () => {
        document.documentElement.style.scrollBehavior = 'auto';
      };
    }
  }, []);
  
  return (
    <div className="bg-white">
      <style jsx global>{`
        /* Smooth scrolling optimization */
        html {
          scroll-behavior: smooth;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          * {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
          
          /* Reduce parallax on mobile for better performance */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        }
      `}</style>
      <TextParallaxContent
        imgUrl="/1.png"
        subheading="Gemeinschaft"
        heading="Birlikte güçlüyüz."
        isMobile={isMobile}
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/2.png"
        subheading="Tradition"
        heading="Köklerimizi yaşatıyoruz."
        isMobile={isMobile}
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/3.png"
        subheading="Zukunft"
        heading="Yarın için bugün."
        isMobile={isMobile}
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
  isMobile: boolean;
}

const TextParallaxContent = ({ imgUrl, subheading, heading, children, isMobile }: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className={`relative ${isMobile ? 'h-[100vh]' : 'h-[150vh]'}`}>
        <StickyImage imgUrl={imgUrl} isMobile={isMobile} />
        <OverlayCopy heading={heading} subheading={subheading} isMobile={isMobile} />
      </div>
      {children}
    </div>
  );
};

interface StickyImageProps {
  imgUrl: string;
  isMobile: boolean;
}

const StickyImage = ({ imgUrl, isMobile }: StickyImageProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  // Use spring for smoother animation
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.85]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  );
  
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  );

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: isMobile ? "contain" : "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className={`sticky z-0 overflow-hidden rounded-3xl ${isMobile ? 'will-change-transform' : ''}`}
      // Reduce parallax intensity on mobile for better performance
      initial={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
  isMobile: boolean;
}

const OverlayCopy = ({ subheading, heading, isMobile }: OverlayCopyProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Reduce parallax movement on mobile for better performance
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [250, -250]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  );
  
  const opacity = useSpring(
    useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  );

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.p 
        className={`mb-2 text-center ${isMobile ? 'text-lg md:text-xl' : 'text-xl md:text-3xl'} font-medium`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {subheading}
      </motion.p>
      <motion.p 
        className={`text-center font-bold ${isMobile ? 'text-2xl md:text-4xl' : 'text-4xl md:text-7xl'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {heading}
      </motion.p>
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