import Link from 'next/link'
import { LogoSvg } from '../../../../public/svg/LogoSvg'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <LogoSvg className="h-[1.125rem] w-6 fill-blue-600 lg:h-6 lg:w-7" />
      <span className="text-lg font-bold text-blue-600 lg:text-xl">
        Alura<span className="text-gray-800">Geek</span>
      </span>
    </Link>
  )
}
