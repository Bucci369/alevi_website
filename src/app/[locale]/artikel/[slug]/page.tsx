import { Locale } from '@/types'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { de, tr } from 'date-fns/locale'

interface ArticleDetailPageProps {
  params: Promise<{ locale: Locale; slug: string }>
}

// Mock article data - später aus CMS oder Database
const getArticleBySlug = (slug: string) => {
  const articles: Record<string, any> = {
    'haci-bektas-veli': {
      id: 'haci-bektas-veli',
      title: {
        de: 'Hacı Bektaş Veli: Der Gründer des Bektaşitentums',
        tr: 'Hacı Bektaş Veli: Bektaşiliğin Kurucusu'
      },
      image: '/hacibektasveli01.png',
      content: {
        de: `# Hacı Bektaş Veli: Das leuchtende Herz des Alevitentums

## 1. Einleitung: Hacı Bektaş Veli - Das Herz des Alevitentums

Hacı Bektaş Veli (ca. 1209-1271) ist eine der zentralsten und meistverehrten Persönlichkeiten des anatolischen Alevitentums. Er wird als ein großer türkischer Philosoph und Mystiker des 13. Jahrhunderts angesehen, dessen Lehren das Alevitentum maßgeblich geprägt und dessen humanistische Ausrichtung gefestigt haben. Seine Philosophie, die auf Menschlichkeit, Menschenrechten und sozialer Gleichheit basiert und die "Liebe zum Universum, zu Gott und zum Menschen" in den Mittelpunkt stellt, hat sich weit über Anatolien hinaus verbreitet und prägt bis heute die alevitische Glaubenslehre.

Die Botschaften von Hacı Bektaş Veli, die sich auf Liebe, Frieden, Gerechtigkeit und die Vervollkommnung des Menschen konzentrieren, sind für Aleviten weltweit, und insbesondere für die Alevi-Gemeinschaften in der Diaspora in Deutschland, von immenser Bedeutung. Sie bilden das ethische und spirituelle Fundament für das alevitische Selbstverständnis und dienen als Leitfaden für das Engagement in der Gesellschaft.

Als Vertreter der Yesevi-Tradition und Schüler von Baba İlyâs-ı Horasânî spielte er eine Schlüsselrolle bei der Islamisierung Anatoliens. Seine Lehren verbanden sufistische Mystik mit volkstümlicher Religiosität und schufen eine einzigartige spirituelle Synthese, die bis heute nachwirkt und in modernen pluralistischen Gesellschaften wie Deutschland wichtige Impulse für Integration, Vielfalt und soziale Gerechtigkeit bietet.

## 2. Wer war Hacı Bektaş Veli? Leben, Ursprung und spiritueller Weg

Hacı Bektaş Veli wurde um 1209 in Nişabur (Chorasan), einer bedeutenden Stadt in der heutigen iranischen Region, geboren. Er entstammte einer wohlhabenden Familie und erhielt eine umfassende Ausbildung in Philosophie, Physik, Literatur und anderen Wissenschaften unter der Anleitung von Lokman Parende, einem Schüler des bekannten Sufi-Meisters Hoca Ahmed Yesevi (1103-1165). Seine Abstammung wird in alevitischen Quellen auch mit dem vierten Kalifen Ali in Verbindung gebracht, was seine tiefe Verwurzelung im alevitischen Glauben und seine spirituelle Autorität unterstreicht.

Sein spiritueller Werdegang begann mit der Ausbildung bei Lokman Parende und setzte sich mit der Nachfolge der Lehren von Hoca Ahmed Yesevi fort. Als Kalif (Nachfolger) Yesevis brachte er dessen sufistische Tradition nach Anatolien. Dort schloss er sich der spirituellen Schule von Dede Garkın und dessen Kalif Baba İlyâs-ı Horasani an.

Nach seiner Ausbildung und ausgedehnten Reisen durch Turkestan, Iran, Bagdad, Kerbela und Syrien, floh Hacı Bektaş Veli vor der mongolischen Invasion und ließ sich um 1275-1280 in Sulucakarahöyük (heute Hacıbektaş in der Provinz Nevşehir, Zentralanatolien) nieder. Dort gründete er seine Derwisch-Loge, die zu einem Zentrum der Lehre und Verbreitung seiner humanistischen Philosophie wurde. Er wurde schließlich 1271 in der Nähe des heutigen Nevşehir in Kappadokien begraben.

Die Zeit seines Wirkens war geprägt von den Seldschuken-Sultanat und den beginnenden mongolischen Invasionen, die große Bevölkerungsbewegungen aus Zentralasien nach Anatolien auslösten. In diesem Kontext wurde Hacı Bektaş Veli zu einer zentralen Figur bei der friedlichen Verbreitung des Islam unter der anatolischen Bevölkerung und trug maßgeblich zur kulturellen Harmonie und Aufklärung in Anatolien bei.

## 3. Die Essenz seiner Lehren: Humanismus, Liebe und die Vervollkommnung des Menschen

Als Träger der Yesevi-Tradition vertrat Hacı Bektaş Veli einen volksnahen, humanistischen Islam. Die Yesevi-Sufis, benannt nach Ahmed Yesevi, zeichneten sich durch ihre Betonung der Liebe (aşk), Toleranz und sozialen Gerechtigkeit aus.

Seine Lehren betonten die innere spirituelle Entwicklung des Menschen und die Überwindung des Ego (nefs). Dabei verband er sufistische Metaphysik mit praktischen ethischen Grundsätzen, die das tägliche Leben der Gläubigen prägten. Ein zentraler Aspekt seiner Lehre war die Gleichberechtigung von Mann und Frau in spirituellen Angelegenheiten – eine damals revolutionäre Idee, die bis heute das Alevitentum prägt.

### Die "Vier Tore und Vierzig Stufen" (Dört Kapı Kırk Makam): Ein Weg zur menschlichen Vervollkommnung

Hacı Bektaş Veli strukturierte seinen mystischen Weg zur menschlichen Vervollkommnung durch das Konzept der "Vier Tore und Vierzig Stufen". Dieses systematische Framework, das auch im Buyruk (einem zentralen alevitischen Katechismus) beschrieben wird, dient als umfassendes ethisches und spirituelles Fundament für Aleviten. Es leitet den Einzelnen auf seinem Lebensweg an, ein "İnsan-ı kâmil" (vollkommener Mensch) zu werden.

1. Şeriat (Formales Verhalten/Religiöses Gesetz): Dieses erste Tor konzentriert sich auf die grundlegenden Regeln des Pfades und das Streben nach einer friedlichen und harmonischen Gesellschaft. Es beinhaltet Glaubensbereitschaft, wissenschaftliches Lernen, ehrlichen Einkommenserwerb, Vermeidung von Ausbeutung, Achtung zwischen Männern und Frauen, eheliche Treue, Fürsorge für andere, gesundes Essen und gepflegtes Aussehen sowie den Willen, Gutes zu tun. Hacı Bektaş Veli nannte die Menschen in diesem Tor "Abitler" (die Betenden).

2. Tarikat (Mystischer Pfad): Im zweiten Tor lernen Individuen den mystischen Pfad, indem sie sich einer spirituellen Ordnung anschließen. Es umfasst Vertrauen zum geistlichen Lehrer, Liebe zum Lernen, Nachrangigkeit äußeren Ansehens, Beherrschung des Egos, Achtung Anderen und sich selbst gegenüber, Ehrfurcht und Liebe zu Gott, Hoffnung auf Gottes Hilfe, Bereitschaft Gottes Weg zu suchen, Friedfertigkeit und Liebe in der Gemeinschaft sowie Liebe und Schutz gegenüber Menschen und Natur. Hacı Bektaş Veli bezeichnete die Menschen in diesem Tor als "Zahitler" (die Religiösen).

3. Marifet (Erkenntnis): Das dritte Tor ist der Ort der Erkenntnis, wo Individuen tiefes Wissen erlangen. Es beinhaltet korrektes Benehmen, ehrenhaftes Leben, Geduld, Genügsamkeit, Wahrung der Schamgrenzen, Freigiebigkeit, Bemühen um Wissenserwerb, Ausgewogenheit im Urteil und die Pflege innerer Harmonie sowie die Übung der Selbsterkenntnis. Die Menschen in diesem Stadium werden als "Arifler" (die Erfahrenen oder Weisen) bezeichnet.

4. Hakikat (Wahrheit): Das vierte und letzte Tor führt zur ultimativen Wahrheit. Hier lernen Individuen den Ursprung ihrer Persönlichkeit und erkennen die Wahrheit, indem sie an Gottes Gegenwart im menschlichen Herzen glauben. Es umfasst Bescheidenheit und Ehrerbietung allen Menschen gegenüber, den Glauben an Gott im Menschen, Selbstbeherrschung als Toleranz, die Einheit der menschlichen Seelen in Gott, Vertrauen in Gott, und die Bereitschaft, das Geheimnis der Beziehung zu Gott zu erfahren. Wer dieses letzte Tor erreicht, verdient den Titel "İnsan-ı kâmil" (vollkommener Mensch), auch "Beytullah" (Haus Gottes) genannt.

### Das alevitische Sittensystem: "Eline, beline, diline sahip ol!"

Die berühmte Maxime "Kontrolliere deine Hand, deine Lende und deine Zunge" ist das prägnante und tiefgründige Kernprinzip Hacı Bektaş Velis und bildet das Fundament der alevitischen Moral und des Wertesystems. Es ist eine praktische Anleitung für ethisches Verhalten im Alltag:

Hände (Eline): Bedeutet, produktiv und nützlich für die Gesellschaft zu sein und Handlungen wie Mord, Diebstahl oder jegliche Form von Gewalt zu vermeiden. Es geht darum, die Hände für Gutes einzusetzen.

Lende (Beline): Bezieht sich auf die Kontrolle der Triebe, insbesondere sexueller Natur. Es betont Selbstbeherrschung, um Schaden für sich selbst oder andere zu vermeiden, und die Verantwortung, gut erzogene Kinder großzuziehen.

Zunge (Diline): Bedeutet, Lügen, böswilligen Klatsch, Verleumdung und Gerüchte zu vermeiden und stets respektvoll und bedacht zu sprechen, ohne die Würde anderer zu verletzen.

## 4. Gottesverständnis und die Einheit von Hak-Muhammet-Ali

Aleviten glauben an einen einzigen Gott, den sie mit verschiedenen Begriffen wie Hak, Allah, Hu, Hüda, Şah, Ulu oder Gerçek (Wahrheit) bezeichnen. Sie sind überzeugt, dass Gott überall zu fühlen und zu sehen ist und Göttlichkeit in allem Lebenden vorhanden ist. Im alevitischen Kosmos bilden Hak (Gott/Wahrheit), Muhammad (Weg/Sunnah) und Ali (göttliches Licht/Nūr) eine mystische Einheit von kreativen Prinzipien.

Es ist entscheidend zu verstehen, dass diese Einheit keine Trinität im christlichen Sinne ist; vielmehr sind Muhammad und Ali Repräsentationen des Lichts Allahs, die weder unabhängig von Gott noch separate Eigenschaften von Ihm sind. Dieses sorgfältig formulierte theologische Konzept von "Haqq-Muhammad-Ali" ist nicht nur eine Glaubensaussage, sondern ein grundlegendes Element, das das Alevitentum strategisch sowohl vom sunnitischen als auch vom schiitischen Mainstream-Islam und explizit von der christlichen Trinität unterscheidet.

## 5. Bedeutung von Wissen und Vernunft (Makalat)

Hacı Bektaş Veli betonte die immense Bedeutung von Wissen und Vernunft als göttliche Gaben. Sein bekanntestes Werk, das Makalat, ist ein Schlüsseltext, der mystische Themen und die "Vier Tore und Vierzig Stufen" detailliert behandelt. Aleviten glauben, dass wissenschaftliche Arbeit – sei es in den Natur- oder Geisteswissenschaften – einen Teil des Gottesgeheimnisses lüften kann und unterstützen daher wissenschaftliche Aktivitäten.

Sein berühmter Ausspruch "Ein Weg ohne Wissenschaft endet in der Finsternis" unterstreicht die zentrale Rolle der Bildung im Alevitentum. Weitere zentrale Zitate seiner Lehren umfassen:

- "Schätzt keinen Menschen und kein Volk gering!" - Ein Kernprinzip der alevitischen Ethik, das die Ablehnung von Diskriminierung und die Förderung von Völkerverständigung untermauert
- "Was du suchst, suche in dir selbst. Nicht in Jerusalem, nicht in Mekka." - Betonung der inneren Spiritualität und der Göttlichkeit im Menschen
- "Meine Kaaba ist der Mensch." - Der Mensch als Zentrum des Glaubens und Ort der Gotteserfahrung
- "Das größte Buch zum Lesen ist der Mensch selbst." - Betonung der Selbsterkenntnis als höchste Form des Wissens

Die Philosophie Hacı Bektaş Velis ist stark von Humanismus und Universalismus geprägt. Im Zentrum des alevitischen Glaubens steht der Mensch als eigenverantwortliches Wesen. Er lehrte, dass Unterschiede in Glaube und Herkunft unwichtig sind und alle Menschen gleichwertig sind und die gleichen Rechte haben. Die Gleichberechtigung der Geschlechter ist ein inhärenter Bestandteil der alevitischen Lehre, die sich in der gemeinsamen Teilnahme von Frauen und Männern an Gottesdiensten und in der Anerkennung der Ana (weibliche Geistliche) widerspiegelt.

## 6. Hacı Bektaş Veli und die Entwicklung des Alevitentums

Hacı Bektaş Veli wird weithin als der Gründer und prägende Geist des anatolischen Alevitentums angesehen. Seine Lehren, die mystische islamische Elemente mit vorislamischen schamanistischen Traditionen der Turkvölker verbinden, prägten die heterodoxe islamische Tradition, die heute als Alevitentum bekannt ist. Er spielte eine zentrale Rolle bei der Etablierung dieser Glaubensgemeinschaft in Anatolien.

Obwohl das Bektaşitentum seinen Namen von Hacı Bektaş Veli ableitet, entstand der Orden als institutionalisierte Tariqa erst nach seinem Tod durch seine Schüler und Nachfolger. Die eigentliche Systematisierung erfolgte im 16. Jahrhundert unter Balım Sultan, der als "Pîr-î Sanî" (Zweiter Meister) verehrt wird.

Er ist der Namensgeber des Bektaschi-Ordens, einer religiösen Ordnung, die sich aus seiner Philosophie entwickelte. Es ist wichtig zu beachten, dass, obwohl jeder Bektaschi in der Türkei als Alevit gilt, nicht jeder Alevit ein Bektaschi ist, auch wenn alle Aleviten Hacı Bektaş Veli mit unendlicher Liebe und Respekt verehren. Der Bektaschismus verbreitete sich von Anatolien aus in den Balkan und den Nahen Osten, nach Albanien, Griechenland, Bulgarien, Bosnien, Kosovo, Mazedonien und sogar bis nach Budapest, wo das Grab von Gül Baba an diese Tradition erinnert.

Das Bektaşitentum entwickelte sich zu einem der einflussreichsten Sufi-Orden des Osmanischen Reiches. Besonders bedeutsam wurde die enge Verbindung zu den Janitscharen, der Eliteeinheit der osmanischen Armee, deren spiritueller Schutzpatron Hacı Bektaş Veli war.

Hacı Bektaş Velis Ideale und Lehren wurden von nachfolgenden Dichtern und Mystikern aufgegriffen und verbreitet, was die orale und künstlerische Tradition des Alevitentums betont. Zu den bekanntesten gehören Yunus Emre (13. Jhd.), Pir Sultan Abdal (16. Jhd.), Şah Hatayi (16. Jhd.), Fuzuli, Kul Himmet, Virani und Yemini, die oft als die "Sieben Großen Dichter" bezeichnet werden. Ihre Dichtungen (Deyiş oder Nefes) sind zentrale Bestandteile der Cem-Zeremonien und tragen dazu bei, Hacı Bektaş Velis Philosophie und die alevitische Lehre in lebendiger und zugänglicher Form weiterzugeben.

## 7. Quellen und historische Überlieferung

Die historische Erforschung von Hacı Bektaş Veli ist durch die Quellenlage erschwert, da zeitgenössische Dokumente fehlen. Die wichtigste Quelle ist das "Menâkıbü'l-kudsiyye" von Elvan Çelebi, dem Sohn des berühmten Sufi-Dichters Âşık Paşa aus dem 14. Jahrhundert.

Die primäre Quelle für das Leben und Wirken von Hacı Bektaş Veli ist die Velayetname (auch Menakibname genannt), eine Sammlung von Geschichten und Legenden, die erst Jahrhunderte nach seinem Tod von einem Bektaschi-Derwisch verfasst wurde. Diese Erzählungen beschreiben seine übernatürlichen Fähigkeiten, gelehrten Worte und Wunder und sind für Aleviten von tiefer spiritueller und identitätsstiftender Bedeutung.

Das bekanntere Werk "Vilâyetnâme-i Hacı Bektaş" oder einfach "Vilâyetnâme" enthält sowohl historische Informationen als auch die legendären Überlieferungen, die bis heute den Glauben der Alevi-Bektaşi-Gemeinschaft prägen. Diese Texte verbinden historische Persönlichkeit mit spiritueller Symbolik.

Es ist wichtig zu verstehen, dass diese Geschichten nicht als rein historische Fakten im modernen Sinne, sondern als Ausdruck der spirituellen Wahrheit und der tiefen Verehrung für ihn betrachtet werden. Die alevitische Tradition verlässt sich auf die Velayetname und ihre legendären Erzählungen, auch wenn deren nicht-historischer Charakter anerkannt wird. Für Aleviten sind die spirituelle Wahrheit, die moralischen Lehren und die inspirierende Kraft, die durch diese Geschichten vermittelt werden, von größter Bedeutung.

## 8. Hacı Bektaş Veli in der alevitischen Gemeinschaft: Rituale und Gedenken

Hacı Bektaş Velis bleibendes Erbe wird durch zentrale alevitische Rituale und Gedenkfeiern zelebriert und lebendig gehalten, was die praktische Anwendung seiner Lehren im Gemeinschaftsleben verdeutlicht.

### Das Hacıbektaş-Festival: Ein Zentrum des Gedenkens und der Kultur

Jedes Jahr vom 16. bis 18. August findet in der Stadt Hacıbektaş in der Türkei das Hacıbektaş-Festival statt, eine zentrale Gedenkfeier und kulturelle Veranstaltung zu Ehren Hacı Bektaş Velis. Dieses Festival ist ein bedeutendes öffentliches Ritual für Aleviten in der Türkei und der europäischen Diaspora, das Tausende von Pilgern anzieht.

Es umfasst traditionelle Pilgerreisen zu seinem Grab und anderen heiligen Stätten in der Umgebung (z.B. Delikli taş, Beştaşlar, Zemzem-Brunnen), wo Rituale wie das Trinken von heiligem Wasser oder das Durchkriechen von Felslöchern zur spirituellen Reinigung praktiziert werden. Das Festival ist auch eine lebendige Feier der alevitischen Kultur mit Musik, Poesie und Tanz, einschließlich öffentlicher Semah-Aufführungen.

Darüber hinaus dient das Festival als wichtige Plattform für politische und gesellschaftliche Anerkennung, mit Reden von Politikern und Vertretern alevitischer Organisationen, die die Sichtbarkeit der Gemeinschaft stärken. Die türkische Regierung selbst hat ein Interesse daran, das Erbe Hacı Bektaş Velis in das nationale Kulturerbe zu integrieren und unterstützt das Festival, wobei 2021 von der UNESCO zum Jahr Hacı Bektaş Velis erklärt wurde.

### Bedeutung in Cem-Zeremonien

Die Lehren Hacı Bektaş Velis sind untrennbar mit der Cem-Zeremonie verbunden, dem zentralen Gottesdienst der Aleviten. Im Cem, das von einem Dede (männlicher Geistlicher) oder einer Ana (weibliche Geistliche) geleitet wird, kommen Männer und Frauen ohne räumliche Trennung gleichberechtigt zusammen. Hier werden gemeinsam Gebete gesprochen, spirituelle Lieder (Deyiş, Nefes) gesungen, die oft von den Sieben Großen Dichtern stammen, und der rituelle Tanz Semah aufgeführt.

Hacı Bektaş Velis Betonung von "Einvernehmen" (Rızalık) ist ein Schlüsselprinzip des Cem, da gemeinschaftliches Gebet nach alevitischem Verständnis nur nach Wiedergutmachung oder Versöhnung unter den Anwesenden möglich ist.

### Weitere Rituale und Gedenktage

Seine Lehren beeinflussen auch andere alevitische Rituale und Gedenktage, wie das Muharrem-Fasten und den Aşure-Tag. Das Muharrem-Fasten, das zwölf Tage dauert, dient dem Gedenken an das Martyrium von Imam Hüseyin und weiteren Nachkommen der Prophetenfamilie und betont die Werte der Gerechtigkeit und Solidarität. Der anschließende Aşure-Tag symbolisiert Dankbarkeit und Gemeinschaft. Auch der Geburtstag des Heiligen Ali am 21. März wird in alevitischen Gemeinden mit Festgottesdiensten und "Muhabbet"-Zusammenkünften gefeiert.

## 9. Das lebendige Erbe: Hacı Bektaş Veli für Aleviten in Deutschland

Die Lehren Hacı Bektaş Velis sind für die alevitische Gemeinschaft in Deutschland von großer aktueller Bedeutung. Sie spiegeln sich in ihrer Reise von einer verborgenen Identität zu öffentlichem Engagement, ihren Beiträgen zur deutschen Gesellschaft und den anhaltenden Herausforderungen wider.

### Migration und das "Coming-out" in Deutschland

Aleviten kamen seit den 1960er Jahren als Arbeitsmigranten, sogenannte "Gastarbeiter", nach Deutschland. Aufgrund jahrhundertelanger Diskriminierung und Verfolgung in der Türkei praktizierten viele Aleviten zunächst "Takiya" (das Verbergen ihrer Zugehörigkeit). Erst Ende der 1980er Jahre, mit der Alevitischen Kulturwoche 1989 in Hamburg, begann das öffentliche "Coming-out" der alevitischen Identität in Deutschland, was einen Wendepunkt darstellte.

### Organisation und Dachverbände

Die Alevitische Gemeinde Deutschland (AABF), auch bekannt als Almanya Alevi Birlikleri Federasyonu, wurde 1989 gegründet und ist heute die größte Dachorganisation der Aleviten in Deutschland, die ca. 700.000 Angehörige in 160-164 Ortsgemeinden vertritt. Weitere wichtige Organisationen sind der Bund der Alevitischen Jugendlichen in Deutschland (BDAJ) und die Föderation der Demokratischen Aleviten (FEDA). Diese Organisationen bündeln die Potenziale der Gemeinden und unterstützen soziale Projekte vor Ort.

### Politische Partizipation und Anerkennung

Die AABF ist eine anerkannte Religionsgemeinschaft nach Art. 7 Abs. 3 des Grundgesetzes und vertritt die Interessen ihrer Mitglieder in der Deutschen Islamkonferenz und beim Integrationsgipfel der Bundesregierung. Ein wichtiges politisches Ziel ist die bundesweite Anerkennung als Körperschaft des öffentlichen Rechts, die bereits in Nordrhein-Westfalen (2020) und Berlin (2022) erreicht wurde. Die Aleviten gelten als gut integrierte Einwanderergruppe, die sich selbstverständlich in Politik und Gesellschaft einmischt.

### Soziale und kulturelle Beiträge zur deutschen Gesellschaft

Die alevitischen Gemeinden leisten vielfältige und wertvolle Beiträge zur deutschen Gesellschaft, die die humanistischen Werte Hacı Bektaş Velis widerspiegeln:

Interreligiöser und Interkultureller Dialog: Sie engagieren sich aktiv im interreligiösen Dialog, insbesondere mit christlichen Kirchen, und fördern gegenseitiges Verständnis und Wertschätzung. Sie bieten Bildungs- und Beratungsangebote sowie Kultur- und Sportangebote an, die allen Menschen offenstehen, unabhängig von Herkunft und Glauben.

Kinder- und Jugendarbeit: Die Jugendarbeit ist ein zentraler Schwerpunkt, mit vielfältigen Angeboten wie Kursen zur musikalischen, tänzerischen und künstlerischen Bildung (z.B. Saz-, Folklore-, Theaterkurse), Freizeitgestaltung (Ferienfreizeiten, Sportturniere), sozialer und politischer Bildung (Diskussionsabende, Seminare zu Deeskalation) sowie Engagement gegen Rassismus und Diskriminierung. Der BDAJ versteht sich als "Safe Space" für junge Aleviten, in dem ihre Identität nicht angezweifelt wird.

Bildung und Wissenschaft: Seit 2002/2006 gibt es alevitischen Religionsunterricht an öffentlichen Schulen in mittlerweile neun Bundesländern. Dieser Unterricht zielt darauf ab, die Entwicklung einer alevitischen Identität in einem interreligiösen und interkulturellen Umfeld zu unterstützen und die Schüler zu eigenverantwortlichem Handeln zu motivieren. Die Etablierung alevitischer Theologie an deutschen Universitäten ist ein bedeutendes politisches Ziel, um die Lehre und Forschung zu stärken.

Soziale Dienste und Integration: Gemeinden bieten soziale, seelsorgerische und karitative Dienste an, einschließlich Unterstützung für Senioren, Integrationskurse, Nachhilfeunterricht und humanitäre Hilfe durch Organisationen wie HIZIR.

### Herausforderungen

Trotz der Erfolge stehen Aleviten in Deutschland weiterhin vor Herausforderungen:

- Diskriminierung und Vorurteile: Alte Vorurteile aus der Türkei werden in Deutschland übernommen, was zu Diskriminierung führt. Auch die pauschale Zuordnung zum Islam aus Unkenntnis kann zur Bedrohung führen.
- Fehlende akademische Theologie: Es gibt einen Mangel an ausgebildeten alevitischen Universitätstheologen und eine Notwendigkeit zur Dogmatisierung und wissenschaftlichen Abgrenzung der alevitischen Religion.
- Umgang mit Geschichte und Trauma: Die lange Geschichte der Verfolgung führt oft dazu, dass die ältere Generation über ihre Geschichte schweigt, was die Entwicklung einer Erinnerungskultur für die jüngere Generation erschwert.

## 10. Fazit: Hacı Bektaş Veli – Ein zeitloses Vorbild für Menschlichkeit und Frieden

Hacı Bektaş Velis Leben und Lehren sind ein leuchtendes Beispiel für Humanismus, Toleranz, soziale Gerechtigkeit und die Suche nach menschlicher Vervollkommnung. Seine Betonung der inneren Spiritualität, der Gleichheit aller Menschen und der Verantwortung des Einzelnen für sein Handeln bleibt eine Inspiration für Aleviten und darüber hinaus.

Hacı Bektaş Veli steht für eine Form des Islam, die Spiritualität mit sozialer Reform verbindet. Seine Lehren schufen eine Alternative zum orthodoxen Islam, die Mystik, Humanismus und Volksreligiosität miteinander verschmolz. Seine Vision eines toleranten, humanistischen und geschlechtergerechten Islam bietet auch in der modernen Welt wichtige Impulse für ein friedliches Zusammenleben der Religionen.

Sein Erbe ist nicht nur in den Cem-Häusern und Gedenkfeiern lebendig, sondern auch im aktiven gesellschaftlichen Engagement der alevitischen Gemeinden in Deutschland. Sie setzen sich für Vielfalt, gegen Diskriminierung und für ein friedliches Miteinander ein, getragen von den Prinzipien, die Hacı Bektaş Veli vor Jahrhunderten lehrte.

Das jährliche Gedenkfest in Hacıbektaş zeigt, wie lebendig seine Tradition geblieben ist und wie seine Botschaft der Liebe und Toleranz Menschen verschiedener Herkunft und verschiedenen Glaubens zusammenführt. Heute wird sein Erbe sowohl in der Türkei als auch in Deutschland von Millionen von Aleviten und Bektaşis gelebt.

Hacı Bektaş Veli verkörpert ein zeitloses Ideal der Menschlichkeit, das in einer zunehmend komplexen Welt Orientierung und Hoffnung bietet. Seine Botschaft, dass wahre Erkenntnis und Göttlichkeit im Menschen selbst zu finden sind, ermutigt zur Selbstreflexion und zum Aufbau einer gerechteren und liebevolleren Gesellschaft.

Seine zentralen Lehren wie "Schätzt keinen Menschen und kein Volk gering!", "Ein Weg ohne Wissenschaft endet in der Finsternis" und "Meine Kaaba ist der Mensch" bleiben aktuell und relevant für alle, die nach Wahrheit, Gerechtigkeit und menschlicher Vervollkommnung streben.`,
        tr: `# Hacı Bektaş Veli: Bektaşiliğin Kurucusu

## 1. Giriş: Hacı Bektaş Veli - Anadolu Maneviyatının Merkezi Figürü

Hacı Bektaş Veli (1209-1271), ortaçağ Anadolusu'nun en önemli ruhani şahsiyetlerinden biridir. 13. yüzyılın mistik sufi ustası olarak Bektaşi sufizminin temellerini atmış ve modern Aleviliğin gelişimini büyük ölçüde etkilemiştir. Onun çalışmaları, Anadolu'nun Moğol istilalarıyla ve büyük göç hareketleriyle şekillendiği büyük toplumsal değişimlerin yaşandığı bir döneme rastlar.

Yesevi geleneğinin temsilcisi ve Baba İlyâs-ı Horasânî'nin öğrencisi olarak Anadolu'nun İslamlaşmasında anahtar rol oynamıştır. Öğretileri, sufi mistisizmini halk dindarlığıyla birleştirerek günümüze kadar etkisini sürdüren eşsiz bir ruhani sentez oluşturmuştur.

## 2. Tarihî Bağlam ve Yaşam Yolu

Hacı Bektaş Veli, 1209'da Nişabur'da (Horasan) doğmuş ve 1271'de bugünkü Nevşehir yakınlarında, Kapadokya'da vefat etmiştir. 13. yüzyılda büyük göç hareketleriyle Anadolu'ya gelen ruhani önderleri olan "Horasan Erenleri"nden biriydi.

Ruhani gelişimi Lokman Perende'den aldığı eğitimle başlamış ve Hoca Ahmed Yesevi'nin (1103-1165) öğretilerini takiple devam etmiştir. Yesevi'nin halifesi olarak onun sufi geleneğini Anadolu'ya taşımıştır. Burada Dede Garkın ve onun halifesi Baba İlyâs-ı Horasani'nin ruhani okuluna katılmıştır.

Çalıştığı dönem Selçuklu Sultanlığı ve Anadolu'ya büyük nüfus hareketlerini tetikleyen Moğol istilalarının başlangıcıyla şekillenmişti. Bu bağlamda Hacı Bektaş Veli, İslam'ın Anadolu halkı arasında barışçıl yayılmasında merkezi bir figür haline gelmiştir.

## 3. Yesevi Geleneği ve Sufi Öğretileri

Yesevi geleneğinin taşıyıcısı olarak Hacı Bektaş Veli, halka yakın, hümanist bir İslam'ı temsil etmiştir. Ahmed Yesevi'den adını alan Yesevi sufiler, sevgi (aşk), hoşgörü ve sosyal adaleti vurgulamalarıyla öne çıkıyorlardı.

Öğretileri insanın iç ruhani gelişimini ve nefsini (egoyu) aşmayı vurguluyordu. Bunu yaparken sufi metafiziği, inananların günlük yaşamını şekillendiren pratik etik ilkelerle birleştiriyordu. Ünlü özdeyiş "Eline, beline, diline sahip ol" bu geleneğe dayanır.

Öğretisinin merkezi yönü, ruhani konularda kadın-erkek eşitliğiydi - o dönem için devrimci bir fikir olan bu anlayış, bugün Aleviliği şekillendirmeye devam etmektedir.

## 4. Bektaşiliğin Kuruluşu ve Gelişimi

Bektaşilik adını Hacı Bektaş Veli'den almasına rağmen, tarikat olarak kurumsallaşması onun ölümünden sonra öğrencileri ve takipçileri tarafından gerçekleşmiştir. Asıl sistemleştirme, "Pîr-î Sanî" (İkinci Pir) olarak saygı gören Balım Sultan döneminde 16. yüzyılda tamamlanmıştır.

Bektaşilik, Osmanlı İmparatorluğu'nun en etkili sufi tarikatlarından biri haline gelmiştir. Özellikle Osmanlı ordusunun seçkin birimi olan Yeniçerilerle olan sıkı bağ önemlidir; Hacı Bektaş Veli onların ruhani koruyucusuydu.

Tarikat Anadolu'nun ötesinde Balkanlara, Arnavutluk, Yunanistan, Bulgaristan, Bosna, Kosova, Makedonya'ya ve hatta bu geleneği hatırlatan Gül Baba'nın mezarının bulunduğu Budapeşte'ye kadar yayılmıştır.

## 5. Kaynaklar ve Tarihî Aktarım

Çağdaş belgeler bulunmadığından Hacı Bektaş Veli'nin tarihî araştırması kaynak durumu nedeniyle zorlaşmaktadır. En önemli kaynak, 14. yüzyıldan ünlü sufi şairi Âşık Paşa'nın oğlu Elvan Çelebi'nin "Menâkıbü'l-kudsiyye"sidir.

Daha çok bilinen "Vilâyetnâme-i Hacı Bektaş" veya sadece "Vilâyetnâme" adlı eser, hem tarihî bilgiler hem de bugün Alevi-Bektaşi topluluğunun inancını şekillendiren efsanevi aktarımları içerir. Bu metinler tarihî kişiliği ruhani sembolizmle birleştirir.

## 6. Modern Alevilik Üzerindeki Etkisi

Hacı Bektaş Veli, modern Alevilikte büyük ruhani öğretmenlerden biri olarak saygı görür. Onun hümanist idealleri - hoşgörü, eşitlik ve sosyal adalet - bugünkü Alevi topluluğunun temel değerleriyle örtüşür.

Onun şekillendirdiği cinsiyet eşitliği geleneği, bugün Alevi törenlerinde kadın ve erkeklerin eşit katılımında görülür. Eğitim ve bilgiye verdiği önem, Alevi topluluğunun güçlü eğitim yöneliminde yansır.

## 7. Sonuç: Ruhani Devrimcinin Yaşayan Mirası

Hacı Bektaş Veli, maneviyatı sosyal reformla birleştiren bir İslam biçimini temsil eder. Öğretileri, mistisizm, hümanizm ve halk dindarlığını kaynaştıran ortodoks İslam'a bir alternatif yaratmıştır.

Bugün onun mirası hem Türkiye'de hem de Almanya'da milyonlarca Alevi ve Bektaşi tarafından yaşatılmaktadır. Hoşgörülü, hümanist ve cinsiyet adaletli İslam vizyonu, modern dünyada da dinlerin barışçıl bir arada yaşaması için önemli ilhamlar sunar.

Hacıbektaş'taki yıllık anma festivali, geleneğinin ne kadar canlı kaldığını ve sevgi ile hoşgörü mesajının farklı köken ve inançlardan insanları nasıl bir araya getirdiğini gösterir.`
      },
      author: 'Özgür Azap',
      publishedDate: new Date('2025-01-20'),
      readTime: 18,
      tags: ['Hacı Bektaş Veli', 'Bektaşilik', 'Sufismus', '13. Jahrhundert', 'Alevitentum Deutschland']
    },
    'hz-ali-im-alevitentum': {
      id: 'hz-ali-im-alevitentum',
      title: {
        de: 'Hz. Ali im Alevitentum: Eine umfassende Darstellung',
        tr: 'Alevilikte Hz. Ali: Kapsamlı Bir İnceleme'
      },
      content: {
        de: `# Hz. Ali im Alevitentum: Eine umfassende Darstellung aus Alevitischen Quellen

## 1. Einleitung: Hz. Ali – Die zentrale Figur im Alevitentum

Hz. Ali ist für die alevitische Glaubensgemeinschaft weit mehr als eine bedeutende historische Persönlichkeit; er stellt eine zentrale, heilige Figur dar, deren Leben und Lehren den Kern des alevitischen Glaubens und der Lebensweise prägen. Seine Rolle ist derart fundamental, dass er als der „Freund Gottes" (Veliyullah) bezeichnet wird und ein Alevitentum ohne den Glauben an ihn als undenkbar gilt.

Die alevitische Glaubenslehre ist tiefgreifend vom Humanismus und Universalismus geprägt, wobei der Mensch als eigenverantwortliches Wesen im Mittelpunkt steht und das Verhältnis zum Mitmenschen von größter Bedeutung ist. In diesem ethischen Rahmen dient Hz. Ali als das ultimative Vorbild für Gerechtigkeit, Liebe und menschliche Vervollkommnung.

Die alevitische Auffassung von Ali ist einzigartig und unterscheidet sich maßgeblich von sunnitischen und schiitischen Interpretationen. Obwohl Aleviten die sechs Glaubensartikel des Islam anerkennen, weichen ihre Interpretationen und Praktiken erheblich ab.

## 2. Die Person Hz. Ali: Historische und familiäre Einordnung

Hz. Ali wurde nach den meisten historischen Quellen um 601 n. Chr. geboren, während die alevitische Überlieferung den 21. März 598 n. Chr. angibt. Nach alevitischer Überlieferung ist er der einzige Mensch, der in der Kaaba in Mekka das Licht der Welt erblickte. Dieser einzigartige Geburtsort unterstreicht seine besondere Stellung und seine von Geburt an gegebene Heiligkeit im alevitischen Glauben.

Seine enge Beziehung zu Prophet Muhammad ist ein weiterer fundamentaler Aspekt seiner Biografie. Ali war der Cousin von Prophet Muhammad, der ihn von seinem ersten Lebensjahr an erzogen hat. Diese frühe und intensive Beziehung prägte seine Entwicklung und seinen Glaubensweg maßgeblich. Später wurde er Muhammeds Schwiegersohn durch die Heirat mit dessen Tochter Fatima.

Als einer der ersten Muslime nahm Ali eine zentrale Rolle in der Entwicklung des frühen Islams ein. Nach dem Tod des Propheten Muhammad durchlief die muslimische Gemeinschaft eine kritische Übergangszeit. Ali wurde schließlich der vierte Kalif der Rechtgeleiteten Kalifen (656-661 n. Chr.), übernahm die Führung jedoch in einer turbulenten Periode, die als die "Erste Fitna" bekannt ist - der erste große Bürgerkrieg in der islamischen Geschichte.

Seine 25-jährige Wartezeit auf das Kalifat und die anschließenden fünf Jahre seiner Herrschaft waren geprägt von politischen Konflikten und theologischen Auseinandersetzungen, die die Grundlage für die spätere Entwicklung verschiedener islamischer Strömungen legten. Für Aleviten markiert diese Zeit nicht nur politische Machtkämpfe, sondern den Kampf zwischen spiritueller Wahrheit und weltlicher Macht.

## 3. Hz. Ali in der Alevitischen Theologie und Kosmologie

Im Zentrum der alevitischen Kosmologie steht der Glaube an die untrennbare Einheit von Allah (bezeichnet als Haqq, die Wahrheit), Prophet Muhammad und Hz. Ali. Diese Einheit wird explizit als keine Trinität im christlichen Sinne verstanden; stattdessen werden Muhammad und Ali als Manifestationen oder Repräsentationen des göttlichen Lichts Allahs interpretiert.

Aleviten glauben, dass Ali der Träger und die Verkörperung der Gottesbotschaft war. Er wird als der "Freund Gottes" (Veliyullah) verehrt. Das alevitische Glaubensbekenntnis lautet: „Es gibt keinen Gott außer Gott, Mohammed ist der Gesandte Gottes und Ali ist der Freund Gottes".

Aufgrund seines unermüdlichen Eintretens für Gerechtigkeit und unverfälschtes Wissen wird Ali als das „Tor des heiligen Wissens" bezeichnet. Prophet Muhammad soll dies mit dem Ausspruch bestätigt haben: „Ich bin die Festung der Wissenschaft, Ali ist ihr Eingang".

## 4. Ethische Prinzipien und die Vorbildfunktion von Hz. Ali

Hz. Ali trat sein Leben lang unermüdlich für Gerechtigkeit und unverfälschtes Wissen ein. Er und die Zwölf Imame sind für Aleviten die höchsten Symbole für den Kampf gegen Ungerechtigkeit und Unterdrückung. Ali wird als eine Persönlichkeit von außergewöhnlicher Weisheit, Tapferkeit und Hilfsbereitschaft beschrieben.

Die zahlreichen Zitate und Sprichwörter, die Hz. Ali zugeschrieben werden, heben alevitische Werte hervor:

- **"Ein Weg ohne Wissenschaft endet in der Finsternis"** - unterstreicht die fundamentale Bedeutung von Bildung
- **"Was Du Dir nicht zufügen lassen willst, lass auch dem anderen nicht zufügen"** - die Goldene Regel der Ethik
- **"Mehr arbeiten und wenig beten ist besser als wenig arbeiten und mehr beten"** - Priorisierung praktischer Taten
- **"Das größte was uns Allah gegeben hat ist unser Verstand"** - die zentrale Rolle der Vernunft

## 5. Hz. Ali in Alevitischen Ritualen und Gedenktagen

Aleviten feiern den 21. März, der gleichzeitig den Frühlingsanfang und das iranische Neujahr (Nevruz) markiert, als den Geburtstag des Heiligen Ali. An diesem bedeutsamen Tag werden in den alevitischen Gemeinden Festgottesdienste (Cem) und gemütliche Zusammenkünfte organisiert.

Das Muharrem-Fasten ist eine zwölftägige Trauer- und Fastenzeit, die im ersten Monat des islamischen Kalenders stattfindet. Sie erinnert an das tragische Martyrium von Imam Hüseyin (Alis Sohn) in Kerbela im Jahre 680 n. Chr.

Die Cem-Zeremonie ist die zentrale religiöse Versammlung der anatolischen Aleviten, bei der die Gemeinde zusammenkommt und Alis Lehren vermittelt werden. Frauen und Männer nehmen gleichberechtigt und ohne räumliche Trennung teil.

## 6. Die Alevitische Perspektive auf Hz. Ali im Kontext des Islam

Das Alevitentum ist eine eigenständige, synkretistische und heterodoxe islamische Tradition. Es unterscheidet sich in fundamentalen Aspekten deutlich vom sunnitischen Islam und dem Usuli-Zwölfer-Schiitentum.

Die alevitische Glaubenslehre ist tief vom Humanismus und Universalismus geprägt, wobei der Mensch als eigenverantwortliches Wesen im Zentrum steht. Aleviten glauben an die Gleichwertigkeit aller Menschen und betonen: „Betrachte alle Religionsgemeinschaften und alle Ethnien als gleichwertig".

Die historischen Ereignisse um Alis Kalifat werden im Alevitentum nicht nur als politische Machtkämpfe, sondern als fundamentaler Konflikt zwischen geistiger Autorität und weltlicher Macht interpretiert. Die 25-jährige Wartezeit auf das Kalifat symbolisiert für Aleviten die Geduld der Wahrheit gegenüber der Ungerechtigkeit.

Hz. Alis kurze, aber einflussreiche Herrschaft als vierter Kalif (656-661 n. Chr.) endete tragisch mit seiner Ermordung, doch sein geistiges Erbe wirkt bis heute fort. Die Erste Fitna, die während seiner Amtszeit stattfand, führte zur ersten großen Spaltung in der islamischen Gemeinschaft und legte den Grundstein für verschiedene theologische Interpretationen.

## 7. Fazit: Das lebendige Erbe von Hz. Ali

Hz. Ali ist die unantastbare, zentrale und prägende Figur des Alevitentums, dessen einzigartige Geburt, vorbildliches Leben und tiefgründige Lehren den Kern des alevitischen Glaubens bilden. Seine Rolle als „Tor des heiligen Wissens" unterstreicht die alevitische Betonung von innerer Erkenntnis und menschlicher Vervollkommnung.

In Deutschland haben Aleviten eine bemerkenswerte Entwicklung der Selbstorganisation und öffentlichen Anerkennung hingelegt. Hz. Alis Lehren bieten jungen Aleviten einen wichtigen Raum für Identitätsfindung in einem interkulturellen Umfeld. Das Erbe von Hz. Ali dient als entscheidende Verbindung zwischen der alevitischen Tradition und ihrer erfolgreichen Integration in Deutschland.`,
        tr: `# Alevilikte Hz. Ali: Alevi Kaynaklarından Kapsamlı Bir İnceleme

## 1. Giriş: Hz. Ali – Alevilikte Merkezi Figür

Hz. Ali, Alevi inanç topluluğu için önemli bir tarihî şahsiyet olmaktan çok daha fazlasıdır; yaşamı ve öğretileri Alevi inancının ve yaşam tarzının özünü şekillendiren merkezi, kutsal bir figürdür. Onun rolü o kadar temeldir ki "Tanrı'nın Dostu" (Veliyullah) olarak anılır ve ona olan inanç olmadan bir Alevilik düşünülemez.

Alevi inanç öğretisi, insanın sorumlu bir varlık olarak merkezde yer aldığı ve insanlar arası ilişkilerin en büyük öneme sahip olduğu hümanizm ve evrenselcilikle derinden şekillenmiştir. Bu etik çerçevede Hz. Ali, adalet, sevgi ve insani mükemmellik için nihai örnek teşkil eder.

Ali'ye dair Alevi anlayış benzersizdir ve Sünni ile Şii yorumlardan önemli ölçüde farklılaşır. Aleviler İslam'ın altı inanç esasını kabul etmekle birlikte, yorumları ve uygulamaları önemli ölçüde farklılık gösterir.

## 2. Hz. Ali'nin Kişiliği: Tarihî ve Ailevi Konumlandırma

Hz. Ali, çoğu tarihî kaynağa göre 601 yılında doğarken, Alevi geleneği 21 Mart 598 tarihini verir. Alevi geleneğine göre, Mekke'deki Kâbe'de dünyaya gelen tek insandır. Bu eşsiz doğum yeri, onun özel konumunu ve doğumdan itibaren sahip olduğu kutsallığı Alevi inancında vurgular.

Peygamber Muhammed ile yakın ilişkisi, biyografisinin başka bir temel yönüdür. Ali, Peygamber Muhammed'in kuzeni olup, birinci yaşından itibaren onun tarafından yetiştirilmiştir. Bu erken ve yoğun ilişki, onun gelişimini ve iman yolunu önemli ölçüde şekillendirmiştir. Daha sonra kızı Fatıma ile evlenerek Muhammed'in damadı olmuştur.

İlk Müslümanlardan biri olarak Ali, erken İslam'ın gelişiminde merkezi bir rol üstlendi. Peygamber Muhammed'in ölümünden sonra Müslüman cemaat kritik bir geçiş dönemi yaşadı. Ali sonunda Râşid Halifeler'in dördüncüsü oldu (656-661), ancak "Birinci Fitne" olarak bilinen çalkantılı bir dönemde - İslam tarihindeki ilk büyük iç savaş - liderliği üstlendi.

Halifelik için 25 yıllık bekleyişi ve ardından beş yıllık hükümranlığı, çeşitli İslami akımların gelişiminin temelini atan siyasi çatışmalar ve teolojik tartışmalarla şekillendi. Aleviler için bu dönem sadece siyasi güç mücadelelerini değil, ruhani hakikat ile dünyevi güç arasındaki mücadeleyi simgeler.

## 3. Hz. Ali'nin Alevi Teolojisi ve Kozmolojisindeki Yeri

Alevi kozmolojisinin merkezinde Allah'ın (Hakk, Gerçek olarak anılan), Peygamber Muhammed'in ve Hz. Ali'nin ayrılmaz birliği inancı yer alır. Bu birlik, Hristiyan anlamında bir teslis olarak anlaşılmaz; bunun yerine Muhammed ve Ali, Allah'ın ilahi ışığının tezahürleri veya temsilcileri olarak yorumlanır.

Aleviler, Ali'nin Tanrı mesajının taşıyıcısı ve vücut bulmuş hali olduğuna inanır. O, "Tanrı'nın Dostu" (Veliyullah) olarak saygı görür. Alevi inanç ikrarı şöyledir: "Allah'tan başka tanrı yoktur, Muhammed Allah'ın elçisidir ve Ali Allah'ın dostudur".

Adalet ve katıksız bilgi için yorulmak bilmez mücadelesi nedeniyle Ali, "kutsal bilginin kapısı" olarak adlandırılır. Peygamber Muhammed'in bunu şu sözle doğruladığı rivayet edilir: "Ben bilimin kalesi, Ali onun girişidir".

## 4. Etik İlkeler ve Hz. Ali'nin Örnek Rolü

Hz. Ali yaşam boyu adalet ve katıksız bilgi için yorulmadan mücadele etti. O ve On İki İmam, Aleviler için adaletsizlik ve zulme karşı mücadelenin en yüksek sembolleridir. Ali, olağanüstü bilgelik, cesaret ve yardımseverlik sahibi bir kişilik olarak tanımlanır.

Hz. Ali'ye atfedilen sayısız söz ve atasözü, Alevi değerlerini vurgular:

- **"Bilim olmayan yol karanlıkta biter"** - eğitimin temel önemini vurgular
- **"Kendine yapılmasını istemediğin şeyi başkasına da yapma"** - etiğin altın kuralı
- **"Çok çalışıp az dua etmek, az çalışıp çok dua etmekten daha iyidir"** - pratik eylemleri öncelik
- **"Allah'ın bize verdiği en büyük şey aklımızdır"** - aklın merkezi rolü

## 5. Hz. Ali'nin Alevi Ritüelleri ve Anma Günlerindeki Yeri

Aleviler, 21 Mart'ı - aynı zamanda bahar başlangıcı ve İran yeni yılını (Nevruz) işaret eden - Kutsal Ali'nin doğum günü olarak kutlar. Bu önemli günde Alevi cemevlerinde şenlik ibadetleri (Cem) ve samimi toplantılar düzenlenir.

Muharrem Orucu, İslami takvimin ilk ayında gerçekleşen on iki günlük yas ve oruç dönemidir. Bu, 680 yılında Kerbela'da İmam Hüseyin'in (Ali'nin oğlu) trajik şehitliğini anıyor.

Cem töreni, Anadolu Alevilerinin merkezi dini toplantısıdır, burada cemaat bir araya gelir ve Ali'nin öğretileri aktarılır. Kadın ve erkekler eşit haklarla ve mekânsal ayrım olmaksızın katılır.

## 6. İslam Bağlamında Hz. Ali'ye Alevi Perspektifi

Alevilik, bağımsız, senkretik ve heterodoks bir İslami gelenektir. Sünni İslam ve Usuli On İki İmam Şiiliği'nden temel açılardan belirgin şekilde farklılaşır.

Alevi inanç öğretisi, insanın sorumlu bir varlık olarak merkezde yer aldığı hümanizm ve evrenselcilikle derinden şekillenmiştir. Aleviler tüm insanların eşitliğine inanır ve şunu vurgular: "Tüm din toplulukları ve tüm etnik grupları eşit görün".

Ali'nin halifeliği etrafındaki tarihî olaylar Alevilikte sadece siyasi güç mücadeleleri olarak değil, ruhani otorite ile dünyevi güç arasındaki temel çatışma olarak yorumlanır. Halifelik için 25 yıllık bekleyiş, Aleviler için hakikatin adaletsizlik karşısındaki sabrını simgeler.

Hz. Ali'nin dördüncü halife olarak kısa ama etkili hükümranlığı (656-661) suikastla trajik şekilde sona erdi, ancak ruhani mirası bugüne kadar yaşamaktadır. Görev süresi boyunca yaşanan Birinci Fitne, İslam cemiyetindeki ilk büyük bölünmeye yol açtı ve çeşitli teolojik yorumların temelini attı.

## 7. Sonuç: Hz. Ali'nin Yaşayan Mirası

Hz. Ali, Aleviliğin dokunulmaz, merkezi ve şekillendirici figürüdür; eşsiz doğumu, örnek yaşamı ve derin öğretileri Alevi inancının özünü oluşturur. "Kutsal bilginin kapısı" rolü, Alevilerin iç bilgi ve insani mükemmellik vurgusunu altı çizer.

Almanya'da Aleviler, kendini örgütleme ve toplumsal tanınma konusunda kayda değer bir gelişim göstermiştir. Hz. Ali'nin öğretileri, genç Alevilere kültürlerarası bir ortamda kimlik bulma konusunda önemli bir alan sunar. Hz. Ali'nin mirası, Alevi geleneği ile Almanya'daki başarılı entegrasyon arasında belirleyici bir bağlantı görevi görür.`
      },
      author: 'Özgür Azap',
      publishedDate: new Date('2025-01-15'),
      readTime: 12,
      tags: ['Alevitentum', 'Hz. Ali', 'Theologie', 'Geschichte'],
      image: '/hzali.jpg'
    }
  }
  
  return articles[slug]
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { locale, slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    notFound()
  }
  
  const dateLocale = locale === 'de' ? de : tr

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <Link 
          href={`/${locale}/artikel`}
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 font-medium"
        >
          ← {locale === 'de' ? 'Zurück zu Artikel' : 'Makalelere Geri Dön'}
        </Link>

        {/* Article Hero Image */}
        <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.title[locale]}
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center 20%' }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Article Meta */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {article.title[locale]}
          </h1>
          
          <div className="flex items-center text-gray-600">
            <div className="flex items-center mr-6">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src="/autor.webp"
                  alt={article.author}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center mr-6">
              <span>{format(article.publishedDate, 'dd. MMMM yyyy', { locale: dateLocale })}</span>
            </div>
            <div className="flex items-center">
              <span>{article.readTime} {locale === 'de' ? 'Minuten Lesezeit' : 'Dakika Okuma'}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {article.tags.map((tag: string, index: number) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {article.content[locale].split('\n').map((paragraph: string, index: number) => {
            if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{paragraph.substring(2)}</h1>
            } else if (paragraph.startsWith('## 2.') && article.id === 'haci-bektas-veli') {
              return (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{paragraph.substring(3)}</h2>
                  <div className="flex justify-center my-8">
                    <div className="article-image-card bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-3xl">
                      <Image
                        src="/hacibektasveli01.png"
                        alt="Hacı Bektaş Veli Portrait"
                        width={600}
                        height={450}
                        className="article-image rounded-lg mx-auto mb-4"
                      />
                      <p className="text-center text-sm text-gray-600 italic">
                        {locale === 'de' ? 'Hacı Bektaş Veli - Historisches Portrait des großen Sufimeisters' : 'Hacı Bektaş Veli - Büyük sufi ustasının tarihi portresi'}
                      </p>
                    </div>
                  </div>
                </div>
              )
            } else if (paragraph.startsWith('## 2.')) {
              return (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{paragraph.substring(3)}</h2>
                  <div className="flex justify-center my-8">
                    <div className="article-image-card bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-md">
                      <Image
                        src="/hz-ali-arabca.png"
                        alt="Hz. Ali - Arabische Kalligrafie"
                        width={300}
                        height={150}
                        className="article-image mx-auto mb-4"
                      />
                      <p className="text-center text-sm text-gray-600 italic">
                        {locale === 'de' ? 'Hz. Ali - Arabische Kalligrafie' : 'Hz. Ali - Arapça Hat Sanatı'}
                      </p>
                    </div>
                  </div>
                </div>
              )
            } else if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">{paragraph.substring(3)}</h2>
            } else if (paragraph.startsWith('- **')) {
              const match = paragraph.match(/- \*\*(.*?)\*\* - (.*)/)
              if (match) {
                return (
                  <div key={index} className="mb-3">
                    <strong className="text-gray-900">{match[1]}</strong> - {match[2]}
                  </div>
                )
              }
            } else if (paragraph.includes('Das jährliche Gedenkfest in Hacıbektaş') && article.id === 'haci-bektas-veli') {
              return (
                <div key={index}>
                  <p className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
                  <div className="flex justify-center my-12">
                    <div className="article-image-card bg-white rounded-lg shadow-lg p-6 border border-gray-200 max-w-3xl">
                      <Image
                        src="/hacibektasiveli-turbesi.jpg"
                        alt="Hacı Bektaş Veli Türbesi"
                        width={700}
                        height={400}
                        className="article-image rounded-lg mx-auto mb-4"
                      />
                      <p className="text-center text-sm text-gray-600 italic">
                        {locale === 'de' 
                          ? 'Das Mausoleum von Hacı Bektaş Veli in Hacıbektaş, Türkei - Ein heiliger Ort der Pilgerfahrt und spirituellen Besinnung' 
                          : 'Türkiye\'nin Hacıbektaş kasabasındaki Hacı Bektaş Veli türbesi - Kutsal hac yeri ve ruhani tefekkür merkezi'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )
            } else if (paragraph.includes('Heute wird sein Erbe sowohl in der Türkei') && article.id === 'haci-bektas-veli') {
              return (
                <div key={index}>
                  <p className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
                  <div className="flex justify-center my-10">
                    <div className="article-image-card bg-white rounded-lg shadow-lg p-6 border border-gray-200 max-w-2xl">
                      <Image
                        src="/hacibektasveli1.jpg"
                        alt="Hacı Bektaş Veli Darstellung"
                        width={500}
                        height={350}
                        className="article-image rounded-lg mx-auto mb-4"
                      />
                      <p className="text-center text-sm text-gray-600 italic">
                        {locale === 'de' 
                          ? 'Traditionelle Darstellung von Hacı Bektaş Veli - Symbol für Toleranz und humanistische Spiritualität' 
                          : 'Hacı Bektaş Veli\'nin geleneksel tasviri - Hoşgörü ve hümanist maneviyatın sembolü'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )
            } else if (paragraph.includes('Später wurde er Muhammeds Schwiegersohn') || paragraph.includes('Daha sonra kızı Fatıma ile evlenerek')) {
              return (
                <div key={index}>
                  <p className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
                  <div className="flex justify-center my-10">
                    <div className="article-image-card bg-white rounded-lg shadow-lg p-6 border border-gray-200 max-w-3xl">
                      <Image
                        src="/Muhammed_(saw)_et_sa_famille.jpg"
                        alt="Die heilige Familie - Ehl-i Beyt"
                        width={700}
                        height={500}
                        className="article-image rounded-lg mx-auto mb-4"
                      />
                      <p className="text-center text-sm text-gray-600 italic">
                        {locale === 'de' 
                          ? 'Die heilige Familie (Ehl-i Beyt): Hz. Ali mit Fatima und ihren Kindern Hasan und Hüseyin, beschützt von Engeln - Ein zentrales Motiv der alevitischen Spiritualität' 
                          : 'Kutsal Aile (Ehl-i Beyt): Hz. Ali, Fatıma ve çocukları Hasan ile Hüseyin, meleklerin koruması altında - Alevi maneviyatının merkezi motifi'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )
            } else if (paragraph.includes('Das Erbe von Hz. Ali') || paragraph.includes('Hz. Ali\'nin mirası')) {
              return (
                <div key={index}>
                  <p className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
                  <div className="flex justify-center my-12">
                    <div className="article-image-card bg-white rounded-lg shadow-lg p-6 border border-gray-200 max-w-2xl">
                      <Image
                        src="/MEZARGEY-IMAM-ALI.jpg"
                        alt="Grab von Imam Ali"
                        width={600}
                        height={400}
                        className="article-image rounded-lg mx-auto mb-4"
                      />
                      <p className="text-center text-sm text-gray-600 italic">
                        {locale === 'de' 
                          ? 'Das Grab von Imam Ali in Najaf, Irak - Ein Ort der Verehrung und spirituellen Reflexion' 
                          : 'Necef, Irak\'taki İmam Ali\'nin mezarı - Saygı ve ruhani düşünce yeri'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )
            } else if (paragraph.trim() && !paragraph.startsWith('#') && !paragraph.startsWith('<div')) {
              return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
            }
            return null
          })}
        </div>

        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="/autor.webp"
                  alt={article.author}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{article.author}</div>
                <div className="text-gray-600 text-sm">
                  {locale === 'de' ? 'Autor & Forscher' : 'Yazar & Araştırmacı'}
                </div>
              </div>
            </div>
            
            <Link 
              href={`/${locale}/artikel`}
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              {locale === 'de' ? 'Mehr Artikel' : 'Daha Fazla Makale'}
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

export async function generateMetadata({ params }: ArticleDetailPageProps) {
  const { locale, slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    return {
      title: 'Artikel nicht gefunden',
      description: 'Der angeforderte Artikel konnte nicht gefunden werden.'
    }
  }

  return {
    title: `${article.title[locale]} - Alevitische Gemeinde Dortmund`,
    description: article.content[locale].substring(0, 160) + '...',
  }
}