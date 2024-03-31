'use client'

import { auth } from '@/firebase/auth/configAuth'
import { User, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

export function useUsuarioLogado() {
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

  return { inicializador, usuarioLogado }
}
