import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import { ProvedorConsulta } from '@/contexts/ProvedorConsulta'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Click Shop',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${raleway.className} mx-auto max-w-[1440px]`}>
        <ProvedorConsulta>{children}</ProvedorConsulta>
      </body>
    </html>
  )
}
