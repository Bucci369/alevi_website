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
        
        {/* Modern Transition Section */}
        <div className="relative">
          {/* Gradient Overlay for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-black/80 z-10 h-40"></div>
          
          {/* Floating transition element */}
          <div className="relative z-20 -mt-20 mb-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 md:p-12">
                <div className="space-y-6">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {locale === 'de' ? 'Religiöse Feiertage' : 'Dini Bayramlar'}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    {locale === 'de' 
                      ? 'Entdecken Sie die wichtigsten alevitischen Feiertage und ihre spirituelle Bedeutung in unserem interaktiven Kalender.'
                      : 'İnteraktif takvimimizde en önemli Alevi bayramlarını ve spiritüel anlamlarını keşfedin.'
                    }
                  </p>
                  <div className="flex justify-center pt-4">
                    <div className="animate-bounce">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m0 0l7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
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
