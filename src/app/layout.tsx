import { Theme } from '@radix-ui/themes'
import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'
import React from 'react'

import type { Metadata } from 'next'

import './globals.scss'
import '@radix-ui/themes/styles.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* TODO: Add light mode option */}
        <Theme appearance="dark">{children}</Theme>
        <Analytics />
      </body>
    </html>
  )
}
