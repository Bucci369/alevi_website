import { Locale } from '@/types'

export const locales: Locale[] = ['de', 'tr']
export const defaultLocale: Locale = 'de'

export const translations = {
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      faith: 'Unser Glaube',
      commitment: 'Unser Engagement',
      activities: 'Aktivitäten',
      calendar: 'Kalender',
      membership: 'Mitglied werden',
      contact: 'Kontakt',
      religiousEducation: 'Religionsunterricht',
      courses: 'Kursprogramm',
      funerals: 'Bestattungen',
      articles: 'Artikel'
    },
    common: {
      readMore: 'Weiterlesen',
      backToTop: 'Nach oben',
      loading: 'Lädt...',
      error: 'Ein Fehler ist aufgetreten',
      noResults: 'Keine Ergebnisse gefunden'
    },
    events: {
      title: 'Veranstaltungen',
      upcoming: 'Kommende Events',
      past: 'Vergangene Events',
      allEvents: 'Alle Veranstaltungen',
      dateTime: 'Datum & Uhrzeit',
      location: 'Ort',
      addToCalendar: 'Zum Kalender hinzufügen'
    },
    contact: {
      title: 'Kontakt',
      name: 'Name',
      email: 'E-Mail',
      subject: 'Betreff',
      message: 'Nachricht',
      send: 'Nachricht senden',
      success: 'Nachricht erfolgreich gesendet!',
      error: 'Fehler beim Senden der Nachricht'
    }
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      faith: 'İnancımız',
      commitment: 'Taahhüdümüz',
      activities: 'Faaliyetler',
      calendar: 'Takvim',
      membership: 'Üye Ol',
      contact: 'İletişim',
      religiousEducation: 'Din Dersi',
      courses: 'Kurs Programı',
      funerals: 'Cenaze Hizmetleri',
      articles: 'Makaleler'
    },
    common: {
      readMore: 'Devamını Oku',
      backToTop: 'Yukarı',
      loading: 'Yükleniyor...',
      error: 'Bir hata oluştu',
      noResults: 'Sonuç bulunamadı'
    },
    events: {
      title: 'Etkinlikler',
      upcoming: 'Yaklaşan Etkinlikler',
      past: 'Geçmiş Etkinlikler',
      allEvents: 'Tüm Etkinlikler',
      dateTime: 'Tarih & Saat',
      location: 'Konum',
      addToCalendar: 'Takvime Ekle'
    },
    contact: {
      title: 'İletişim',
      name: 'Ad',
      email: 'E-posta',
      subject: 'Konu',
      message: 'Mesaj',
      send: 'Mesaj Gönder',
      success: 'Mesaj başarıyla gönderildi!',
      error: 'Mesaj gönderilirken hata oluştu'
    }
  }
}