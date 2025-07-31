import { Locale } from '@/types'
import { FullScreenCalendar } from '@/components/ui/FullScreenCalendar'

interface CalendarPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function CalendarPage({ params }: CalendarPageProps) {
  const { locale } = await params

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 text-center bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            {locale === 'de' ? 'Feiertagskalender 2025' : 'Bayram Takvimi 2025'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-16">
            {locale === 'de' 
              ? 'Deutsche und alevitische Feiertage im Jahresüberblick'
              : 'Alman ve Alevi bayramlarının yıllık genel aussehen'
            }
          </p>
        </div>
        </section>

      {/* Calendar Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FullScreenCalendar locale={locale} />
        </div>
      </section>
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
