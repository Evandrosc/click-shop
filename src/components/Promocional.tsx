import Link from 'next/link'

export function Promocional() {
  return (
    <section className="relative h-48 w-full bg-promocional-img-pequeno bg-cover bg-center sm:h-[22rem] sm:bg-promocional-img-medio lg:bg-promocional-img">
      <div className="largura-maxima flex h-full items-end pb-4 md:pb-8">
        <div className=" flex flex-col gap-2 md:bottom-8 md:gap-4">
          <h1 className="z-20 text-[1.375rem] font-bold text-white md:text-[3.25rem]">
            Dezembro Promocional
          </h1>
          <p className="z-20 text-sm font-semibold text-white md:text-[1.375rem] md:font-bold">
            Produtos selecionados com 33% de desconto
          </p>
          <Link
            href="/"
            className="botao-azul z-20 flex w-[7.4375rem] items-center justify-center text-sm leading-10 lg:w-[8.125rem] lg:text-base lg:font-normal lg:leading-[3.1875rem]"
          >
            Ver Consoles
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-black opacity-20" />
    </section>
  )
}
