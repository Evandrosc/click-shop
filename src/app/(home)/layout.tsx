import { ReactNode } from 'react'
import { Header } from '@/components/Header/Header'
import { Logo } from '@/components/Logo'
import { ContainerLoginCarrinho } from '@/components/Header/components/ContainerLoginCarrinho'
import { Form } from '@/components/Header/components/Form'
import { Footer } from '@/components/Footer/Footer'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header variante="primario">
        <Logo variante="primario" />
        <ContainerLoginCarrinho />
        <Form />
      </Header>
      {children}
      <Footer />
    </>
  )
}
