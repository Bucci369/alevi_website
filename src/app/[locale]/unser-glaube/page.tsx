import { Locale } from '@/types'
import { translations } from '@/lib/i18n/config'
import Link from 'next/link'

interface FaithPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function FaithPage({ params }: FaithPageProps) {
  const { locale } = await params

  const principles = [
    {
      title: { de: 'Liebe und Toleranz', tr: 'Sevgi ve Hoşgörü' },
      description: { 
        de: 'Die Alevitische Lehre basiert auf bedingungsloser Liebe zu allen Lebewesen und Toleranz gegenüber unterschiedlichen Glaubensrichtungen.',
        tr: 'Alevi öğretisi, tüm canlılara koşulsuz sevgi ve farklı inançlara karşı hoşgörü üzerine kurulmuştur.'
      }
    },
    {
      title: { de: 'Humanismus und Menschenwürde', tr: 'Hümanizm ve İnsan Onuru' },
      description: { 
        de: '"Der Mensch ist die echte Kaaba" - Das Herz des Menschen wird als Haus Gottes angesehen. Alle Menschen sind gleichwertig geschaffen.',
        tr: '"İnsan gerçek Kabe\'dir" - İnsanın kalbi Tanrı\'nın evi olarak görülür. Tüm insanlar eşit yaratılmıştır.'
      }
    },
    {
      title: { de: 'Einheit Hak-Muhammed-Ali', tr: 'Hak-Muhammed-Ali Birliği' },
      description: { 
        de: 'Hak (Gott), Muhammad und Ali bilden eine untrennbare und gleichwertige Einheit - ein zentrales Element des alevitischen Glaubens.',
        tr: 'Hak (Tanrı), Muhammed ve Ali ayrılmaz ve eşdeğer bir birlik oluşturur - Alevi inancının temel unsuru.'
      }
    },
    {
      title: { de: 'Menschliche Vollkommenheit (İnsan-ı Kamil)', tr: 'İnsan-ı Kamil' },
      description: { 
        de: 'Das Ziel ist die Vervollkommnung des Menschen durch die "Vier Tore und Vierzig Regeln" - ein Weg zur Einswerdung mit der Wahrheit.',
        tr: 'Amaç, "Dört Kapı ve Kırk Makam" yoluyla insanın mükemmelleşmesi - hakikatle birleşme yolu.'
      }
    },
    {
      title: { de: 'Innere und Äußere Bedeutung', tr: 'İç ve Dış Anlam' },
      description: { 
        de: 'Der Koran besitzt neben der äußeren (zahiri) auch eine verborgene, innere (batıni) Bedeutung, die von Ali weiterentwickelt wurde.',
        tr: 'Kuran\'ın dış (zahiri) anlamının yanında, Ali tarafından geliştirilen gizli, iç (batıni) anlamı da vardır.'
      }
    },
    {
      title: { de: 'Wissenschaft als Gotteserkenntnis', tr: 'Bilim Tanrı Bilgisi Olarak' },
      description: { 
        de: 'Wissenschaftliche Arbeit wird als Weg betrachtet, Teile des Gottesgeheimnisses zu lüften. Alle heiligen Bücher sind Gotteswort.',
        tr: 'Bilimsel çalışma, Tanrı sırrının parçalarını açmanın bir yolu olarak görülür. Tüm kutsal kitaplar Tanrı\'nın kelimesidir.'
      }
    }
  ]

  const fourGates = [
    {
      gate: '1',
      name: { de: 'Scheriat (Şeriat)', tr: 'Şeriat' },
      title: { de: 'Formales Verhalten', tr: 'Biçimsel Davranış' },
      description: { 
        de: 'Grundlegende ethische Verhaltensweisen: Glaubensbereitschaft, wissenschaftliches Lernen, ehrlicher Einkommenserwerb, Gleichberechtigung zwischen Männern und Frauen.',
        tr: 'Temel etik davranışlar: İnanç hazırlığı, bilimsel öğrenme, dürüst gelir elde etme, kadın-erkek eşitliği.'
      }
    },
    {
      gate: '2', 
      name: { de: 'Tarikat', tr: 'Tarikat' },
      title: { de: 'Mystischer Pfad', tr: 'Mistik Yol' },
      description: { 
        de: 'Vertrauen zum geistlichen Lehrer, Liebe zum Lernen, Beherrschung des Egos, Ehrfurcht und Liebe zu Gott, Friedfertigkeit in der Gemeinschaft.',
        tr: 'Ruhani öğretmene güven, öğrenme sevgisi, egoya hakim olma, Tanrı\'ya saygı ve sevgi, toplulukta barışçıl olmak.'
      }
    },
    {
      gate: '3',
      name: { de: 'Marifet', tr: 'Marifet' },
      title: { de: 'Erkenntnis', tr: 'Bilgi' },
      description: { 
        de: 'Korrektes Benehmen, ehrenhaftes Leben, Geduld, Genügsamkeit, Wissenserwerb, Selbsterkenntnis durch den "Herzblick".',
        tr: 'Doğru davranış, onurlu yaşam, sabır, yetinme, bilgi edinme, "kalp gözü" ile öz bilgi.'
      }
    },
    {
      gate: '4',
      name: { de: 'Hakikat', tr: 'Hakikat' },
      title: { de: 'Wahrheit', tr: 'Hakikat' },
      description: { 
        de: 'Höchste Stufe: Bescheidenheit allen Menschen gegenüber, Glaube an Gott im Menschen, Einheit der menschlichen Seelen in Gott.',
        tr: 'En yüksek aşama: Tüm insanlara karşı alçakgönüllülük, insandaki Tanrı\'ya inanç, insan ruhlarının Tanrı\'da birliği.'
      }
    }
  ]

  const statistics = [
    { 
      number: '700.000-800.000', 
      label: { de: 'Aleviten in Deutschland', tr: 'Almanya\'da Aleviler' }
    },
    { 
      number: '10-25 Mio.', 
      label: { de: 'Aleviten in der Türkei', tr: 'Türkiye\'de Aleviler' }
    },
    { 
      number: '13. Jhd.', 
      label: { de: 'Gründung durch Haci Bektasch Veli', tr: 'Hacı Bektaş Veli Tarafından Kuruluş' }
    },
    { 
      number: '1989', 
      label: { de: 'Ende der Takiya in Deutschland', tr: 'Almanya\'da Takiye\'nin Sonu' }
    }
  ]

  const teachings = [
    {
      title: { de: 'Entstehung des Universums', tr: 'Evrenin Yaratılışı' },
      description: { 
        de: 'Die alevitische Kosmologie erklärt die Entstehung und Struktur des Universums aus spiritueller Sicht.',
        tr: 'Alevi kozmolojisi evrenin yaratılışını ve yapısını ruhani açıdan açıklar.'
      }
    },
    {
      title: { de: 'Menschheitsgeschichte', tr: 'İnsanlık Tarihi' },
      description: { 
        de: 'Die Geschichte der Menschheit wird als spiritueller Entwicklungsprozess verstanden.',
        tr: 'İnsanlık tarihi ruhani bir gelişim süreci olarak anlaşılır.'
      }
    },
    {
      title: { de: 'Beziehung zwischen Gott, Mensch und Natur', tr: 'Tanrı, İnsan ve Doğa İlişkisi' },
      description: { 
        de: 'Die komplexe Wechselbeziehung zwischen dem Göttlichen, der Menschheit und der natürlichen Welt.',
        tr: 'İlahi olan, insanlık ve doğal dünya arasındaki karmaşık etkileşim.'
      }
    },
    {
      title: { de: 'Zukunftsvisionen', tr: 'Gelecek Vizyonları' },
      description: { 
        de: 'Spirituelle Perspektiven auf die Zukunft der Menschheit und des Universums.',
        tr: 'İnsanlığın ve evrenin geleceğine dair ruhani perspektifler.'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {locale === 'de' ? 'Unser Glaube' : 'İnancımız'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {locale === 'de' 
              ? 'Eine umfassende Weltanschauung der Liebe und Toleranz'
              : 'Sevgi ve hoşgörünün kapsamlı bir dünya görüşü'
            }
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label[locale]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                {locale === 'de' ? 'Das Alevitentum - Ein Weg der Menschlichkeit' : 'Alevilik - İnsanlık Yolu'}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                {locale === 'de'
                  ? 'Das Alevitentum ist eine eigenständige, synkretistische Religions- und Kulturgemeinschaft, die ihre Wurzeln in Anatolien hat. Es zeichnet sich durch eine tiefgreifende Betonung des Humanismus, der Toleranz und der zentralen Stellung des Menschen aus.'
                  : 'Alevilik, köklerini Anadolu\'da bulan bağımsız, senkretik bir din ve kültür topluluğudur. Hümanizm, hoşgörü ve insanın merkezi konumuna derin bir vurgu ile karakterize edilir.'
                }
              </p>
              <p>
                {locale === 'de'
                  ? 'Im Gegensatz zu dogmatischen Auslegungen vieler Religionen stellt das Alevitentum jegliche Absolutheitsansprüche infrage und rückt das eigenverantwortliche Handeln des Individuums in den Vordergrund.'
                  : 'Birçok dinin dogmatik yorumlarının aksine, Alevilik tüm mutlaklık iddialarını sorgular ve bireyin kendi sorumluluğunda hareket etmesini ön plana çıkarır.'
                }
              </p>
              <p>
                {locale === 'de'
                  ? 'Als eigenständige innerislamische Religionsgemeinschaft entwickelte sich das Alevitentum aus der islamischen Schia und vereint Elemente aus vorislamischen Religionen Mesopotamiens sowie dem Sufismus (islamische Mystik).'
                  : 'Bağımsız bir İslam içi dini topluluk olarak Alevilik, İslam Şiiliğinden gelişmiş ve Mezopotamya\'nın İslam öncesi dinlerinden ve Sufizmden (İslami mistisizm) unsurları birleştirmiştir.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Grundprinzipien des Alevitentums' : 'Aleviliğin Temel İlkeleri'}
          </h2>
          <div className="mobile-card-grid">
            {principles.map((principle, index) => (
              <div key={index} className="mobile-card bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {principle.title[locale]}
                </h3>
                <p className="text-gray-700">
                  {principle.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Gates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'de' ? 'Die Vier Tore und Vierzig Regeln' : 'Dört Kapı ve Kırk Makam'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'de'
                ? 'Der spirituelle Weg zur menschlichen Vervollkommnung (İnsan-ı Kamil) und zur Einswerdung mit der Wahrheit, beschrieben im Buyruk, dem Katechismus des Alevitentums.'
                : 'İnsan-ı Kamil olmaya ve hakikatle birleşmeye giden ruhani yol, Aleviliğin katekizmi olan Buyruk\'ta açıklanmıştır.'
              }
            </p>
          </div>
          
          <div className="mobile-card-grid">
            {fourGates.map((gate, index) => (
              <div key={index} className="mobile-card bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center mr-4 text-xl font-bold">
                    {gate.gate}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {gate.name[locale]}
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {gate.title[locale]}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">
                  {gate.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachings Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Alevitische Lehren' : 'Alevi Öğretileri'}
          </h2>
          <div className="mobile-card-grid">
            {teachings.map((teaching, index) => (
              <div key={index} className="mobile-card bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {teaching.title[locale]}
                </h3>
                <p className="text-gray-700">
                  {teaching.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Religious Practices */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {locale === 'de' ? 'Religiöse Praxis' : 'Dini Uygulama'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {locale === 'de' ? 'Cem-Zeremonie' : 'Cem Töreni'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'de'
                  ? 'Gemeinschaftliche Gottesdienste mit Musik, Gebet und spirituellen Diskussionen.'
                  : 'Müzik, dua ve ruhani tartışmalarla topluluk ibadetleri.'
                }
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {locale === 'de' ? 'Sohbet' : 'Sohbet'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'de'
                  ? 'Spirituelle Gespräche und Diskussionen über Glaubensfragen.'
                  : 'İnanç konuları üzerine ruhani sohbetler ve tartışmalar.'
                }
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {locale === 'de' ? 'Semah' : 'Semah'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'de'
                  ? 'Spiritueller Tanz als Ausdruck der Verbindung mit dem Göttlichen.'
                  : 'İlahi ile bağlantının ifadesi olarak ruhani dans.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar and Observances */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {locale === 'de' ? 'Religiöser Kalender' : 'Dini Takvim'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {locale === 'de' ? 'Nevruz (21. März)' : 'Nevruz (21 Mart)'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'de'
                  ? 'Das wichtigste alevitische Fest - Frühlingsbeginn und spirituelle Erneuerung.'
                  : 'En önemli Alevi bayramı - bahar başlangıcı ve ruhani yenilenme.'
                }
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {locale === 'de' ? 'Hızır-Fasten' : 'Hızır Orucu'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'de'
                  ? 'Drei Tage Fasten zu Ehren des Heiligen Hızır.'
                  : 'Hızır Efendi onuruna üç gün oruç.'
                }
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {locale === 'de' ? 'Muharrem-Fasten' : 'Muharrem Orucu'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'de'
                  ? 'Zwölf Tage Fasten im Gedenken an Kerbela.'
                  : 'Kerbela anısına on iki gün oruç.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Personalities */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Wichtige Persönlichkeiten' : 'Önemli Şahsiyetler'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {locale === 'de' ? 'Sahi Merdan Ali' : 'Sahi Merdan Ali'}
              </h3>
              <p className="text-gray-700 text-sm text-center">
                {locale === 'de'
                  ? 'Zentrale Figur im Alevitentum, der menschliche Vollkommenheit (İnsan-ı Kamil) erreichte und den Kampf gegen Ungerechtigkeit symbolisiert.'
                  : 'Alevilikte merkezi figür, insan-ı kamil seviyesine ulaşmış ve adaletsizlikle mücadeleyi simgeler.'
                }
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {locale === 'de' ? 'Hızır (Hizir)' : 'Hızır'}
              </h3>
              <p className="text-gray-700 text-sm text-center">
                {locale === 'de'
                  ? 'Heiliger Schutzpatron der Aleviten, der als unsterblich gilt und den Menschen zur Hilfe eilt, die an ihn glauben.'
                  : 'Alevilerin kutsal koruyucu azizi, ölümsüz kabul edilir ve ona inanan insanlara yardıma koşar.'
                }
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {locale === 'de' ? 'Haci Bektasch Veli' : 'Hacı Bektaş Veli'}
              </h3>
              <p className="text-gray-700 text-sm text-center">
                {locale === 'de'
                  ? 'Sufi-Meister aus dem 13. Jahrhundert, Gründer des Bektaschi-Ordens und zentrale Figur in der Entwicklung des Alevitentums.'
                  : '13. yüzyıldan Sufi üstad, Bektaşi tarikatının kurucusu ve Aleviliğin gelişiminde merkezi figür.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {locale === 'de' ? 'Spirituelle Weisheit' : 'Ruhani Hikmet'}
          </h2>
          <blockquote className="text-2xl italic mb-4">
            {locale === 'de'
              ? '"Benim Kâbem insandır"'
              : '"Benim Kâbem insandır"'
            }
          </blockquote>
          <p className="text-lg mb-6">
            {locale === 'de'
              ? '"Meine Kaaba ist ein menschliches Wesen" - Der Mensch steht im Zentrum der alevitischen Spiritualität.'
              : '"Benim Kabem insandır" - İnsan, Alevi maneviyatının merkezinde yer alır.'
            }
          </p>
          <blockquote className="text-xl italic">
            {locale === 'de'
              ? '"İnsanı yaşat ki devlet yaşasın"'
              : '"İnsanı yaşat ki devlet yaşasın"'
            }
          </blockquote>
          <p className="text-base mt-2">
            {locale === 'de'
              ? '"Halte den Menschen am Leben, damit der Staat leben kann" - Die Bedeutung jedes einzelnen Menschen für das Wohlergehen der Gesellschaft.'
              : '"İnsanı yaşat ki devlet yaşasın" - Her bir insanın toplumun refahı için önemini vurgular.'
            }
          </p>
        </div>
      </section>

      {/* Practice Differences */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {locale === 'de' ? 'Besonderheiten der Glaubenspraxis' : 'İnanç Pratiğinin Özellikleri'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {locale === 'de' ? 'Gebet (Niyaz)' : 'Dua (Niyaz)'}
              </h3>
              <p className="text-gray-700 mb-3">
                {locale === 'de'
                  ? 'Aleviten verrichten nicht die fünf täglichen rituellen Gebete (Namaz). Ihr Gebet ist das "flehentliche Bitten" (Niyaz).'
                  : 'Aleviler beş vakit namaz kılmazlar. Onların duası "yakarışla isteme" (Niyaz) dur.'
                }
              </p>
              <p className="text-gray-600 text-sm">
                {locale === 'de'
                  ? 'Dieses Gebet ermöglicht eine tiefere geistliche Gemeinschaft während der Cem-Zeremonien.'
                  : 'Bu dua, Cem törenlerinde daha derin bir ruhani topluluk sağlar.'
                }
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {locale === 'de' ? 'Fasten (Oruç)' : 'Oruç'}
              </h3>
              <p className="text-gray-700 mb-3">
                {locale === 'de'
                  ? 'Hauptfastenzeit: 12-tägiges Muharrem-Fasten zum Gedenken an Imam Hussein. Zusätzlich das 3-tägige Hızır-Fasten (13.-15. Februar).'
                  : 'Ana oruç: İmam Hüseyin anısına 12 günlük Muharrem orucu. Ayrıca 3 günlük Hızır orucu (13-15 Şubat).'
                }
              </p>
              <p className="text-gray-600 text-sm">
                {locale === 'de'
                  ? 'Diese Fastenzeiten unterscheiden sich vom islamischen Ramadan.'
                  : 'Bu oruç dönemleri İslami Ramazan\'dan farklıdır.'
                }
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {locale === 'de' ? 'Heilige Schriften' : 'Kutsal Kitaplar'}
              </h3>
              <p className="text-gray-700 mb-3">
                {locale === 'de'
                  ? 'Aleviten akzeptieren alle heiligen Bücher: "Alle vier Bücher (Psalmen, Thora, Bibel, Koran) sind Gotteswort".'
                  : 'Aleviler tüm kutsal kitapları kabul eder: "Dört kitap (Zebur, Tevrat, İncil, Kuran) Tanrı\'nın kelimesidir".'
                }
              </p>
              <p className="text-gray-600 text-sm">
                {locale === 'de'
                  ? 'Wissenschaftliche Arbeit wird als Weg zur Entdeckung des Gottesgeheimnisses betrachtet.'
                  : 'Bilimsel çalışma, Tanrı sırrını keşfetmenin bir yolu olarak görülür.'
                }
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {locale === 'de' ? 'Eigenverantwortung' : 'Kişisel Sorumluluk'}
              </h3>
              <p className="text-gray-700 mb-3">
                {locale === 'de'
                  ? 'Der menschliche Verstand ist Gottes Gabe. Jeder Mensch ist für die Führung seines eigenen Lebens selbst verantwortlich.'
                  : 'İnsan aklı Tanrı\'nın armağanıdır. Her insan kendi hayatını yönetmekten kendisi sorumludur.'
                }
              </p>
              <p className="text-gray-600 text-sm">
                {locale === 'de'
                  ? 'Aleviten lehnen es ab, Lebensfehler auf Gottes Willen zurückzuführen.'
                  : 'Aleviler yaşam hatalarını Tanrı\'nın iradesine bağlamayı reddeder.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Further Learning */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {locale === 'de' ? 'Mehr erfahren' : 'Daha Fazla Öğrenin'}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {locale === 'de'
              ? 'Für detailliertere Informationen über die alevitische Lehre, Geschichte und Kultur besuchen Sie die Alevitische Gemeinde Deutschland e.V.'
              : 'Alevi öğretisi, tarihi ve kültürü hakkında daha ayrıntılı bilgi için Alevitische Gemeinde Deutschland e.V.\'yi ziyaret edin.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/unser-glaube/lehre`} className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors inline-block text-center">
              {locale === 'de' ? 'Mehr über die Lehre' : 'Öğreti Hakkında'}
            </Link>
            <Link href={`/${locale}/aktivitaeten`} className="border-2 border-gray-600 text-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block text-center">
              {locale === 'de' ? 'Unsere Aktivitäten' : 'Faaliyetlerimiz'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}