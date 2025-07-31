import React from "react";
import Image from "next/image";

export const religiousTimelineData = [
  {
    year: "610",
    title: {
      de: "Die Offenbarung des Islam",
      tr: "İslam'ın Vahyi"
    },
    content: {
      de: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Die ersten Offenbarungen an den Propheten Muhammad markieren den Beginn des Islam. 
            Für Aleviten ist dies der Grundstein einer spirituellen Tradition, die Liebe, 
            Toleranz und Gleichberechtigung in den Mittelpunkt stellt.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Grundprinzipien des Islam:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-1">
              <li>• Einheit Gottes (Tawhid)</li>
              <li>• Barmherzigkeit und Mitgefühl</li>
              <li>• Gerechtigkeit und Gleichberechtigung</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/Muhammed_(saw)_et_sa_famille.jpg"
              alt="Prophet Muhammad und seine Familie"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
          </div>
        </div>
      ),
      tr: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Hz. Muhammed'e ilk vahiylerin gelmesi İslam'ın başlangıcını işaret eder. 
            Aleviler için bu, sevgi, hoşgörü ve eşitliği merkeze alan ruhani bir geleneğin temelidir.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">İslam'ın Temel İlkeleri:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-1">
              <li>• Allah'ın birliği (Tevhid)</li>
              <li>• Merhamet ve şefkat</li>
              <li>• Adalet ve eşitlik</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/Muhammed_(saw)_et_sa_famille.jpg"
              alt="Hz. Muhammed ve ailesi"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
          </div>
        </div>
      )
    }
  },
  {
    year: "656",
    title: {
      de: "Hz. Ali wird Kalif",
      tr: "Hz. Ali'nin Halife Oluşu"
    },
    content: {
      de: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Ali ibn Abi Talib, der Cousin und Schwiegersohn des Propheten Muhammad, 
            wird der vierte Kalif. Für Aleviten ist Hz. Ali eine zentrale Figur, 
            die für Gerechtigkeit, Weisheit und spirituelle Erleuchtung steht.
          </p>
          <div className="bg-gray-50 dark:bg-neutral-700 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Bedeutung für Aleviten:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-1">
              <li>• Symbol für Gerechtigkeit und Weisheit</li>
              <li>• Spiritueller Führer und Lehrer</li>
              <li>• Vorbild für Gleichberechtigung</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/hzali.jpg"
              alt="Hz. Ali"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
            <Image
              src="/hz-ali-arabca.png"
              alt="Hz. Ali Kalligrafie"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
          </div>
        </div>
      ),
      tr: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Hz. Muhammed'in amcazadesi ve damadı olan Hz. Ali ibn Ebu Talib, 
            dördüncü halife olur. Aleviler için Hz. Ali, adalet, hikmet ve 
            ruhani aydınlanmanın sembolü olan merkezi bir figürdür.
          </p>
          <div className="bg-gray-50 dark:bg-neutral-700 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Aleviler İçin Önemi:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-1">
              <li>• Adalet ve hikmetin sembolü</li>
              <li>• Ruhani lider ve öğretmen</li>
              <li>• Eşitlik için rol model</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/hzali.jpg"
              alt="Hz. Ali"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
            <Image
              src="/hz-ali-arabca.png"
              alt="Hz. Ali Hat Sanatı"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
          </div>
        </div>
      )
    }
  },
  {
    year: "680",
    title: {
      de: "Die Tragödie von Kerbela",
      tr: "Kerbela Faciası"
    },
    content: {
      de: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Der Märtyrertod von Hussein, dem Enkel des Propheten Muhammad, in Kerbela 
            ist ein prägendes Ereignis für alle Schiiten und Aleviten. Es symbolisiert 
            den Kampf gegen Ungerechtigkeit und für die wahren Werte des Islam.
          </p>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 mb-4">
            <p className="text-sm text-red-800 dark:text-red-300">
              Dieses Ereignis wird bis heute in Muharrem-Zeremonien gedacht und 
              erinnert uns an die Bedeutung von Opferbereitschaft für Gerechtigkeit.
            </p>
          </div>
        </div>
      ),
      tr: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Hz. Muhammed'in torunu Hz. Hüseyin'in Kerbela'da şehit edilmesi, 
            tüm Şiiler ve Aleviler için şekillendirici bir olaydır. Bu, 
            adaletsizliğe karşı mücadeleyi ve İslam'ın gerçek değerlerini simgeler.
          </p>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 mb-4">
            <p className="text-sm text-red-800 dark:text-red-300">
              Bu olay bugün hala Muharrem törenlerinde anılmakta ve 
              adalet için fedakarlığın önemini hatırlatmaktadır.
            </p>
          </div>
        </div>
      )
    }
  },
  {
    year: "1240",
    title: {
      de: "Hacı Bektaş Veli",
      tr: "Hacı Bektaş Veli"
    },
    content: {
      de: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Hacı Bektaş Veli, ein großer alevitischer Mystiker und Philosoph, 
            lehrte Toleranz, Liebe und Humanismus. Seine Lehren bilden das 
            Fundament der modernen alevitischen Philosophie.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Seine Kernlehren:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-1">
              <li>• "Eine Nation, die ihre Frauen nicht erzieht, kann nicht fortschreiten"</li>
              <li>• Universelle Liebe und Toleranz</li>
              <li>• Wissenschaft und Vernunft</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/hacibektasveli01.png"
              alt="Hacı Bektaş Veli"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
            <Image
              src="/hacibektasiveli-turbesi.jpg"
              alt="Hacı Bektaş Veli Türbesi"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
          </div>
        </div>
      ),
      tr: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Büyük Alevi mistigi ve filozofu Hacı Bektaş Veli, hoşgörü, sevgi ve 
            hümanizmi öğretmiştir. Onun öğretileri modern Alevi felsefesinin 
            temelini oluşturur.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Temel Öğretileri:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-1">
              <li>• "Kadınlarını yetiştirmeyen milletler ilerleyemez"</li>
              <li>• Evrensel sevgi ve hoşgörü</li>
              <li>• Bilim ve akıl</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/hacibektasveli01.png"
              alt="Hacı Bektaş Veli"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
            <Image
              src="/hacibektasiveli-turbesi.jpg"
              alt="Hacı Bektaş Veli Türbesi"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
          </div>
        </div>
      )
    }
  },
  {
    year: "1500",
    title: {
      de: "Pır Sultan Abdal",
      tr: "Pır Sultan Abdal"
    },
    content: {
      de: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Pır Sultan Abdal, der große alevitische Dichter und Rebell, kämpfte 
            gegen Ungerechtigkeit und Unterdrückung. Seine Gedichte und Deyişler 
            sind heute noch lebendig in unseren Herzen.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Sein Vermächtnis:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-1">
              <li>• Kampf für soziale Gerechtigkeit</li>
              <li>• Bewahrung der alevitischen Tradition</li>
              <li>• Inspiration für Generationen</li>
            </ul>
          </div>
        </div>
      ),
      tr: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Büyük Alevi şairi ve asi Pır Sultan Abdal, adaletsizlik ve baskıya 
            karşı mücadele etmiştir. Onun şiirleri ve deyişleri bugün hala 
            kalplerimizde yaşamaktadır.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Mirası:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-1">
              <li>• Sosyal adalet mücadelesi</li>
              <li>• Alevi geleneğini koruma</li>
              <li>• Nesillere ilham verme</li>
            </ul>
          </div>
        </div>
      )
    }
  },
  {
    year: "1995",
    title: {
      de: "Gründung unserer Gemeinde",
      tr: "Cemaatimizin Kuruluşu"
    },
    content: {
      de: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Die Gründung der Alevitischen Gemeinde Dortmund e.V. markiert einen 
            wichtigen Meilenstein für die alevitische Gemeinschaft in der Region. 
            Seitdem arbeiten wir daran, unsere Kultur und Traditionen zu bewahren 
            und an die nächsten Generationen weiterzugeben.
          </p>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Unsere Mission:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-1">
              <li>• Bewahrung der alevitischen Tradition</li>
              <li>• Interreligiöser Dialog</li>
              <li>• Bildung und Kultur</li>
              <li>• Gemeinschaftsförderung</li>
            </ul>
          </div>
        </div>
      ),
      tr: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Dortmund Alevi Cemaati Derneği'nin kuruluşu, bölgedeki Alevi topluluğu 
            için önemli bir dönüm noktasını işaret eder. O zamandan beri kültürümüzü 
            ve geleneklerimizi korumak ve gelecek nesillere aktarmak için çalışıyoruz.
          </p>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Misyonumuz:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-1">
              <li>• Alevi geleneğini koruma</li>
              <li>• Dinlerarası diyalog</li>
              <li>• Eğitim ve kültür</li>
              <li>• Topluluk geliştirme</li>
            </ul>
          </div>
        </div>
      )
    }
  }
];