'use client'

import { useUsuarioLogado } from '@/hooks/useUsuarioLogado'
import { Carrinho } from './Carrinho'

import Login from './Login'

export function ContainerLoginCarrinho() {
  const { inicializador } = useUsuarioLogado()

  return (
    <div className="flex items-center gap-8 sm:order-3">
      <div className="flex w-20 justify-center">
        {!inicializador && <Login />}
      </div>
      <Carrinho />
    </div>
  )
}
