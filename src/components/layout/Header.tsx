'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'
import { Locale } from '@/types'
import { translations } from '@/lib/i18n/config'

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const t = translations[locale]

  // Funktion um die aktuelle Seite in der anderen Sprache zu bekommen
  const getLocalizedPath = (newLocale: Locale) => {
    const currentPath = pathname
    const currentLocale = locale
    
    // Entferne die aktuelle Sprache vom Pfad
    const pathWithoutLocale = currentPath.replace(`/${currentLocale}`, '') || '/'
    
    // Füge die neue Sprache hinzu
    return `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
  }

  // Close dropdown when clicking outside
  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null)
      }
    }

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [activeDropdown])

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.about, href: `/${locale}/ueber-uns` },
    { name: t.nav.faith, href: `/${locale}/unser-glaube` },
    { 
      name: t.nav.commitment, 
      href: `/${locale}/unser-engagement`,
      submenu: [
        { name: t.nav.religiousEducation, href: `/${locale}/religionsunterricht` },
        { name: t.nav.courses, href: `/${locale}/kursprogramm` },
        { name: t.nav.funerals, href: 'https://www.alevitische-bestattungen.de/', external: true }
      ]
    },
    { name: t.nav.activities, href: `/${locale}/aktivitaeten` },
    { name: t.nav.articles, href: `/${locale}/artikel` },
    { name: t.nav.membership, href: `/${locale}/mitglied-werden` },
    { name: t.nav.contact, href: `/${locale}/kontakt` }
  ]

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - ganz links */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <Image
              src="/logo-alevido.png"
              alt="Alevitische Gemeinde Dortmund"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">
                Alevitische Gemeinde Dortmund
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation - rechts ausgerichtet */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div className="relative dropdown-container">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 text-sm font-medium transition-colors flex items-center rounded-md"
                    >
                      {item.name}
                      <svg 
                        className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border z-50">
                        <div className="py-1">
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.name}
                          </Link>
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              target={subItem.external ? '_blank' : undefined}
                              rel={subItem.external ? 'noopener noreferrer' : undefined}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                              {subItem.external && (
                                <svg className="inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 text-sm font-medium transition-colors rounded-md"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l pl-6">
              <Globe className="w-4 h-4 text-gray-500" />
              <Link
                href={getLocalizedPath(locale === 'de' ? 'tr' : 'de')}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded-md transition-colors"
              >
                {locale === 'de' ? 'TR' : 'DE'}
              </Link>
            </div>
          </nav>

          {/* Mobile menu button - rechts ausgerichtet */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          target={subItem.external ? '_blank' : undefined}
                          rel={subItem.external ? 'noopener noreferrer' : undefined}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                          {subItem.external && (
                            <svg className="inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="border-t pt-2 mt-2">
                <Link
                  href={getLocalizedPath(locale === 'de' ? 'tr' : 'de')}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {locale === 'de' ? 'Türkçe' : 'Deutsch'}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}