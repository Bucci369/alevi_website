'use client'

import { useState, useEffect } from 'react'
import { Locale } from '@/types'

interface AleviHoliday {
  id: string
  date: string
  month: number
  day: number
  name: {
    de: string
    tr: string
  }
  description: {
    de: string
    tr: string
  }
  type: 'major' | 'fasting' | 'commemoration' | 'festival'
  duration?: number
  icon: string
}

const aleviHolidays: AleviHoliday[] = [
  {
    id: 'hizir-fasten',
    date: '13-15 Februar',
    month: 2,
    day: 13,
    name: {
      de: 'Hızır-Fasten',
      tr: 'Hızır Orucu'
    },
    description: {
      de: 'Drei Tage Fasten zum Gedenken an Hızır und İlyas (Schutzpatrone zu Lande bzw. zur See)',
      tr: 'Hızır ve İlyas\'ı anmak için üç gün oruç (kara ve denizdeki koruyucu azizler)'
    },
    type: 'fasting',
    duration: 3,
    icon: '🌙'
  },
  {
    id: 'nevruz',
    date: '21. März',
    month: 3,
    day: 21,
    name: {
      de: 'Nevruz - Geburtstag Alis',
      tr: 'Nevruz - Hz. Ali\'nin Doğumu'
    },
    description: {
      de: 'Festgottesdienst zu Ehren des Heiligen Ali ibn Abi Talib',
      tr: 'Hz. Ali ibn Ebi Talib\'i onurlandıran bayram ayini'
    },
    type: 'major',
    icon: '🌸'
  },
  {
    id: 'hidrellez',
    date: '5-6. Mai',
    month: 5,
    day: 5,
    name: {
      de: 'Hıdırellez',
      tr: 'Hıdrellez'
    },
    description: {
      de: 'In dieser Nacht wird um die Genesung und Gesundheit der Kranken gebetet',
      tr: 'Bu gecede hasta olanların şifası ve sağlığı için dua edilir'
    },
    type: 'festival',
    duration: 2,
    icon: '🌿'
  },
  {
    id: 'abdal-musa',
    date: '6-7. Juni',
    month: 6,
    day: 6,
    name: {
      de: 'Abdal Musa Gedenkfest',
      tr: 'Abdal Musa Anma Günü'
    },
    description: {
      de: 'Gedenken an Abdal Musa, Schüler von Hacı Bektaş Veli',
      tr: 'Hacı Bektaş Veli\'nin öğrencisi Abdal Musa\'yı anma'
    },
    type: 'commemoration',
    duration: 2,
    icon: '📿'
  },
  {
    id: 'haci-bektas',
    date: '16-18. August',
    month: 8,
    day: 16,
    name: {
      de: 'Hacı Bektaş Veli Festival',
      tr: 'Hacı Bektaş Veli Festivali'
    },
    description: {
      de: 'Großes Festival zu Ehren des direkten Nachfahren der Prophetenfamilie',
      tr: 'Peygamber ailesinin doğrudan soyundan gelen azizi onurlandıran büyük festival'
    },
    type: 'major',
    duration: 3,
    icon: '🕌'
  },
  {
    id: 'huseyin-sehit',
    date: '10. Oktober',
    month: 10,
    day: 10,
    name: {
      de: 'Tod des Heiligen Hüseyin',
      tr: 'Hz. Hüseyin\'in Şehadeti'
    },
    description: {
      de: 'Gedenken an den Märtyrertod Hüseyins und Erinnerung an die Bekämpfung der Unterdrückung',
      tr: 'Hz. Hüseyin\'in şehadetini anma ve zulmün karşısında durmayı hatırlama'
    },
    type: 'commemoration',
    icon: '🕯️'
  },
  {
    id: 'muharrem',
    date: 'Muharrem (12 Tage)',
    month: 1,
    day: 1,
    name: {
      de: 'Muharrem-Fasten',
      tr: 'Muharrem Orucu'
    },
    description: {
      de: 'Gedenken an das Martyrium von Kerbela; 12-tägige Trauer- und Fastenzeit',
      tr: 'Kerbela şehadetini anma; 12 günlük yas ve oruç dönemi'
    },
    type: 'fasting',
    duration: 12,
    icon: '⚫'
  },
  {
    id: 'asure',
    date: 'Ende Muharrem',
    month: 1,
    day: 12,
    name: {
      de: 'Aşure',
      tr: 'Aşure'
    },
    description: {
      de: 'Symbol der Dankbarkeit für das Überleben des Imam Zeynel Abidin; Abschluss des Muharrem-Fastens',
      tr: 'İmam Zeynel Abidin\'in hayatta kalışı için şükran simgesi; Muharrem orucunun sonu'
    },
    type: 'festival',
    icon: '🍯'
  }
]

interface AleviCalendarProps {
  locale: Locale
}

export default function AleviCalendar({ locale }: AleviCalendarProps) {
  const [selectedHoliday, setSelectedHoliday] = useState<AleviHoliday | null>(null)
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)

  // Sortiere Feiertage nach Monat für Timeline
  const sortedHolidays = aleviHolidays.sort((a, b) => {
    if (a.month === b.month) {
      return a.day - b.day
    }
    return a.month - b.month
  })

  // Filtere Feiertage nach ausgewähltem Monat
  const filteredHolidays = selectedMonth 
    ? sortedHolidays.filter(holiday => holiday.month === selectedMonth)
    : sortedHolidays

  // Funktion zum Umschalten der Monatsauswahl
  const handleMonthClick = (monthNum: number) => {
    setSelectedMonth(selectedMonth === monthNum ? null : monthNum)
    setSelectedHoliday(null) // Schließe Feiertag-Details beim Monatswechsel
  }

  // Prüfe ob ein Monat Feiertage hat
  const hasHolidays = (monthNum: number) => {
    return aleviHolidays.some(holiday => holiday.month === monthNum)
  }

  const months = [
    { num: 1, de: 'Januar', tr: 'Ocak' },
    { num: 2, de: 'Februar', tr: 'Şubat' },
    { num: 3, de: 'März', tr: 'Mart' },
    { num: 4, de: 'April', tr: 'Nisan' },
    { num: 5, de: 'Mai', tr: 'Mayıs' },
    { num: 6, de: 'Juni', tr: 'Haziran' },
    { num: 7, de: 'Juli', tr: 'Temmuz' },
    { num: 8, de: 'August', tr: 'Ağustos' },
    { num: 9, de: 'September', tr: 'Eylül' },
    { num: 10, de: 'Oktober', tr: 'Ekim' },
    { num: 11, de: 'November', tr: 'Kasım' },
    { num: 12, de: 'Dezember', tr: 'Aralık' }
  ]

  const getTypeColor = (type: string) => {
    // Verbesserte Glaseffekte mit besserem Kontrast für Lesbarkeit
    return 'bg-white/30 backdrop-blur-md border-white/50 shadow-xl hover:bg-white/40'
  }

  const getTypeText = (type: string) => {
    const types = {
      major: { de: 'Hauptfeiertag', tr: 'Ana Bayram' },
      fasting: { de: 'Fastenzeit', tr: 'Oruç Dönemi' },
      commemoration: { de: 'Gedenktag', tr: 'Anma Günü' },
      festival: { de: 'Festival', tr: 'Festival' }
    }
    return types[type as keyof typeof types]?.[locale] || type
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4 text-shadow-lg">
          {locale === 'de' ? 'Alevitischer Festkalender' : 'Alevi Bayram Takvimi'}
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto text-shadow-lg">
          {locale === 'de' 
            ? 'Entdecken Sie die wichtigsten religiösen Feiertage und Gedenktage des alevitischen Glaubens im Jahresverlauf'
            : 'Alevi inancının önemli dini bayramlarını ve anma günlerini yıl boyunca keşfedin'
          }
        </p>
      </div>

      {/* Timeline Container */}
      <div className="alevi-calendar-timeline relative">
        {/* Timeline Line */}
        <div className="alevi-calendar-timeline-line absolute top-16 left-8 right-8 h-1 bg-gradient-to-r from-emerald-200 via-blue-200 to-emerald-200 rounded-full"></div>

        {/* Months */}
        <div className="alevi-calendar-months flex justify-between items-start mb-8 px-8">
          {months.map((month) => {
            const isSelected = selectedMonth === month.num
            const isCurrentMonth = currentMonth === month.num
            const monthHasHolidays = hasHolidays(month.num)
            
            return (
              <div 
                key={month.num} 
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 p-2 rounded-lg ${
                  monthHasHolidays ? 'hover:bg-blue-50' : 'opacity-60 cursor-not-allowed'
                }`}
                onClick={() => monthHasHolidays && handleMonthClick(month.num)}
              >
                <div className={`w-4 h-4 rounded-full border-2 mb-2 transition-all duration-300 ${
                  isSelected 
                    ? 'bg-blue-600 border-blue-700 ring-2 ring-blue-200' 
                    : isCurrentMonth 
                      ? 'bg-blue-500 border-blue-600' 
                      : monthHasHolidays
                        ? 'bg-white border-gray-300 hover:border-blue-400'
                        : 'bg-gray-100 border-gray-200'
                }`}></div>
                <span className={`text-xs font-medium text-center transition-colors duration-300 text-shadow-lg ${
                  isSelected 
                    ? 'text-white font-bold' 
                    : monthHasHolidays 
                      ? 'text-gray-100 hover:text-white' 
                      : 'text-gray-500'
                }`}>
                  {month[locale]}
                </span>
                {monthHasHolidays && (
                  <div className="mt-1">
                    <span className="text-xs text-blue-200 font-bold bg-blue-900/50 px-1 rounded">
                      {aleviHolidays.filter(h => h.month === month.num).length}
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Holiday Events */}
        <div className="relative">
          {/* Filter Info */}
          {selectedMonth && (
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg">
                <span className="text-white font-medium text-shadow-lg">
                  {locale === 'de' ? 'Gefiltert nach:' : 'Filtrelendi:'} {months.find(m => m.num === selectedMonth)?.[locale]}
                </span>
                <button
                  onClick={() => setSelectedMonth(null)}
                  className="text-white hover:text-gray-200 ml-2 hover:bg-white/20 rounded-full p-1 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
          
          <div className="alevi-calendar-events flex flex-wrap gap-4 justify-center">
            {filteredHolidays.length > 0 ? (
              filteredHolidays.map((holiday, index) => (
                <div
                  key={holiday.id}
                  className={`alevi-calendar-event-card relative group cursor-pointer transition-all duration-300 hover:scale-105`}
                  onClick={() => setSelectedHoliday(selectedHoliday?.id === holiday.id ? null : holiday)}
                >
                  {/* Holiday Card */}
                  <div className={`p-4 rounded-lg border-2 shadow-xl min-w-[200px] ${getTypeColor(holiday.type)} text-gray-900 transition-all duration-300`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{holiday.icon}</span>
                      <div>
                        <h3 className="font-bold text-sm leading-tight text-gray-900">
                          {holiday.name[locale]}
                        </h3>
                        <p className="text-xs text-gray-700 font-medium">
                          {holiday.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {getTypeText(holiday.type)}
                      {holiday.duration && (
                        <span className="ml-1">
                          ({holiday.duration} {locale === 'de' ? 'Tage' : 'gün'})
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Connecting Line to Timeline */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-px h-8 bg-gray-300"></div>
                </div>
              ))
            ) : selectedMonth ? (
              <div className="text-center py-8">
                <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 border border-white/30 shadow-lg">
                  <div className="text-gray-200 text-lg mb-2">📅</div>
                  <p className="text-white font-medium text-shadow-lg">
                    {locale === 'de' 
                      ? `Keine Feiertage im ${months.find(m => m.num === selectedMonth)?.[locale]}`
                      : `${months.find(m => m.num === selectedMonth)?.[locale]} ayında bayram yok`
                    }
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Selected Holiday Details */}
        {selectedHoliday && (
          <div className="mt-12 p-6 bg-white/25 backdrop-blur-md rounded-lg shadow-2xl border border-white/40 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="text-4xl">{selectedHoliday.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white text-shadow-lg">
                    {selectedHoliday.name[locale]}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-sm font-medium text-gray-900 bg-white/30 backdrop-blur-md border border-white/50">
                    {getTypeText(selectedHoliday.type)}
                  </span>
                </div>
                <p className="text-gray-100 mb-4 text-shadow-lg">
                  {selectedHoliday.description[locale]}
                </p>
                <div className="flex gap-4 text-sm text-gray-200">
                  <span>📅 {selectedHoliday.date}</span>
                  {selectedHoliday.duration && (
                    <span>⏱️ {selectedHoliday.duration} {locale === 'de' ? 'Tage' : 'gün'}</span>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelectedHoliday(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {['major', 'fasting', 'commemoration', 'festival'].map((type) => (
            <div key={type} className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-2 rounded-lg border border-white/30">
              <div className="w-4 h-4 rounded bg-white/40 backdrop-blur-md border border-white/50"></div>
              <span className="text-sm text-white font-medium text-shadow-lg">
                {getTypeText(type)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
