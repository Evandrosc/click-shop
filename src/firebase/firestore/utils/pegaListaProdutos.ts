import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { db } from '../config'
import { TProduto } from '@/@types/TProduto'

export async function pegaListaProdutos(categoria: string) {
  const produtosSnapshot = await getDocs(
    query(
      collection(db, 'produtos'),
      where('categoria', '==', categoria),
      limit(6),
    ),
  )
  return produtosSnapshot.docs.map((doc) => doc.data() as TProduto)
}
