import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FEG Digital Hub - Plateforme B2B pour les Entreprises Gabonaises',
  description: 'Plateforme digitale complète pour les entreprises membres de la FEG avec modules BI, marketplace, formation et optimisation logistique.',
  keywords: 'FEG, Gabon, B2B, marketplace, business intelligence, formation, logistique',
  authors: [{ name: 'FEG Digital Team' }],
  creator: 'FEG Digital Hub',
  publisher: 'Fédération des Entreprises du Gabon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://feg-hub.ga'),
  openGraph: {
    title: 'FEG Digital Hub',
    description: 'Plateforme B2B pour les entreprises gabonaises',
    url: 'https://feg-hub.ga',
    siteName: 'FEG Digital Hub',
    locale: 'fr_GA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FEG Digital Hub',
    description: 'Plateforme B2B pour les entreprises gabonaises',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}
