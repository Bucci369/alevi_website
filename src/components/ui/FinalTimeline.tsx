"use client";

import { useEffect, useRef } from 'react';
import { Locale } from "@/types";

interface FinalTimelineProps {
  locale: Locale;
}

export function FinalTimeline({ locale }: FinalTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Smooth scroll für die ganze Seite
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target as HTMLElement;
          if (entry.isIntersecting && !card.classList.contains('animated')) {
            // One-shot Animation - nur einmal triggern
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
            card.classList.add('animated'); // Markieren als animiert
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    const cards = document.querySelectorAll('.timeline-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  // Dynamische Datumsberechnung für aktuelles Jahr
  const currentYear = new Date().getFullYear();
  
  const getMonthName = (month: number, locale: Locale): string => {
    const months = {
      de: ['JANUAR', 'FEBRUAR', 'MÄRZ', 'APRIL', 'MAI', 'JUNI', 
           'JULI', 'AUGUST', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DEZEMBER'],
      tr: ['OCAK', 'ŞUBAT', 'MART', 'NİSAN', 'MAYIS', 'HAZİRAN',
           'TEMMUZ', 'AĞUSTOS', 'EYLÜL', 'EKİM', 'KASIM', 'ARALIK']
    };
    return months[locale][month - 1];
  };

  const formatDate = (day: number, month: number, locale: Locale): string => {
    return `${day.toString().padStart(2, '0')}. ${getMonthName(month, locale)} ${currentYear}`;
  };

  const formatDateRange = (startDay: number, startMonth: number, endDay: number, endMonth: number, locale: Locale): string => {
    if (startMonth === endMonth) {
      return `${startDay.toString().padStart(2, '0')}. – ${endDay.toString().padStart(2, '0')}. ${getMonthName(startMonth, locale)} ${currentYear}`;
    } else {
      return `${startDay.toString().padStart(2, '0')}. ${getMonthName(startMonth, locale)} – ${endDay.toString().padStart(2, '0')}. ${getMonthName(endMonth, locale)} ${currentYear}`;
    }
  };

  // Hijri-basierte Feiertage (vereinfacht - diese ändern sich jährlich um ~11 Tage)
  const getHijriDate = (baseYear: number, baseMonth: number, baseDay: number, targetYear: number): Date => {
    // Vereinfachte Berechnung: Hijri-Jahr ist ~11 Tage kürzer
    const yearDiff = targetYear - 2025;
    const dayShift = yearDiff * 11; // Näherung
    const baseDate = new Date(2025, baseMonth - 1, baseDay);
    baseDate.setDate(baseDate.getDate() - dayShift);
    return baseDate;
  };

  const muharremStart = getHijriDate(2025, 8, 11, currentYear);
  const ashuraDate = new Date(muharremStart);
  ashuraDate.setDate(ashuraDate.getDate() + 11); // 12. Tag des Fastens

  const events = [
    {
      id: '1',
      date: formatDateRange(13, 2, 5, 3, locale), // Hızır-Fasten: 13. Feb - 5. März
      title: { de: 'HIZIR-FASTEN', tr: 'HIZIR ORUCU' },
      subtitle: { de: 'Dreiwöchige Fastenzeit', tr: 'Üç haftalık oruç dönemi' }
    },
    {
      id: '2', 
      date: formatDate(21, 3, locale), // Nevruz: 21. März (Frühlingsanfang)
      title: { de: 'NEVRUZ BAYRAM', tr: 'NEVRUZ BAYRAMI' },
      subtitle: { de: 'Neujahrsfest & Hz. Ali Geburtstag', tr: 'Yeni Yıl & Hz. Ali Doğum Günü' }
    },
    {
      id: '3',
      date: formatDateRange(5, 5, 6, 5, locale), // Hıdırellez: 5.-6. Mai
      title: { de: 'HIDIRELLEZ', tr: 'HIDIRELLEZ' },
      subtitle: { de: 'Tag des Hızır İlyas', tr: 'Hızır İlyas Günü' }
    },
    {
      id: '4',
      date: formatDate(16, 6, locale), // Abdal Musa: 16. Juni
      title: { de: 'ABDAL MUSA GEDENKTAG', tr: 'ABDAL MUSA ANMA GÜNÜ' },
      subtitle: { de: 'Großer alevitischer Heiliger', tr: 'Büyük Alevi ereni' }
    },
    {
      id: '5',
      date: formatDate(2, 7, locale), // Sivas: 2. Juli (historisches Datum)
      title: { de: 'SIVAS GEDENKTAG', tr: 'SİVAS KATLIAMI ANMA GÜNÜ' },
      subtitle: { de: '(02. Juli 1993)', tr: '(02 Temmuz 1993)' }
    },
    {
      id: '6',
      date: `${muharremStart.getDate().toString().padStart(2, '0')}. – ${ashuraDate.getDate().toString().padStart(2, '0')}. ${getMonthName(muharremStart.getMonth() + 1, locale)} ${currentYear}`,
      title: { de: 'MUHARREM-FASTEN', tr: 'MUHARREM ORUCU' },
      subtitle: { de: 'Zwölf Tage für İmam Hüseyin', tr: 'İmam Hüseyin için on iki gün' }
    },
    {
      id: '7',
      date: `${ashuraDate.getDate().toString().padStart(2, '0')}. ${getMonthName(ashuraDate.getMonth() + 1, locale)} ${currentYear}`,
      title: { de: 'AŞURE GÜNÜ', tr: 'AŞURE GÜNÜ' },
      subtitle: { de: '10. Muharrem - Höhepunkt', tr: '10. Muharrem - Doruk noktası' }
    },
    {
      id: '8',
      date: formatDate(16, 9, locale), // Hacı Bektaş: 16. September
      title: { de: 'HACI BEKTAŞ-I VELI', tr: 'HACI BEKTAŞ-I VELİ' },
      subtitle: { de: 'Großer Philosoph & Mystiker', tr: 'Büyük filozof ve mutasavvıf' }
    },
    {
      id: '9',
      date: formatDate(17, 11, locale), // Pir Sultan Abdal: 17. November
      title: { de: 'PIR SULTAN ABDAL', tr: 'PİR SULTAN ABDAL' },
      subtitle: { de: 'Großer alevitischer Dichter', tr: 'Büyük Alevi şairi' }
    }
  ];

  return (
    <div className="relative w-full py-8 md:py-16 rounded-t-3xl md:rounded-t-[3rem] shadow-2xl">
      {/* Responsive Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/sunset-prayer.png")',
          backgroundSize: 'cover', // Responsive: cover für Mobile, contain für Desktop
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Mobile-optimized background behavior */}
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute.inset-0.z-0 {
            background-size: cover !important;
            background-position: center center !important;
          }
        }
        @media (min-width: 769px) {
          .absolute.inset-0.z-0 {
            background-size: 100% 100% !important;
          }
        }
      `}</style>
      
      {/* Subtle Aurora-Style Light Shimmer */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              repeating-linear-gradient(
                100deg,
                transparent 0%,
                rgba(255, 255, 255, 0.06) 7%,
                transparent 10%,
                transparent 12%,
                rgba(255, 255, 255, 0.06) 16%
              ),
              repeating-linear-gradient(
                100deg,
                rgba(255, 223, 0, 0.15) 10%,
                rgba(255, 255, 255, 0.12) 15%,
                rgba(255, 248, 220, 0.1) 20%,
                rgba(255, 255, 255, 0.08) 25%,
                rgba(255, 235, 59, 0.12) 30%
              )
            `,
            backgroundSize: '200%, 300%',
            backgroundPosition: '50% 50%, 50% 50%',
            filter: 'blur(1px)',
            animation: 'aurora 25s ease-in-out infinite'
          }}
        />
      </div>

      {/* Custom CSS for aurora animation */}
      <style jsx>{`
        @keyframes aurora {
          0% {
            background-position: 50% 50%, 30% 40%;
            opacity: 0.3;
          }
          25% {
            background-position: 80% 60%, 70% 30%;
            opacity: 0.45;
          }
          50% {
            background-position: 30% 70%, 90% 60%;
            opacity: 0.5;
          }
          75% {
            background-position: 70% 30%, 20% 80%;
            opacity: 0.4;
          }
          100% {
            background-position: 50% 50%, 60% 45%;
            opacity: 0.35;
          }
        }
      `}</style>
      
      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black/20 z-2"></div>
      
      {/* Timeline Container */}
      <div ref={timelineRef} className="relative max-w-4xl mx-auto px-4 z-20" style={{ minHeight: '1600px' }}>
      
      {/* Timeline Line - Desktop centered, Mobile left-aligned */}
      <div 
        className="absolute bg-gray-600 z-10 hidden md:block"
        style={{
          left: '50%',
          top: '50px',
          bottom: '50px',
          width: '4px',
          transform: 'translateX(-2px)'
        }}
      ></div>
      
      {/* Mobile Timeline Line */}
      <div 
        className="absolute bg-gray-600 z-10 md:hidden"
        style={{
          left: '20px',
          top: '50px',
          bottom: '50px',
          width: '3px'
        }}
      ></div>
      
      {/* Events */}
      {events.map((event, index) => {
        const isLeft = index % 2 === 0;
        const topPosition = 100 + (index * 180);
        
        return (
          <div key={event.id}>
            {/* Timeline Dot - Desktop centered, Mobile left */}
            <div
              className="absolute w-6 h-6 bg-gray-700 rounded-full border-4 border-white shadow-xl z-20 hidden md:block"
              style={{
                left: '50%',
                top: `${topPosition}px`,
                transform: 'translateX(-12px)'
              }}
            ></div>
            
            {/* Mobile Timeline Dot */}
            <div
              className="absolute w-5 h-5 bg-gray-700 rounded-full border-3 border-white shadow-xl z-20 md:hidden"
              style={{
                left: '20px',
                top: `${topPosition}px`,
                transform: 'translateX(-10px)'
              }}
            ></div>
            
            {/* Desktop Glassmorphism Card */}
            <div
              className={`timeline-card hidden md:block ${isLeft ? 'left-card' : 'right-card'} absolute w-80 p-6 rounded-2xl shadow-xl border border-white/30 backdrop-blur-md bg-white/20 transition-all duration-700 ease-out opacity-0`}
              style={{
                top: `${topPosition - 30}px`,
                [isLeft ? 'right' : 'left']: '55%',
                transform: `translateX(${isLeft ? '-80px' : '80px'})`
              }}
            >
              <h3 className="text-lg font-bold text-white mb-2 uppercase drop-shadow-lg">
                {event.date}
              </h3>
              <h4 className="text-base font-semibold text-white/90 drop-shadow-md">
                {event.title[locale]}
              </h4>
              {event.subtitle && (
                <p className="text-sm text-white/80 mt-2 drop-shadow-sm">
                  {event.subtitle[locale]}
                </p>
              )}
            </div>
            
            {/* Mobile Card - Single Column */}
            <div
              className="timeline-card md:hidden absolute w-[calc(100vw-80px)] max-w-sm p-4 ml-12 rounded-xl shadow-lg border border-white/30 backdrop-blur-md bg-white/25 transition-all duration-700 ease-out opacity-0"
              style={{
                top: `${topPosition - 25}px`,
                left: '40px',
                transform: 'translateX(-20px)'
              }}
            >
              <h3 className="text-base font-bold text-white mb-2 uppercase drop-shadow-lg">
                {event.date}
              </h3>
              <h4 className="text-sm font-semibold text-white/90 drop-shadow-md">
                {event.title[locale]}
              </h4>
              {event.subtitle && (
                <p className="text-xs text-white/80 mt-1 drop-shadow-sm">
                  {event.subtitle[locale]}
                </p>
              )}
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}