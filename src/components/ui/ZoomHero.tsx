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
        // Only apply scroll effects on desktop, not mobile
        const isMobile = window.innerWidth < 768;
        
        if (!isMobile) {
          // Smooth fade-out effect without zoom (desktop only)
          const maxScroll = window.innerHeight;
          const opacity = Math.max(0.1, 1 - (scrolled / maxScroll) * 0.9);
          hero.style.opacity = opacity.toString();
        }
        
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
        {/* Single Calendar - Mobile shows partial view, Desktop shows full view */}
        <div className="absolute inset-0 flex items-center justify-center p-4 z-10 pointer-events-none overflow-hidden">
          <div className="w-full h-full max-w-[150vw] max-h-[95vh] flex items-center justify-center opacity-30">
            {/* Calendar container - normal size, mobile just shows what fits */}
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20 w-full h-full flex flex-col relative min-w-[800px] min-h-[600px]">
              
              {/* One Calendar Grid - Same for all devices */}
              <div className="grid grid-cols-7 gap-1 sm:gap-2 lg:gap-3 xl:gap-4 text-center flex-1 min-h-0">
                {/* Day Headers */}
                {(locale === 'de' ? ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'] : 
                                   ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']).map((day) => (
                  <div 
                    key={day} 
                    className="aspect-square flex items-center justify-center font-semibold text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl border border-gray-400/40 bg-gray-100/20 rounded-sm lg:rounded-md select-none"
                  >
                    {day}
                  </div>
                ))}
                
                {/* Calendar Days - Normal size, mobile sees partial */}
                {calendarDays.map((dayData, index) => (
                  <div 
                    key={index} 
                    className={`aspect-square flex flex-col items-center justify-center text-sm md:text-base lg:text-lg xl:text-xl font-medium border rounded-sm lg:rounded-md ${
                      dayData?.event 
                        ? 'text-red-700 border-red-400/60 bg-red-50/30' 
                        : 'text-gray-700 border-gray-400/50 bg-white/20'
                    }`}
                  >
                    <span className="font-bold">{dayData?.day}</span>
                    {dayData?.event && (
                      <span className="text-xs md:text-sm lg:text-base font-normal text-red-600 leading-tight mt-0.5 text-center px-0.5 whitespace-pre-line">
                        {dayData.event}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pointer-events-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-700 drop-shadow-lg">
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
        </div>
        
        {/* Scroll Indicator - Modern Mouse with scroll animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-auto">
          <div className="flex flex-col items-center space-y-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
            {/* Modern Mouse Icon */}
            <div className="relative">
              <div className="w-7 h-12 border-2 border-gray-600 rounded-full bg-white/10 backdrop-blur-sm shadow-lg flex justify-center">
                {/* Animated scroll wheel */}
                <div className="w-1 h-4 bg-gray-600 rounded-full mt-2 animate-bounce" 
                     style={{ animationDuration: '2s' }}></div>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 w-7 h-12 border border-white/20 rounded-full"></div>
            </div>
            {/* Elegant text hint */}
            <div className="text-center">
              <p className="text-xs text-gray-600 font-medium tracking-wide">
                {locale === 'de' ? 'Scrollen für mehr' : 'Daha fazlası için kaydır'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}