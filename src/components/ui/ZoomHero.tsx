"use client";

import { useEffect } from 'react';
import { Locale } from '@/types'

interface ZoomHeroProps {
  locale: Locale;
}

export function ZoomHero({ locale }: ZoomHeroProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.getElementById('hero-section');
      const heroContainer = document.getElementById('hero-container');
      
      if (hero && heroContainer) {
        // Zoom-out effect: Start at scale 1, zoom out to 0.8 as user scrolls
        const maxScroll = window.innerHeight;
        const scale = Math.max(0.8, 1 - (scrolled / maxScroll) * 0.2);
        const opacity = Math.max(0.3, 1 - (scrolled / maxScroll) * 0.7);
        
        hero.style.transform = `scale(${scale})`;
        hero.style.opacity = opacity.toString();
        
        // Hide hero when scrolled past timeline to prevent footer overlap
        if (scrolled > window.innerHeight * 1.5) {
          heroContainer.style.display = 'none';
        } else {
          heroContainer.style.display = 'block';
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  
  // Generate calendar days with Alevi events
  const generateCalendarDays = () => {
    const days = [];
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    
    // Detailed Alevi events for current month
    const aleviEvents: { [key: number]: string } = {
      2: 'Koro Çalışması 18:00\nGemeindezentrum Dortmund', // Choir practice
      3: 'Cem Ayini 19:00\nGemeindezentrum Dortmund', // Cem ceremony
      7: 'Bağlama Kursu 18:30\nGemeindezentrum Dortmund', // Saz course
      10: 'Gençlik Buluşması\nGemeindezentrum Dortmund', // Youth meeting
      12: 'Dede Ziyareti 16:00\nGemeindezentrum Dortmund', // Dede visit
      15: 'Muharrem Orucu\nGemeindezentrum Dortmund', // Fasting day
      18: 'Deyiş Çalışması\nGemeindezentrum Dortmund', // Deyiş practice
      21: 'Semah Gösterisi 19:30\nGemeindezentrum Dortmund', // Semah dance
      24: 'Aile Sohbeti\nGemeindezentrum Dortmund', // Family discussion
      25: 'Lokma Dağıtımı 12:00\nGemeindezentrum Dortmund', // Community meal
      28: 'Din Dersi 17:00\nGemeindezentrum Dortmund', // Religious study
      31: 'Toplum Yemeği\nGemeindezentrum Dortmund' // Community dinner
    };
    
    // Empty cells for start of month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    // Days of the month with events
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        event: aleviEvents[day] || null
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthNames = {
    de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 
         'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
         'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
  };

  return (
    <div id="hero-container" className="fixed inset-0 z-0">
      <section 
        id="hero-section"
        className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-50 via-white to-blue-100 transition-transform duration-100 ease-out relative overflow-hidden"
      >
        {/* Responsive Giant Background Calendar */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 select-none pointer-events-none p-4">
          <div className="w-full h-full max-w-[150vw] max-h-[95vh] flex items-center justify-center">
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20 w-full h-full flex flex-col">
              
              {/* Calendar Grid - Responsive */}
              <div className="grid grid-cols-7 gap-1 sm:gap-2 lg:gap-3 xl:gap-4 text-center flex-1 min-h-0">
                {/* Day Headers */}
                {(locale === 'de' ? ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'] : 
                                   ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']).map((day) => (
                  <div 
                    key={day} 
                    className="aspect-square flex items-center justify-center font-semibold text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl border border-gray-400/40 bg-gray-100/20 rounded-sm lg:rounded-md"
                  >
                    {day}
                  </div>
                ))}
                
                {/* Calendar Days */}
                {calendarDays.map((dayData, index) => (
                  <div 
                    key={index} 
                    className={`aspect-square flex flex-col items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium border rounded-sm lg:rounded-md transition-colors ${
                      dayData?.event 
                        ? 'text-red-700 border-red-400/60 bg-red-50/20 hover:bg-red-100/30' 
                        : 'text-gray-700 border-gray-400/50 bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <span className="font-bold">{dayData?.day}</span>
                    {dayData?.event && (
                      <span className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-normal text-red-600 leading-tight mt-0.5 text-center px-0.5 whitespace-pre-line">
                        {dayData.event}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Over the calendar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black drop-shadow-lg">
            {locale === 'de' ? (
              <>
                Alevitischer Kalender<br />
                {currentYear}
              </>
            ) : (
              <>
                Alevi Takvimi<br />
                {currentYear}
              </>
            )}
          </h1>
          <div className="animate-bounce mt-12">
            <svg className="w-6 h-6 mx-auto text-gray-600 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}