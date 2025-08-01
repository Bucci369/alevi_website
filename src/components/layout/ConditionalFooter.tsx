"use client";

import { usePathname } from 'next/navigation'
import { Footer } from './Footer'
import { Locale } from '@/types'

interface ConditionalFooterProps {
  locale: Locale
}

export function ConditionalFooter({ locale }: ConditionalFooterProps) {
  const pathname = usePathname()
  
  // Hide footer on homepage
  const isHomepage = pathname === '/de' || pathname === '/tr'
  
  if (isHomepage) {
    return null
  }
  
  return <Footer locale={locale} />
}
