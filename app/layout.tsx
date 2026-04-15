import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bella-spa.vercel.app'),
  title: "Bella'Spa — Estudio de Belleza Premium en Cartago, Costa Rica",
  description: 'Expertos en extensiones de pestañas, diseño de cejas, uñas en gel y depilación. Agenda tu cita en Cartago. Transforma tu belleza en Bella\'Spa. ✨',
  keywords: 'spa cartago, estudio de belleza, pestañas, cejas, uñas gel, depilación, costa rica',
  generator: 'next.js',
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: 'https://bellaspa.vercel.app',
    siteName: "Bella'Spa",
    title: "Bella'Spa — Estudio de Belleza Premium en Cartago",
    description: 'Especialistas en pestañas, cejas, uñas y depilación. Tu destino de belleza en Cartago.',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 1200,
        height: 1200,
        alt: "Bella'Spa Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bella'Spa — Estudio de Belleza",
    description: 'Especialistas en pestañas, cejas, uñas y depilación en Cartago.',
    images: ['/images/logo.jpeg'],
  },
  icons: {
    icon: [
      {
        url: '/images/logo.jpeg',
        sizes: '32x32',
        type: 'image/jpeg',
      },
      {
        url: '/images/logo.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
    ],
    apple: '/images/logo.jpeg',
    shortcut: '/images/logo.jpeg',
  },
  authors: [{ name: 'Bella\'Spa', url: 'https://bellaspa.vercel.app' }],
  creator: 'Bella\'Spa',
  publisher: 'Bella\'Spa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
