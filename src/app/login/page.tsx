'use client'

import { useState } from 'react'
import { FormLogin } from '@/components/FormPageLogin/FormLogin'
import { FormCriaConta } from '@/components/FormPageLogin/FormCriaConta'

export default function Login() {
  const [loginOuCriaConta, setLoginOuCriaConta] = useState<
    'login' | 'criaConta'
  >('login')

  return (
    <main className="bg-gray-100 pb-[4.75rem] pt-24">
      <section className="mx-auto max-w-[275px] lg:max-w-[423px]">
        <nav className="flex justify-around">
          <button
            onClick={() => setLoginOuCriaConta('login')}
            type="button"
            className={`${loginOuCriaConta === 'login' ? 'border-blue-600' : 'border-transparent'} mb-6 w-1/2 border-b-2 text-center font-bold text-gray-800 duration-300 lg:text-lg`}
          >
            Iniciar Sessão
          </button>
          <button
            onClick={() => setLoginOuCriaConta('criaConta')}
            type="button"
            className={`${loginOuCriaConta === 'criaConta' ? 'border-blue-600' : 'border-transparent'} mb-6 w-1/2 border-b-2 text-center font-bold text-gray-800 duration-300 lg:text-lg`}
          >
            Criar conta
          </button>
        </nav>
        {loginOuCriaConta === 'login' && <FormLogin />}
        {loginOuCriaConta === 'criaConta' && <FormCriaConta />}
      </section>
    </main>
  )
}
