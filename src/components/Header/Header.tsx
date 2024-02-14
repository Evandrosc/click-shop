import { Form } from './components/Form'
import { Logo } from '@/components/Logo'
import { Login } from './components/Login'
import { Carrinho } from './components/Carrinho'

export function Header() {
  return (
    <header className="largura-maxima relative my-4 flex flex-wrap items-center justify-between lg:my-8">
      <Logo variante="primario" />
      <div className="flex items-center gap-8 sm:order-3">
        <Login />
        <Carrinho />
      </div>
      <Form />
    </header>
  )
}
