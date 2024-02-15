import { Carrinho } from './Carrinho'
import { Login } from './Login'

export function ContainerLoginCarrinho() {
  return (
    <div className="flex items-center gap-8 sm:order-3">
      <Login />
      <Carrinho />
    </div>
  )
}
