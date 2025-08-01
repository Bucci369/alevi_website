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
      {/* Hero Section - direkt auf weißem Board */}
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-black">
          {locale === 'de' 
            ? 'Alevitische Gemeinde Dortmund e.V.' 
            : 'Dortmund Alevi Kültür Derneği'
          }
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-16">
          {locale === 'de' 
            ? 'Herzlich willkommen in unserer Gemeinde'
            : 'Cemaatimize hoş geldiniz'
          }
        </p>
      </section>

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {locale === 'de' ? 'Alevitische Gemeinde Dortmund e.V.' : 'Dortmund Alevi Cemevi'}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-700">
              <div>
                <p className="mb-6">
                  {locale === 'de'
                    ? 'Die Alevitische Gemeinde Dortmund e.V. wurde 1988 gegründet und hat derzeit über 400 Mitgliedsfamilien. Allein in Dortmund leben schätzungsweise 1.000 Familien alevitischen Glaubens und somit schätzungsweise 5.000 Aleviten. Die Immobilie an der Bayrische Str. 113 wurde 1998 erworben und nach einer fast einjährigen Renovierungszeit bezogen.'
                    : 'Dortmund Alevi Cemevi 1988 yılında kurulmuş olup şu anda 400\'den fazla üye aileye sahiptir. Sadece Dortmund\'da yaklaşık 1.000 Alevi ailesi ve dolayısıyla yaklaşık 5.000 Alevi yaşamaktadır. Bayrische Str. 113\'teki mülk 1998\'de satın alınmış ve yaklaşık bir yıllık tadilat sonrası kullanıma açılmıştır.'
                  }
                </p>
                <p>
                  {locale === 'de'
                    ? 'Die Alevitische Gemeinde Dortmund ist eine Selbstorganisation, die von den alevitischen Mitgliedern getragen wird und vornehmlich die gelungene Integration und Partizipation der Menschen mit Migrationshintergrund in die Mehrheitsgesellschaft anvisiert.'
                    : 'Dortmund Alevi Cemevi, Alevi üyeler tarafından desteklenen bir öz örgütlenmedir ve öncelikle göçmen geçmişine sahip insanların çoğunluk toplumuna başarılı entegrasyonunu ve katılımını hedeflemektedir.'
                  }
                </p>
              </div>
              <div>
                <p className="mb-6">
                  {locale === 'de'
                    ? 'Die Förderung und Unterstützung der über 400 Mitgliedsfamilien in beruflicher, sozialer und politischer Hinsicht ist für die alevitische Gemeinde ein wichtiger Arbeitsschwerpunkt. Die Gemeinde unterstützt und ergänzt die familiäre Erziehung.'
                    : '400\'den fazla üye ailenin mesleki, sosyal ve siyasi açıdan desteklenmesi ve teşvik edilmesi Alevi cemaati için önemli bir çalışma alanıdır. Cemaat aile eğitimini destekler ve tamamlar.'
                  }
                </p>
                <p>
                  {locale === 'de'
                    ? 'Wir bieten unter anderem durch unsere Angebote kindergemäße Entwicklungsmöglichkeiten, gewähren allgemein und individuelle Erziehungshilfen, fördern die Persönlichkeitsentfaltung sowie soziale Verhaltensweisen. Ganz unabhängig von der sozialen Herkunft, Nationalität, sexuellen Neigung und dem religiösen Hintergrund erfahren Nichtmitglieder in unserer Gemeinde die gleiche Annahme und Wertschätzung, wie auch Gemeindemitglieder und Angehörige.'
                    : 'Sunduğumuz hizmetler aracılığıyla çocuklara uygun gelişim fırsatları sunuyor, genel ve bireysel eğitim yardımları sağlıyor, kişilik gelişimini ve sosyal davranışları teşvik ediyoruz. Sosyal köken, milliyet, cinsel yönelim ve dini geçmişten tamamen bağımsız olarak, üye olmayanlar da cemaatimizde üyeler ve yakınları gibi aynı kabul ve takdiri görürler.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {locale === 'de' ? 'Unsere Mission' : 'Misyonumuz'}
          </h2>
          <div className="rounded-lg p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {locale === 'de' ? 'Bildung & Integration' : 'Eğitim & Entegrasyon'}
                </h3>
                <p className="text-gray-700 mb-6">
                  {locale === 'de'
                    ? 'Wir fördern die Bildung und Integration unserer Mitglieder durch verschiedene Kurse und Aktivitäten. Unser Ziel ist es, eine Brücke zwischen der alevitischen Kultur und der deutschen Gesellschaft zu bauen.'
                    : 'Çeşitli kurslar ve etkinlikler aracılığıyla üyelerimizin eğitim ve entegrasyonunu destekliyoruz. Amacımız Alevi kültürü ile Alman toplumu arasında köprü kurmaktır.'
                  }
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {locale === 'de' ? 'Gemeinschaft & Kultur' : 'Topluluk & Kültür'}
                </h3>
                <p className="text-gray-700 mb-6">
                  {locale === 'de'
                    ? 'Wir bewahren und pflegen die alevitische Kultur und Tradition für kommende Generationen. Gleichzeitig schaffen wir einen Raum für Gemeinschaft und gegenseitige Unterstützung.'
                    : 'Gelecek nesiller için Alevi kültürü ve geleneklerini koruyoruz ve yaşatıyoruz. Aynı zamanda topluluk ve karşılıklı destek için bir alan yaratıyoruz.'
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