'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { usePegaProdutos } from '@/hooks/usePegaProdutos'
import { useWindowSize } from '@/hooks/useWindowSize'
import { formataMoedaBRL } from '@/lib/formataMoedaBRL'
import { TProduto } from '@/@types/TProduto'

export default function Produto() {
  const { id: idParams } = useParams<{ id: string }>()
  const id = Number(idParams)

  const { width } = useWindowSize()

  const { data: produto, isLoading } = usePegaProdutos<TProduto>({ id })

  if (isLoading) {
    return <div>carregando</div>
  }

  if (!produto) return

  const Titulo = (
    <h1 className="font-medium text-gray-800 sm:text-lg sm:font-bold">
      {produto.nome}
    </h1>
  )

  return (
    <main className="largura-maxima my-4">
      {width < 640 && Titulo}
      <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="my-4 flex justify-center sm:my-0 sm:w-1/2">
          <Image
            src={produto.imagemUrl}
            width={176}
            height={174}
            alt=""
            className="object-contain sm:h-[38vw] sm:max-h-[300px] sm:w-[38vw] sm:max-w-[300px]"
          />
        </div>
        <div className="sm:flex sm:max-w-[300px] sm:flex-col sm:gap-4">
          {width >= 640 && Titulo}
          <span className="mb-4 inline-block text-3xl font-semibold text-gray-800 sm:mb-0 sm:font-normal">
            {formataMoedaBRL(produto.preco)}
          </span>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="rounded-md bg-blue-600 font-semibold leading-[3rem] text-white duration-300 hover:bg-blue-700"
            >
              Comprar
            </button>
            <button
              type="button"
              className="rounded-md bg-blue-100 font-semibold leading-[3rem] text-blue-600 duration-300 hover:bg-blue-200"
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </section>
      <p className="my-8 font-medium leading-8 text-gray-800">
        {produto.descricao}
      </p>
    </main>
  )
}
