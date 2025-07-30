'use client'

import { Locale } from '@/types'

interface ContactFormProps {
  locale: Locale
}

export function ContactForm({ locale }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string
    
    const mailtoLink = `mailto:info@alevido.de?subject=${encodeURIComponent(subject || 'Kontaktanfrage von Website')}&body=${encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`
    )}`
    
    window.location.href = mailtoLink
  }

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-md h-fit">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        {locale === 'de' ? 'Nachricht senden' : 'Mesaj Gönder'}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              {locale === 'de' ? 'Name' : 'Ad'}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            {locale === 'de' ? 'Betreff' : 'Konu'}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {locale === 'de' ? 'Nachricht' : 'Mesaj'}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
        >
          {locale === 'de' ? 'Nachricht senden' : 'Mesaj Gönder'}
        </button>
      </form>
    </div>
  )
}