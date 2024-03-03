import { ButtonHTMLAttributes } from 'react'
import { Botao } from './Botao'

type BotaoProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isDirty: boolean
  isValid: boolean
}

export function BotaoPaginaLogin({ isDirty, isValid, children }: BotaoProps) {
  return (
    <Botao
      type="submit"
      disabled={!isDirty || !isValid}
      className="botao-azul w-[6.8125rem] leading-10 lg:w-full lg:text-lg lg:leading-[3.475rem]"
    >
      {children}
    </Botao>
  )
}
