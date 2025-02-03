import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Silph Dex',
  description: 'Silph Dex by Sylvester Abeng',
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
      </body>
    </html>
  )
}
