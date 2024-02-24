import {
  collection,
  getDocs,
  limit,
  query,
  where,
  QueryDocumentSnapshot,
  DocumentData,
  orderBy,
} from 'firebase/firestore'
import { db } from '../configFirestore'
import { TCategoriaProdutos } from '@/@types/TCategoriaProdutos'
import { TProduto } from '@/@types/TProduto'

async function buscaCategoriasSnapshot() {
  const categoriasSnapshot = await getDocs(
    query(collection(db, 'categorias'), orderBy('id', 'asc'), limit(3)),
  )

  return categoriasSnapshot.docs
}

async function buscaProdutosSnapshot(categoriaId: number) {
  const produtosSnapshot = await getDocs(
    query(
      collection(db, 'produtos'),
      where('categoriaId', '==', categoriaId),
      limit(6),
    ),
  )
  return produtosSnapshot.docs
}

function mapProdutoDocsToData(docs: QueryDocumentSnapshot<DocumentData>[]) {
  return docs.map((doc) => doc.data() as TProduto)
}

export async function pegaCategoriasComProdutos() {
  const categoriasComProdutos: TCategoriaProdutos[] = []

  const categoriasDocs = await buscaCategoriasSnapshot()

  for (const categoriaDoc of categoriasDocs) {
    const categoria = categoriaDoc.data() as TCategoriaProdutos
    const produtosDocs = await buscaProdutosSnapshot(categoria.id)
    const produtosDeCadaCategoria = mapProdutoDocsToData(produtosDocs)

    categoria.produtos = produtosDeCadaCategoria
    categoriasComProdutos.push(categoria)
  }

  return categoriasComProdutos
}
