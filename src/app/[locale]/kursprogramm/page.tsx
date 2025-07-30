import { Locale } from '@/types'
import { translations } from '@/lib/i18n/config'

interface CoursesPageProps {
  params: Promise<{
    locale: Locale
  }>
}

export default async function CoursesPage({ params }: CoursesPageProps) {
  const { locale } = await params
  const t = translations[locale]

  const courses = [
    {
      title: locale === 'de' ? 'Bağlama Saz-Kurs' : 'Bağlama Saz Kursu',
      description: locale === 'de' 
        ? 'Erlernen des traditionellen alevitischen Instruments Bağlama (Saz) für alle Altersgruppen'
        : 'Tüm yaş grupları için geleneksel Alevi enstrümanı Bağlama (Saz) öğrenme',
      level: locale === 'de' ? 'Anfänger bis Fortgeschritten' : 'Başlangıç - İleri Seviye',
      duration: locale === 'de' ? 'Fortlaufend' : 'Sürekli',
      status: locale === 'de' ? 'Aktiv' : 'Aktif'
    },
    {
      title: locale === 'de' ? 'Koro Çalışması (Chor)' : 'Koro Çalışması',
      description: locale === 'de' 
        ? 'Gemeinsames Singen traditioneller alevitischer Lieder und Deyişler'
        : 'Geleneksel Alevi şarkıları ve deyişlerin toplu olarak söylenmesi',
      level: locale === 'de' ? 'Alle Interessierten' : 'Tüm İlgililer',
      duration: locale === 'de' ? 'Wöchentlich' : 'Haftalık',
      status: locale === 'de' ? 'Aktiv' : 'Aktif'
    },
    {
      title: locale === 'de' ? 'Leseclub Çocuk Klübü' : 'Leseclub Çocuk Klübü',
      description: locale === 'de' 
        ? 'Lese- und Bildungsaktivitäten für Kinder zur Förderung der Sprach- und Kulturkenntnisse'
        : 'Çocuklar için dil ve kültür bilgisini geliştirici okuma ve eğitim faaliyetleri',
      level: locale === 'de' ? 'Kinder 6-14 Jahre' : 'Çocuklar 6-14 Yaş',
      duration: locale === 'de' ? 'Regelmäßig' : 'Düzenli',
      status: locale === 'de' ? 'Aktiv' : 'Aktif'
    },
    {
      title: locale === 'de' ? 'Cemevi Aktivitäten' : 'Cemevi Faaliyetleri',
      description: locale === 'de' 
        ? 'Religiöse und kulturelle Veranstaltungen, Cem-Zeremonien und Gemeindeversammlungen'
        : 'Dini ve kültürel etkinlikler, Cem törenleri ve cemaat toplantıları',
      level: locale === 'de' ? 'Alle Gemeindemitglieder' : 'Tüm Cemaat Üyeleri',
      duration: locale === 'de' ? 'Nach Bedarf' : 'İhtiyaç Halinde',
      status: locale === 'de' ? 'Fortlaufend' : 'Sürekli'
    },
    {
      title: locale === 'de' ? 'Jugendarbeit' : 'Gençlik Çalışması',
      description: locale === 'de' 
        ? 'Bildungs- und Freizeitaktivitäten für Jugendliche zur Stärkung der Gemeinschaft'
        : 'Gençler için topluluk bilincini güçlendirici eğitim ve sosyal faaliyetler',
      level: locale === 'de' ? '14-25 Jahre' : '14-25 Yaş',
      duration: locale === 'de' ? 'Wöchentlich' : 'Haftalık',
      status: locale === 'de' ? 'Aktiv' : 'Aktif'
    },
    {
      title: locale === 'de' ? 'Frauen-Gruppen' : 'Kadın Grupları',
      description: locale === 'de' 
        ? 'Regelmäßige Treffen für Frauen zum Austausch, Bildung und gemeinsamen Aktivitäten'
        : 'Kadınlar için düzenli buluşmalar, paylaşım, eğitim ve ortak faaliyetler',
      level: locale === 'de' ? 'Alle Frauen' : 'Tüm Kadınlar',
      duration: locale === 'de' ? 'Monatlich' : 'Aylık',
      status: locale === 'de' ? 'Aktiv' : 'Aktif'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {locale === 'de' ? 'Kursprogramm' : 'Kurs Programı'}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {locale === 'de' 
            ? 'Entdecken Sie unser vielfältiges Bildungs- und Kulturprogramm für alle Altersgruppen. Von Sprachkursen bis hin zu traditionellen Künsten.'
            : 'Her yaş grubundan kişiler için çeşitli eğitim ve kültür programımızı keşfedin. Dil kurslarından geleneksel sanatlara kadar.'
          }
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-900">
                {course.title}
              </h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {course.status}
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              {course.description}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">
                  {locale === 'de' ? 'Niveau:' : 'Seviye:'}
                </span>
                <span className="text-gray-600 font-medium">
                  {course.level}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">
                  {locale === 'de' ? 'Dauer:' : 'Süre:'}
                </span>
                <span className="text-gray-600 font-medium">
                  {course.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Information Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {locale === 'de' ? 'Anmeldung & Information' : 'Kayıt & Bilgi'}
            </h2>
            <p className="text-gray-700 mb-4">
              {locale === 'de' 
                ? 'Alle Kurse finden in unseren Räumlichkeiten statt und werden von erfahrenen Kursleitern durchgeführt. Die Teilnahme ist für Gemeindemitglieder kostenlos oder gegen einen geringen Unkostenbeitrag.'
                : 'Tüm kurslar mekânımızda gerçekleşir ve deneyimli eğitmenler tarafından yürütülür. Cemaat üyeleri için katılım ücretsiz veya küçük bir katkı payı karşılığındadır.'
              }
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                {locale === 'de' ? 'Kostenlos für Mitglieder' : 'Üyeler için ücretsiz'}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                {locale === 'de' ? 'Erfahrene Kursleiter' : 'Deneyimli eğitmenler'}
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                {locale === 'de' ? 'Kleine Gruppengröße' : 'Küçük grup büyüklüğü'}
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {locale === 'de' ? 'Anmeldung & Termine' : 'Kayıt & Randevular'}
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex flex-col space-y-2">
                <span className="font-medium text-gray-600">
                  {locale === 'de' ? 'Termine nach Vereinbarung' : 'Randevu ile'}
                </span>
                <p className="text-sm">
                  {locale === 'de' 
                    ? 'Kontaktieren Sie uns für individuelle Kurszeiten und Terminabsprachen.'
                    : 'Bireysel kurs saatleri ve randevu görüşmeleri için bizimle iletişime geçin.'
                  }
                </p>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <span className="font-medium">
                  {locale === 'de' ? 'Kontakt:' : 'İletişim:'}
                </span>
                <p className="text-sm mt-1">
                  Tel: 0231 83 39 26<br />
                  E-Mail: info@alevido.de
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {locale === 'de' ? 'Interesse an unseren Kursen?' : 'Kurslarımızla ilgileniyor musunuz?'}
        </h2>
        <p className="text-gray-700 mb-6">
          {locale === 'de' 
            ? 'Kontaktieren Sie uns für weitere Informationen oder zur Anmeldung für unsere Kurse.'
            : 'Daha fazla bilgi almak veya kurslarımıza kayıt olmak için bizimle iletişime geçin.'
          }
        </p>
        <a
          href={`/${locale}/kontakt`}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          {locale === 'de' ? 'Jetzt anmelden' : 'Şimdi kayıt ol'}
        </a>
      </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: CoursesPageProps) {
  const { locale } = await params
  const title = locale === 'de' 
    ? 'Kursprogramm - Alevitische Gemeinde Dortmund'
    : 'Kurs Programı - Dortmund Alevi Toplumu'
  
  const description = locale === 'de'
    ? 'Entdecken Sie unser vielfältiges Bildungs- und Kulturprogramm: Türkisch-Sprachkurse, Saz-Unterricht, Semah-Kurse und mehr.'
    : 'Çeşitli eğitim ve kültür programımızı keşfedin: Türkçe dil kursları, Saz dersleri, Semah kursları ve daha fazlası.'

  return {
    title,
    description,
  }
}
