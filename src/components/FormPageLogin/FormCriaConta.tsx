'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { criaUsuario } from '@/firebase/auth/utils/criaUsuario'
import { useRouter } from 'next/navigation'
import { adicionaUsuarioAoFirestore } from '@/firebase/firestore/utils/adicionaUsuarioAoFirestore'
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { BotaoPaginaLogin } from '../BotaoPaginaLogin'

const regexNaoApenasEspacos = /\S/

const formLoginSchema = z
  .object({
    nomeCompleto: z
      .string()
      .min(10, 'Pelo menos 10 caracteres')
      .max(50, 'Máximo 50 caracteres')
      .trim()
      .refine((nome) => regexNaoApenasEspacos.test(nome), {
        message: 'Não pode apenas espaços',
      }),
    email: z.string().email('Insira e-mail válido'),
    senha: z
      .string()
      .min(8, 'Pelo menos 8 caracteres')
      .max(50, 'Máximo 50 caracteres'),
    confirmarSenha: z.string(),
  })
  .refine((data) => data.confirmarSenha === data.senha, {
    path: ['confirmarSenha'],
    message: 'As senhas não coincidem',
  })

type TFormLoginSchema = z.infer<typeof formLoginSchema>

export function FormCriaConta() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm<TFormLoginSchema>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      nomeCompleto: '',
      email: '',
      senha: '',
      confirmarSenha: '',
    },
    mode: 'all',
  })

  const rota = useRouter()

  async function enviaUsuario({
    email,
    senha,
    nomeCompleto,
  }: TFormLoginSchema) {
    try {
      const usuario = await criaUsuario(email, senha)
      if (usuario?.email) {
        adicionaUsuarioAoFirestore({
          id: usuario.uid,
          nomeCompleto,
          email: usuario.email,
        })

        rota.push('/')
      }
    } catch (error) {
      const erro = error as AuthError

      if (erro.code === AuthErrorCodes.EMAIL_EXISTS) {
        setError('email', { message: 'email já em uso' })
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(enviaUsuario)}
      className="flex w-full flex-col items-center gap-4"
    >
      <div className="relative w-full">
        <input
          {...register('nomeCompleto')}
          type="text"
          id="nomeCompleto"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-white px-2.5 pb-2.5 pt-5 text-gray-800 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
        />
        <label
          htmlFor="nomeCompleto"
          className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform font-medium text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        >
          Nome completo
        </label>
        {errors.nomeCompleto && (
          <small className="font-semibold text-red-600">
            {errors.nomeCompleto.message}
          </small>
        )}
      </div>
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
      <div className="relative w-full">
        <input
          {...register('confirmarSenha')}
          type="password"
          id="confirmarSenha"
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-white px-2.5 pb-2.5 pt-5 text-gray-800 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
        />
        <label
          htmlFor="confirmarSenha"
          className="absolute start-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform font-medium text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        >
          Confirmar senha
        </label>
        {errors.confirmarSenha && (
          <small className="font-semibold text-red-600">
            {errors.confirmarSenha.message}
          </small>
        )}
      </div>
      <BotaoPaginaLogin isDirty={isDirty} isValid={isValid}>
        Criar conta
      </BotaoPaginaLogin>
    </form>
  )
}
