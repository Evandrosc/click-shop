'use client'

import { useBuscaProdutos } from '@/hooks/useBuscaProdutos'
import Image from 'next/image'
import Link from 'next/link'
import { SetaDireita } from '../../../public/svg/SetaDireita'
import { useWindowSize } from '@/hooks/useWindowSize'
import { Skeleton } from '../ui/skeleton'

function formatarMoedaBRL(numero: number): string {
  const formatadorDeMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formatadorDeMoeda.format(numero)
}

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
  const { data, isLoading } = useBuscaProdutos()
  const { width } = useWindowSize()

  if (isLoading) {
    return <CarregandoProdutos />
  }

  return (
    <div className="largura-maxima my-4 flex flex-col gap-8 md:my-8 lg:my-16">
      {data?.map((categoria) => (
        <section key={categoria.id}>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[1.375rem] font-bold text-gray-800">
              {categoria.nome}
            </h2>
            <Link
              href="/"
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
                <div key={produto.id} className="flex flex-col gap-1">
                  <Image
                    src={produto.imagemUrl}
                    width={176}
                    height={174}
                    quality={100}
                    loading="lazy"
                    alt=""
                    className=""
                  />
                  <h3 className="text-sm font-medium text-gray-800">
                    {produto.nome}
                  </h3>
                  <span className="font-bold text-gray-800">
                    {formatarMoedaBRL(produto.preco)}
                  </span>
                  <Link
                    href="/"
                    className="text-sm font-bold text-blue-600 hover:underline"
                  >
                    Ver produto
                  </Link>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}
