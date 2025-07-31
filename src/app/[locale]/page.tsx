import { EventCard } from '@/components/ui/EventCard'
import { AuroraBackgroundDemo } from '@/components/ui/aurora-background-demo'
import { DemoOne } from '@/components/ui/parallax-demo'
import { Locale, Event } from '@/types'
import { translations } from '@/lib/i18n/config'
import Link from 'next/link'

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

// Echte Events basierend auf der aktuellen Website
const currentEvents: Event[] = [
  {
    id: '1',
    title: {
      de: 'Leseclub Çocuk Klübü',
      tr: 'Leseclub Çocuk Klübü'
    },
    description: {
      de: 'Lese- und Bildungsaktivitäten für Kinder zur Förderung der Sprach- und Kulturkenntnisse.',
      tr: 'Çocuklar için dil ve kültür bilgisini geliştirici okuma ve eğitim faaliyetleri.'
    },
    date: new Date('2025-02-15T14:00:00'),
    location: {
      venue: 'Gemeindezentrum Dortmund',
      address: 'Bayrische Str. 113, 44339 Dortmund'
    },
    category: {
      id: 'education',
      name: { de: 'Bildung', tr: 'Eğitim' },
      color: '#3b82f6'
    },
    slug: 'leseclub-cocuk-klubu'
  },
  {
    id: '2',
    title: {
      de: 'Bağlama Saz Kurs',
      tr: 'Bağlama Saz Kursu'
    },
    description: {
      de: 'Erlernen des traditionellen alevitischen Instruments Bağlama (Saz) für alle Altersgruppen.',
      tr: 'Tüm yaş grupları için geleneksel Alevi enstrümanı Bağlama (Saz) öğrenme.'
    },
    date: new Date('2025-02-20T18:00:00'),
    location: {
      venue: 'Gemeindezentrum Dortmund',
      address: 'Bayrische Str. 113, 44339 Dortmund'
    },
    category: {
      id: 'cultural',
      name: { de: 'Kulturell', tr: 'Kültürel' },
      color: '#f59e0b'
    },
    slug: 'baglama-saz-kurs'
  },
  {
    id: '3',
    title: {
      de: 'Koro Çalışması',
      tr: 'Koro Çalışması'
    },
    description: {
      de: 'Gemeinsames Singen traditioneller alevitischer Lieder und Deyişler.',
      tr: 'Geleneksel Alevi şarkıları ve deyişlerin toplu olarak söylenmesi.'
    },
    date: new Date('2025-02-22T19:00:00'),
    location: {
      venue: 'Gemeindezentrum Dortmund',
      address: 'Bayrische Str. 113, 44339 Dortmund'
    },
    category: {
      id: 'cultural',
      name: { de: 'Kulturell', tr: 'Kültürel' },
      color: '#10b981'
    },
    slug: 'koro-calismasi'
  }
]

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const t = translations[locale]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Aurora Background */}
      <AuroraBackgroundDemo locale={locale} />

      {/* Parallax Content Sections */}
      <DemoOne />

      {/* Upcoming Events Section - Full Width Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with side layout */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 lg:mb-16">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t.events.upcoming}
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
                {locale === 'de' 
                  ? 'Entdecken Sie unsere kommenden Veranstaltungen und werden Sie Teil unserer lebendigen Gemeinschaft.'
                  : 'Yaklaşan etkinliklerimizi keşfedin ve canlı topluluğumuzun bir parçası olun.'
                }
              </p>
            </div>
            <Link 
              href={`/${locale}/aktivitaeten`} 
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              {t.events.allEvents}
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Events Grid - Clean Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {currentEvents.map((event) => (
              <EventCard key={event.id} event={event} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}