import { addDoc, collection } from 'firebase/firestore'
import { db } from '../configFirestore'

type AdicionaUsuarioAoFirestoreProps = {
  id: string
  nomeCompleto: string
  email: string
}

export async function adicionaUsuarioAoFirestore(
  object: AdicionaUsuarioAoFirestoreProps,
) {
  try {
    await addDoc(collection(db, 'usuarios'), object)
  } catch (erro) {
    console.error(erro)
  }
}
