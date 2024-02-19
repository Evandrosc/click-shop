'use client'

import { usePegaProdutos } from '@/hooks/usePegaProdutos'
import Link from 'next/link'
import { SetaDireita } from '../../../public/svg/SetaDireita'
import { useWindowSize } from '@/hooks/useWindowSize'
import { Skeleton } from '../ui/skeleton'
import { Produto } from '../Produto'
import { TCategoriaProdutos } from '@/@types/TCategoriaProdutos'

function quantidadesProdutos(tamanhoTela: number): number {
  if (tamanhoTela < 400) {
    return 4
  }

  if (tamanhoTela >= 400 && tamanhoTela < 640) {
    return 3
  }

  if (tamanhoTela >= 640 && tamanhoTela < 768) {
    return 4
  }

  if (tamanhoTela >= 768 && tamanhoTela < 1024) {
    return 5
  }

  return 6
}

function CarregandoProdutos() {
  const SkeletionContainer = (
    <div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-[20px] w-[100px] rounded-full" />
        <Skeleton className="h-[20px] w-[100px] rounded-full" />
      </div>
      <Skeleton className="mt-4 h-[174px] w-full" />
    </div>
  )

  return (
    <div className="largura-maxima my-6 flex flex-col gap-8 md:my-10 lg:my-[4.5rem]">
      {SkeletionContainer}
      {SkeletionContainer}
      {SkeletionContainer}
    </div>
  )
}

export function Produtos() {
  const { data: produtosPorCategoria, isLoading } =
    usePegaProdutos<TCategoriaProdutos[]>()

  const { width } = useWindowSize()

  if (isLoading) {
    return <CarregandoProdutos />
  }

  return (
    <div className="largura-maxima my-4 flex flex-col gap-8 md:my-8 lg:my-16">
      {produtosPorCategoria?.map((categoria) => (
        <section key={categoria.id}>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[1.375rem] font-bold text-gray-800">
              {categoria.nome}
            </h2>
            <Link
              href={categoria.nome.replace(' ', '')}
              className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline"
            >
              Ver tudo
              <SetaDireita />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 mob:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {categoria.produtos
              .slice(0, quantidadesProdutos(width))
              .map((produto) => (
                <Produto key={produto.id} produto={produto} />
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}
