"use client";

import React from "react";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Typewriter } from "@/components/ui/typewriter-text";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface AuroraBackgroundDemoProps {
  locale: 'de' | 'tr';
}

export function AuroraBackgroundDemo({ locale }: AuroraBackgroundDemoProps) {
  return (
    <AuroraBackground>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4">
        <ScrollReveal animationType="fadeUp" delay={600}>
          <div className="text-2xl md:text-5xl font-semibold dark:text-neutral-200 py-4 text-center max-w-4xl">
            <Typewriter
              text={locale === 'de' 
                ? 'Eine Gemeinschaft der Vielfalt und des Respekts.'
                : 'Çeşitlilik ve saygı topluluğu.'
              }
              speed={50}
              loop={false}
              className="text-2xl md:text-5xl font-semibold dark:text-neutral-200 text-center"
            />
          </div>
        </ScrollReveal>
        
        <ScrollReveal animationType="fadeUp" delay={1000}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 group">
          <Link 
            href={`/${locale}/ueber-uns`} 
            className="bg-black dark:bg-white border border-black dark:border-white rounded-full w-fit text-white dark:text-black px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg
                       hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white
                       group-hover:[&:not(:hover)]:bg-white group-hover:[&:not(:hover)]:text-black 
                       dark:group-hover:[&:not(:hover)]:bg-black dark:group-hover:[&:not(:hover)]:text-white"
          >
            {locale === 'de' ? 'Über uns' : 'Hakkımızda'}
          </Link>
          <Link 
            href={`/${locale}/mitglied-werden`} 
            className="border border-black dark:border-white rounded-full w-fit text-black dark:text-white px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg
                       hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
                       group-hover:[&:not(:hover)]:bg-black group-hover:[&:not(:hover)]:text-white 
                       dark:group-hover:[&:not(:hover)]:bg-white dark:group-hover:[&:not(:hover)]:text-black"
          >
            {locale === 'de' ? 'Mitglied werden' : 'Üye Ol'}
          </Link>
        </div>
        </ScrollReveal>
      </div>
    </AuroraBackground>
  );
}