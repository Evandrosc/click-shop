'use client'

import { Botao } from '@/components/Botao'

export function FormLogin() {
  return (
    <form className="flex w-full flex-col items-center gap-4">
      <input
        type="email"
        name="email"
        placeholder="Escreva seu email"
        autoFocus
        className="w-full bg-white px-3 leading-10 outline-none placeholder:text-gray-400 lg:leading-[3.875rem]"
      />
      <input
        type="password"
        name="senha"
        placeholder="Escreva sua senha"
        className="w-full bg-white px-3 leading-10 outline-none placeholder:text-gray-400 lg:leading-[3.875rem]"
      />
      <Botao
        type="submit"
        className="w-[6.8125rem] leading-10 lg:w-full lg:text-lg lg:leading-[3.875rem]"
      >
        Entrar
      </Botao>
    </form>
  )
}
