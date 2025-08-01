"use client";

import { Locale } from "@/types";

interface AleviTimelineCalendarProps {
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
}

export function AleviTimelineCalendar({ locale }: AleviTimelineCalendarProps) {
  const events: TimelineEvent[] = [
    {
      id: '1',
      date: locale === 'de' ? '11. – 13. FEBRUAR 2025' : '11. – 13. ŞUBAT 2025',
      title: {
        de: 'HIZIR-FASTEN',
        tr: 'HIZIR ORUCU'
      },
      type: 'religious'
    },
    {
      id: '2',
      date: locale === 'de' ? '21. MÄRZ 2025' : '21. MART 2025',
      title: {
        de: 'NEVRUZ - GEBURTSTAG DES HEILIGEN (HZ.) ALI',
        tr: 'NEVRUZ - HZ. ALİ\'NİN DOĞUM GÜNÜ'
      },
      subtitle: {
        de: '(21 März 598)',
        tr: '(21 Mart 598)'
      },
      type: 'religious'
    },
    {
      id: '3',
      date: locale === 'de' ? '21. MÄRZ 2025' : '21. MART 2025',
      title: {
        de: 'TODESTAG DES HEILIGEN (HZ.) ALI',
        tr: 'HZ. ALİ\'NİN ÖLÜM GÜNÜ'
      },
      subtitle: {
        de: '(21. Ramazan 40 Hidschra-Mondkalender)',
        tr: '(21. Ramazan 40 Hicri Ay Takvimi)'
      },
      type: 'religious'
    },
    {
      id: '4',
      date: locale === 'de' ? '05./06. MAI 2025' : '05./06. MAYIS 2025',
      title: {
        de: 'TAG DES HIZIR ILYAS (HIDIRELLEZ)',
        tr: 'HIZIR İLYAS GÜNÜ (HIDIRELLEZ)'
      },
      type: 'religious'
    },
    {
      id: '5',
      date: locale === 'de' ? '06. JUNI 2025' : '06. HAZİRAN 2025',
      title: {
        de: 'OPFERFEST',
        tr: 'KURBAN BAYRAMI'
      },
      type: 'religious'
    },
    {
      id: '6',
      date: locale === 'de' ? '02. JULI 2025' : '02. TEMMUZ 2025',
      title: {
        de: 'GEDENKTAG VON SIVAS',
        tr: 'SİVAS KATLİAMI ANMA GÜNÜ'
      },
      subtitle: {
        de: '(02. Juli 1993)',
        tr: '(02 Temmuz 1993)'
      },
      type: 'memorial'
    },
    {
      id: '7',
      date: locale === 'de' ? '06. – 17. AUGUST 2025' : '06. – 17. AĞUSTOS 2025',
      title: {
        de: 'MUHARREM-FASTEN',
        tr: 'MUHARREM ORUCU'
      },
      type: 'religious'
    },
    {
      id: '8',
      date: locale === 'de' ? '16. AUGUST 2025' : '16. AĞUSTOS 2025',
      title: {
        de: 'AŞURE GÜNÜ',
        tr: 'AŞURE GÜNÜ'
      },
      subtitle: {
        de: '(10. Muharrem)',
        tr: '(10. Muharrem)'
      },
      type: 'religious'
    },
    {
      id: '9',
      date: locale === 'de' ? '16. SEPTEMBER 2025' : '16. EYLÜL 2025',
      title: {
        de: 'HACI BEKTAŞ-I VELI GEDENKTAG',
        tr: 'HACI BEKTAŞ-I VELİ ANMA GÜNÜ'
      },
      type: 'religious'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full"></div>
        
        {/* Timeline Events */}
        <div className="space-y-16">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div key={event.id} className="relative grid grid-cols-2 gap-0 items-center">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-700 rounded-full border-4 border-white shadow-lg z-20"></div>
                
                {/* Left Column */}
                <div className="flex justify-end pr-4">
                  {isLeft && (
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-sm text-right">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        {event.date}
                      </h3>
                      <h4 className="text-base font-semibold text-gray-800 leading-tight">
                        {event.title[locale]}
                      </h4>
                      {event.subtitle && (
                        <p className="text-sm text-gray-600 mt-2">
                          {event.subtitle[locale]}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Right Column */}
                <div className="flex justify-start pl-4">
                  {!isLeft && (
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-sm text-left">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
                        {event.date}
                      </h3>
                      <h4 className="text-base font-semibold text-gray-800 leading-tight">
                        {event.title[locale]}
                      </h4>
                      {event.subtitle && (
                        <p className="text-sm text-gray-600 mt-2">
                          {event.subtitle[locale]}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}