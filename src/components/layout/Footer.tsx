import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { Locale } from '@/types'
import { translations } from '@/lib/i18n/config'

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/logo-alevido.png" 
                alt="Alevitische Gemeinde Dortmund Logo" 
                width={56} 
                height={56}
                className="rounded-lg"
              />
              <h3 className="text-lg font-semibold">
                Alevitische Gemeinde Dortmund e.V.
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              {locale === 'de' 
                ? 'Eine Gemeinschaft der Vielfalt, des Respekts und der kulturellen Bereicherung.'
                : 'Çeşitlilik, saygı ve kültürel zenginlik topluluğu.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              {locale === 'de' ? 'Schnellzugriff' : 'Hızlı Erişim'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/ueber-uns`} className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/aktivitaeten`} className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.activities}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/mitglied-werden`} className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.membership}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/kontakt`} className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t.contact.title}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                <span className="text-gray-300">
                  Bayrische Str. 113<br />
                  44339 Dortmund
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <a href="tel:023183392" className="text-gray-300 hover:text-white transition-colors">
                  0231 83 39 26
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <a href="mailto:info@alevido.de" className="text-gray-300 hover:text-white transition-colors">
                  info@alevido.de
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-white flex-shrink-0" />
                <a href="https://www.alevido.de" className="text-gray-300 hover:text-white transition-colors">
                  www.alevido.de
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              {locale === 'de' ? 'Öffnungszeiten' : 'Açılış Saatleri'}
            </h4>
            <div className="text-sm text-gray-300 space-y-1">
              <div className="flex justify-between">
                <span>{locale === 'de' ? 'Mo-Fr' : 'Pzt-Cum'}:</span>
                <span>10:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>{locale === 'de' ? 'Sa' : 'Cmt'}:</span>
                <span>10:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>{locale === 'de' ? 'So' : 'Paz'}:</span>
                <span>{locale === 'de' ? 'Geschlossen' : 'Kapalı'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Alevitische Gemeinde Dortmund e.V. 
            {locale === 'de' ? ' Alle Rechte vorbehalten.' : ' Tüm hakları saklıdır.'}
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href={`/${locale}/impressum`} className="text-gray-400 hover:text-white text-sm transition-colors">
              {locale === 'de' ? 'Impressum' : 'Künye'}
            </Link>
            <Link href={`/${locale}/datenschutz`} className="text-gray-400 hover:text-white text-sm transition-colors">
              {locale === 'de' ? 'Datenschutz' : 'Gizlilik'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}