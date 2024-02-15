import { ProvedorConsulta } from '@/contexts/ProvedorConsulta'
import { Produtos } from '@/components/Produtos/Produtos'
import { Promocional } from '@/components/Promocional/Promocional'
import { Header } from '@/components/Header/Header'
import { Logo } from '@/components/Logo'
import { ContainerLoginCarrinho } from '@/components/Header/components/ContainerLoginCarrinho'
import { Form } from '@/components/Header/components/Form'

export default function Home() {
  return (
    <>
      <Header variante="primario">
        <Logo variante="primario" />
        <ContainerLoginCarrinho />
        <Form />
      </Header>
      <main>
        <Promocional />
        <ProvedorConsulta>
          <Produtos />
        </ProvedorConsulta>
      </main>
    </>
  )
}
