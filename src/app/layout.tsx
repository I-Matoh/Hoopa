import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hoopa - Innovative Business Solutions',
  description: 'Hoopa provides innovative solutions and exceptional services to help businesses thrive in today\'s dynamic market.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode  
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 
