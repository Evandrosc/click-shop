import Link from 'next/link'
import Image from 'next/image'
import { TProduto } from '@/@types/TProduto'

function formatarMoedaBRL(numero: number): string {
  const formatadorDeMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formatadorDeMoeda.format(numero)
}

type ProdutoProps = {
  produto: TProduto
}

export function Produto({ produto }: ProdutoProps) {
  return (
    <Link href={`/${produto.categoria.replace(' ', '')}/${produto.id}`}>
      <div className="group flex flex-col gap-1">
        <Image
          src={produto.imagemUrl}
          width={176}
          height={174}
          quality={100}
          loading="lazy"
          alt=""
        />
        <h3 className="text-sm font-medium text-gray-800 lg:group-hover:text-blue-600">
          {produto.nome}
        </h3>
        <span className="font-bold text-gray-800">
          {formatarMoedaBRL(produto.preco)}
        </span>
      </div>
    </Link>
  )
}
