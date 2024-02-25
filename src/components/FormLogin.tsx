'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Botao } from '@/components/Botao'
import { loginUsuario } from '@/firebase/auth/utils/loginUsuario'

const regexSemEspacos = /^\S+$/

const formLoginSchema = z.object({
  email: z.string().email('Insira e-mail válido'),
  senha: z
    .string()
    .min(8, 'Pelo menos 8 caracteres')
    .regex(regexSemEspacos, 'Remova os espaços'),
})

type TFormLoginSchema = z.infer<typeof formLoginSchema>

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormLoginSchema>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: '',
      senha: '',
    },
    mode: 'all',
  })

  function enviaForm({ email, senha }: TFormLoginSchema) {
    loginUsuario(email, senha)
  }

  return (
    <form
      onSubmit={handleSubmit(enviaForm)}
      className="flex w-full flex-col items-center gap-4"
    >
      <div className="w-full">
        <input
          {...register('email')}
          type="email"
          placeholder="Escreva seu email"
          className="w-full bg-white px-3 leading-10 outline-none placeholder:text-gray-400 lg:leading-[3.875rem]"
        />
        {errors.email && (
          <small className="font-semibold text-red-600">
            {errors.email.message}
          </small>
        )}
      </div>
      <div className="w-full">
        <input
          {...register('senha')}
          type="password"
          placeholder="Escreva sua senha"
          className="w-full bg-white px-3 leading-10 outline-none placeholder:text-gray-400 lg:leading-[3.875rem]"
        />
        {errors.senha && (
          <small className="font-semibold text-red-600">
            {errors.senha.message}
          </small>
        )}
      </div>
      <Botao
        type="submit"
        className="w-[6.8125rem] leading-10 lg:w-full lg:text-lg lg:leading-[3.875rem]"
      >
        Entrar
      </Botao>
    </form>
  )
}
