import AuthProvider from '@/components/Providers/AuthProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ReduxProvider from '@/components/Providers/ReduxProvider'
import Navbar from '@/components/ui/Navbar'
import dynamic from 'next/dynamic'
import ToastProviders from '@/components/Providers/ToastProvider'
const Sidebar = dynamic(() => import('@/components/ui/Sidebar'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ringotunes',
  description: 'Website to Share and download Ringtones',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProviders>
          <AuthProvider>
            <Navbar />
            <ReduxProvider>
              <Sidebar />
            </ReduxProvider>
            {children}
          </AuthProvider>
        </ToastProviders>
      </body>
    </html>
  )
}
