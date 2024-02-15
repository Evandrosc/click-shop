'use client'

import { useRef } from 'react'
import { Botao } from '@/components/Botao'

export function Form() {
  const inputNomeRef = useRef<HTMLInputElement>(null)
  const textareaMensagemRef = useRef<HTMLTextAreaElement>(null)

  function enviaForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log({
      nome: inputNomeRef?.current?.value,
      mensagem: textareaMensagemRef?.current?.value,
    })
  }

  return (
    <form onSubmit={enviaForm}>
      <div className="relative mb-4">
        <input
          ref={inputNomeRef}
          type="text"
          id="nome"
          name="nome"
          minLength={3}
          className="peer block w-full rounded-md border-b-2 border-gray-300 px-2.5 pb-2.5 pt-5 text-sm text-gray-800 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
        />
        <label
          htmlFor="nome"
          className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        >
          Nome
        </label>
      </div>
      <textarea
        ref={textareaMensagemRef}
        rows={4}
        minLength={5}
        className="mb-2 block w-full resize-none rounded-lg border-b-2 border-gray-300 p-2.5 text-sm text-gray-800 outline-none duration-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-blue-600"
        placeholder="Escreva sua mensagem"
      ></textarea>

      <Botao type="submit" className="mb-4 px-4 py-3 text-sm md:mb-0">
        Enviar mensagem
      </Botao>
    </form>
  )
}
