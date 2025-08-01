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
        className="h-screen flex items-start justify-center text-center bg-gradient-to-br from-blue-50 via-white to-blue-100 transition-transform duration-100 ease-out relative overflow-hidden pt-16"
      >
        {/* Hero Title - Centered */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-2">
              {locale === 'de' ? 'Alevitischer Kalender' : 'Alevi Takvimi'}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-700">
              {new Date().getFullYear()} - {locale === 'de' ? 'Religiöse Feiertage & Traditionen' : 'Dini Bayramlar & Gelenekler'}
            </p>
          </div>
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