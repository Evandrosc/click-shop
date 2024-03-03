import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../configAuth'

export async function criaUsuario(email: string, senha: string) {
  const credencialUsuario = await createUserWithEmailAndPassword(
    auth,
    email,
    senha,
  )
  return credencialUsuario.user
}
