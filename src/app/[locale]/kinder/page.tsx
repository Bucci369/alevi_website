"use client";

import { Locale } from '@/types'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function KinderPage() {
  const params = useParams()
  const locale = params.locale as Locale

  const symbols = [
    {
      name: { de: 'Zülfikar', tr: 'Zülfikar' },
      description: {
        de: 'Das heilige Schwert von Ali. Es steht für Gerechtigkeit und Mut.',
        tr: 'Ali\'nin kutsal kılıcı. Adalet ve cesaret için durur.'
      },
      emoji: '⚔️'
    },
    {
      name: { de: 'Der Mond', tr: 'Ay' },
      description: {
        de: 'Der Mond zeigt uns den Weg und gibt uns Hoffnung in der Dunkelheit.',
        tr: 'Ay bize yolu gösterir ve karanlıkta umut verir.'
      },
      emoji: '🌙'
    },
    {
      name: { de: 'Die 12', tr: '12 Sayısı' },
      description: {
        de: 'Die Zahl 12 ist heilig. Es gibt 12 Imame und 12 Hizmet.',
        tr: '12 sayısı kutsaldır. 12 İmam ve 12 Hizmet vardır.'
      },
      emoji: '🔢'
    },
    {
      name: { de: 'Das Licht', tr: 'Işık' },
      description: {
        de: 'Licht bringt Wissen und Weisheit. Es vertreibt die Dunkelheit.',
        tr: 'Işık bilgi ve hikmet getirir. Karanlığı kovrar.'
      },
      emoji: '💡'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500 relative overflow-hidden">
      {/* Floating Clouds */}
      <div className="absolute top-10 left-10 w-20 h-12 bg-white rounded-full opacity-80 animate-float"></div>
      <div className="absolute top-20 right-20 w-16 h-10 bg-white rounded-full opacity-70 animate-float-delayed"></div>
      <div className="absolute top-32 left-1/3 w-24 h-14 bg-white rounded-full opacity-60 animate-float-slow"></div>

      {/* CSS Robot Character positioned behind first card */}
      <div className="absolute top-[calc(100vh-280px)] left-[calc(50%-200px)] transform z-10 md:left-[calc(25%-50px)]">
        <div className="robot-container animate-bounce-gentle transform scale-75 opacity-90 hover:opacity-100 transition-opacity duration-300">
          {/* Light Bulb */}
          <div className="w-6 h-8 bg-yellow-300 rounded-full mx-auto mb-2 relative animate-pulse">
            <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-100 rounded-full"></div>
          </div>
          
          {/* Robot Head */}
          <div className="w-20 h-16 bg-orange-400 rounded-t-2xl relative border-4 border-orange-600">
            {/* Eyes */}
            <div className="absolute top-4 left-3 w-4 h-4 bg-white rounded-full">
              <div className="w-2 h-2 bg-black rounded-full mt-1 ml-1 animate-blink"></div>
            </div>
            <div className="absolute top-4 right-3 w-4 h-4 bg-white rounded-full">
              <div className="w-2 h-2 bg-black rounded-full mt-1 ml-1 animate-blink"></div>
            </div>
            {/* Mouth */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-orange-600 rounded-full"></div>
            
            {/* Antennas */}
            <div className="absolute -top-2 left-2 w-1 h-4 bg-gray-400"></div>
            <div className="absolute -top-2 right-2 w-1 h-4 bg-gray-400"></div>
            <div className="absolute -top-4 left-2 w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="absolute -top-4 right-2 w-3 h-3 bg-red-400 rounded-full"></div>
          </div>
          
          {/* Robot Body */}
          <div className="w-24 h-20 bg-gray-300 rounded-b-xl border-4 border-gray-500 relative">
            {/* Control Panel */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-400 rounded-full animate-pulse">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 ml-2"></div>
            </div>
            {/* Display Lines */}
            <div className="absolute top-10 left-2 right-2 space-y-1">
              <div className="h-1 bg-green-400 rounded animate-pulse"></div>
              <div className="h-1 bg-blue-400 rounded animate-pulse delay-100"></div>
              <div className="h-1 bg-purple-400 rounded animate-pulse delay-200"></div>
            </div>
            
            {/* Arms */}
            <div className="absolute top-4 -left-6 w-8 h-3 bg-gray-400 rounded-full transform rotate-12"></div>
            <div className="absolute top-4 -right-6 w-8 h-3 bg-gray-400 rounded-full transform -rotate-12"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-80 pb-16 px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Kid and Robot Image positioned behind speech bubble - fixed relative to content */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-5">
            <img 
              src="/kidandrobot.png" 
              alt="Kid and Robot" 
              className="w-60 h-60 md:w-80 md:h-80 object-contain animate-bounce-gentle"
            />
          </div>

          {/* Speech Bubble */}
          <div className="bg-yellow-200 rounded-3xl p-8 mb-8 relative border-4 border-yellow-400 shadow-xl z-10">
            {/* Speech Bubble Arrow */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-yellow-200"></div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-10 border-r-10 border-b-10 border-l-transparent border-r-transparent border-b-yellow-400"></div>
            
            <h1 className="text-4xl font-bold text-center text-cyan-600 mb-4 animate-bounce">
              {locale === 'de' ? '🌟 Entdecke die Alevi-Symbole! 🌟' : '🌟 Alevi Sembollerini Keşfet! 🌟'}
            </h1>
            <p className="text-lg text-center text-gray-700 font-medium">
              {locale === 'de' 
                ? 'Hallo! Ich bin dein Roboter-Freund und zeige dir die wichtigsten Symbole im Alevitentum. Klick auf die bunten Karten!' 
                : 'Merhaba! Ben senin robot arkadaşınım ve sana Alevilikte önemli sembolleri göstereceğim. Renkli kartlara tıkla!'
              }
            </p>
          </div>

          {/* Symbol Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
            {symbols.map((symbol, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 shadow-2xl border-4 border-purple-300 hover:border-pink-400 transform hover:scale-105 transition-all duration-300 cursor-pointer group relative"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:animate-spin">{symbol.emoji}</div>
                  <h3 className="text-2xl font-bold text-purple-600 mb-3">
                    {symbol.name[locale]}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {symbol.description[locale]}
                  </p>
                </div>
                
                {/* Decorative Stars */}
                <div className="absolute top-2 right-2 text-yellow-400 animate-pulse">⭐</div>
                <div className="absolute bottom-2 left-2 text-pink-400 animate-pulse delay-100">✨</div>
              </div>
            ))}
          </div>

          {/* Fun Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white text-2xl font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white animate-pulse">
              🎉 {locale === 'de' ? 'MEHR ERFAHREN!' : 'DAHA FAZLA ÖĞREN!'} 🎉
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes blink {
          0%, 90% { opacity: 1; }
          95% { opacity: 0; }
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        .animate-blink { animation: blink 3s infinite; }
      `}</style>
    </div>
  )
}

