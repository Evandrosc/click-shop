'use client'

import { Usuario } from '@/contexts/ProvedorUsuarioLogado'
import { useContext } from 'react'

export function useUsuarioLogado() {
  return useContext(Usuario)
}
