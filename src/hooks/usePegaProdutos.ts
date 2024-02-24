import { QueryFunction, UseQueryResult, useQuery } from '@tanstack/react-query'

import { pegaCategoriasComProdutos } from '@/firebase/firestore/utils/pegaCategoriasComProdtuos'
import { pegaListaProdutos } from '@/firebase/firestore/utils/pegaListaProdutos'
import { pegaProduto } from '@/firebase/firestore/utils/pegaProduto'
type UsePegaProdutosProps = {
  categoriaComProdutos?: boolean
  produtos?: string
  id?: number
}

function buscaFuncao<T>({
  categoriaComProdutos,
  produtos,
  id,
}: UsePegaProdutosProps): QueryFunction<T> {
  if (categoriaComProdutos) {
    return () => pegaCategoriasComProdutos() as Promise<T>
  } else if (produtos) {
    return () => pegaListaProdutos(produtos) as Promise<T>
  } else if (id) {
    return () => pegaProduto(id) as Promise<T>
  } else {
    throw new Error('Parâmetros inválidos para usePegaProdutos')
  }
}

export function usePegaProdutos<T>(
  obj: UsePegaProdutosProps,
): UseQueryResult<T, Error> {
  const funcao = buscaFuncao<T>(obj)

  return useQuery({
    queryKey: ['categoriaComProdutos', obj.produtos, obj.id],
    queryFn: funcao,
  })
}
