import { Locale } from '@/types'
import { FinalTimeline } from '@/components/ui/FinalTimeline'

interface CalendarPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function CalendarPage({ params }: CalendarPageProps) {
  const { locale } = await params

  return (
    <div className="relative">
      {/* Hero Section - Fixed background for parallax */}
      <section className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-50 via-white to-blue-100 relative z-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            {locale === 'de' ? `Alevitischer Kalender ${new Date().getFullYear()}` : `Alevi Takvimi ${new Date().getFullYear()}`}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            {locale === 'de' 
              ? 'Alevitische und deutsche Feiertage im chronologischen Überblick'
              : 'Alevi ve Alman bayramlarının kronolojk genel bakış'
            }
          </p>
          <div className="animate-bounce mt-12">
            <svg className="w-6 h-6 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Calendar Section - Overlays the hero with parallax */}
      <div className="relative z-10 -mt-32 md:-mt-48">
        <FinalTimeline locale={locale} />
      </div>
      
      {/* Footer wird automatisch nach Timeline angezeigt */}
    </div>
  )
}

export async function generateMetadata({ params }: CalendarPageProps) {
  const { locale } = await params
  const title = locale === 'de' 
    ? 'Religiöser Kalender - Alevitische Gemeinde Dortmund'
    : 'Dini Takvim - Dortmund Alevi Toplumu'
  
  const description = locale === 'de'
    ? 'Entdecken Sie die wichtigsten alevitischen Feiertage und ihre Bedeutung im interaktiven Kalender.'
    : 'İnteraktif takvimde en önemli Alevi bayramlarını ve anlamlarını keşfedin.'

  return {
    title,
    description,
  }
}
