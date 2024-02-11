import { Logo } from '@/components/Logo'
import { Form } from './components/Form'

export function Footer() {
  return (
    <footer className="bg-blue-50 pt-4">
      <div className="largura-maxima md:grid-areas-footer grid grid-cols-1 place-items-center md:place-items-start md:gap-x-24 md:py-4 md:pb-8">
        <div className="mb-4 md:mt-4">
          <Logo variante="secundario" />
        </div>
        <section className="mb-8 flex flex-col gap-2 text-center font-medium text-gray-800 md:mb-0 md:gap-6">
          <div>Quem somos nós</div>
          <div>Política de privacidade</div>
          <div>Programa fidelidade</div>
          <div>Nossas lojas</div>
          <div>Quero ser franqueado</div>
          <div>Anuncie aqui</div>
        </section>
        <section className="w-full md:[grid-area:form]">
          <h2 className="mb-2 font-bold text-gray-800">Fale conosco</h2>
          <Form />
        </section>
      </div>
      <p className="bg-white py-8 text-center font-medium">
        Desenvolvido por Evandro 2024
      </p>
    </footer>
  )
}
