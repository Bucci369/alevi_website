import { Locale } from '@/types'
import { translations } from '@/lib/i18n/config'

interface MembershipPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function MembershipPage({ params }: MembershipPageProps) {
  const { locale } = await params

  const membershipBenefits = [
    {
      title: { de: 'Gemeinschaftszugehörigkeit', tr: 'Topluluk Üyeliği' },
      description: { 
        de: 'Werden Sie Teil einer lebendigen alevitischen Gemeinschaft mit über 400 Mitgliedsfamilien.',
        tr: '400\'den fazla üye ailenin bulunduğu canlı bir Alevi topluluğunun parçası olun.'
      }
    },
    {
      title: { de: 'Kulturelle Teilhabe', tr: 'Kültürel Katılım' },
      description: { 
        de: 'Teilnahme an allen religiösen Feiern, kulturellen Veranstaltungen und Gemeinschaftsaktivitäten.',
        tr: 'Tüm dini kutlamalara, kültürel etkinliklere ve topluluk faaliyetlerine katılım.'
      }
    },
    {
      title: { de: 'Mitbestimmung', tr: 'Karar Verme Hakkı' },
      description: { 
        de: 'Stimmrecht bei Vereinsversammlungen und Mitgestaltung der Gemeindezukunft.',
        tr: 'Dernek toplantılarında oy hakkı ve cemaatin geleceğini şekillendirme.'
      }
    },
    {
      title: { de: 'Beratung und Unterstützung', tr: 'Danışmanlık ve Destek' },
      description: { 
        de: 'Zugang zu sozialer Beratung, Integrationshilfe und Unterstützung bei behördlichen Angelegenheiten.',
        tr: 'Sosyal danışmanlık, entegrasyon yardımı ve resmi işlerde destek erişimi.'
      }
    }
  ]

  const membershipFees = [
    {
      type: { de: 'Normal', tr: 'Normal' },
      amount: '15€',
      description: { 
        de: 'Monatlicher Beitrag',
        tr: 'Aylık aidat'
      }
    },
    {
      type: { de: 'Ermäßigt', tr: 'İndirimli' },
      amount: '10€',
      description: { 
        de: 'Für Schüler, Studenten, Auszubildende, Rentner, Erwerbslose',
        tr: 'Öğrenciler, üniversite öğrencileri, stajyerler, emekliler, işsizler için'
      }
    }
  ]

  const membershipSteps = [
    {
      step: '1',
      title: { de: 'Antrag herunterladen', tr: 'Başvuru Formunu İndir' },
      description: { 
        de: 'Laden Sie das Mitgliedschaftsformular herunter und füllen Sie es vollständig aus.',
        tr: 'Üyelik formunu indirin ve eksiksiz doldurun.'
      }
    },
    {
      step: '2',
      title: { de: 'Antrag einreichen', tr: 'Başvuruyu Gönder' },
      description: { 
        de: 'Senden Sie den ausgefüllten Antrag per Post, E-Mail oder bringen Sie ihn persönlich vorbei.',
        tr: 'Doldurulmuş başvuruyu posta, e-posta ile gönderin veya şahsen getirin.'
      }
    },
    {
      step: '3',
      title: { de: 'Dauerauftrag einrichten', tr: 'Otomatik Ödeme Ayarla' },
      description: { 
        de: 'Richten Sie einen Dauerauftrag für Ihren monatlichen Mitgliedsbeitrag ein.',
        tr: 'Aylık üyelik aidatınız için otomatik ödeme talimatı verin.'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {locale === 'de' ? 'Mitglied werden' : 'Üye Ol'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {locale === 'de' 
              ? 'Werden Sie Teil unserer lebendigen alevitischen Gemeinschaft in Dortmund'
              : 'Dortmund\'daki canlı Alevi topluluğumuzun bir parçası olun'
            }
          </p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Ihre Vorteile als Mitglied' : 'Üye Olarak Avantajlarınız'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title[locale]}
                </h3>
                <p className="text-gray-600">
                  {benefit.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Fees */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Mitgliedsbeiträge' : 'Üyelik Aidatları'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {membershipFees.map((fee, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-3">
                  {fee.amount}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {fee.type[locale]}
                </h3>
                <p className="text-gray-600">
                  {fee.description[locale]}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {locale === 'de' 
                ? 'Alle Beiträge sind monatlich zu entrichten'
                : 'Tüm aidatlar aylık olarak ödenir'
              }
            </p>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'So werden Sie Mitglied' : 'Nasıl Üye Olursunuz'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title[locale]}
                </h3>
                <p className="text-gray-600">
                  {step.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {locale === 'de' ? 'Mitgliedschaftsantrag' : 'Üyelik Başvurusu'}
          </h2>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <p className="text-lg text-gray-700 mb-6">
              {locale === 'de'
                ? 'Laden Sie hier das Mitgliedschaftsformular herunter und werden Sie Teil unserer Gemeinschaft.'
                : 'Üyelik formunu buradan indirin ve topluluğumuzun bir parçası olun.'
              }
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg cursor-not-allowed opacity-50">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {locale === 'de' ? 'Formular wird bereitgestellt' : 'Form hazırlanıyor'}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateMetadata({ params }: MembershipPageProps) {
  const { locale } = await params
  const title = locale === 'de' 
    ? 'Mitglied werden - Alevitische Gemeinde Dortmund'
    : 'Üye Ol - Dortmund Alevi Toplumu'
  
  const description = locale === 'de'
    ? 'Werden Sie Mitglied der Alevitischen Gemeinde Dortmund und Teil unserer lebendigen Gemeinschaft.'
    : 'Dortmund Alevi Cemevi\'ne üye olun ve canlı topluluğumuzun bir parçası olun.'

  return {
    title,
    description,
  }
}
