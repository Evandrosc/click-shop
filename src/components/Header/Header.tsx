'use client'

import { useState } from 'react'
import { Form } from './components/Form'
import { Logo } from './components/Logo'
import { Login } from './components/Login'
import { BtnAtivaPesquisar } from './components/BtnAtivaPesquisar'

export function Header() {
  const [pesquisarAtivo, setPesquisarAtivo] = useState(false)

  return (
    <header className="relative my-4 flex items-center justify-between px-mobile sm:px-tablet lg:my-8 lg:px-desktop">
      <div className="flex items-center gap-8">
        <Logo />
        <Form pesquisarAtivo={pesquisarAtivo} />
      </div>

      <Login />

      <BtnAtivaPesquisar
        pesquisarAtivo={pesquisarAtivo}
        onPesquisar={setPesquisarAtivo}
      />
    </header>
  )
}
