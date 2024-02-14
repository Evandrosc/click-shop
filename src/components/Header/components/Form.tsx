'use client'

import { FormEvent, useRef } from 'react'
import { BuscaSvg } from '../../../../public/svg/BuscaSvg'

export function Form() {
  const inputRef = useRef<HTMLInputElement>(null)

  function enviaFormulario(e: FormEvent) {
    e.preventDefault()
    console.log(inputRef?.current?.value)
  }

  return (
    <form
      onSubmit={enviaFormulario}
      className="mt-3 flex h-10 w-full rounded-[20px] bg-gray-100 px-4 sm:order-2 sm:mt-0 sm:w-[17rem] lg:w-[24.5625rem]"
    >
      <input
        ref={inputRef}
        type="search"
        name="O que deseja encontrar?"
        placeholder="O que deseja encontrar?"
        className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400 lg:text-base"
      />
      <button type="submit" className="pl-4">
        <BuscaSvg className="fill-gray-400" />
      </button>
    </form>
  )
}
