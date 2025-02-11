import { Theme } from '@radix-ui/themes'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Protest_Guerrilla, Ubuntu_Sans } from 'next/font/google'
import React from 'react'

import { Header } from '@components'

import type { Metadata } from 'next'

import './globals.scss'
import '@radix-ui/themes/styles.css'

const protest = Protest_Guerrilla({
  variable: '--font-protest',
  weight: '400',
  subsets: ['latin'],
})

const geist = Ubuntu_Sans({
  variable: '--font-ubuntu-sans',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

const title = 'Silph Dex'
const description =
  'Silph Dex by Sylvester Abeng, a National Pokedex powered by PokeAPI. Easily explore, search, and discover all Pokemon stats, abilities, evolutions, and more in one app.'

export const metadata: Metadata = {
  applicationName: title,
  title: title,
  description: description,
  keywords:
    'pokemon, pokedex, dex, pokemon stats, pokemon abilities, pokemon evolutions, silph co, sylvester abeng',
  openGraph: {
    type: 'website',
    url: 'https://silph-dex.vercel.app',
    title: title,
    description: description,
    siteName: title,
    images: [
      {
        url: 'https://silph-dex.vercel.app/ogp.png',
      },
    ],
  },
  twitter: {
    site: 'https://silph-dex.vercel.app',
    title: title,
    description: description,
    images: [
      {
        url: 'https://silph-dex.vercel.app/ogp.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${protest.variable}`}>
        {/* TODO: Add light mode option */}
        <Theme appearance="dark" accentColor="gray">
          <Header />
          {children}
        </Theme>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
