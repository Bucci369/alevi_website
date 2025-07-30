import { Locale } from '@/types'
import { translations } from '@/lib/i18n/config'
import { ContactForm } from '@/components/ui/ContactForm'

interface ContactPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params
  const t = translations[locale]

  const contactInfo = [
    {
      title: { de: 'Adresse', tr: 'Adres' },
      content: 'Bayrische Str. 113\n44339 Dortmund'
    },
    {
      title: { de: 'Telefon', tr: 'Telefon' },
      content: '+49 (0) 231 83 39 26'
    },
    {
      title: { de: 'E-Mail', tr: 'E-posta' },
      content: 'info@alevido.de'
    },
    {
      title: { de: 'Website', tr: 'Website' },
      content: 'www.alevido.de'
    }
  ]

  const contactAvailability = {
    de: {
      title: 'Erreichbarkeit',
      description: 'Kontaktieren Sie uns telefonisch oder per E-Mail. Wir melden uns schnellstmöglich bei Ihnen zurück.',
      note: 'Termine sind jederzeit nach Vereinbarung möglich'
    },
    tr: {
      title: 'Ulaşılabilirlik', 
      description: 'Telefon veya e-posta ile bizimle iletişime geçin. En kısa sürede size dönüş yapacağız.',
      note: 'Randevu her zaman mümkündür'
    }
  }

  const departments = [
    {
      title: { de: 'Vorstand', tr: 'Yönetim Kurulu' },
      contact: 'info@alevido.de',
      responsibilities: {
        de: 'Vereinsleitung, strategische Entscheidungen, Mitgliedschaft',
        tr: 'Dernek yönetimi, stratejik kararlar, üyelik'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.contact.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {locale === 'de' 
              ? 'Wir freuen uns auf Ihre Nachricht und stehen Ihnen gerne zur Verfügung'
              : 'Mesajınızı dört gözle bekliyoruz ve size yardımcı olmaktan memnuniyet duyarız'
            }
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Kontaktinformationen' : 'İletişim Bilgileri'}
          </h2>
          <div className="mobile-card-grid mobile-card-grid-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="mobile-card bg-white rounded-lg shadow-md p-6 text-center border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {info.title[locale]}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {info.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {contactAvailability[locale].title}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {contactAvailability[locale].description}
            </p>
            <p className="text-gray-600 font-medium">
              {contactAvailability[locale].note}
            </p>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Ansprechpartner' : 'İletişim Sorumluları'}
          </h2>
          <div className="mobile-card-grid">
            {departments.map((dept, index) => (
              <div key={index} className="mobile-card bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {dept.title[locale]}
                </h3>
                <p className="text-gray-600 mb-4">
                  {dept.responsibilities[locale]}
                </p>
                <div className="bg-gray-50 rounded p-3">
                  <p className="text-sm font-medium text-gray-900">
                    {dept.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Kontakt & Anfahrt' : 'İletişim & Ulaşım'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <ContactForm locale={locale} />
            </div>

            {/* Map */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'So finden Sie uns' : 'Bizi Nasıl Bulursunuz'}
              </h3>
              <div className="maps-container bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.7494382826726!2d7.476085276892533!3d51.55449337182392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9109e3c22aa83%3A0xc529c9fdfe74e731!2sAlevitische%20Gemeinde%20Dortmund%20e.V.!5e0!3m2!1sde!2sde!4v1753868715386!5m2!1sde!2sde" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {locale === 'de' ? 'Anfahrt' : 'Ulaşım'}
                  </h4>
                  <p className="text-gray-600 mb-2">
                    <strong>Bayrische Str. 113</strong><br />
                    44339 Dortmund
                  </p>
                  <p className="text-gray-600">
                    {locale === 'de' 
                      ? 'Gut erreichbar mit öffentlichen Verkehrsmitteln und PKW. Parkplätze vorhanden.'
                      : 'Toplu taşıma ve araç ile kolayca ulaşılabilir. Park yeri mevcuttur.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params
  const title = locale === 'de' 
    ? 'Kontakt - Alevitische Gemeinde Dortmund'
    : 'İletişim - Dortmund Alevi Toplumu'
  
  const description = locale === 'de'
    ? 'Kontaktieren Sie die Alevitische Gemeinde Dortmund. Wir freuen uns auf Ihre Nachricht.'
    : 'Dortmund Alevi Cemevi ile iletişime geçin. Mesajınızı dört gözle bekliyoruz.'

  return {
    title,
    description,
  }
}
