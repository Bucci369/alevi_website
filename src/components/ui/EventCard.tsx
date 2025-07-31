import Link from 'next/link'
import Image from 'next/image'
import { Event, Locale } from '@/types'
import { format } from 'date-fns'
import { de, tr } from 'date-fns/locale'

interface EventCardProps {
  event: Event
  locale: Locale
}

export function EventCard({ event, locale }: EventCardProps) {
  const dateLocale = locale === 'de' ? de : tr
  const title = event.title[locale] || event.title.de
  const description = event.description[locale] || event.description.de

  return (
    <div className="mobile-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200">
      {/* Event Date Badge */}
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-center shadow-lg">
            <div className="text-xs font-medium uppercase">
              {format(event.date, 'MMM', { locale: dateLocale })}
            </div>
            <div className="text-xl font-bold">
              {format(event.date, 'dd')}
            </div>
          </div>
        </div>
        
        {/* Category Color Strip - now gray */}
        <div className="h-2 w-full bg-gray-600" />
        
        {/* Event Image */}
        <div className="h-48 relative overflow-hidden">
          <Image
            src={
              event.slug === 'hizir-cemi' ? `/hizir-cemi.jpg` :
              event.slug === 'hizir-orucu' ? `/hizir-orucu.jpeg` :
              `/${event.slug}.png`
            }
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="p-4 md:p-6">
        {/* Event Title */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Event Category */}
        <div className="flex items-center mb-3">
          <span className="inline-block w-3 h-3 rounded-full mr-2 bg-gray-600" />
          <span className="text-sm text-gray-600 font-medium">
            {event.category.name[locale] || event.category.name.de}
          </span>
        </div>

        {/* Event Description */}
        <p className="text-gray-700 text-xs md:text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-xs md:text-sm">
            <div className="w-4 h-4 mr-2 bg-gray-600 rounded-sm flex-shrink-0"></div>
            <span>
              {format(event.date, 'EEEE, dd. MMMM yyyy', { locale: dateLocale })}
            </span>
          </div>
          
          <div className="flex items-center text-gray-600 text-xs md:text-sm">
            <div className="w-4 h-4 mr-2 bg-gray-600 rounded-sm flex-shrink-0"></div>
            <span className="truncate">
              {event.location.venue}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Link
            href={`/${locale}/aktivitaeten/${event.slug}`}
            className="inline-flex items-center px-3 md:px-4 py-2 bg-gray-800 text-white text-xs md:text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
          >
            {locale === 'de' ? 'Details' : 'Detaylar'}
          </Link>
          
          <button className="text-gray-500 hover:text-gray-700 text-xs md:text-sm font-medium transition-colors">
            {locale === 'de' ? 'Kalender' : 'Takvim'}
          </button>
        </div>
      </div>
    </div>
  )
}