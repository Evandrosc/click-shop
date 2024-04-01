'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { loginUsuario } from '@/firebase/auth/utils/loginUsuario'
import { BotaoPaginaLogin } from '../BotaoPaginaLogin'

const formLoginSchema = z.object({
  email: z.string().email('Insira e-mail válido'),
  senha: z
    .string()
    .min(8, 'Pelo menos 8 caracteres')
    .max(50, 'Máximo 50 caracteres'),
})

type TFormLoginSchema = z.infer<typeof formLoginSchema>

export function FormLogin() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm<TFormLoginSchema>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: '',
      senha: '',
    },
    mode: 'all',
  })

  const rota = useRouter()

  async function enviaForm({ email, senha }: TFormLoginSchema) {
    try {
      await loginUsuario(email, senha)
      rota.push('/')
    } catch (_) {
      setError('root', { type: 'login', message: 'email ou senha inválidos' })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(enviaForm)}
      className="flex w-full flex-col items-center gap-4"
    >
      <div className="relative w-full">
        <input
          {...register('email')}
          type="text"
          id="email"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-white px-2.5 pb-2.5 pt-5 text-gray-800 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform font-medium text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        >
          Email
        </label>
        {errors.email && (
          <small className="font-semibold text-red-600">
            {errors.email.message}
          </small>
        )}
      </div>
      <div className="relative w-full">
        <input
          {...register('senha')}
          type="password"
          id="senha"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-white px-2.5 pb-2.5 pt-5 text-gray-800 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
        />
        <label
          htmlFor="senha"
          className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform font-medium text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        >
          Senha
        </label>
        {errors.senha && (
          <small className="font-semibold text-red-600">
            {errors.senha.message}
          </small>
        )}
      </div>
      <BotaoPaginaLogin isDirty={isDirty} isValid={isValid}>
        Entrar
      </BotaoPaginaLogin>
      {errors.root?.type === 'login' && (
        <small className="font-semibold text-red-600">
          {errors.root.message}
        </small>
      )}
    </form>
  )
}
