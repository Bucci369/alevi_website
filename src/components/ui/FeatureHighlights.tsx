"use client";

import { Heart, Book, Users } from "lucide-react";
import { Locale } from "@/types";

interface FeatureHighlightsProps {
  locale: Locale;
}

export function FeatureHighlights({ locale }: FeatureHighlightsProps) {
  const features = [
    {
      icon: Users,
      title: {
        de: "Unsere Gemeinschaft",
        tr: "Topluluk"
      },
      description: {
        de: "Eine lebendige Gemeinschaft, die Tradition und Moderne verbindet. Wir fördern den Zusammenhalt und bieten Unterstützung für alle Generationen.",
        tr: "Gelenekle modernliği birleştiren canlı bir topluluk. Birlikteliği destekliyor ve tüm nesilere destek sunuyoruz."
      }
    },
    {
      icon: Book,
      title: {
        de: "Kulturelle Bildung",
        tr: "Kültürel Eğitim"
      },
      description: {
        de: "Bildung und Kultur stehen im Mittelpunkt unserer Arbeit. Von Sprachkursen bis zu traditioneller Musik - wir bewahren unser Erbe.",
        tr: "Eğitim ve kültür çalışmalarımızın merkezinde yer alır. Dil kurslarından geleneksel müziğe - mirasımızı koruyoruz."
      }
    },
    {
      icon: Heart,
      title: {
        de: "Spirituelle Führung",
        tr: "Manevi Rehberlik"
      },
      description: {
        de: "Auf dem Weg der Liebe und Toleranz begleiten wir unsere Mitglieder spirituell. Der alevitische Glaube lehrt uns Menschlichkeit und Respekt.",
        tr: "Sevgi ve hoşgörü yolunda üyelerimize manevi rehberlik ediyoruz. Alevi inancı bize insanlık ve saygıyı öğretiyor."
      }
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {locale === 'de' ? 'Unsere Werte' : 'Değerlerimiz'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {locale === 'de' 
              ? 'Die Grundpfeiler unserer Gemeinschaft basieren auf alevitischen Werten und modernem Zusammenleben.'
              : 'Topluluğumuzun temel direkleri Alevi değerlerine ve modern birlikte yaşamaya dayanır.'
            }
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg border border-gray-200"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title[locale]}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description[locale]}
                  </p>
                </div>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200 group-hover:ring-gray-300 transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            {locale === 'de' 
              ? 'Werden Sie Teil unserer Gemeinschaft und entdecken Sie die Vielfalt des alevitischen Lebens.'
              : 'Topluluğumuzun bir parçası olun ve Alevi yaşamının çeşitliliğini keşfedin.'
            }
          </p>
        </div>
      </div>
    </section>
  );
}