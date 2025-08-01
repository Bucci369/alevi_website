"use client";

import { EventCard } from '@/components/ui/EventCard'
import { AuroraBackgroundDemo } from '@/components/ui/aurora-background-demo'
import { Locale, Event } from '@/types'
import { translations } from '@/lib/i18n/config'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Counter } from '@/components/ui/Counter'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

// Echte Events basierend auf der aktuellen Website
const currentEvents: Event[] = [
  {
    id: '1',
    title: {
      de: 'Leseclub Çocuk Klübü',
      tr: 'Leseclub Çocuk Klübü'
    },
    description: {
      de: 'Lese- und Bildungsaktivitäten für Kinder zur Förderung der Sprach- und Kulturkenntnisse.',
      tr: 'Çocuklar için dil ve kültür bilgisini geliştirici okuma ve eğitim faaliyetleri.'
    },
    date: new Date('2025-02-15T14:00:00'),
    location: {
      venue: 'Gemeindezentrum Dortmund',
      address: 'Bayrische Str. 113, 44339 Dortmund'
    },
    category: {
      id: 'education',
      name: { de: 'Bildung', tr: 'Eğitim' },
      color: '#3b82f6'
    },
    slug: 'leseclub-cocuk-klubu'
  },
  {
    id: '2',
    title: {
      de: 'Bağlama Saz Kurs',
      tr: 'Bağlama Saz Kursu'
    },
    description: {
      de: 'Erlernen des traditionellen alevitischen Instruments Bağlama (Saz) für alle Altersgruppen.',
      tr: 'Tüm yaş grupları için geleneksel Alevi enstrümanı Bağlama (Saz) öğrenme.'
    },
    date: new Date('2025-02-20T18:00:00'),
    location: {
      venue: 'Gemeindezentrum Dortmund',
      address: 'Bayrische Str. 113, 44339 Dortmund'
    },
    category: {
      id: 'cultural',
      name: { de: 'Kulturell', tr: 'Kültürel' },
      color: '#f59e0b'
    },
    slug: 'baglama-saz-kurs'
  },
  {
    id: '3',
    title: {
      de: 'Koro Çalışması',
      tr: 'Koro Çalışması'
    },
    description: {
      de: 'Gemeinsames Singen traditioneller alevitischer Lieder und Deyişler.',
      tr: 'Geleneksel Alevi şarkıları ve deyişlerin toplu olarak söylenmesi.'
    },
    date: new Date('2025-02-22T19:00:00'),
    location: {
      venue: 'Gemeindezentrum Dortmund',
      address: 'Bayrische Str. 113, 44339 Dortmund'
    },
    category: {
      id: 'cultural',
      name: { de: 'Kulturell', tr: 'Kültürel' },
      color: '#10b981'
    },
    slug: 'koro-calismasi'
  }
]

export default function HomePage({ params }: HomePageProps) {
  const [locale, setLocale] = useState<Locale>('de')
  
  useEffect(() => {
    params.then(({ locale }) => setLocale(locale))
  }, [params])

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
    <div className="relative">
      {/* Aurora Background - Fixed, always visible */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <AuroraBackgroundDemo locale={locale} />
      </div>
    </div>
  )
}