import { ProvedorConsulta } from '@/contexts/ProvedorConsulta'
import { Header } from '@/components/Header/Header'
import { Produtos } from '@/components/Produtos/Produtos'
import { Promocional } from '@/components/Promocional/Promocional'
import { Footer } from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <ProvedorConsulta>
        <Header />
        <main>
          <Promocional />
          <Produtos />
        </main>
      </ProvedorConsulta>
      <Footer />
    </>
  )
}
