'use client'

import Link from 'next/link'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/auth/configAuth'
import { useUsuarioLogado } from '@/hooks/useUsuarioLogado'

export default function Login() {
  const { usuarioLogado } = useUsuarioLogado()

  async function desconectaUsuario() {
    await signOut(auth)
  }

  return (
    <>
      {usuarioLogado && (
        <button
          type="button"
          onClick={desconectaUsuario}
          className="flex w-20 items-center justify-center border-2 border-blue-600 text-base font-semibold leading-9 text-blue-600 duration-300 hover:bg-blue-600 hover:text-white lg:leading-10"
        >
          Sair
        </button>
      )}
      {!usuarioLogado && (
        <Link
          href="/login"
          className="flex w-20 items-center justify-center border-2 border-blue-600 text-sm font-semibold leading-9 text-blue-600 duration-300 hover:bg-blue-600 hover:text-white lg:text-base lg:leading-10"
        >
          Login
        </Link>
      )}
    </>
  )
}
