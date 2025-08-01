import { EventCard } from '@/components/ui/EventCard'
import { AuroraBackgroundDemo } from '@/components/ui/aurora-background-demo'
import { FeatureHighlights } from '@/components/ui/FeatureHighlights'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Locale, Event } from '@/types'
import { translations } from '@/lib/i18n/config'
import Link from 'next/link'

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

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const t = translations[locale]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Aurora Background */}
      <AuroraBackgroundDemo locale={locale} />

      {/* Feature Highlights Section */}
      <FeatureHighlights locale={locale} />
    </div>
  )
}