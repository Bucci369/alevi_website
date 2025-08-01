"use client";

import { Building2, CreditCard } from "lucide-react";
import { Locale } from "@/types";
import { QRCodeGenerator } from "./QRCodeGenerator";

interface DonationSectionProps {
  locale: Locale;
}

export function DonationSection({ locale }: DonationSectionProps) {
  // GiroCode Format für deutsche Banken
  const giroCodeData = `BCD
002
1
SCT
DORTDE33XXX
Alevitische Gemeinde Dortmund e.V.
DE87440501990221000935


Spende Bauprojekt IMBR`;

  // PayPal Donation Link (Platzhalter - kann später durch echten PayPal Link ersetzt werden)
  const paypalData = "https://paypal.me/AlevitischeGemeindeDortmund";

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {locale === 'de' ? 'Spenden für Bauprojekt IMBR' : 'İMBR Yapı Projesi İçin Bağış'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {locale === 'de' 
              ? 'Unterstützen Sie unser Bauprojekt und helfen Sie uns dabei, ein neues Zuhause für unsere Gemeinschaft zu schaffen.'
              : 'Yapı projemizi destekleyin ve topluluğumuz için yeni bir yuva oluşturmamıza yardımcı olun.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bank Transfer Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col h-full">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-6 mx-auto">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              {locale === 'de' ? 'Spendenkonto' : 'Bağış Hesabı'}
            </h3>
            
            <div className="space-y-4 text-center">
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  {locale === 'de' ? 'Bank' : 'Banka'}
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Stadtsparkasse Dortmund
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  {locale === 'de' ? 'Begünstigter' : 'Alıcı'}
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Alevitische Gemeinde Dortmund e.V.
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 font-medium">IBAN:</p>
                <p className="text-lg font-mono font-bold text-gray-900 break-all">
                  DE87 4405 0199 0221 0009 35
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 font-medium">BIC:</p>
                <p className="text-lg font-mono font-bold text-gray-900">
                  DORTDE33XXX
                </p>
              </div>
              
            </div>
          </div>

          {/* QR Code for Bank Transfer */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center justify-center h-full">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              {locale === 'de' ? 'Spendenkonto' : 'Bağış Hesabı'}
            </h3>
            
            {/* GiroCode QR Code */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-48 h-48 flex items-center justify-center mb-6 relative">
                <QRCodeGenerator 
                  data={giroCodeData} 
                  size={192}
                  className="w-full h-full"
                />
              </div>
              
              <p className="text-center text-red-600 font-semibold">
                {locale === 'de' ? 'Spende mit GiroCode' : 'GiroCode ile Bağış'}
              </p>
            </div>
          </div>

          {/* PayPal Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col h-full">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-6 mx-auto">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              {locale === 'de' ? 'Mit PayPal Spenden' : 'PayPal ile Bağış'}
            </h3>
            
            {/* PayPal QR Code */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-48 h-48 flex items-center justify-center mb-6 relative">
                <QRCodeGenerator 
                  data={paypalData} 
                  size={192}
                  className="w-full h-full"
                />
              </div>
              
              <p className="text-center text-red-600 font-semibold">
                {locale === 'de' 
                  ? 'Schnell und sicher online spenden'
                  : 'Hızlı ve güvenli online bağış'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p className="text-blue-800 font-medium mb-2">
              {locale === 'de' ? 'Wichtiger Hinweis' : 'Önemli Not'}
            </p>
            <p className="text-blue-700">
              {locale === 'de' 
                ? 'Für eine Spendenbescheinigung geben Sie bitte Ihren Namen und Ihre Anschrift im Verwendungszweck oder als Referenz an.'
                : 'Bağış makbuzu için lütfen adınızı ve adresinizi açıklama kısmına veya referans olarak belirtin.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}