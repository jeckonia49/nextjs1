import './globals.css'
import type { Metadata }              from 'next'
import { Inter }                      from 'next/font/google'
import {ClerkProvider}                from "@clerk/nextjs"
import Providers                      from '@/components/Providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI NOTE TAKING',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <Providers>
      <body className={inter.className}>{children}</body>
      </Providers>
    </html>
    </ClerkProvider>
  )
}
