'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Botao } from '@/components/Botao'

function removeEspacos(value: string) {
  return value.trim() === value
}
const mensagemErroEspacos = 'Remova espaços em branco no início ou final.'

const formFaleConoscoSchema = z.object({
  nome: z.string().min(3, 'Pelo menos 3 caracteres').refine(removeEspacos, {
    message: mensagemErroEspacos,
  }),
  mensagem: z.string().min(6, 'Pelo menos 6 caracteres').refine(removeEspacos, {
    message: mensagemErroEspacos,
  }),
})

type TFormFaleConoscoSchema = z.infer<typeof formFaleConoscoSchema>

export function FormFaleConosco() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormFaleConoscoSchema>({
    resolver: zodResolver(formFaleConoscoSchema),
    defaultValues: {
      nome: '',
      mensagem: '',
    },
    mode: 'all',
  })

  function enviaForm(e: TFormFaleConoscoSchema) {
    console.log(e)
  }

  return (
    <form onSubmit={handleSubmit(enviaForm)}>
      <div className="mb-4">
        <div className="relative">
          <input
            {...register('nome')}
            type="text"
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
        {errors.nome && (
          <small className="font-semibold text-red-600">
            {errors.nome.message}
          </small>
        )}
      </div>
      <div className="mb-2">
        <textarea
          {...register('mensagem')}
          rows={4}
          className="block w-full resize-none rounded-lg border-b-2 border-gray-300 p-2.5 text-sm text-gray-800 outline-none duration-300 placeholder:text-gray-400 focus:border-blue-600 focus:ring-blue-600"
          placeholder="Escreva sua mensagem"
        />
        {errors.mensagem && (
          <small className="font-semibold text-red-600">
            {errors.mensagem.message}
          </small>
        )}
      </div>

      <Botao type="submit" className="mb-4 px-4 py-3 text-sm md:mb-0">
        Enviar mensagem
      </Botao>
    </form>
  )
}
