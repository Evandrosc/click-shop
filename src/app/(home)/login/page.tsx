import { Botao } from '@/components/Botao'
import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="w-full bg-white px-3 leading-10 outline-none placeholder:text-gray-400 lg:leading-[3.875rem]"
    />
  )
}

export default function Login() {
  return (
    <div className="bg-gray-100 pb-[4.75rem] pt-24">
      <section className="mx-auto max-w-[275px] lg:max-w-[423px]">
        <h1 className="mb-4 text-center font-bold text-gray-800 lg:text-lg">
          Iniciar Sessão
        </h1>
        <form className="flex w-full flex-col items-center gap-4">
          <Input
            type="email"
            name="email"
            placeholder="Escreva seu email"
            autoFocus
          />
          <Input type="password" name="senha" placeholder="Escreva sua senha" />
          <Botao
            type="submit"
            className="w-[6.8125rem] leading-10 lg:w-full lg:text-lg lg:leading-[3.875rem]"
          >
            Entrar
          </Botao>
        </form>
      </section>
    </div>
  )
}
