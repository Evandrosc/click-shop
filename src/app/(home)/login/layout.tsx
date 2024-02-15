import { ReactNode } from 'react'
import { Header } from '@/components/Header/Header'
import { Logo } from '@/components/Logo'

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header variante="secundario">
        <Logo variante="primario" />
      </Header>
      {children}
    </>
  )
}
