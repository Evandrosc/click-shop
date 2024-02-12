import { useQuery } from '@tanstack/react-query'
import { buscaCategoriaComProdutos } from '@/service/api'

export function useCategoriasComProdutos() {
  return useQuery({
    queryKey: ['categoriaComProdutos'],
    queryFn: buscaCategoriaComProdutos,
  })
}
