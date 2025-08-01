"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import { Locale } from "@/types";
import { format } from "date-fns";
import { de, tr } from "date-fns/locale";

interface AleviCalendarListProps {
  locale: Locale;
}

interface CalendarEvent {
  id: string;
  date: Date;
  title: {
    de: string;
    tr: string;
  };
  description: {
    de: string;
    tr: string;
  };
  type: 'religious' | 'memorial' | 'cultural' | 'german';
  location?: string;
}

export function AleviCalendarList({ locale }: AleviCalendarListProps) {
  const dateLocale = locale === 'de' ? de : tr;

  const events: CalendarEvent[] = [
    {
      id: '1',
      date: new Date('2025-01-01'),
      title: {
        de: 'Neujahr',
        tr: 'Yeni Yıl'
      },
      description: {
        de: 'Gesetzlicher Feiertag in Deutschland',
        tr: 'Almanya\'da resmi tatil'
      },
      type: 'german'
    },
    {
      id: '2',
      date: new Date('2025-02-13'),
      title: {
        de: 'Hızır Orucu (Beginn)',
        tr: 'Hızır Orucu (Başlangıç)'
      },
      description: {
        de: 'Beginn der dreiwöchigen Fastenzeit zu Ehren von Hızır',
        tr: 'Hızır onuruna üç haftalık oruç döneminin başlangıcı'
      },
      type: 'religious',
      location: 'Cemevi'
    },
    {
      id: '3',
      date: new Date('2025-03-05'),
      title: {
        de: 'Hızır Orucu (Ende)',
        tr: 'Hızır Orucu (Bitiş)'
      },
      description: {
        de: 'Ende der Fastenzeit und Feier zu Ehren von Hızır',
        tr: 'Oruç döneminin sonu ve Hızır onuruna kutlama'
      },
      type: 'religious',
      location: 'Cemevi'
    },
    {
      id: '4',
      date: new Date('2025-03-21'),
      title: {
        de: 'Nevruz Bayramı',
        tr: 'Nevruz Bayramı'
      },
      description: {
        de: 'Das wichtigste Fest der Aleviten - Neujahrsfest und Frühlingsanfang',
        tr: 'Alevilerin en önemli bayramı - Yeni yıl bayramı ve baharın başlangıcı'
      },
      type: 'religious',
      location: 'Cemevi'
    },
    {
      id: '5',
      date: new Date('2025-04-18'),
      title: {
        de: 'Karfreitag',
        tr: 'Büyük Cuma'
      },
      description: {
        de: 'Gesetzlicher Feiertag in Deutschland',
        tr: 'Almanya\'da resmi tatil'
      },
      type: 'german'
    },
    {
      id: '6',
      date: new Date('2025-04-21'),
      title: {
        de: 'Ostermontag',
        tr: 'Paskalya Pazartesi'
      },
      description: {
        de: 'Gesetzlicher Feiertag in Deutschland',
        tr: 'Almanya\'da resmi tatil'
      },
      type: 'german'
    },
    {
      id: '7',
      date: new Date('2025-05-01'),
      title: {
        de: 'Tag der Arbeit',
        tr: 'İşçi Bayramı'
      },
      description: {
        de: 'Gesetzlicher Feiertag in Deutschland',
        tr: 'Almanya\'da resmi tatil'
      },
      type: 'german'
    },
    {
      id: '8',
      date: new Date('2025-05-05'),
      title: {
        de: 'Hıdırellez / Hızır Cemi',
        tr: 'Hıdırellez / Hızır Cemi'
      },
      description: {
        de: 'Frühlingsfest zu Ehren von Hızır und İlyas',
        tr: 'Hızır ve İlyas onuruna bahar bayramı'
      },
      type: 'religious',
      location: 'Cemevi'
    },
    {
      id: '9',
      date: new Date('2025-05-29'),
      title: {
        de: 'Christi Himmelfahrt',
        tr: 'İsa\'nın Göğe Yükselişi'
      },
      description: {
        de: 'Gesetzlicher Feiertag in Deutschland',
        tr: 'Almanya\'da resmi tatil'
      },
      type: 'german'
    },
    {
      id: '10',
      date: new Date('2025-06-09'),
      title: {
        de: 'Pfingstmontag',
        tr: 'Pentekost Pazartesi'
      },
      description: {
        de: 'Gesetzlicher Feiertag in Deutschland',
        tr: 'Almanya\'da resmi tatil'
      },
      type: 'german'
    },
    {
      id: '11',
      date: new Date('2025-06-16'),
      title: {
        de: 'Abdal Musa Gedenktag',
        tr: 'Abdal Musa Anma Günü'
      },
      description: {
        de: 'Gedenken an den großen alevitischen Heiligen Abdal Musa',
        tr: 'Büyük Alevi ereni Abdal Musa\'yı anma'
      },
      type: 'religious'
    },
    {
      id: '12',
      date: new Date('2025-07-02'),
      title: {
        de: 'Gedenktag von Sivas',
        tr: 'Sivas Katliamı Anma Günü'
      },
      description: {
        de: 'Gedenken an die Opfer des Sivas-Massakers von 1993',
        tr: '1993 Sivas Katliamı kurbanlarını anma günü'
      },
      type: 'memorial'
    },
    {
      id: '13',
      date: new Date('2025-08-11'),
      title: {
        de: 'Muharrem-Fasten (Beginn)',
        tr: 'Muharrem Orucu (Başlangıç)'
      },
      description: {
        de: 'Beginn der zwölftägigen Trauerzeit für İmam Hüseyin',
        tr: 'İmam Hüseyin için on iki günlük yas döneminin başlangıcı'
      },
      type: 'religious',
      location: 'Cemevi'
    },
    {
      id: '14',
      date: new Date('2025-08-22'),
      title: {
        de: 'Aşure Günü',
        tr: 'Aşure Günü'
      },
      description: {
        de: 'Höhepunkt des Muharrem-Fastens, Gedenken an İmam Hüseyin',
        tr: 'Muharrem orucunun doruk noktası, İmam Hüseyin\'i anma'
      },
      type: 'religious',
      location: 'Cemevi'
    },
    {
      id: '15',
      date: new Date('2025-09-16'),
      title: {
        de: 'Hacı Bektaş-ı Veli Gedenktag',
        tr: 'Hacı Bektaş-ı Veli Anma Günü'
      },
      description: {
        de: 'Gedenken an den großen alevitischen Philosophen und Mystiker',
        tr: 'Büyük Alevi filozof ve mutasavvıfını anma'
      },
      type: 'religious'
    },
    {
      id: '16',
      date: new Date('2025-10-03'),
      title: {
        de: 'Tag der Deutschen Einheit',
        tr: 'Alman Birliği Günü'
      },
      description: {
        de: 'Gesetzlicher Feiertag in Deutschland',
        tr: 'Almanya\'da resmi tatil'
      },
      type: 'german'
    },
    {
      id: '17',
      date: new Date('2025-12-25'),
      title: {
        de: 'Weihnachten',
        tr: 'Noel'
      },
      description: {
        de: 'Gesetzlicher Feiertag in Deutschland',
        tr: 'Almanya\'da resmi tatil'
      },
      type: 'german'
    },
    {
      id: '18',
      date: new Date('2025-12-26'),
      title: {
        de: '2. Weihnachtsfeiertag',
        tr: '2. Noel Günü'
      },
      description: {
        de: 'Gesetzlicher Feiertag in Deutschland',
        tr: 'Almanya\'da resmi tatil'
      },
      type: 'german'
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'religious':
        return 'bg-amber-50 border-amber-200 text-amber-800';
      case 'memorial':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'cultural':
        return 'bg-purple-50 border-purple-200 text-purple-800';
      case 'german':
        return 'bg-gray-50 border-gray-200 text-gray-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'religious':
        return '☪️';
      case 'memorial':
        return '🕯️';
      case 'cultural':
        return '🎭';
      case 'german':
        return '🇩🇪';
      default:
        return '📅';
    }
  };

  const sortedEvents = events.sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {sortedEvents.map((event) => (
          <div
            key={event.id}
            className={`rounded-xl border p-6 ${getEventTypeColor(event.type)} hover:shadow-md transition-shadow duration-200`}
          >
            <div className="flex items-start gap-4">
              {/* Date Badge */}
              <div className="flex-shrink-0">
                <div className="bg-white rounded-lg p-3 text-center shadow-sm border">
                  <div className="text-2xl font-bold text-gray-900">
                    {format(event.date, 'dd', { locale: dateLocale })}
                  </div>
                  <div className="text-sm font-medium text-gray-600 uppercase">
                    {format(event.date, 'MMM', { locale: dateLocale })}
                  </div>
                  <div className="text-xs text-gray-500">
                    {format(event.date, 'yyyy')}
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{getEventTypeIcon(event.type)}</span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {event.title[locale]}
                  </h3>
                </div>

                <p className="text-gray-700 mb-3 leading-relaxed">
                  {event.description[locale]}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {format(event.date, 'EEEE, dd. MMMM yyyy', { locale: dateLocale })}
                    </span>
                  </div>

                  {event.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-12 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {locale === 'de' ? 'Legende' : 'Açıklama'}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">☪️</span>
            <span className="text-sm text-gray-700">
              {locale === 'de' ? 'Religiöse Feiertage' : 'Dini Bayramlar'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🕯️</span>
            <span className="text-sm text-gray-700">
              {locale === 'de' ? 'Gedenktage' : 'Anma Günleri'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🎭</span>
            <span className="text-sm text-gray-700">
              {locale === 'de' ? 'Kulturelle Events' : 'Kültürel Etkinlikler'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🇩🇪</span>
            <span className="text-sm text-gray-700">
              {locale === 'de' ? 'Deutsche Feiertage' : 'Alman Bayramları'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}