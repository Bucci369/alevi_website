import { EventCard } from '@/components/ui/EventCard'
import { Locale, Event } from '@/types'
import { translations } from '@/lib/i18n/config'
import Link from 'next/link'
import Image from 'next/image'

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
      {/* Hero Section */}
      <section 
        className="relative text-white min-h-screen flex items-center"
        style={{
          backgroundImage: `url('/13175.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              {locale === 'de' ? 'Willkommen' : 'Hoş Geldiniz'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white drop-shadow-xl">
              {locale === 'de' 
                ? 'Alevitische Gemeinde Dortmund e.V. - Eine Gemeinschaft der Vielfalt, des Respekts und der kulturellen Bereicherung.'
                : 'Alevitische Gemeinde Dortmund e.V. - Çeşitlilik, saygı ve kültürel zenginlik topluluğu.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={`/${locale}/ueber-uns`} className="bg-white text-black border border-gray-300 rounded-full px-8 py-3 font-semibold hover:bg-gray-50 inline-block shadow-xl text-center min-w-fit">
                {locale === 'de' ? 'Über uns' : 'Hakkımızda'}
              </Link>
              <Link href={`/${locale}/mitglied-werden`} className="bg-white text-black border border-gray-300 rounded-full px-8 py-3 font-semibold hover:bg-gray-50 inline-block shadow-xl text-center min-w-fit">
                {locale === 'de' ? 'Mitglied werden' : 'Üye Ol'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'de' ? 'Unsere Werte' : 'Değerlerimiz'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {locale === 'de'
                ? 'Die Alevitische Gemeinde Dortmund steht für Toleranz, Integration und kulturelle Vielfalt.'
                : 'Dortmund Alevi Cemaati hoşgörü, entegrasyon ve kültürel çeşitlilik için duruyor.'
              }
            </p>
          </div>

                    <div className="mobile-card-grid mobile-card-grid-4">
            <div className="mobile-card text-center bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm border border-gray-200">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                {locale === 'de' ? 'Toleranz' : 'Hoşgörü'}
              </h3>
              <p className="text-gray-700 text-xs md:text-sm">
                {locale === 'de'
                  ? 'Respekt für alle Menschen unabhängig von Herkunft und Glauben.'
                  : 'Köken ve inanç fark etmeksizin tüm insanlara saygı.'
                }
              </p>
            </div>

            <div className="mobile-card text-center bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm border border-gray-200">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                {locale === 'de' ? 'Gemeinschaft' : 'Topluluk'}
              </h3>
              <p className="text-gray-700 text-xs md:text-sm">
                {locale === 'de'
                  ? 'Starke Verbindungen und Unterstützung für alle Mitglieder.'
                  : 'Güçlü bağlar ve tüm üyeler için destek.'
                }
              </p>
            </div>

            <div className="mobile-card text-center bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm border border-gray-200">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                {locale === 'de' ? 'Integration' : 'Entegrasyon'}
              </h3>
              <p className="text-gray-700 text-xs md:text-sm">
                {locale === 'de'
                  ? 'Brücken bauen zwischen Kulturen und Gesellschaften.'
                  : 'Kültürler ve toplumlar arasında köprüler kurmak.'
                }
              </p>
            </div>

            <div className="mobile-card text-center bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm border border-gray-200">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                {locale === 'de' ? 'Kultur' : 'Kültür'}
              </h3>
              <p className="text-gray-700 text-xs md:text-sm">
                {locale === 'de'
                  ? 'Erhaltung und Weitergabe unserer reichen Traditionen.'
                  : 'Zengin geleneklerimizi koruma ve aktarma.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {t.events.upcoming}
            </h2>
            <button className="text-gray-600 hover:text-gray-700 font-medium">
              {t.events.allEvents} →
            </button>
          </div>

          <div className="mobile-card-grid">
            {currentEvents.map((event) => (
              <EventCard key={event.id} event={event} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}