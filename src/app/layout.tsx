import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alevido.de'),
  title: {
    default: "Alevitische Gemeinde Dortmund e.V.",
    template: "%s | Alevitische Gemeinde Dortmund e.V."
  },
  description: "Willkommen bei der Alevitischen Gemeinde Dortmund - Eine Gemeinschaft der Vielfalt, des Respekts und der kulturellen Bereicherung.",
  keywords: ["Alevi", "Aleviten", "Dortmund", "Gemeinde", "Kultur", "Religion", "Integration", "Hz. Ali", "Hacı Bektaş Veli"],
  authors: [{ name: "Alevitische Gemeinde Dortmund e.V." }],
  creator: "Alevitische Gemeinde Dortmund e.V.",
  publisher: "Alevitische Gemeinde Dortmund e.V.",
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'tr_TR',
    url: 'https://www.alevido.de',
    siteName: 'Alevitische Gemeinde Dortmund e.V.',
    title: 'Alevitische Gemeinde Dortmund e.V.',
    description: 'Eine Gemeinschaft der Vielfalt, des Respekts und der kulturellen Bereicherung.',
    images: [
      {
        url: '/logo-alevido.png',
        width: 800,
        height: 600,
        alt: 'Alevitische Gemeinde Dortmund Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alevitische Gemeinde Dortmund e.V.',
    description: 'Eine Gemeinschaft der Vielfalt, des Respekts und der kulturellen Bereicherung.',
    images: ['/logo-alevido.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo-alevido.png', sizes: 'any', type: 'image/png' }
    ],
    shortcut: '/logo-alevido.png',
    apple: '/logo-alevido.png'
  },
  alternates: {
    canonical: 'https://www.alevido.de',
    languages: {
      'de-DE': 'https://www.alevido.de/de',
      'tr-TR': 'https://www.alevido.de/tr'
    }
  },
  verification: {
    google: 'verification-code-here'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Alevitische Gemeinde Dortmund e.V.",
              "url": "https://www.alevido.de",
              "logo": "https://www.alevido.de/logo-alevido.png",
              "description": "Eine Gemeinschaft der Vielfalt, des Respekts und der kulturellen Bereicherung.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bayrische Str. 113",
                "addressLocality": "Dortmund",
                "postalCode": "44339",
                "addressCountry": "DE"
              },
              "telephone": "+49-231-833926",
              "email": "info@alevido.de",
              "sameAs": [
                "https://www.facebook.com/alevido",
                "https://www.instagram.com/alevido"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
