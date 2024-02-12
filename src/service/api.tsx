import { CategoriaProdutos } from '../@types/CategoriaProdutos'

const LIMITE_PRODUTOS_POR_CATEGORIA = 6
const BASE_URL = 'http://10.0.0.181:3001'
const CATEGORIAS_ENDPOINT = `${BASE_URL}/categorias`
const PRODUTOS_ENDPOINT = `${BASE_URL}/produtos`

export async function buscaCategoriaComProdutos(): Promise<
  CategoriaProdutos[]
> {
  const categoriasResposta = await fetch(CATEGORIAS_ENDPOINT)
  const categorias = await categoriasResposta.json()
  const categoriasComProdutos = categorias

  for (let i = 0; i < categorias.length; i++) {
    const produtosResponse = await fetch(
      `${PRODUTOS_ENDPOINT}?categoriaId=${categorias[i].id}&_limit=${LIMITE_PRODUTOS_POR_CATEGORIA}`,
    )
    const produtos = await produtosResponse.json()

    categoriasComProdutos[i].produtos = produtos
  }

  return categoriasComProdutos
}
