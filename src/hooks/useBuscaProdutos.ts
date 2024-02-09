import { useQuery } from '@tanstack/react-query'
import { buscaProdutos } from '@/service/api'

export function useBuscaProdutos() {
  const { data, isLoading } = useQuery({
    queryKey: ['produtos'],
    queryFn: buscaProdutos,
  })
  return {
    isLoading,
    produtosPorCategoria: data?.filter((props) => props.produtos.length),
  }
}
