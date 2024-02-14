import Link from 'next/link'
import { CarrinhoSvg } from '../../../../public/svg/CarrinhoSvg'

export function Carrinho() {
  return (
    <Link href="/" className="relative duration-300 hover:scale-105">
      <CarrinhoSvg />
      <span className="absolute -top-2 right-[40%] translate-x-1/2 rounded-full text-sm font-bold text-blue-600">
        1
      </span>
    </Link>
  )
}
