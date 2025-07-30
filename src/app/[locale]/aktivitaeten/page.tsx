import { EventCard } from '@/components/ui/EventCard'
import { Locale, Event } from '@/types'
import { translations } from '@/lib/i18n/config'

interface ActivitiesPageProps {
  params: Promise<{ locale: Locale }>
}

// Echte Events von der Website
const realEvents: Event[] = [
  {
    id: '1',
    title: {
      de: '2025 Yılbaşı Eğlencesi',
      tr: '2025 Yılbaşı Eğlencesi'
    },
    description: {
      de: 'Gemeinsame Silvesterfeier zum Jahreswechsel 2024/2025. Ein Abend voller Musik, Tanz und Gemeinschaft.',
      tr: '2024/2025 yılbaşı geçişi için ortak kutlama. Müzik, dans ve topluluk dolu bir gece.'
    },
    date: new Date('2024-12-31T20:00:00'),
    location: {
      venue: 'Gemeindezentrum Dortmund',
      address: 'Bayrische Str. 113, 44339 Dortmund'
    },
    category: {
      id: 'social',
      name: { de: 'Gesellschaftlich', tr: 'Sosyal' },
      color: '#10b981'
    },
    slug: '2025-yilbasi-eglencesi'
  },
  {
    id: '2',
    title: {
      de: 'Kahvaltı - Gemeinschaftsfrühstück',
      tr: 'Kahvaltı - Topluluk Kahvaltısı'
    },
    description: {
      de: 'Traditionelles Gemeinschaftsfrühstück am Sonntagmorgen. Alle Mitglieder und Interessierte sind herzlich eingeladen.',
      tr: 'Pazar sabahı geleneksel topluluk kahvaltısı. Tüm üyeler ve ilgililer davetlidir.'
    },
    date: new Date('2025-01-19T10:00:00'),
    location: {
      venue: 'Gemeindezentrum Dortmund',
      address: 'Bayrische Str. 113, 44339 Dortmund'
    },
    category: {
      id: 'social',
      name: { de: 'Gesellschaftlich', tr: 'Sosyal' },
      color: '#10b981'
    },
    slug: 'kahvalti-gemeinschaftsfruehstueck'
  },
  {
    id: '3',
    title: {
      de: '8 Mart Kadınlar Günü',
      tr: '8 Mart Kadınlar Günü'
    },
    description: {
      de: 'Feier zum Internationalen Frauentag mit kulturellem Programm und Diskussionsrunden.',
      tr: 'Kültürel program ve tartışma turları ile Uluslararası Kadınlar Günü kutlaması.'
    },
    date: new Date('2025-03-08T15:00:00'),
    location: {
      venue: 'Kulturzentrum Dortmund',
      address: 'Hansastraße 2-4, 44137 Dortmund'
    },
    category: {
      id: 'cultural',
      name: { de: 'Kulturell', tr: 'Kültürel' },
      color: '#e91e63'
    },
    slug: '8-mart-kadinlar-gunu'
  },
  {
    id: '4',
    title: {
      de: '15 Mart Köln Event',
      tr: '15 Mart Köln Etkinliği'
    },
    description: {
      de: 'Gemeinsame Fahrt nach Köln zu einer besonderen Veranstaltung der alevitischen Gemeinschaft.',
      tr: 'Alevi topluluğunun özel bir etkinliği için Köln\'e ortak gezi.'
    },
    date: new Date('2025-03-15T12:00:00'),
    location: {
      venue: 'Köln',
      address: 'Köln, Deutschland'
    },
    category: {
      id: 'community',
      name: { de: 'Gemeinschaft', tr: 'Topluluk' },
      color: '#3b82f6'
    },
    slug: '15-mart-koln-event'
  },
  {
    id: '5',
    title: {
      de: 'Nevruz Bayramı 2025',
      tr: 'Nevruz Bayramı 2025'
    },
    description: {
      de: 'Das wichtigste Fest der Aleviten - Nevruz (Neujahrsfest). Feier mit traditioneller Musik, Tanz und gemeinsamen Essen.',
      tr: 'Alevilerin en önemli bayramı - Nevruz (Yeni Yıl Bayramı). Geleneksel müzik, dans ve ortak yemek ile kutlama.'
    },
    date: new Date('2025-03-21T14:00:00'),
    location: {
      venue: 'Gemeindezentrum Dortmund',
      address: 'Bayrische Str. 113, 44339 Dortmund'
    },
    category: {
      id: 'religious',
      name: { de: 'Religiös', tr: 'Dini' },
      color: '#f59e0b'
    },
    slug: 'nevruz-bayrami-2025'
  },
  {
    id: '6',
    title: {
      de: 'Hızır Cemi',
      tr: 'Hızır Cemi'
    },
    description: {
      de: 'Religiöse Zeremonie zu Ehren des Heiligen Hızır. Ein wichtiger spiritueller Anlass für die Gemeinde.',
      tr: 'Hızır Efendi onuruna dini tören. Cemaat için önemli bir ruhani vesile.'
    },
    date: new Date('2025-05-05T18:00:00'),
    location: {
      venue: 'Cemevi - Gemeindezentrum',
      address: 'Bayrische Str. 113, 44339 Dortmund'
    },
    category: {
      id: 'religious',
      name: { de: 'Religiös', tr: 'Dini' },
      color: '#f59e0b'
    },
    slug: 'hizir-cemi'
  },
  {
    id: '7',
    title: {
      de: 'Hızır Orucu',
      tr: 'Hızır Orucu'
    },
    description: {
      de: 'Traditionelle Fastenzeit zu Ehren von Hızır. Eine Zeit der Besinnung und spirituellen Reinigung.',
      tr: 'Hızır onuruna geleneksel oruç. Düşünce ve ruhani arınma zamanı.'
    },
    date: new Date('2025-02-13T09:00:00'),
    location: {
      venue: 'Cemevi - Gemeindezentrum',
      address: 'Bayrische Str. 113, 44339 Dortmund'
    },
    category: {
      id: 'religious',
      name: { de: 'Religiös', tr: 'Dini' },
      color: '#f59e0b'
    },
    slug: 'hizir-orucu'
  },
  {
    id: '8',
    title: {
      de: 'Pir Sultan Abdal Film Screening',
      tr: 'Pir Sultan Abdal Film Gösterimi'
    },
    description: {
      de: 'Filmvorführung über das Leben und Werk des großen alevitischen Dichters und Philosophen Pir Sultan Abdal.',
      tr: 'Büyük Alevi şairi ve filozofu Pir Sultan Abdal\'ın hayatı ve eserlerine dair film gösterimi.'
    },
    date: new Date('2025-04-15T19:00:00'),
    location: {
      venue: 'Kulturzentrum Dortmund',
      address: 'Hansastraße 2-4, 44137 Dortmund'
    },
    category: {
      id: 'cultural',
      name: { de: 'Kulturell', tr: 'Kültürel' },
      color: '#8b5cf6'
    },
    slug: 'pir-sultan-abdal-film-screening'
  },
  {
    id: '9',
    title: {
      de: 'Leseclub Çocuk Klübü',
      tr: 'Çocuk Okuma Kulübü'
    },
    description: {
      de: 'Regelmäßiger Leseclub für Kinder zur Förderung der Sprache und Kultur. Zweisprachige Aktivitäten.',
      tr: 'Dil ve kültürü desteklemek için çocuklar için düzenli okuma kulübü. İki dilli etkinlikler.'
    },
    date: new Date('2025-02-08T15:00:00'),
    location: {
      venue: 'Gemeindezentrum - Jugendraum',
      address: 'Bayrische Str. 113, 44339 Dortmund'
    },
    category: {
      id: 'education',
      name: { de: 'Bildung', tr: 'Eğitim' },
      color: '#06b6d4'
    },
    slug: 'leseclub-cocuk-klubu'
  }
]

export default async function ActivitiesPage({ params }: ActivitiesPageProps) {
  const { locale } = await params
  const t = translations[locale]

  // Sort events by date
  const sortedEvents = [...realEvents].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  const upcomingEvents = sortedEvents.filter(event => new Date(event.date) > new Date())
  const pastEvents = sortedEvents.filter(event => new Date(event.date) <= new Date())

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.events.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {locale === 'de' 
              ? 'Entdecken Sie unsere vielfältigen Veranstaltungen'
              : 'Çeşitli etkinliklerimizi keşfedin'
            }
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">
                {locale === 'de' ? 'Alle Veranstaltungen' : 'Tüm Etkinlikler'}
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder={locale === 'de' ? 'Veranstaltung suchen...' : 'Etkinlik ara...'}
                  className="pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>
              
              {/* Filter */}
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span>{locale === 'de' ? 'Filter' : 'Filtre'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t.events.upcoming}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t.events.past}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Event Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {locale === 'de' ? 'Veranstaltungskategorien' : 'Etkinlik Kategorileri'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">
                {locale === 'de' ? 'Religiöse Feiern' : 'Dini Kutlamalar'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'de' ? 'Nevruz, Hızır Cemi und andere' : 'Nevruz, Hızır Cemi ve diğerleri'}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">
                {locale === 'de' ? 'Kulturelle Events' : 'Kültürel Etkinlikler'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'de' ? 'Filmvorführungen, Konzerte' : 'Film gösterimleri, konserler'}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">
                {locale === 'de' ? 'Gemeinschaftsaktivitäten' : 'Topluluk Faaliyetleri'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'de' ? 'Frühstück, Ausflüge' : 'Kahvaltı, geziler'}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">
                {locale === 'de' ? 'Bildungsangebote' : 'Eğitim Programları'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'de' ? 'Leseclubs, Workshops' : 'Okuma kulüpleri, atölyeler'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}