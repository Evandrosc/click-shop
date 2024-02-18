import { Produtos } from '@/components/Produtos/Produtos'
import { Promocional } from '@/components/Promocional'

export default function Home() {
  return (
    <main>
      <Promocional />
      <Produtos />
    </main>
  )
}
