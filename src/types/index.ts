// Global Types für alevido.de
export interface Event {
  id: string
  title: {
    de: string
    tr?: string
  }
  description: {
    de: string
    tr?: string
  }
  date: Date
  location: {
    venue: string
    address: string
  }
  category: EventCategory
  images?: string[]
  slug: string
}

export interface EventCategory {
  id: string
  name: {
    de: string
    tr?: string
  }
  color: string
}

export interface Page {
  id: string
  title: {
    de: string
    tr?: string
  }
  content: {
    de: string
    tr?: string
  }
  slug: string
  seo: {
    metaTitle: {
      de: string
      tr?: string
    }
    metaDescription: {
      de: string
      tr?: string
    }
    keywords: string[]
  }
}

export interface Member {
  id: string
  name: string
  role: {
    de: string
    tr?: string
  }
  bio?: {
    de: string
    tr?: string
  }
  image?: string
}

export type Locale = 'de' | 'tr'