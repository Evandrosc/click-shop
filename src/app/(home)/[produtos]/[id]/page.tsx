'use client'

import { TProduto } from '@/@types/TProduto'
import { usePegaProdutos } from '@/hooks/usePegaProdutos'
import { useParams } from 'next/navigation'

export default function Produto() {
  const { id } = useParams<{ id: string }>()

  const { data: produto } = usePegaProdutos<TProduto[]>({ id })
  return (
    <main className="largura-maxima">
      <section>
        {produto?.map((produto) => (
          <div key={produto.id}>
            <div>{produto.nome}</div>
            <div>{produto.preco}</div>
            <div>{produto.descricao}</div>
          </div>
        ))}
      </section>
    </main>
  )
}
