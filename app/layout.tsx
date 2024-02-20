import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import { dark } from '@clerk/themes';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CorpNetCast',
  description: 'platform for communication/broadcasting within the company',
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
    <ClerkProvider  appearance={{
      baseTheme: dark,
      signIn: {
        baseTheme: dark,
      }
    }}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="my-theme"
          >
            <Toaster theme="dark" position='bottom-center' />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
