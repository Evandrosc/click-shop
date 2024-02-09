import { useQuery } from '@tanstack/react-query'
import { buscaProdutos } from '@/service/api'

export function useBuscaProdutos() {
  const { data } = useQuery({
    queryKey: ['produtos'],
    queryFn: buscaProdutos,
  })
  return data?.filter((props) => props.produtos.length)
}
