import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'
import '../globals.css'

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
        {children}
        <Footer />
      </body>
    </html>
  )
}
