import { ReactNode } from 'react'
import { Header } from '@/components/Header/Header'
import { Logo } from '@/components/Logo'
import { Footer } from '@/components/Footer/Footer'

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header variante="secundario">
        <Logo variante="primario" />
      </Header>
      {children}
      <Footer />
    </>
  )
}
