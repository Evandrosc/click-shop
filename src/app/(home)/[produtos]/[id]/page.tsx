'use client'

import { TProduto } from '@/@types/TProduto'
import { usePegaProdutos } from '@/hooks/usePegaProdutos'
import { formataMoedaBRL } from '@/lib/formataMoedaBRL'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function Produto() {
  const { id } = useParams<{ id: string }>()

  const { data: produto, isLoading } = usePegaProdutos<TProduto[]>({ id })

  if (isLoading) {
    return <div>carregando</div>
  }
  return (
    <main>
      <section>
        {produto?.map((produto) => (
          <section key={produto.id}>
            <Image
              src={produto.imagemUrl}
              width={560}
              height={403}
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="largura-maxima my-4">
              <h1 className="text-[1.375rem] font-medium text-gray-800">
                {produto.nome}
              </h1>
              <span className="font-bold text-gray-800">
                {formataMoedaBRL(produto.preco)}
              </span>
              <p className="text-sm">{produto.descricao}</p>
            </div>
          </section>
        ))}
      </section>
    </main>
  )
}
