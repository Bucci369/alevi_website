import { Locale } from '@/types'
import { translations } from '@/lib/i18n/config'
import { Counter } from '@/components/ui/Counter'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface AboutPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params

  const boardMembers = [
    { name: 'Aziz Aslandemir', role: '1. Vorsitzender', role_tr: '1. Başkan' },
    { name: 'Hakime Göleli', role: '2. Vorsitzende', role_tr: '2. Başkan' },
    { name: 'Vedat Altundal', role: 'Kassenwart', role_tr: 'Sayman' },
    { name: 'Arslan Kaya', role: 'stellv. Kassenwart', role_tr: 'Yardımcı Sayman' },
    { name: 'Hakime Göleli', role: 'Öffentlichkeitsarbeit', role_tr: 'Halkla İlişkiler' },
    { name: 'Melek Yildiz', role: 'Beisitzerin', role_tr: 'Üye' },
    { name: 'Hülya Polat', role: 'Beisitzerin', role_tr: 'Üye' }
  ]

  const stats = [
    { 
      number: 400, 
      label: locale === 'de' ? 'Mitgliedsfamilien' : 'Üye Aileler',
      suffix: '+'
    },
    { 
      number: 1988, 
      label: locale === 'de' ? 'Gründungsjahr' : 'Kuruluş Yılı'
    },
    { 
      number: 1000, 
      label: locale === 'de' ? 'Alevitische Familien in Dortmund' : 'Dortmund\'da Alevi Aileler'
    },
    { 
      number: 5000, 
      label: locale === 'de' ? 'Aleviten in Dortmund' : 'Dortmund\'da Aleviler'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stats Section mit animierten Countern */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animationType="fadeUp" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Counter
                  key={index}
                  end={stat.suffix ? `${stat.number}+` : stat.number}
                  label={stat.label}
                  duration={2500}
                  delay={index * 200}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Text Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Echtes Zeitungs-Layout: Unregelmäßige Blöcke */}
          <div className="space-y-8">
            
            {/* Erste Zeile: Großer Artikel + 2 kleine */}
            <div className="grid grid-cols-12 gap-4">
              {/* Großer Geschichte Block - 7 Spalten */}
              <div className="col-span-12 lg:col-span-7 bg-white p-6 border-l-4 border-gray-300 shadow-md">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  {locale === 'de' ? 'Unsere Geschichte' : 'Tarihçemiz'}
                </h3>
                <p className="text-lg leading-relaxed text-gray-800 mb-4">
                  {locale === 'de'
                    ? 'Die Alevitische Gemeinde Dortmund wurde 1988 gegründet und hat derzeit über 400 Mitgliedsfamilien. Allein in Dortmund leben schätzungsweise 1.000 Familien alevitischen Glaubens und somit schätzungsweise 5.000 Aleviten.'
                    : 'Dortmund Alevi Cemevi 1988 yılında kurulmuş olup şu anda 400\'den fazla üye aileye sahiptir. Sadece Dortmund\'da tahminen 1.000 Alevi ailenin yaşadığı ve dolayısıyla tahminen 5.000 Alevininin bulunduğu tahmin edilmektedir.'
                  }
                </p>
                <p className="text-base text-gray-700">
                  {locale === 'de'
                    ? 'Die Immobilie an der Bayrische Str. 113 wurde 1998 erworben und nach einer fast einjährigen Renovierungszeit bezogen. Heute ist unser Gemeindezentrum ein wichtiger Anlaufpunkt für die alevitische Gemeinschaft in Dortmund und Umgebung.'
                    : 'Bayrische Str. 113\'teki mülk 1998\'de satın alınmış ve yaklaşık bir yıllık tadilat sonrası kullanıma açılmıştır. Bugün cemevi Dortmund ve çevresindeki Alevi topluluğu için önemli bir buluşma noktasıdır.'
                  }
                </p>
              </div>
              
              {/* Selbstorganisation Block - 3 Spalten */}
              <div className="col-span-6 lg:col-span-3 bg-white p-4 border-t-4 border-gray-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase">
                  {locale === 'de' ? 'Selbstorganisation' : 'Öz Örgütlenme'}
                </h4>
                <p className="text-sm text-gray-700">
                  {locale === 'de'
                    ? 'Eine Selbstorganisation, die von alevitischen Mitgliedern getragen wird und vornehmlich die gelungene Integration und Partizipation der Menschen mit Migrationshintergrund in die Mehrheitsgesellschaft anvisiert.'
                    : 'Alevi üyeler tarafından desteklenen ve özellikle göçmen geçmişi olan insanların çoğunluk toplumuna başarılı entegrasyonu ve katılımını hedefleyen bir öz örgütlenmedir.'
                  }
                </p>
              </div>
              
              {/* Zahlen Block - 2 Spalten */}
              <div className="col-span-6 lg:col-span-2 bg-gray-100 p-4 border-r-4 border-gray-300">
                <h4 className="text-base font-bold text-gray-900 mb-2 uppercase">
                  {locale === 'de' ? 'Zahlen' : 'Sayılar'}
                </h4>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>400+ {locale === 'de' ? 'Familien' : 'Aile'}</div>
                  <div>1000 {locale === 'de' ? 'Alevi-Familien' : 'Alevi Ailesi'}</div>
                  <div>5000 {locale === 'de' ? 'Aleviten' : 'Alevi'}</div>
                </div>
              </div>
            </div>

            {/* Zweite Zeile: Akzeptanz & Toleranz großer Block */}
            <div className="grid grid-cols-12 gap-4">
              {/* Akzeptanz & Toleranz - 8 Spalten */}
              <div className="col-span-12 lg:col-span-8 bg-white p-6 border-l-4 border-gray-300 shadow-md">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  {locale === 'de' ? 'Akzeptanz & Toleranz' : 'Kabul & Hoşgörü'}
                </h4>
                <p className="text-base text-gray-700 mb-4">
                  {locale === 'de'
                    ? 'Die gegenseitige Akzeptanz und Toleranz der verschiedenen Kulturen ist das Fundament einer freiheitlich-demokratischen Gesellschaft, in der interkulturelle Öffnung und Entwicklung stattfindet.'
                    : 'Farklı kültürlerin karşılıklı kabulü ve hoşgörüsü, kültürlerarası açılım ve gelişimin gerçekleştiği özgür-demokratik bir toplumun temelidir.'
                  }
                </p>
                <p className="text-sm text-gray-600">
                  {locale === 'de'
                    ? 'Wir möchten den interkulturellen und interreligiösen Austausch in der Gesellschaft vorantreiben, den Gedanken der Völkerverständigung ausleben und die Aktivitäten von Menschen nichtdeutscher Herkunft untereinander vernetzen.'
                    : 'Toplumda kültürlerarası ve dinlerarası değişimi ilerletmek, halklar arası anlayış düşüncesini yaşamak ve Alman olmayan kökenli insanların faaliyetlerini birbirleriyle ağ oluşturmak istiyoruz.'
                  }
                </p>
              </div>
              
              {/* Förderung Block - 4 Spalten */}
              <div className="col-span-12 lg:col-span-4 bg-gray-100 p-5 border-t-4 border-gray-300">
                <h4 className="text-xl font-bold text-gray-900 mb-3 uppercase">
                  {locale === 'de' ? 'Förderung' : 'Destekleme'}
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  {locale === 'de'
                    ? 'Die Förderung und Unterstützung der über 400 Mitgliedsfamilien in beruflicher, sozialer und politischer Hinsicht ist für uns ein wichtiger Arbeitsschwerpunkt.'
                    : '400\'den fazla üye ailenin mesleki, sosyal ve siyasi açıdan desteklenmesi bizim için önemli bir çalışma alanıdır.'
                  }
                </p>
                <p className="text-xs text-gray-600">
                  {locale === 'de'
                    ? 'Wir unterstützen und ergänzen die familiäre Erziehung durch verschiedene Angebote.'
                    : 'Çeşitli hizmetlerle aile eğitimini destekliyor ve tamamlıyoruz.'
                  }
                </p>
              </div>
            </div>

            {/* Dritte Zeile: Unsere Ziele - großer Block + kleiner */}
            <div className="grid grid-cols-12 gap-4">
              {/* Wir engagieren uns Block - 9 Spalten */}
              <div className="col-span-12 lg:col-span-9 bg-white p-6 border-l-4 border-gray-300 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  {locale === 'de' ? 'Wir engagieren uns für...' : 'Şunlar için çalışıyoruz...'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      {locale === 'de' ? 'Kulturelle Vielfalt zu fördern' : 'Kültürel çeşitliliği desteklemek'}
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      {locale === 'de' ? 'Mehrsprachigkeit zu stärken' : 'Çok dilliliği güçlendirmek'}
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      {locale === 'de' ? 'Verschiedene Glaubensbekenntnisse zu unterstützen' : 'Farklı inanç beyannamelerini desteklemek'}
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      {locale === 'de' ? 'Schulungen für Jung und Alt anzubieten' : 'Yaşlı ve genç için eğitimler sunmak'}
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      {locale === 'de' ? 'Ressentiments abzubauen' : 'Önyargıları yıkmak'}
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      {locale === 'de' ? 'Hilfe zur Selbsthilfe zu stärken' : 'Kendi kendine yardımı güçlendirmek'}
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      {locale === 'de' ? 'Alevitischen Religionsunterricht zu fördern' : 'Alevi din dersini desteklemek'}
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      {locale === 'de' ? 'Kindertagesangebote darzulegen' : 'Çocuk günlük hizmetleri sunmak'}
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Chancengleichheit - 3 Spalten */}
              <div className="col-span-12 lg:col-span-3 bg-gray-100 p-5 border-r-4 border-gray-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase">
                  {locale === 'de' ? 'Wonach wir streben' : 'Ne için çalışıyoruz'}
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  {locale === 'de'
                    ? 'Wir streben Chancengleichheit und die gleichberechtigte Teilhabe an gesellschaftlichen Prozessen an.'
                    : 'Fırsat eşitliği ve toplumsal süreçlere eşit katılım için çaba gösteriyoruz.'
                  }
                </p>
                <p className="text-xs text-gray-600">
                  {locale === 'de'
                    ? '"Die Akzeptanz der Andersheit des Anderen" (M. Buber)'
                    : '"Diğerinin başkalığını kabul etmek" (M. Buber)'
                  }
                </p>
              </div>
            </div>

            {/* Vierte Zeile: Offenheit für alle */}
            <div className="grid grid-cols-12 gap-4">
              {/* Offenheit Block - volle Breite */}
              <div className="col-span-12 bg-gray-50 p-6 border-t-4 border-gray-600 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center uppercase">
                  {locale === 'de' ? 'Offenheit für alle Menschen' : 'Herkese açıklık'}
                </h4>
                <p className="text-base text-gray-700 text-center max-w-4xl mx-auto">
                  {locale === 'de'
                    ? 'Ganz unabhängig von der sozialen Herkunft, Nationalität, sexuellen Neigung und dem religiösen Hintergrund erfahren Nichtmitglieder in unserer Gemeinde die gleiche Annahme und Wertschätzung, wie auch Gemeindemitglieder und Angehörige.'
                    : 'Sosyal köken, milliyet, cinsel yönelim ve dini geçmişten bağımsız olarak, üye olmayanlar cemevimizde cemaat üyeleri ve yakınları ile aynı kabul ve takdiri görürler.'
                  }
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Vorstand' : 'Yönetim Kurulu'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">
                  {locale === 'de' ? member.role : member.role_tr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export async function generateMetadata({ params }: AboutPageProps) {
  const { locale } = await params
  const title = locale === 'de' 
    ? 'Über uns - Alevitische Gemeinde Dortmund'
    : 'Hakkımızda - Dortmund Alevi Toplumu'
  
  const description = locale === 'de'
    ? 'Die Alevitische Gemeinde Dortmund e.V. wurde 1988 gegründet und vertritt über 400 Mitgliedsfamilien in Dortmund.'
    : 'Dortmund Alevi Cemevi 1988 yılında kurulmuş olup Dortmund\'da 400\'den fazla üye aileyi temsil etmektedir.'

  return {
    title,
    description,
  }
}