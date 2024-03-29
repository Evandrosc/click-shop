import { Logo } from '@/components/Logo'
import { FormFaleConosco } from './components/FormFaleConosco'

export function Footer() {
  return (
    <footer className="bg-blue-50 pt-4">
      <div className="largura-maxima grid grid-cols-1 place-items-center md:grid-areas-footer md:place-items-start md:gap-x-24 md:py-4 md:pb-8">
        <div className="mb-4 md:mt-2">
          <Logo variante="secundario" />
        </div>
        <section className="mb-8 flex flex-col gap-2 text-center font-medium text-gray-800 md:mb-0 md:gap-6 md:text-left">
          <div>Quem somos nós</div>
          <div>Política de privacidade</div>
          <div>Programa fidelidade</div>
          <div>Nossas lojas</div>
          <div>Quero ser franqueado</div>
          <div>Anuncie aqui</div>
        </section>
        <section className="w-full md:[grid-area:form]">
          <h2 className="mb-2 font-bold text-gray-800">Fale conosco</h2>
          <FormFaleConosco />
        </section>
      </div>
      <p className="bg-white py-8 text-center font-medium">
        Desenvolvido por Evandro 2024
      </p>
    </footer>
  )
}
