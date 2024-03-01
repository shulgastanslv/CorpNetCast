import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {ThemeProvider} from '@/components/theme-provider'
import {Toaster} from 'sonner'
import {SessionProvider} from 'next-auth/react'
import {auth} from '@/auth'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'CorpNetCast',
    description: 'platform for communication/broadcasting within the company',
}

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {

    const session = await auth();

    return (
        <SessionProvider session={session}>
            <html lang="en">
            <body className={inter.className}>
            <ThemeProvider
                attribute="class"
                storageKey="my-theme"
            >
                <Toaster theme="dark" position='bottom-center'/>
                {children}
            </ThemeProvider>
            </body>
            </html>
        </SessionProvider>
    )
}
