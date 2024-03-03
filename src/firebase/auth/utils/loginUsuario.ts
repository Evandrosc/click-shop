'use client'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../configAuth'

export async function loginUsuario(email: string, senha: string) {
  const credencialUsuario = await signInWithEmailAndPassword(auth, email, senha)
  return credencialUsuario
}
