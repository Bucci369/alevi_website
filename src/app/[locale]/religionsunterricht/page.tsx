import { Locale } from '@/types'
import { translations } from '@/lib/i18n/config'

interface ReligiousEducationPageProps {
  params: Promise<{
    locale: Locale
  }>
}

export default async function ReligiousEducationPage({ params }: ReligiousEducationPageProps) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {locale === 'de' ? 'Alevitischer Religionsunterricht (ARU)' : 'Alevi Din Dersi (ARU)'}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {locale === 'de' 
            ? 'Der Alevitische Religionsunterricht vermittelt die Grundlagen des alevitischen Glaubens und der Kultur an unsere Kinder und Jugendlichen.'
            : 'Alevi Din Dersi, çocuklarımıza ve gençlerimize Alevi inancının ve kültürünün temellerini aktarır.'
          }
        </p>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {locale === 'de' ? 'Über den ARU' : 'ARU Hakkında'}
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-4">
              {locale === 'de' 
                ? 'Der Alevitische Religionsunterricht (ARU) begann erstmals im Jahr 2002 in Berlin und wird heute bereits in 8 Bundesländern an Grund- und weiterführenden Schulen gelehrt.'
                : 'Alevi Din Dersi (ARU) ilk olarak 2002 yılında Berlin\'de başlamış olup, bugün 8 eyalette ilkokul ve ortaokullarda okutulmaktadır.'
              }
            </p>
            <p className="text-gray-700 mb-4">
              {locale === 'de' 
                ? 'Der Unterricht vermittelt nicht nur religiöse Inhalte, sondern auch kulturelle Werte, Geschichte und die humanistischen Prinzipien des Alevitentums.'
                : 'Ders sadece dini içerikleri değil, aynı zamanda kültürel değerleri, tarihi ve Alevilik\'in hümanist ilkelerini de aktarır.'
              }
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {locale === 'de' ? 'Verfügbare Bundesländer' : 'Mevcut Eyaletler'}
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Bayern
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Baden-Württemberg
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Berlin
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Hessen
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Niedersachsen
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Nordrhein-Westfalen
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Rheinland-Pfalz
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Saarland
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {locale === 'de' ? 'Jetzt auch an deiner Schule!' : 'Şimdi senin okulunda da!'}
        </h2>
        <p className="text-gray-700 mb-6">
          {locale === 'de' 
            ? 'Interessiert an ARU an Ihrer Schule? Kontaktieren Sie uns für weitere Informationen.'
            : 'Okulunuzda ARU ile ilgileniyorsunuz? Daha fazla bilgi için bizimle iletişime geçin.'
          }
        </p>
        <a
          href={`/${locale}/kontakt`}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          {locale === 'de' ? 'Kontakt aufnehmen' : 'İletişime Geç'}
        </a>
      </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: ReligiousEducationPageProps) {
  const { locale } = await params
  const title = locale === 'de' 
    ? 'Alevitischer Religionsunterricht (ARU) - Alevitische Gemeinde Dortmund'
    : 'Alevi Din Dersi (ARU) - Dortmund Alevi Toplumu'
  
  const description = locale === 'de'
    ? 'Informationen zum Alevitischen Religionsunterricht (ARU) in deutschen Schulen. Jetzt auch an deiner Schule!'
    : 'Alman okullarında Alevi Din Dersi (ARU) hakkında bilgiler. Şimdi senin okulunda da!'

  return {
    title,
    description,
  }
}
