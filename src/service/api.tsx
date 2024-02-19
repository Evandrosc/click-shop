import { CategoriaProdutos } from '../@types/CategoriaProdutos'
import { Produto } from '@/@types/Produto'

const LIMITE_PRODUTOS_POR_CATEGORIA = 6
const BASE_URL = 'http://10.0.0.181:3001'
const CATEGORIAS_ENDPOINT = `${BASE_URL}/categorias`
const PRODUTOS_ENDPOINT = `${BASE_URL}/produtos`

async function buscaDados<T>(url: string): Promise<T> {
  return (await fetch(url)).json()
}

async function retornaCategorias() {
  return await buscaDados<CategoriaProdutos[]>(CATEGORIAS_ENDPOINT)
}

async function retornaProdutosNasCategorias(categorias: CategoriaProdutos[]) {
  const categoriasComProdutos = categorias

  for (let i = 0; i < categorias.length; i++) {
    const urlLimite = `${PRODUTOS_ENDPOINT}?categoriaId=${categorias[i].id}&_limit=${LIMITE_PRODUTOS_POR_CATEGORIA}`

    const produtos = await buscaDados<Produto[]>(urlLimite)

    categoriasComProdutos[i].produtos = produtos
  }

  return categoriasComProdutos
}

export async function pegaCategoriaComProdutos(): Promise<CategoriaProdutos[]> {
  const categorias = await retornaCategorias()

  return await retornaProdutosNasCategorias(categorias)
}
