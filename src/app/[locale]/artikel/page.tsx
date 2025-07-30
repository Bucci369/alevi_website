import { Locale } from '@/types'
import Link from 'next/link'
import { format } from 'date-fns'
import { de, tr } from 'date-fns/locale'
import Image from 'next/image'

interface ArticlePageProps {
  params: Promise<{ locale: Locale }>
}

// Mock article data - später aus CMS oder Database
const articles = [
  {
    id: 'hz-ali-im-alevitentum',
    title: {
      de: 'Hz. Ali im Alevitentum: Eine umfassende Darstellung',
      tr: 'Alevilikte Hz. Ali: Kapsamlı Bir İnceleme'
    },
    excerpt: {
      de: 'Hz. Ali ist für die alevitische Glaubensgemeinschaft weit mehr als eine bedeutende historische Persönlichkeit; er stellt eine zentrale, heilige Figur dar, deren Leben und Lehren den Kern des alevitischen Glaubens prägen.',
      tr: 'Hz. Ali, Alevi inanç topluluğu için önemli bir tarihî şahsiyet olmaktan çok daha fazlasıdır; yaşamı ve öğretileri Alevi inancının özünü şekillendiren merkezi, kutsal bir figürdür.'
    },
    author: 'Özgür Azap',
    publishedDate: new Date('2025-01-15'),
    readTime: 12,
    tags: ['Alevitentum', 'Hz. Ali', 'Theologie', 'Geschichte'],
    image: '/hzali.jpg'
  },
  {
    id: 'haci-bektas-veli',
    title: {
      de: 'Hacı Bektaş Veli: Der Gründer des Bektaşitentums',
      tr: 'Hacı Bektaş Veli: Bektaşiliğin Kurucusu'
    },
    excerpt: {
      de: 'Hacı Bektaş Veli (1209-1271) war ein mystischer Sufi-Meister des 13. Jahrhunderts, dessen Lehren die Grundlage für das Bektaşi-Sufitum und das moderne Alevitentum legten.',
      tr: 'Hacı Bektas Veli (1209-1271), 13. yüzyılın mistik sufi ustası olup, öğretileri Bektaşi sufizminin ve modern Aleviliğin temellerini oluşturmuştur.'
    },
    author: 'Özgür Azap',
    publishedDate: new Date('2025-01-20'),
    readTime: 10,
    tags: ['Hacı Bektaş Veli', 'Bektaşilik', 'Sufismus', '13. Jahrhundert'],
    image: '/hacibektasveli01.png'
  }
]

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { locale } = await params
  const dateLocale = locale === 'de' ? de : tr

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {locale === 'de' ? 'Artikel & Beiträge' : 'Makaleler & Yazılar'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {locale === 'de' 
              ? 'Einblicke in die alevitische Lehre, Geschichte und Kultur'
              : 'Alevi öğretisi, tarihi ve kültürüne dair görüşler'
            }
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mobile-card-grid">
            {articles.map((article) => (
              <article key={article.id} className="mobile-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200">
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title[locale]}
                    fill
                    className="object-cover object-center"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="p-6">
                  {/* Article Meta */}
                  <div className="flex items-center mb-4 text-sm text-gray-600">
                    <div className="flex items-center mr-4">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                        <Image
                          src="/autor.webp"
                          alt={article.author}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium">{article.author}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <span>{format(article.publishedDate, 'dd. MMM yyyy', { locale: dateLocale })}</span>
                    </div>
                    <div className="flex items-center">
                      <span>{article.readTime} {locale === 'de' ? 'Min. Lesezeit' : 'Dk. Okuma'}</span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title[locale]}
                  </h2>

                  {/* Article Excerpt */}
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {article.excerpt[locale]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Link
                    href={`/${locale}/artikel/${article.id}`}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
                  >
                    {locale === 'de' ? 'Weiterlesen' : 'Devamını Oku'} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { locale } = await params
  const title = locale === 'de' 
    ? 'Artikel & Beiträge - Alevitische Gemeinde Dortmund'
    : 'Makaleler & Yazılar - Dortmund Alevi Toplumu'
  
  const description = locale === 'de'
    ? 'Entdecken Sie Artikel und Beiträge über die alevitische Lehre, Geschichte und Kultur.'
    : 'Alevi öğretisi, tarihi ve kültürü hakkında makaleler ve yazıları keşfedin.'

  return {
    title,
    description,
  }
}