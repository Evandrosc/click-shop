import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../configAuth'

export function loginUsuario(email: string, senha: string) {
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      console.log(userCredential.user)
    })
    .catch((erro) => {
      console.error(erro)
    })
}
