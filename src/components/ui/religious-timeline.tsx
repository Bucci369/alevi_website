"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface ReligiousTimelineEntry {
  year: string;
  title: {
    de: string;
    tr: string;
  };
  content: {
    de: React.ReactNode;
    tr: React.ReactNode;
  };
}

interface ReligiousTimelineProps {
  data: ReligiousTimelineEntry[];
  locale: 'de' | 'tr';
}

export const ReligiousTimeline = ({ data, locale }: ReligiousTimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-br from-gray-50 to-white dark:from-neutral-950 dark:to-neutral-900 font-sans md:px-10 relative"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white max-w-4xl font-bold">
          {locale === 'de' 
            ? 'Unser Glaube'
            : 'İnancımız'
          }
        </h2>
        <p className="text-gray-600 dark:text-neutral-300 text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
          {locale === 'de'
            ? 'Die Grundlagen des Alevitentums: Unsere spirituellen Werte, heiligen Prinzipien und religiösen Traditionen, die unser Leben und unsere Gemeinschaft leiten.'
            : 'Alevilik temelleri: Hayatımızı ve topluluğumuzu yönlendiren ruhani değerlerimiz, kutsal ilkelerimiz ve dini geleneklerimiz.'
          }
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={`timeline-${item.year}-${index}`}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
            data-timeline-item
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div 
                key={`dot-${item.year}-${index}`}
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-lg border border-gray-200 dark:border-neutral-700"
              >
                <div className="h-4 w-4 rounded-full bg-gray-300 dark:bg-neutral-600 border border-gray-400 dark:border-neutral-500" />
              </div>
              <h3 
                key={`year-${item.year}-${index}`}
                className="hidden md:block text-xl md:pl-20 md:text-4xl lg:text-5xl font-bold text-gray-400 dark:text-neutral-500"
              >
                {item.year}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 
                key={`mobile-year-${item.year}-${index}`}
                className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-400 dark:text-neutral-500"
              >
                {item.year}
              </h3>
              <div 
                key={`card-${item.year}-${index}`}
                className="bg-white dark:bg-neutral-800 rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-neutral-700 mb-8"
              >
                <h4 
                  key={`title-${item.year}-${index}`}
                  className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-4"
                >
                  {item.title[locale]}
                </h4>
                <div key={`content-${item.year}-${locale}`}>
                  {item.content[locale]}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Einfacher schwarzer Timeline-Strich */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-black via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};