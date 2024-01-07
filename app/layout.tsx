import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { dark } from '@clerk/themes'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ambient',
  description: 'live streaming platform',
}

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            forcedTheme="light"
            storageKey="ambient-theme"
          >
            <Toaster theme="light" position='bottom-center' />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
