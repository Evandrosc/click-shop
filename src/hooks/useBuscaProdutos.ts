import { useQuery } from '@tanstack/react-query'
import { buscaProdutos } from '@/service/api'

export function useBuscaProdutos() {
  return useQuery({
    queryKey: ['produtos'],
    queryFn: buscaProdutos,
  })
}
