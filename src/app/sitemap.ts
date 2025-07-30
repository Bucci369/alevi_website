import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.alevido.de'
  
  const routes = [
    '',
    '/ueber-uns',
    '/unser-glaube',
    '/unser-engagement',
    '/religionsunterricht',
    '/kursprogramm',
    '/aktivitaeten',
    '/artikel',
    '/artikel/hz-ali-im-alevitentum',
    '/artikel/haci-bektas-veli',
    '/mitglied-werden',
    '/kontakt'
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add routes for both languages
  routes.forEach(route => {
    // German pages
    sitemap.push({
      url: `${baseUrl}/de${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : route.includes('/artikel/') ? 'monthly' : 'weekly',
      priority: route === '' ? 1 : route.includes('/artikel/') ? 0.9 : 0.8,
    })
    
    // Turkish pages
    sitemap.push({
      url: `${baseUrl}/tr${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : route.includes('/artikel/') ? 'monthly' : 'weekly',
      priority: route === '' ? 1 : route.includes('/artikel/') ? 0.9 : 0.8,
    })
  })

  // Add root redirect
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  })

  return sitemap
}