import { Locale } from '@/types'
import Link from 'next/link'

interface TeachingPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function TeachingPage({ params }: TeachingPageProps) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${locale}/unser-glaube`} className="text-gray-300 hover:text-white mb-4 inline-block">
            ← {locale === 'de' ? 'Zurück zu Unser Glaube' : 'İnancımıza Dön'}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {locale === 'de' ? 'Das Alevitentum - Eine Umfassende Informationsquelle' : 'Alevilik - Kapsamlı Bilgi Kaynağı'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {locale === 'de' 
              ? 'Ein Weg der Menschlichkeit und Toleranz'
              : 'İnsanlık ve Hoşgörü Yolu'
            }
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Einleitung */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {locale === 'de' ? 'Einleitung: Das Alevitentum – Ein Weg der Menschlichkeit und Toleranz' : 'Giriş: Alevilik - İnsanlık ve Hoşgörü Yolu'}
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Das Alevitentum ist eine eigenständige, synkretistische Religions- und Kulturgemeinschaft, die ihre Wurzeln in Anatolien hat. Es zeichnet sich durch eine tiefgreifende Betonung des Humanismus, der Toleranz und der zentralen Stellung des Menschen aus. Im Gegensatz zu dogmatischen Auslegungen vieler Religionen stellt das Alevitentum jegliche Absolutheitsansprüche infrage und rückt das eigenverantwortliche Handeln des Individuums in den Vordergrund.
                </p>
                <p>
                  Dieses Dokument dient als umfassende Informationsquelle für die modernisierte Website der Alevitischen Gemeinde Dortmund. Ziel ist es, das Alevitentum einem breiten Publikum vorzustellen, ein tieferes Verständnis für seine Geschichte, Glaubenssätze und Praktiken zu fördern und seine lebendige Präsenz sowie seine Beiträge in Deutschland hervorzuheben.
                </p>
              </div>
            </div>

            {/* 1. Ursprung und Entwicklung */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Ursprung und Entwicklung des Alevitentums</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Das Alevitentum ist eine eigenständige, synkretistische Religion, die sich aus der islamischen Schia entwickelt hat und zudem eine Vielzahl von Elementen aus vorislamischen Religionen Mesopotamiens sowie aus dem Sufismus (islamische Mystik) in sich vereint. Diese reiche Mischung verschiedener Traditionen prägt seinen einzigartigen Charakter.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Rolle zentraler Persönlichkeiten</h3>
                <p>
                  Der Name „Alevitentum" leitet sich vom Schwiegersohn des Propheten Mohammed, Ali, ab. Aleviten glauben, dass Ali die Gottesbotschaft trug und verkörperte, wodurch er menschliche Vollkommenheit erreichte und als Vorbild dient. Die Vorstellung, dass Hak (Gott), Muhammad und Ali eine gleichwertige und untrennbare Einheit bilden, ist von zentraler Bedeutung für den alevitischen Glauben.
                </p>
                <p>
                  Haci Bektasch Veli, ein Sufi aus Chorasan, der im 13. Jahrhundert in Anatolien wirkte, spielte eine entscheidende Rolle als religiöser Reformer und Gründer eines Ordens, der das Alevitentum maßgeblich prägte. Er predigte in einer Zeit religiöser Konflikte Frieden und Gleichheit unter verschiedenen Gruppen und betonte die Wertlosigkeit von Unterschieden im Glauben oder der Herkunft.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Historische Diskriminierung und Verfolgung</h3>
                <p>
                  Aleviten wurden in der Türkei von der dominierenden sunnitischen Gemeinschaft historisch als Häretiker betrachtet und waren über Jahrhunderte hinweg Unterdrückung und massiver Verfolgung ausgesetzt. Diese lange Geschichte der Diskriminierung führte zur Praxis der Takiya, dem Verbergen der eigenen Zugehörigkeit.
                </p>
                <p>
                  Die Erfahrung der Verfolgung prägte die alevitische Identität tiefgreifend und führte dazu, dass sich Aleviten in Deutschland – wie auch im Herkunftsland Türkei – lange Zeit nicht öffentlich zu ihrem Glauben bekannten. Dies erklärt, warum das Alevitentum der breiten Öffentlichkeit, selbst in Ländern mit einer bedeutenden alevitischen Diaspora, noch relativ unbekannt ist.
                </p>
              </div>
            </div>

            {/* 2. Die Glaubenslehre */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Die Glaubenslehre der Aleviten</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Die alevitische Glaubenslehre ist stark vom Humanismus und Universalismus geprägt, wobei der Mensch als eigenverantwortliches Wesen im Mittelpunkt steht. Aleviten glauben, dass Gott alle Menschen gleichwertig geschaffen hat, was sich in dem Sprichwort widerspiegelt: „Betrachte alle Religionsgemeinschaften und alle Ethnien als gleichwertig". Das Herz des Menschen wird als „Haus Gottes" angesehen, was die Vorstellung untermauert: „Der Mensch ist die echte Kaaba".
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Die „Vier Tore und Vierzig Regeln" als ethischer und spiritueller Weg</h3>
                <p>
                  Die traditionellen Erziehungs- und Bildungsziele des Alevitentums sind in den „Vier Toren" (dört kapı) und „40 Regeln" (makam) beschrieben, die im Buyruk, dem Katechismus des Alevitentums, zu finden sind. Diese Tore stellen einen Weg zur menschlichen Vervollkommnung (insan-i kamil olmak) und zur Einswerdung mit der Wahrheit dar.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">1. Tor: Scheriat (formales Verhalten)</h4>
                    <p className="text-sm">Grundlegende ethische Verhaltensweisen wie Glaubensbereitschaft, wissenschaftliches Lernen, ehrlichen Einkommenserwerb, Vermeidung von Ausbeutung, Achtung zwischen Männern und Frauen.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">2. Tor: Tarikat (mystischer Pfad)</h4>
                    <p className="text-sm">Vertrauen zum geistlichen Lehrer, Liebe zum Lernen, Beherrschung des Egos, Ehrfurcht und Liebe zu Gott, Friedfertigkeit und Liebe in der Gemeinschaft.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">3. Tor: Marifet (Erkenntnis)</h4>
                    <p className="text-sm">Korrektes Benehmen, ehrenhaftes Leben, Geduld, Genügsamkeit, Wissenserwerb, Selbsterkenntnis durch den „Herzblick".</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">4. Tor: Hakikat (Wahrheit)</h4>
                    <p className="text-sm">Höchste Stufe: Bescheidenheit allen Menschen gegenüber, Glaube an Gott im Menschen, Einheit der menschlichen Seelen in Gott.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Umgang mit heiligen Schriften</h3>
                <p>
                  Aleviten akzeptieren und ehren alle heiligen Bücher (Psalmen, Thora, Bibel und Koran) und bekennen: „Alle vier Bücher sind Gotteswort". Sie verstehen „Gottes Wort" als einen weitaus umfassenderen Begriff als nur die heiligen Texte. Dies führt dazu, dass Aleviten wissenschaftliche Aktivitäten unterstützen, da sie wissenschaftliche Arbeit als einen Weg betrachten, Teile des Gottesgeheimnisses zu lüften.
                </p>
              </div>
            </div>

            {/* 3. Rituale und Praktiken */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Rituale und Praktiken im Alevitentum</h2>
              <div className="text-gray-700 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Der Cem: Bedeutung, Ablauf und Gleichberechtigung</h3>
                <p>
                  Der Cem ist die zentrale religiöse Zeremonie der anatolischen Aleviten, dessen Wortbedeutung „Zusammenkommen" ist. Während des Cem versammelt sich die Gemeinde, um bestimmte Rituale zu praktizieren, alevitische Lehren zu vermitteln, gemeinsam zu beten, Fragen und Probleme der Teilnehmenden zu besprechen und das gesegnete Mahl zu teilen.
                </p>
                <p>
                  Ein Kernprinzip des Cem ist die Gleichberechtigung aller Anwesenden, die sich in der Sitzordnung „Cemal Cemale" (Angesicht zu Angesicht im Halbkreis) widerspiegelt. Ein entscheidender Schritt zu Beginn des Cem ist das Einholen des „Einvernehmens" (Rızalık) der Anwesenden, was gegenseitige Zustimmung und Versöhnung symbolisiert.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Der Semah als ritueller Tanz</h3>
                <p>
                  Ein wichtiger Bestandteil des Cem ist der Semah, ein ritueller Tanz, bei dem sich Aleviten zu den Klängen einer Saz (eines lautenähnlichen Instruments) im Kreis drehen. Die Themen des Semah drehen sich konsequent um Nächstenliebe, Gleichberechtigung und Einheit.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Wichtige Fastenzeiten und Gedenktage</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Muharrem-Fasten</h4>
                    <p className="text-sm">12-tägige Trauer- und Fastenzeit zum Gedenken an das Martyrium Imam Husseins in Kerbela.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Hızır-Fasten</h4>
                    <p className="text-sm">3-tägige Fastenzeit vom 13.-15. Februar, Hızır und İlyas gewidmet.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Nevruz (21. März)</h4>
                    <p className="text-sm">Geburtstag des Heiligen Ali und wichtigstes alevitisches Fest.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Hıdırellez (5.-6. Mai)</h4>
                    <p className="text-sm">Nacht der Gebete um Genesung und Gesundheit der Kranken.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Wichtige Persönlichkeiten */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Wichtige Persönlichkeiten und Dichter</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Die alevitische Geschichte und Lehre sind reich an bedeutenden Persönlichkeiten, die den Glauben geprägt und weitergegeben haben. Besonders die „Sieben Großen Dichter" (Yedi Ulu Ozanlar) sind von entscheidender Bedeutung für die alevitische Literatur und Liturgie.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Pir Sultan Abdal (ca. 1480–1550)</h4>
                    <p className="text-sm">Herausragende Persönlichkeit aus Zentralanatolien, der alevitische Aufstände für Gerechtigkeit und Glaubensfreiheit gegen das Osmanische Reich anführte. Er wird bis heute als Held gefeiert.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Yunus Emre (13. Jahrhundert)</h4>
                    <p className="text-sm">Islamischer Volksdichter und Mystiker, dessen einfache, mystische Verse oft mit den Aleviten in Verbindung gebracht werden und die Entwicklung des Alevitentums maßgeblich prägten.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Şah Hatayi (Ismail I.)</h4>
                    <p className="text-sm">Gründer der Safawiden-Dynastie im Iran, der unter dem Pseudonym „Hatayi" zahlreiche Gedichte über die Kizilbas-Lehre verfasste, die noch heute in Cem-Ritualen rezitiert werden.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Seyyid Imadeddin Nesimi</h4>
                    <p className="text-sm">Mystiker aus dem heutigen Aserbaidschan, bekannt für seine Werke in arabischer, persischer und türkischer Sprache. Er wurde für seine Überzeugungen brutal hingerichtet.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Aleviten in Deutschland */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Aleviten in Deutschland: Migration, Organisation und Zahlen</h2>
              <div className="text-gray-700 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Geschichte der alevitischen Migration</h3>
                <p>
                  Aleviten kamen zunächst als Arbeitsmigranten, sogenannte „Gastarbeiter", infolge des deutsch-türkischen Anwerbeabkommens nach Deutschland. Aufgrund der langen Geschichte von Diskriminierung und Verfolgung praktizierten Aleviten anfangs Takiya und blieben bis Ende der 1980er Jahre weitgehend unbekannt.
                </p>
                <p>
                  Das Ende der Takiya wurde durch die „Alevitische Kulturwoche" in Hamburg im Jahr 1989 eingeläutet, die erste öffentliche Veranstaltung, die explizit als „alevitisch" bezeichnet wurde. Die Freiheit und der Rechtsrahmen in Deutschland ermöglichten es den Aleviten, ihren Glauben offen zu bekennen.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Die Alevitische Gemeinde Dortmund e.V.</h3>
                <p>
                  Die Alevitische Gemeinde Dortmund e.V. wurde bereits 1988 gegründet und war damit eine der ersten alevitischen Gemeinden in Nordrhein-Westfalen. Sie zählt derzeit 510 Mitglieder, während schätzungsweise rund 5.000 Aleviten in Dortmund leben.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-lg mb-4">Aktivitäten der Gemeinde:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Kulturelle Aktivitäten: Saz-, Chor-, Folklore- und Theaterkurse</li>
                    <li>• Bildung: Bilinguale Sprachförderung, Diskussionsabende zu gesellschaftlichen Themen</li>
                    <li>• Interkultureller Dialog: Besuche religiöser Stätten, Teilnahme an Stadtfesten</li>
                    <li>• Antirassismus: Demonstrationen gegen Rechtsextremismus, Weltfriedenstag</li>
                    <li>• Jugendarbeit: Ferienfreizeiten, Sportturniere, Bildungsreisen</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-6">
                  <h4 className="font-bold text-lg mb-2">Zahlen und Fakten</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Deutschland:</strong><br/>
                      700.000 - 800.000 Aleviten
                    </div>
                    <div>
                      <strong>Türkei:</strong><br/>
                      10 - 25 Millionen Aleviten
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Beiträge zur deutschen Gesellschaft */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Beiträge der Aleviten zur deutschen Gesellschaft</h2>
              <div className="text-gray-700 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Interreligiöser Dialog</h3>
                <p>
                  Alevitische Gemeinden pflegen aktiv Beziehungen zu anderen Religionsgemeinschaften und sind wichtige Partner im interreligiösen Dialog. Der Dialog zwischen Aleviten und Christen wird als besonders offen und zukunftsorientiert beschrieben, geprägt von gegenseitiger Wertschätzung.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Politische Partizipation und Erfolge</h3>
                <p>
                  Seit Ende der 1980er Jahre haben sich Aleviten in Deutschland zu einer gut organisierten und politisch aktiven gesellschaftlichen Gruppe entwickelt. Bedeutende Erfolge sind:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Einführung des alevitischen Religionsunterrichts an öffentlichen Schulen (seit 2002)</li>
                  <li>Anerkennung als Körperschaft des öffentlichen Rechts in NRW (2020) und Berlin (2022)</li>
                  <li>Teilnahme an der Deutschen Islamkonferenz</li>
                  <li>Etablierung der alevitischen Theologie an deutschen Universitäten</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Soziale und kulturelle Projekte</h3>
                <p>
                  Die alevitische Gemeinschaft leistet vielfältige Beiträge durch Jugendarbeit, Bildungsprogramme, Antirassismus-Arbeit und soziale Dienste. Ihre Überzeugung, dass wissenschaftliche Arbeit zur Entdeckung göttlicher Geheimnisse beiträgt, motiviert sie zur Unterstützung wissenschaftlicher Aktivitäten.
                </p>
              </div>
            </div>

            {/* 7. Herausforderungen und Perspektiven */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Herausforderungen und Perspektiven</h2>
              <div className="text-gray-700 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Umgang mit Diskriminierung</h3>
                <p>
                  Aleviten sehen sich in Deutschland nach wie vor Diskriminierung und Vorurteilen ausgesetzt. Historische Vorurteile aus der Türkei werden leider in Deutschland fortgesetzt. Sie erleben „anti-alevitischen Rassismus", wenn ihre Gemeinschaft von der Mehrheitsgesellschaft nicht akzeptiert wird.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Akademische Etablierung</h3>
                <p>
                  Eine wesentliche Herausforderung ist der fortlaufende Prozess der „Dogmatisierung" und wissenschaftlichen Abgrenzung der alevitischen Religion. Die Einrichtung akademischer Lehrstühle für alevitische Theologie an deutschen Universitäten ist entscheidend für diese Entwicklung.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Junge Generation</h3>
                <p>
                  Junge Aleviten stehen vor der Herausforderung, sich mit ihrer eigenen Geschichte auseinanderzusetzen, die von älteren Generationen aufgrund von Verfolgungstraumata oft verschwiegen wurde. Es besteht ein wachsendes Bedürfnis nach einer Erinnerungskultur unter den Jugendlichen.
                </p>
              </div>
            </div>

            {/* Schlusswort */}
            <div className="bg-gray-800 text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Schlusswort: Die Zukunft des Alevitentums in Deutschland</h2>
              <div className="space-y-4">
                <p>
                  Das Alevitentum ist eine einzigartige Glaubensgemeinschaft, die sich durch ihre menschenzentrierte, tolerante und egalitäre Ausrichtung auszeichnet. Es hat einen bemerkenswerten Weg von einer historisch verfolgten Gemeinschaft hin zu einem anerkannten und aktiven Akteur in der deutschen Gesellschaft zurückgelegt.
                </p>
                <p>
                  Die Alevitische Gemeinde Dortmund, als Teil dieser größeren Bewegung, spielt eine entscheidende Rolle bei der Bewahrung und Weitergabe dieser Werte. Durch ihr vielfältiges Engagement trägt sie maßgeblich zur Integration bei und fördert den interkulturellen und interreligiösen Dialog.
                </p>
                <p>
                  Der zukünftige Weg des Alevitentums in Deutschland ist geprägt von der kontinuierlichen theologischen Entwicklung und der intergenerationalen Weitergabe von Werten. Die alevitische Gemeinschaft wird auch weiterhin eine wichtige Rolle dabei spielen, den sozialen Zusammenhalt zu fördern und zu einem vielfältigen und friedlichen Zusammenleben in Deutschland beizutragen.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}