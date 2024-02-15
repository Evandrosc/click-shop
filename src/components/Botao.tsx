import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type BotaoProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Botao({ className, children, ...props }: BotaoProps) {
  return (
    <button {...props} className={cn('botao-azul', className)}>
      {children}
    </button>
  )
}
