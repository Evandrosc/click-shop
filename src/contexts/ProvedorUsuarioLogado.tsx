'use client'

import { ReactNode, createContext, useState } from 'react'
import { User, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/auth/configAuth'

type Usuario = {
  inicializador: boolean
  usuarioLogado: User | null
}

export const Usuario = createContext<Usuario>({
  inicializador: true,
  usuarioLogado: null,
})

export function ProvedorUsuarioLogado({ children }: { children: ReactNode }) {
  const [inicializador, setInicializador] = useState(true)
  const [usuarioLogado, setUsuarioLogado] = useState<User | null>(null)

  onAuthStateChanged(auth, (user) => {
    if (!user && usuarioLogado) {
      setUsuarioLogado(null)
      setInicializador(false)
      return
    }

    setUsuarioLogado(user)
    setInicializador(false)
  })

  return (
    <Usuario.Provider value={{ inicializador, usuarioLogado }}>
      {children}
    </Usuario.Provider>
  )
}
