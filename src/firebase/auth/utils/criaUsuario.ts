import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../configAuth'

export function criaUsuario(email: string, senha: string) {
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(user)
    })
    .catch((erro) => {
      console.error(erro)
    })
}
