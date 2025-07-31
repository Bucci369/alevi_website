import React from "react";
import Image from "next/image";

export const religiousTimelineData = [
  {
    year: "Tevhid",
    title: {
      de: "Hakk-Muhammed-Ali Einheit",
      tr: "Hakk-Muhammed-Ali Birliği"
    },
    content: {
      de: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Das Herzstück des alevitischen Glaubens ist die heilige Dreieinigkeit: Hakk (Gott), 
            Muhammed (der Prophet) und Ali (der spirituelle Führer). Diese Einheit repräsentiert 
            die vollkommene Harmonie zwischen dem Göttlichen, der Prophetie und der spirituellen Führung.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Die heilige Dreieinigkeit:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-1">
              <li key="trinity-1">• <strong>Hakk</strong> - Das Göttliche, die absolute Wahrheit</li>
              <li key="trinity-2">• <strong>Muhammed</strong> - Der Prophet, Überbringer der Botschaft</li>
              <li key="trinity-3">• <strong>Ali</strong> - Der spirituelle Führer, Tor zur Weisheit</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              key="trinity-image-1"
              src="/Muhammed_(saw)_et_sa_famille.jpg"
              alt="Prophet Muhammad und seine Familie"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
            <Image
              key="trinity-image-2"
              src="/hzali.jpg"
              alt="Hz. Ali"
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
            Alevi inancının kalbi, kutsal üçlüdür: Hakk (Tanrı), Muhammed (Peygamber) ve Ali (ruhani lider). 
            Bu birlik, ilahi, peygamberlik ve ruhani rehberlik arasındaki mükemmel uyumu temsil eder.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Kutsal Üçlü:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-1">
              <li key="trinity-tr-1">• <strong>Hakk</strong> - İlahi, mutlak hakikat</li>
              <li key="trinity-tr-2">• <strong>Muhammed</strong> - Peygamber, mesajın taşıyıcısı</li>
              <li key="trinity-tr-3">• <strong>Ali</strong> - Ruhani lider, hikmetin kapısı</li>
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
            <Image
              src="/hzali.jpg"
              alt="Hz. Ali"
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
    year: "12 İmam",
    title: {
      de: "Die 12 Imame",
      tr: "12 İmam"
    },
    content: {
      de: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Die 12 Imame sind die spirituellen Führer und rechtmäßigen Nachfolger des Propheten Muhammad 
            in der alevitischen Tradition. Sie repräsentieren die kontinuierliche Führung der Gläubigen 
            durch göttliche Weisheit und sind Vorbilder für Gerechtigkeit, Wissen und Spiritualität.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Die 12 heiligen Imame:</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-neutral-300">
              <div>
                <p key="imam-1">1. Ali ibn Abi Talib</p>
                <p key="imam-2">2. Hasan ibn Ali</p>
                <p key="imam-3">3. Hüseyin ibn Ali</p>
                <p key="imam-4">4. Ali Zeyn'el Abidin</p>
                <p key="imam-5">5. Muhammed Bakır</p>
                <p key="imam-6">6. Cafer es-Sadık</p>
              </div>
              <div>
                <p key="imam-7">7. Musa el-Kazım</p>
                <p key="imam-8">8. Ali er-Rıza</p>
                <p key="imam-9">9. Muhammed et-Taki</p>
                <p key="imam-10">10. Ali en-Naki</p>
                <p key="imam-11">11. Hasan el-Askeri</p>
                <p key="imam-12">12. Muhammed el-Mehdi</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              key="imam-image-1"
              src="/12imam-Kopie-1.png"
              alt="Die 12 Imame"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
            <Image
              key="imam-image-2"
              src="/12imamarabisch.png"
              alt="12 Imame Arabische Kalligrafie"
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
            12 İmam, Alevi geleneğinde Hz. Muhammed'in ruhani liderleri ve meşru halefleridirler. 
            İlahi hikmet aracılığıyla müminlerin sürekli rehberliğini temsil ederler ve adalet, 
            bilgi ve maneviyat için rol modeldirler.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">12 Kutsal İmam:</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-neutral-300">
              <div>
                <p key="imam-1">1. Ali ibn Abi Talib</p>
                <p key="imam-2">2. Hasan ibn Ali</p>
                <p key="imam-3">3. Hüseyin ibn Ali</p>
                <p key="imam-4">4. Ali Zeyn'el Abidin</p>
                <p key="imam-5">5. Muhammed Bakır</p>
                <p key="imam-6">6. Cafer es-Sadık</p>
              </div>
              <div>
                <p key="imam-7">7. Musa el-Kazım</p>
                <p key="imam-8">8. Ali er-Rıza</p>
                <p key="imam-9">9. Muhammed et-Taki</p>
                <p key="imam-10">10. Ali en-Naki</p>
                <p key="imam-11">11. Hasan el-Askeri</p>
                <p key="imam-12">12. Muhammed el-Mehdi</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/12imam-Kopie-1.png"
              alt="12 İmam"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
            <Image
              src="/12imamarabisch.png"
              alt="12 İmam Arapça Hat Sanatı"
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
    year: "Cem",
    title: {
      de: "Cem-Zeremonie",
      tr: "Cem Töreni"
    },
    content: {
      de: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Die Cem-Zeremonie ist das Herzstück der alevitischen Glaubenspraxis. Es ist eine spirituelle 
            Versammlung, in der Gläubige zusammenkommen, um zu beten, religiöse Musik zu hören, 
            spirituelle Tänze (Semah) aufzuführen und sich in einer Atmosphäre der Einheit und Liebe zu vereinen.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Elemente der Cem-Zeremonie:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-2">
              <li key="cem-1">• <strong>Dede-Führung:</strong> Spirituelle Leitung durch den Dede</li>
              <li key="cem-2">• <strong>Semah:</strong> Mystischer Tanz als Ausdruck der Liebe zu Gott</li>
              <li key="cem-3">• <strong>Deyiş und Nefes:</strong> Spirituelle Lieder und Gedichte</li>
              <li key="cem-4">• <strong>Gemeinschaftsgebet:</strong> Gemeinsame Anrufung des Göttlichen</li>
              <li key="cem-5">• <strong>Canip-Zakir:</strong> Musikalische Begleitung durch Bağlama</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900/20 border-l-4 border-gray-400 p-4 mb-4">
            <p className="text-sm text-green-800 dark:text-green-300">
              "Cem bedeutet Versammlung, Einheit und das Zusammenkommen der Herzen vor dem Göttlichen."
            </p>
          </div>
        </div>
      ),
      tr: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Cem töreni, Alevi inanç pratiğinin kalbidir. İnançlıların dua etmek, dini müzik dinlemek, 
            ruhani danslar (Semah) sergilemek ve birlik ve sevgi atmosferinde bir araya gelmek için 
            toplandıkları ruhani bir toplanmadır.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Cem Töreninin Unsurları:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-2">
              <li key="cem-tr-1">• <strong>Dede Rehberliği:</strong> Dede tarafından ruhani yönlendirme</li>
              <li key="cem-tr-2">• <strong>Semah:</strong> Tanrı'ya sevginin ifadesi olarak mistik dans</li>
              <li key="cem-tr-3">• <strong>Deyiş ve Nefes:</strong> Ruhani şarkılar ve şiirler</li>
              <li key="cem-tr-4">• <strong>Cemaat Duası:</strong> İlahi'ye ortak yakarış</li>
              <li key="cem-tr-5">• <strong>Canip-Zakir:</strong> Bağlama ile müzikal eşlik</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900/20 border-l-4 border-gray-400 p-4 mb-4">
            <p className="text-sm text-green-800 dark:text-green-300">
              "Cem, toplantı, birlik ve kalplerin İlahi huzurunda bir araya gelmesi demektir."
            </p>
          </div>
        </div>
      )
    }
  },
  {
    year: "Dede",
    title: {
      de: "Die Rolle des Dede",
      tr: "Dedenin Rolü"
    },
    content: {
      de: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Der Dede ist der spirituelle Führer und Lehrer in der alevitischen Gemeinschaft. 
            Er leitet die Cem-Zeremonien, führt religiöse Rituale durch und dient als Vermittler 
            zwischen der Gemeinde und dem Göttlichen. Die Dede-Linie wird traditionell von 
            Vater zu Sohn übertragen und geht auf die Familie des Propheten zurück.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Aufgaben des Dede:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-2">
              <li key="dede-1">• <strong>Cem-Leitung:</strong> Führung der religiösen Zeremonien</li>
              <li key="dede-2">• <strong>Spirituelle Beratung:</strong> Seelsorge und Lebensberatung</li>
              <li key="dede-3">• <strong>Lehre:</strong> Vermittlung alevitischer Werte und Traditionen</li>
              <li key="dede-4">• <strong>Konfliktlösung:</strong> Mediation bei Gemeinschaftsproblemen</li>
              <li key="dede-5">• <strong>Rituelle Handlungen:</strong> Hochzeiten, Gebete, Segnung</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900/20 border-l-4 border-gray-400 p-4 mb-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              "Der Dede ist nicht nur religiöser Führer, sondern auch Hüter der Weisheit und Tradition."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              key="dede-image-1"
              src="/hacibektasveli01.png"
              alt="Spiritueller Führer"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
            <Image
              key="dede-image-2"
              src="/hacibektasiveli-turbesi.jpg"
              alt="Heiliger Ort"
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
            Dede, Alevi toplumunda ruhani lider ve öğretmendir. Cem törenlerini yönetir, 
            dini ritüelleri gerçekleştirir ve cemaat ile İlahi arasında aracı olarak hizmet eder. 
            Dede soyağacı geleneksel olarak babadan oğula aktarılır ve Hz. Peygamber'in 
            ailesine dayanır.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Dedenin Görevleri:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-2">
              <li key="dede-tr-1">• <strong>Cem Yönetimi:</strong> Dini törenlerin yönetimi</li>
              <li key="dede-tr-2">• <strong>Ruhani Danışmanlık:</strong> Manevî rehberlik ve yaşam danışmanlığı</li>
              <li key="dede-tr-3">• <strong>Öğretmenlik:</strong> Alevi değerlerinin ve geleneklerinin öğretimi</li>
              <li key="dede-tr-4">• <strong>Çatışma Çözümü:</strong> Topluluk sorunlarında arabuluculuk</li>
              <li key="dede-tr-5">• <strong>Ritüel İşlemler:</strong> Düğünler, dualar, kutsama</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900/20 border-l-4 border-gray-400 p-4 mb-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              "Dede sadece dini lider değil, aynı zamanda hikmetin ve geleneğin de koruyucusudur."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/hacibektasveli01.png"
              alt="Ruhani Lider"
              width={400}
              height={300}
              className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
            />
            <Image
              src="/hacibektasiveli-turbesi.jpg"
              alt="Kutsal Mekan"
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
    year: "Değerler",
    title: {
      de: "Eline-Diline-Beline Sahip Olmak",
      tr: "Eline-Diline-Beline Sahip Olmak"
    },
    content: {
      de: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Die fundamentalen Werte des Alevitentums werden durch den Ausdruck "Eline-Diline-Beline sahip olmak" 
            zusammengefasst. Diese drei Grundprinzipien definieren die ethische und moralische Lebensführung 
            eines jeden Alevis und bilden das Fundament für ein rechtschaffenes Leben in der Gemeinschaft.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Die drei Grundwerte:</h5>
            <div className="space-y-3">
              <div key="value-1" className="border-l-4 border-red-400 pl-4">
                <h6 className="font-semibold text-gray-900 dark:text-white">Eline Sahip Olmak (Hand kontrollieren)</h6>
                <p className="text-sm text-gray-600 dark:text-neutral-300">Keine schlechten Taten begehen, nur Gutes mit den Händen schaffen</p>
              </div>
              <div key="value-2" className="border-l-4 border-green-400 pl-4">
                <h6 className="font-semibold text-gray-900 dark:text-white">Diline Sahip Olmak (Zunge kontrollieren)</h6>
                <p className="text-sm text-gray-600 dark:text-neutral-300">Wahrhaftig sprechen, nicht lügen, niemanden verletzen durch Worte</p>
              </div>
              <div key="value-3" className="border-l-4 border-blue-400 pl-4">
                <h6 className="font-semibold text-gray-900 dark:text-white">Beline Sahip Olmak (Lenden kontrollieren)</h6>
                <p className="text-sm text-gray-600 dark:text-neutral-300">Keuschheit bewahren, treue Beziehungen führen, sexuelle Moral</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900/20 border-l-4 border-gray-400 p-4 mb-4">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              "Diese drei Werte sind die Säulen eines rechtschaffenen Lebens und führen zur spirituellen Vollendung."
            </p>
          </div>
        </div>
      ),
      tr: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            Alevilik'in temel değerleri "Eline-Diline-Beline sahip olmak" ifadesi ile özetlenir. 
            Bu üç temel ilke, her Alevi'nin etik ve ahlaki yaşam biçimini tanımlar ve 
            toplum içinde doğru bir yaşam sürmek için temel oluşturur.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Üç Temel Değer:</h5>
            <div className="space-y-3">
              <div key="value-tr-1" className="border-l-4 border-red-400 pl-4">
                <h6 className="font-semibold text-gray-900 dark:text-white">Eline Sahip Olmak (Elini kontrol etmek)</h6>
                <p className="text-sm text-gray-600 dark:text-neutral-300">Kötü işler yapmamak, ellerinle sadece iyilik yaratmak</p>
              </div>
              <div key="value-tr-2" className="border-l-4 border-green-400 pl-4">
                <h6 className="font-semibold text-gray-900 dark:text-white">Diline Sahip Olmak (Dilini kontrol etmek)</h6>
                <p className="text-sm text-gray-600 dark:text-neutral-300">Doğru konuşmak, yalan söylememek, sözlerle kimseyi incitmemek</p>
              </div>
              <div key="value-tr-3" className="border-l-4 border-blue-400 pl-4">
                <h6 className="font-semibold text-gray-900 dark:text-white">Beline Sahip Olmak (Belini kontrol etmek)</h6>
                <p className="text-sm text-gray-600 dark:text-neutral-300">İffetini korumak, sadık ilişkiler sürdürmek, cinsel ahlak</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900/20 border-l-4 border-gray-400 p-4 mb-4">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              "Bu üç değer, doğru bir yaşamın direkleridir ve ruhani mükemmelliğe götürür."
            </p>
          </div>
        </div>
      )
    }
  },
  {
    year: "İnsan-ı Kâmil",
    title: {
      de: "Der vollkommene Mensch",
      tr: "İnsan-ı Kâmil"
    },
    content: {
      de: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            İnsan-ı Kâmil (Der vollkommene Mensch) ist das höchste spirituelle Ideal im Alevitentum. 
            Es bezeichnet einen Menschen, der seine niedrigen Triebe überwunden hat und die göttlichen 
            Eigenschaften in sich verwirklicht hat. Dieses Konzept steht im Zentrum der alevitischen 
            Mystik und spirituellen Entwicklung.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Eigenschaften des vollkommenen Menschen:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-2">
              <li key="kamil-1">• <strong>Selbsterkenntnis:</strong> "Kendini bilen, Rabbini bilir" - Wer sich selbst erkennt, erkennt seinen Herrn</li>
              <li key="kamil-2">• <strong>Spirituelle Reinheit:</strong> Läuterung von negativen Eigenschaften</li>
              <li key="kamil-3">• <strong>Universelle Liebe:</strong> Mitgefühl für alle Geschöpfe</li>
              <li key="kamil-4">• <strong>Weisheit und Wissen:</strong> Sowohl äußeres als auch inneres Wissen</li>
              <li key="kamil-5">• <strong>Dienst an der Menschheit:</strong> Selbstloses Dienen ohne Erwartung</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900/20 border-l-4 border-gray-400 p-4 mb-4">
            <p className="text-sm text-teal-800 dark:text-teal-300">
              "Der Weg zum vollkommenen Menschen führt über spirituelle Läuterung, Selbsterkenntnis und die Vereinigung mit dem Göttlichen."
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-neutral-700 rounded-lg p-4">
            <h6 className="font-semibold text-gray-900 dark:text-white mb-2">Die vier Tore und vierzig Stufen:</h6>
            <p className="text-sm text-gray-600 dark:text-neutral-300">
              Der spirituelle Weg besteht aus vier Haupttoren (Şeriat, Tarikat, Marifet, Hakikat) 
              mit jeweils zehn Stufen, die zur spirituellen Vollendung führen.
            </p>
          </div>
        </div>
      ),
      tr: (
        <div>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
            İnsan-ı Kâmil, Alevilik'teki en yüksek ruhani idealdir. Nefsini yenmiş ve ilahi 
            sıfatları kendinde gerçekleştirmiş insanı ifade eder. Bu kavram, Alevi tasavvufu 
            ve ruhani gelişimin merkezinde yer alır.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Kâmil İnsanın Özellikleri:</h5>
            <ul className="text-sm text-gray-600 dark:text-neutral-300 space-y-2">
              <li key="kamil-tr-1">• <strong>Benlik Bilgisi:</strong> "Kendini bilen, Rabbini bilir"</li>
              <li key="kamil-tr-2">• <strong>Ruhani Saflık:</strong> Olumsuz özelliklerden arınma</li>
              <li key="kamil-tr-3">• <strong>Evrensel Sevgi:</strong> Tüm yaratıklara şefkat</li>
              <li key="kamil-tr-4">• <strong>Hikmet ve İlim:</strong> Hem zahiri hem batıni bilgi</li>
              <li key="kamil-tr-5">• <strong>İnsanlığa Hizmet:</strong> Karşılık beklemeden özverili hizmet</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900/20 border-l-4 border-gray-400 p-4 mb-4">
            <p className="text-sm text-teal-800 dark:text-teal-300">
              "Kâmil insana giden yol, ruhani arınma, benlik bilgisi ve İlahi ile birleşmeden geçer."
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-neutral-700 rounded-lg p-4">
            <h6 className="font-semibold text-gray-900 dark:text-white mb-2">Dört Kapı Kırk Makam:</h6>
            <p className="text-sm text-gray-600 dark:text-neutral-300">
              Ruhani yol, her birinde on makam bulunan dört ana kapıdan (Şeriat, Tarikat, Marifet, Hakikat) 
              oluşur ve ruhani kemale götürür.
            </p>
          </div>
        </div>
      )
    }
  }
];