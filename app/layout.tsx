import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const interTight = Inter_Tight({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: 'OFSINNIA',
  description: 'Flirt, napięcie i ekscytacja bez granic.',
  icons: {
    icon: 'https://r.mobirisesite.com/1676590/assets/images/drawn-love-hearts.svg-128x106.png?v=1VQk6W',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
