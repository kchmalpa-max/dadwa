import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Inter_Tight } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { translations } from '@/lib/locale'
import './globals.css'

const interTight = Inter_Tight({ subsets: ["latin", "latin-ext"] });

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const country = headersList.get("x-vercel-ip-country") ?? ""
  const locale = country === "PL" ? "pl" : "en"
  const t = translations[locale]

  return {
    title: 'OFSINNIA',
    description: t.metaDescription,
    icons: {
      icon: 'https://r.mobirisesite.com/1676590/assets/images/drawn-love-hearts.svg-128x106.png?v=1VQk6W',
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const country = headersList.get("x-vercel-ip-country") ?? ""
  const lang = country === "PL" ? "pl" : "en"

  return (
    <html lang={lang}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
