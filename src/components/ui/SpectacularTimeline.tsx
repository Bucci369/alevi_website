"use client";

import { useState, useEffect } from 'react';
import { Locale } from "@/types";

interface SpectacularTimelineProps {
  locale: Locale;
}

interface TimelineEvent {
  id: string;
  date: string;
  title: {
    de: string;
    tr: string;
  };
  subtitle?: {
    de: string;
    tr: string;
  };
  type: 'religious' | 'memorial' | 'cultural' | 'german';
  icon: string;
  gradient: string;
}

export function SpectacularTimeline({ locale }: SpectacularTimelineProps) {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const events: TimelineEvent[] = [
    {
      id: '1',
      date: locale === 'de' ? '11. – 13. FEBRUAR 2025' : '11. – 13. ŞUBAT 2025',
      title: {
        de: 'HIZIR-FASTEN',
        tr: 'HIZIR ORUCU'
      },
      type: 'religious',
      icon: '🌙',
      gradient: 'from-amber-400 to-orange-500'
    },
    {
      id: '2',
      date: locale === 'de' ? '21. MÄRZ 2025' : '21. MART 2025',
      title: {
        de: 'NEVRUZ BAYRAM',
        tr: 'NEVRUZ BAYRAMI'
      },
      subtitle: {
        de: 'Neujahrsfest & Hz. Ali Geburtstag',
        tr: 'Yeni Yıl & Hz. Ali Doğum Günü'
      },
      type: 'religious',
      icon: '🌸',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      id: '3',
      date: locale === 'de' ? '05./06. MAI 2025' : '05./06. MAYIS 2025',
      title: {
        de: 'HIDIRELLEZ',
        tr: 'HIDIRELLEZ'
      },
      subtitle: {
        de: 'Tag des Hızır İlyas',
        tr: 'Hızır İlyas Günü'
      },
      type: 'religious',
      icon: '🌿',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      id: '4',
      date: locale === 'de' ? '02. JULI 2025' : '02. TEMMUZ 2025',
      title: {
        de: 'SIVAS GEDENKTAG',
        tr: 'SİVAS ANMA GÜNÜ'
      },
      subtitle: {
        de: '(02. Juli 1993)',
        tr: '(02 Temmuz 1993)'
      },
      type: 'memorial',
      icon: '🕯️',
      gradient: 'from-red-400 to-red-600'
    },
    {
      id: '5',
      date: locale === 'de' ? '06. – 17. AUGUST 2025' : '06. – 17. AĞUSTOS 2025',
      title: {
        de: 'MUHARREM-FASTEN',
        tr: 'MUHARREM ORUCU'
      },
      type: 'religious',
      icon: '🕊️',
      gradient: 'from-purple-400 to-indigo-500'
    },
    {
      id: '6',
      date: locale === 'de' ? '16. AUGUST 2025' : '16. AĞUSTOS 2025',
      title: {
        de: 'AŞURE GÜNÜ',
        tr: 'AŞURE GÜNÜ'
      },
      subtitle: {
        de: '(10. Muharrem)',
        tr: '(10. Muharrem)'
      },
      type: 'religious',
      icon: '🍯',
      gradient: 'from-yellow-400 to-amber-500'
    }
  ];

  // Remove the problematic useEffect for now - make all items visible
  useEffect(() => {
    setVisibleItems(new Set(['1', '2', '3', '4', '5', '6']));
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-600"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Main Timeline Line */}
      <div className="absolute left-1/2 top-16 bottom-16 w-1 bg-gray-400 transform -translate-x-1/2"></div>

      {/* Timeline Events */}
      <div className="space-y-20">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = true; // Always visible for now
          const isHovered = hoveredItem === event.id;

          return (
            <div
              key={event.id}
              id={`timeline-${event.id}`}
              className="relative"
              onMouseEnter={() => setHoveredItem(event.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <div className={`
                  relative w-6 h-6 rounded-full border-4 border-white shadow-xl
                  transition-all duration-700 ease-out
                  ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                  ${isHovered ? 'scale-125 shadow-2xl' : ''}
                  bg-gradient-to-br ${event.gradient}
                `}>
                  {/* Pulse Effect */}
                  <div className={`
                    absolute inset-0 rounded-full bg-gradient-to-br ${event.gradient} 
                    animate-ping opacity-20
                    ${isHovered ? 'opacity-40' : ''}
                  `}></div>
                  
                  {/* Remove icon for now */}
                </div>
              </div>

              {/* Event Card */}
              <div className="grid grid-cols-2 gap-0 items-center">
                {/* Left Side */}
                <div className="flex justify-end pr-6">
                  {isLeft && (
                    <div className={`
                      relative max-w-sm p-8 rounded-2xl shadow-xl border border-white/20
                      backdrop-blur-sm bg-gradient-to-br from-white/95 to-white/90
                      transition-all duration-700 ease-out transform
                      ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}
                      ${isHovered ? 'scale-105 shadow-2xl -translate-y-2' : ''}
                      hover:shadow-2xl hover:scale-105 hover:-translate-y-2
                      group cursor-pointer
                    `}>
                      {/* Gradient Border */}
                      <div className={`
                        absolute inset-0 rounded-2xl bg-gradient-to-br ${event.gradient} opacity-20
                        transition-opacity duration-300
                        ${isHovered ? 'opacity-40' : ''}
                      `}></div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-right">
                        <div className={`
                          inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3
                          bg-gradient-to-r ${event.gradient} text-white shadow-md
                        `}>
                          {event.date}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                          {event.title[locale]}
                        </h3>
                        
                        {event.subtitle && (
                          <p className="text-sm text-gray-600 opacity-80">
                            {event.subtitle[locale]}
                          </p>
                        )}
                      </div>

                      {/* Hover Effect Line */}
                      <div className={`
                        absolute top-1/2 -right-6 w-6 h-0.5 bg-gradient-to-r ${event.gradient}
                        transition-all duration-300 transform -translate-y-1/2
                        ${isHovered ? 'w-8 opacity-100' : 'w-6 opacity-50'}
                      `}></div>
                    </div>
                  )}
                </div>

                {/* Right Side */}
                <div className="flex justify-start pl-6">
                  {!isLeft && (
                    <div className={`
                      relative max-w-sm p-8 rounded-2xl shadow-xl border border-white/20
                      backdrop-blur-sm bg-gradient-to-br from-white/95 to-white/90
                      transition-all duration-700 ease-out transform
                      ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}
                      ${isHovered ? 'scale-105 shadow-2xl -translate-y-2' : ''}
                      hover:shadow-2xl hover:scale-105 hover:-translate-y-2
                      group cursor-pointer
                    `}>
                      {/* Gradient Border */}
                      <div className={`
                        absolute inset-0 rounded-2xl bg-gradient-to-br ${event.gradient} opacity-20
                        transition-opacity duration-300
                        ${isHovered ? 'opacity-40' : ''}
                      `}></div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-left">
                        <div className={`
                          inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3
                          bg-gradient-to-r ${event.gradient} text-white shadow-md
                        `}>
                          {event.date}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                          {event.title[locale]}
                        </h3>
                        
                        {event.subtitle && (
                          <p className="text-sm text-gray-600 opacity-80">
                            {event.subtitle[locale]}
                          </p>
                        )}
                      </div>

                      {/* Hover Effect Line */}
                      <div className={`
                        absolute top-1/2 -left-6 w-6 h-0.5 bg-gradient-to-l ${event.gradient}
                        transition-all duration-300 transform -translate-y-1/2
                        ${isHovered ? 'w-8 opacity-100' : 'w-6 opacity-50'}
                      `}></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
}