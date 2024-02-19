import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { pegaCategoriaComProdutos, pegaListaProdutos } from '@/service/api'

export function usePegaProdutos<T>(
  produtos?: string,
): UseQueryResult<T, Error> {
  const funcao = produtos
    ? () => pegaListaProdutos(produtos)
    : pegaCategoriaComProdutos

  return useQuery({
    queryKey: ['categoriaComProdutos', produtos],
    queryFn: funcao,
  })
}
