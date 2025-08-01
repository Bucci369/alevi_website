"use client";

import { Locale } from "@/types";

interface ProperTimelineProps {
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
}

export function ProperTimeline({ locale }: ProperTimelineProps) {
  const events: TimelineEvent[] = [
    {
      id: '1',
      date: locale === 'de' ? '11. – 13. FEBRUAR 2025' : '11. – 13. ŞUBAT 2025',
      title: {
        de: 'HIZIR-FASTEN',
        tr: 'HIZIR ORUCU'
      }
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
      }
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
      }
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
      }
    },
    {
      id: '5',
      date: locale === 'de' ? '06. – 17. AUGUST 2025' : '06. – 17. AĞUSTOS 2025',
      title: {
        de: 'MUHARREM-FASTEN',
        tr: 'MUHARREM ORUCU'
      }
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
      }
    }
  ];

  return (
    <div className="relative max-w-6xl mx-auto py-16">
      {/* Timeline Line - SICHTBAR */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-400 h-full"></div>
      
      {/* Timeline Events */}
      <div className="space-y-16">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          console.log(`Event ${index}: ${event.title.de} - isLeft: ${isLeft}`);
          
          return (
            <div key={event.id} className="relative">
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-gray-600 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* FUCK IT - HARDCORE FIX */}
              {isLeft ? (
                // LEFT SIDE EVENT
                <div className="flex">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-red-100 p-6 rounded-lg shadow-md border max-w-sm ml-auto">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase">
                        {event.date}
                      </h3>
                      <h4 className="text-base font-semibold text-gray-800">
                        {event.title[locale]}
                      </h4>
                      {event.subtitle && (
                        <p className="text-sm text-gray-600 mt-2">
                          {event.subtitle[locale]}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ) : (
                // RIGHT SIDE EVENT  
                <div className="flex">
                  <div className="w-1/2"></div>
                  <div className="w-1/2 pl-8 text-left">
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md border max-w-sm mr-auto">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase">
                        {event.date}
                      </h3>
                      <h4 className="text-base font-semibold text-gray-800">
                        {event.title[locale]}
                      </h4>
                      {event.subtitle && (
                        <p className="text-sm text-gray-600 mt-2">
                          {event.subtitle[locale]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}