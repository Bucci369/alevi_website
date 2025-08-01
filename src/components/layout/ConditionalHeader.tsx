"use client";

import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Locale } from '@/types'

interface ConditionalHeaderProps {
  locale: Locale
}

export function ConditionalHeader({ locale }: ConditionalHeaderProps) {
  const pathname = usePathname()
  
  // Hide header on homepage
  const isHomepage = pathname === '/de' || pathname === '/tr'
  
  if (isHomepage) {
    return null
  }
  
  return <Header locale={locale} />
}
