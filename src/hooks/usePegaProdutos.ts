import { UseQueryResult, useQuery } from '@tanstack/react-query'
import {
  pegaCategoriaComProdutos,
  pegaListaProdutos,
  pegaProduto,
} from '@/service/api'

type UsePegaProdutosProps = {
  categoriaProdutos?: 'categoriaProdutos'
  produtos?: string
  id?: string
}

export function usePegaProdutos<T>({
  categoriaProdutos,
  produtos,
  id,
}: UsePegaProdutosProps): UseQueryResult<T, Error> {
  let funcao

  // Determina qual função deve ser usada com base nos parâmetros
  if (categoriaProdutos === 'categoriaProdutos') {
    funcao = () => pegaCategoriaComProdutos() // Substitua pela função real
  } else if (produtos) {
    funcao = () => pegaListaProdutos(produtos) // Substitua pela função real
  } else if (id) {
    funcao = () => pegaProduto(id) // Substitua pela função real
  } else {
    throw new Error('Parâmetros inválidos para usePegaProdutos')
  }

  return useQuery({
    queryKey: ['categoriaComProdutos', produtos, id],
    queryFn: funcao,
  })
}
