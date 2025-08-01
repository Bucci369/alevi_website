import { Locale } from '@/types'
import { FinalTimeline } from '@/components/ui/FinalTimeline'
import { ZoomHero } from '@/components/ui/ZoomHero'

interface CalendarPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function CalendarPage({ params }: CalendarPageProps) {
  const { locale } = await params

  return (
    <>
      <ZoomHero locale={locale} />
      
      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Calendar Section - scrolls over fixed hero */}
        <FinalTimeline locale={locale} />
      </div>
    </>
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
