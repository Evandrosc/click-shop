export default function Login() {
  return (
    <div className="bg-gray-100 pb-[4.75rem] pt-24">
      <section className="mx-auto max-w-[275px] lg:max-w-[423px]">
        <h1 className="mb-4 text-center font-bold text-gray-800 lg:text-lg">
          Iniciar Sessão
        </h1>
        <form action="" className="flex w-full flex-col items-center gap-4">
          <input
            type="email"
            name="email"
            autoFocus
            placeholder="Escreva seu email"
            className="w-full bg-white px-3 leading-10 outline-none placeholder:text-gray-400 lg:leading-[3.875rem]"
          />
          <input
            type="password"
            name="email"
            placeholder="Escreva sua senha"
            className="w-full bg-white px-3 leading-10 outline-none placeholder:text-gray-400 lg:leading-[3.875rem]"
          />
          <button
            type="submit"
            className="w-[6.8125rem] bg-blue-600 font-semibold leading-10 text-white lg:w-full lg:text-lg lg:leading-[3.875rem]"
          >
            Entrar
          </button>
        </form>
      </section>
    </div>
  )
}
