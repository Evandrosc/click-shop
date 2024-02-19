'use client'

import { TProduto } from '@/@types/TProduto'
import { Produto } from '@/components/Produto'
import { Skeleton } from '@/components/ui/skeleton'
import { usePegaProdutos } from '@/hooks/usePegaProdutos'
import { useParams } from 'next/navigation'

function CarregandoListaProdutos() {
  const repeticoes = Array.from({ length: 12 })

  return (
    <div className="largura-maxima">
      <Skeleton className="h-7 w-48" />
      <div className="my-4 grid grid-cols-2 gap-4 mob:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 lg:gap-y-16">
        {repeticoes.map((_, index) => (
          <Skeleton key={index} className="h-44 w-full" />
        ))}
      </div>
    </div>
  )
}

export default function Produtos() {
  const { produtos } = useParams<{ produtos: string }>()

  const { data, isLoading } = usePegaProdutos<TProduto[]>(produtos)

  if (isLoading) {
    return <CarregandoListaProdutos />
  }

  return (
    <main className="largura-maxima">
      <h1 className="text-[1.375rem] font-bold text-gray-800 lg:text-[2rem]">
        Todos os produtos
      </h1>
      <section className="my-4 grid grid-cols-2 gap-4 mob:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 lg:gap-y-16">
        {data?.map((produto) => <Produto key={produto.id} produto={produto} />)}
      </section>
    </main>
  )
}
