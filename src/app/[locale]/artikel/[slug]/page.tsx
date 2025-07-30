import { Locale } from '@/types'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { de, tr } from 'date-fns/locale'

interface ArticleDetailPageProps {
  params: Promise<{ locale: Locale; slug: string }>
}

interface Article {
  id: string
  title: {
    de: string
    tr: string
  }
  image: string
  content: {
    de: string
    tr: string
  }
  author: string
  publishedDate: Date
  readTime: number
  tags: string[]
}

// Mock article data - später aus CMS oder Database
const getArticleBySlug = (slug: string): Article | undefined => {
  const articles: Record<string, Article> = {
    'haci-bektas-veli': {
      id: 'haci-bektas-veli',
      title: {
        de: 'Hacı Bektaş Veli: Der Gründer des Bektaşitentums',
        tr: 'Hacı Bektaş Veli: Bektaşiliğin Kurucusu'
      },
      image: '/hacibektasveli01.png',
      content: {
        de: `# Hacı Bektaş Veli: Der große Mystiker des Alevitentums

## 1. Wer war Hacı Bektaş Veli?

Hacı Bektaş Veli (1209-1271) ist eine der wichtigsten Persönlichkeiten für das Alevitentum. Stellen Sie sich vor: Im 13. Jahrhundert, einer Zeit großer Umbrüche, lebte ein Mann, dessen Lehren bis heute Millionen von Menschen inspirieren. Er war ein Philosoph, ein Mystiker und vor allem ein Mensch, der glaubte, dass alle Menschen - unabhängig von ihrer Herkunft oder ihrem Geschlecht - gleichwertig sind.

Geboren wurde er in Nişabur (im heutigen Iran) und erhielt eine umfassende Bildung. Was ihn besonders machte: Er verband religiöse Spiritualität mit praktischen Lebensregeln und setzte sich für Gerechtigkeit und Bildung ein. Vor der mongolischen Invasion floh er nach Anatolien (Türkei) und gründete dort in Hacıbektaş seine Derwisch-Loge - eine Art spirituelles Zentrum, das Menschen aus allen Schichten anzog.

## 2. Seine revolutionären Lehren

Was machte Hacı Bektaş Veli so besonders? Seine Lehren waren für die damalige Zeit revolutionär:

**Die Gleichberechtigung der Geschlechter:** Während Frauen in vielen religiösen Traditionen ausgeschlossen wurden, lehrte er, dass Männer und Frauen gleichberechtigt am spirituellen Leben teilnehmen sollten. Dies prägt das Alevitentum bis heute.

**Bildung für alle:** Sein berühmter Ausspruch "Ein Weg ohne Wissenschaft endet in der Finsternis" zeigt, wie wichtig ihm Bildung war. Er glaubte, dass jeder Mensch lernen und sich entwickeln sollte.

**Der Mensch im Mittelpunkt:** "Meine Kaaba ist der Mensch" - mit diesen Worten machte er deutlich, dass nicht Gebäude oder Rituale das Wichtigste sind, sondern der Mensch selbst und wie wir einander behandeln.

## 3. Die drei goldenen Regeln fürs Leben

Hacı Bektaş Veli entwickelte eine einfache, aber kraftvolle Lebensphilosophie, die jeder verstehen kann. Seine berühmte Regel lautet: **"Eline, beline, diline sahip ol!"** - "Kontrolliere deine Hand, deine Lende und deine Zunge!"

Was bedeutet das konkret?

**Deine Hände (Eline):** Nutze deine Hände für Gutes. Arbeite ehrlich, hilf anderen, aber verletze niemals jemanden. Keine Gewalt, kein Diebstahl - stattdessen produktive und hilfreiche Taten.

**Deine Lende (Beline):** Beherrsche deine Triebe und Leidenschaften. Das bedeutet nicht, sie zu unterdrücken, sondern verantwortungsvoll mit ihnen umzugehen, sodass du dir und anderen nicht schadest.

**Deine Zunge (Diline):** Sprich respektvoll und wahrhaftig. Keine Lügen, kein böser Klatsch, keine Verleumdungen. Deine Worte sollen andere aufbauen, nicht verletzen.

Diese drei Regeln sind wie ein Kompass für ein ethisches Leben - einfach zu verstehen, aber kraftvoll in der Wirkung.

## 4. Der Weg zur Vervollkommnung: Die "Vier Tore"

Hacı Bektaş Veli lehrte, dass jeder Mensch ein "vollkommener Mensch" (İnsan-ı kâmil) werden kann. Er entwickelte dafür einen Stufenweg mit vier "Toren":

1. **Şeriat (Die Grundlagen):** Lerne die Basics - ehrlich leben, arbeiten, lernen, respektvoll mit anderen umgehen.

2. **Tarikat (Der spirituelle Weg):** Vertiefe dein inneres Leben - meditation, Gemeinschaft, Überwindung des Egos.

3. **Marifet (Wahre Erkenntnis):** Entwickle Weisheit und tiefes Verständnis für dich selbst und die Welt.

4. **Hakikat (Die Wahrheit):** Erkenne die göttliche Wahrheit in dir selbst und in allem Leben.

Das Schöne daran: Jeder kann diesen Weg gehen, unabhängig von Geschlecht, Herkunft oder Bildungsstand.

## 5. Seine wichtigsten Weisheiten

Hacı Bektaş Veli hinterließ uns viele inspirierende Aussprüche, die auch heute noch aktuell sind:

- **"Schätzt keinen Menschen und kein Volk gering!"** - Eine klare Absage an Rassismus und Diskriminierung
- **"Was du suchst, suche in dir selbst. Nicht in Jerusalem, nicht in Mekka."** - Wahre Spiritualität findest du in dir, nicht in heiligen Orten
- **"Das größte Buch zum Lesen ist der Mensch selbst."** - Lerne Menschen zu verstehen und von ihnen zu lernen

Diese Zitate zeigen: Er war seiner Zeit weit voraus und entwickelte Ideen, die wir heute als modern und fortschrittlich bezeichnen würden.

## 6. Sein Einfluss auf das Alevitentum

Hacı Bektaş Veli gilt als der geistige Vater des modernen Alevitentums. Seine Lehren formten eine religiöse Bewegung, die sich durch Toleranz, Gleichberechtigung und Humanismus auszeichnet.

Nach seinem Tod entwickelte sich der "Bektaschi-Orden" - eine religiöse Gemeinschaft, die seine Philosophie weiterführte. Diese Bewegung breitete sich weit aus: von der Türkei über den Balkan bis nach Ungarn, wo heute noch Spuren dieser Tradition zu finden sind.

Besonders interessant: Der Orden wurde so einflussreich, dass sogar die Janitscharen - die Elitetruppen des Osmanischen Reiches - Hacı Bektaş Veli als ihren spirituellen Schutzpatron verehrten.

## 7. Wie wir heute von ihm erfahren

Über Hacı Bektaş Veli zu forschen ist wie Archäologie: Wir haben keine direkten Aufzeichnungen aus seinem Leben, sondern müssen aus späteren Quellen zusammensetzen, wer er war.

Die wichtigste Quelle ist die "Velayetname" - eine Sammlung von Geschichten und Legenden über ihn, die Jahrhunderte nach seinem Tod aufgeschrieben wurde. Diese Erzählungen vermischen historische Fakten mit spirituellen Lehren und wundersamen Begebenheiten.

Für Aleviten sind diese Geschichten mehr als nur Geschichte - sie sind lebendige Inspiration und spirituelle Wahrheit, die zeigt, welche Kraft seine Lehren bis heute haben.

## 8. Wie Aleviten heute an ihn erinnern

Hacı Bektaş Veli ist nicht nur eine historische Figur - er lebt in den Herzen und Ritualen der Aleviten weiter.

**Das große Festival:** Jedes Jahr im August pilgern tausende Aleviten in die türkische Stadt Hacıbektaş zu seinem Grab. Drei Tage lang wird gefeiert, getanzt, gesungen und seiner gedacht. Es ist wie ein riesiges Familienfest, bei dem Menschen aus aller Welt zusammenkommen.

**In den Cem-Gottesdiensten:** In den alevitischen Gottesdiensten (Cem genannt) werden seine Lehren lebendig gehalten. Männer und Frauen sitzen gleichberechtigt zusammen - genau wie er es lehrte. Sie singen spirituelle Lieder, tanzen den heiligen Semah-Tanz und erinnern sich an seine Weisheiten.

**Im Alltag:** Seine drei goldenen Regeln - Hand, Lende, Zunge - sind für viele Aleviten bis heute ein praktischer Leitfaden für ein ethisches Leben.

## 9. Hacı Bektaş Veli in Deutschland heute

Die Lehren von Hacı Bektaş Veli leben auch in Deutschland weiter, wo etwa 700.000 Aleviten leben.

**Eine bemerkenswerte Geschichte:** Als türkische Arbeiter in den 1960ern nach Deutschland kamen, versteckten viele Aleviten zunächst ihre Identität - sie hatten zu viel Diskriminierung erlebt. Erst Ende der 1980er Jahre wagten sie das "Coming-out" und gründeten Gemeinden.

**Heute aktiv in der Gesellschaft:** Deutsche Aleviten engagieren sich in der Politik, im interreligiösen Dialog und in der Bildung. Sie haben sogar eigenen Religionsunterricht an deutschen Schulen eingeführt - ein Zeichen erfolgreicher Integration.

**Hacı Bektaş Velis Geist lebt weiter:** In ihrer Jugendarbeit, ihrem Einsatz gegen Diskriminierung und ihrer offenen, toleranten Haltung spiegeln sich seine humanistischen Werte wider. Sie bauen Brücken zwischen den Kulturen - genau wie er es gelehrt hätte.

## 10. Warum Hacı Bektaş Veli heute noch wichtig ist

Hacı Bektaş Veli war seiner Zeit etwa 800 Jahre voraus. Seine Ideen - Gleichberechtigung, Toleranz, Bildung für alle, Respekt vor jedem Menschen - sind heute aktueller denn je.

In einer Welt voller Konflikte und Vorurteile zeigt er uns einen anderen Weg: Einen Weg des Friedens, der Verständigung und der Menschlichkeit. Seine Botschaft ist einfach, aber kraftvoll: Das Göttliche findest du nicht in Gebäuden oder Ritualen, sondern in dir selbst und in der Art, wie du andere Menschen behandelst.

Millionen von Aleviten in der Türkei, Deutschland und anderen Ländern leben heute nach seinen Prinzipien. Sie setzen sich ein für Dialog zwischen den Religionen, für Gleichberechtigung und gegen Diskriminierung. Das ist sein lebendiges Erbe.

Hacı Bektaş Veli erinnert uns daran: Egal woher wir kommen, welchen Glauben wir haben oder welche Sprache wir sprechen - wir sind alle Menschen. Und das ist das Wichtigste von allem.`,
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
                    <div className="article-image-container max-w-3xl">
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
                    <div className="article-image-container max-w-md">
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
                    <div className="article-image-container max-w-3xl">
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
                    <div className="article-image-container max-w-2xl">
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
                    <div className="article-image-container max-w-3xl">
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
                    <div className="article-image-container max-w-2xl">
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