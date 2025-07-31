import { Locale } from '@/types'
import { SimpleCssScroll } from '@/components/ui/simple-css-scroll'

interface EngagementPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function EngagementPage({ params }: EngagementPageProps) {
  const { locale } = await params

  const achievements = [
    {
      year: '2008',
      title: { 
        de: 'Mitglied im Jugendring', 
        tr: 'Jugendring Üyeliği' 
      },
      description: { 
        de: 'Ende 2008 wurden wir Mitglied im Jugendring und erweiterten damit unser Engagement für die Jugendarbeit.',
        tr: '2008 sonunda Jugendring üyesi olduk ve gençlik çalışmaları için katılımımızı genişlettik.'
      }
    },
    {
      year: '2009',
      title: { 
        de: 'Anerkannter Träger der Jugendhilfe', 
        tr: 'Onaylı Gençlik Yardım Sağlayıcısı' 
      },
      description: { 
        de: 'Im Mai 2009 erhielten wir die Anerkennung als Träger der selbstständigen Jugendhilfe.',
        tr: 'Mayıs 2009\'da bağımsız gençlik yardım hizmetleri sağlayıcısı olarak onay aldık.'
      }
    }
  ]

  const engagementAreas = [
    {
      title: { de: 'Ehrenamtliche Arbeit', tr: 'Gönüllü Çalışma' },
      description: { 
        de: 'Die soziale und kulturelle Arbeit sowie die Erhaltung der Gemeinde werden von ehrenamtlichen Personen unterschiedlicher Altersgruppen getragen.',
        tr: 'Sosyal ve kültürel çalışmanın yanı sıra cemaatin korunması, farklı yaş gruplarından gönüllüler tarafından yürütülmektedir.'
      }
    },
    {
      title: { de: 'Jugendarbeit', tr: 'Gençlik Çalışması' },
      description: { 
        de: 'In den letzten Jahren haben wir unsere Aktivitäten für Jugendliche erweitert und bieten verschiedene altersgerechte Programme an.',
        tr: 'Son yıllarda gençler için faaliyetlerimizi genişlettik ve çeşitli yaş grubuna uygun programlar sunuyoruz.'
      }
    },
    {
      title: { de: 'Bildung und Kultur', tr: 'Eğitim ve Kültür' },
      description: { 
        de: 'Wir fördern Bildung und kulturelle Vielfalt durch verschiedene Programme und Veranstaltungen.',
        tr: 'Çeşitli programlar ve etkinlikler aracılığıyla eğitimi ve kültürel çeşitliliği destekliyoruz.'
      }
    },
    {
      title: { de: 'Integration', tr: 'Entegrasyon' },
      description: { 
        de: 'Wir unterstützen die Integration von Menschen mit Migrationshintergrund in die deutsche Gesellschaft.',
        tr: 'Göçmen geçmişine sahip insanların Alman toplumuna entegrasyonunu destekliyoruz.'
      }
    },
    {
      title: { de: 'Soziale Unterstützung', tr: 'Sosyal Destek' },
      description: { 
        de: 'Wir bieten soziale Beratung und Unterstützung für Mitglieder und die Gemeinschaft.',
        tr: 'Üyeler ve topluluk için sosyal danışmanlık ve destek sunuyoruz.'
      }
    },
    {
      title: { de: 'Qualitätssicherung', tr: 'Kalite Güvencesi' },
      description: { 
        de: 'Als anerkannter Träger der Jugendhilfe halten wir hohe Qualitätsstandards ein.',
        tr: 'Onaylı bir gençlik yardım sağlayıcısı olarak yüksek kalite standartlarını koruyoruz.'
      }
    }
  ]

  const programs = [
    {
      title: { de: 'Jugendprogramme', tr: 'Gençlik Programları' },
      activities: [
        { de: 'Freizeitaktivitäten', tr: 'Boş zaman faaliyetleri' },
        { de: 'Bildungsworkshops', tr: 'Eğitim atölyeleri' },
        { de: 'Kulturelle Veranstaltungen', tr: 'Kültürel etkinlikler' },
        { de: 'Sportaktivitäten', tr: 'Spor faaliyetleri' }
      ]
    },
    {
      title: { de: 'Gemeinschaftsdienste', tr: 'Topluluk Hizmetleri' },
      activities: [
        { de: 'Soziale Beratung', tr: 'Sosyal danışmanlık' },
        { de: 'Sprachkurse', tr: 'Dil kursları' },
        { de: 'Integrationshilfe', tr: 'Entegrasyon yardımı' },
        { de: 'Familiensupport', tr: 'Aile desteği' }
      ]
    },
    {
      title: { de: 'Kulturelle Aktivitäten', tr: 'Kültürel Faaliyetler' },
      activities: [
        { de: 'Traditionelle Feste', tr: 'Geleneksel bayramlar' },
        { de: 'Musik und Tanz', tr: 'Müzik ve dans' },
        { de: 'Kunst und Handwerk', tr: 'Sanat ve el sanatları' },
        { de: 'Literatur und Poesie', tr: 'Edebiyat ve şiir' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section mit Infinite Scroll */}
      <section className="py-20 bg-white dark:bg-neutral-950 relative overflow-hidden">
        <div className="relative z-10 flex items-center justify-center min-h-[500px]">
          <div className="w-full max-w-5xl mx-auto p-4">
            <div className="rounded-xl w-full h-[500px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center">
              <SimpleCssScroll
                text={locale === 'de' 
                  ? "Solidarität • Hilfe • Dienst • Gemeinde"
                  : "Dayanışma • Yardım • Hizmet • Cemaat"
                }
                speed={120}
                className="font-bold text-center text-3xl md:text-5xl lg:text-7xl tracking-wide text-black dark:text-white drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {locale === 'de' ? 'Unsere Mission' : 'Misyonumuz'}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6 text-center">
              <p className="text-xl">
                {locale === 'de'
                  ? 'Die soziale und die kulturelle Arbeit sowie die Erhaltung der Gemeinde werden von ehrenamtlichen Personen unterschiedlicher Altersgruppen getragen.'
                  : 'Sosyal ve kültürel çalışmanın yanı sıra cemaatin korunması, farklı yaş gruplarından gönüllüler tarafından yürütülmektedir.'
                }
              </p>
              <p>
                {locale === 'de'
                  ? 'Unsere Mitgliederzahl wächst stetig und wir haben in den letzten Jahren unsere Aktivitäten für verschiedene Altersgruppen, insbesondere für Jugendliche, erweitert.'
                  : 'Üye sayımız sürekli artmakta ve son yıllarda çeşitli yaş grupları, özellikle gençler için faaliyetlerimizi genişlettik.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Unsere Arbeitsbereiche' : 'Çalışma Alanlarımız'}
          </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagementAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {area.title[locale]}
                </h3>
                <p className="text-gray-700">
                  {area.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Wichtige Meilensteine' : 'Önemli Kilometre Taşları'}
          </h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                <div className="bg-gray-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {achievement.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {achievement.title[locale]}
                  </h3>
                  <p className="text-gray-700">
                    {achievement.description[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Unsere Programme' : 'Programlarımız'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {program.title[locale]}
                </h3>
                <ul className="space-y-2">
                  {program.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 flex-shrink-0"></div>
                      {activity[locale]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Unser Einfluss' : 'Etkimiz'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">35+</div>
              <div className="text-gray-600">
                {locale === 'de' ? 'Jahre Gemeinschaftsarbeit' : 'Yıl Topluluk Çalışması'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">400+</div>
              <div className="text-gray-600">
                {locale === 'de' ? 'Mitgliedsfamilien' : 'Üye Aileler'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">50+</div>
              <div className="text-gray-600">
                {locale === 'de' ? 'Ehrenamtliche Helfer' : 'Gönüllü Yardımcılar'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">100+</div>
              <div className="text-gray-600">
                {locale === 'de' ? 'Veranstaltungen pro Jahr' : 'Yıllık Etkinlik'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Note */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {locale === 'de' ? 'Nachhaltigkeit' : 'Sürdürülebilirlik'}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {locale === 'de'
              ? 'Die Planung und Durchführung unserer Aktivitäten hängt von der finanziellen Situation der Gemeinde ab. Wir setzen auf nachhaltige Entwicklung und verantwortungsvolle Ressourcennutzung.'
              : 'Faaliyetlerimizin planlanması ve yürütülmesi cemaatin mali durumuna bağlıdır. Sürdürülebilir kalkınma ve sorumlu kaynak kullanımına odaklanıyoruz.'
            }
          </p>
          <div className="flex justify-center">
            <button className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              {locale === 'de' ? 'Spenden und Unterstützen' : 'Bağış Yap ve Destekle'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}