import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type HeaderProps = {
  variante: 'primario' | 'secundario'
  children: ReactNode
}

const variantes = {
  primario: 'relative flex-wrap items-center justify-between',
  secundario: 'justify-center',
}

export function Header({ variante, children }: HeaderProps) {
  return (
    <header
      className={cn('largura-maxima my-4 flex lg:my-8', variantes[variante])}
    >
      {children}
    </header>
  )
}
