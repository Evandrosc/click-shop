import { useEffect, useRef } from 'react'
import { BuscaSvg } from '../../../../public/svg/BuscaSvg'

type FormProps = {
  pesquisarAtivo: boolean
}

export function Form({ pesquisarAtivo }: FormProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (pesquisarAtivo) {
      inputRef.current?.focus()
    }
  }, [pesquisarAtivo])

  return (
    <form
      className={`${pesquisarAtivo ? 'flex' : 'hidden'} absolute left-1/2 top-14 h-10 w-[93%] -translate-x-1/2 rounded-[20px] bg-gray-100 px-4 sm:visible sm:static sm:flex sm:w-[272px] sm:translate-x-0 lg:w-[393px]`}
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
