import { Locale } from '@/types'
import { FinalTimeline } from '@/components/ui/FinalTimeline'

interface CalendarPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function CalendarPage({ params }: CalendarPageProps) {
  const { locale } = await params

  return (
    <div>
      {/* Hero Section - consistent with other pages */}
      <section className="py-16 text-center bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            {locale === 'de' ? `Alevitischer Kalender ${new Date().getFullYear()}` : `Alevi Takvimi ${new Date().getFullYear()}`}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-16">
            {locale === 'de' 
              ? 'Alevitische und deutsche Feiertage im chronologischen Überblick'
              : 'Alevi ve Alman bayramlarının kronolojik genel bakış'
            }
          </p>
        </div>
      </section>

      {/* Calendar Section - Parallax Timeline */}
      <FinalTimeline locale={locale} />
      
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
