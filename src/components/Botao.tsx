import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type BotaoProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Botao({ className, children, ...props }: BotaoProps) {
  return (
    <button
      {...props}
      className={cn(
        'border border-solid border-blue-600 bg-blue-600 font-semibold text-white duration-300 hover:bg-white hover:text-blue-600',
        className,
      )}
    >
      {children}
    </button>
  )
}
