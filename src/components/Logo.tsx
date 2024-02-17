import Link from 'next/link'
import { LogoSvg } from '../../public/svg/LogoSvg'
import { cn } from '@/lib/utils'

type LogoProps = {
  variante: 'primario' | 'secundario'
}

const variantesSvg = {
  primario: 'h-[1.125rem] w-6 lg:h-6 lg:w-7',
  secundario: 'h-10 w-11',
}

const variantesTexto = {
  primario: 'text-lg lg:text-xl',
  secundario: 'text-3xl',
}

export function Logo({ variante }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-1">
      <LogoSvg className={cn('fill-blue-600', variantesSvg[variante])} />
      <span className={cn('font-bold text-blue-600', variantesTexto[variante])}>
        Click<span className="text-gray-800">Shop</span>
      </span>
    </Link>
  )
}
