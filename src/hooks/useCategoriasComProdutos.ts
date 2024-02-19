import { useQuery } from '@tanstack/react-query'
import { pegaCategoriaComProdutos } from '@/service/api'

export function useCategoriasComProdutos() {
  return useQuery({
    queryKey: ['categoriaComProdutos'],
    queryFn: pegaCategoriaComProdutos,
  })
}
