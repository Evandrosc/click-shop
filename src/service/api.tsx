import { CategoriaProdutos } from '../@types/CategoriaProdutos'

const BASE_URL = 'http://10.0.0.181:3001'

export async function buscaProdutos(): Promise<CategoriaProdutos[]> {
  const resposta = await fetch(`${BASE_URL}/categorias?_embed=produtos`)

  return resposta.json()
}
