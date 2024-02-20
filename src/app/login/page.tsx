import { FormLogin } from '@/components/FormLogin'

export default function Login() {
  return (
    <div className="bg-gray-100 pb-[4.75rem] pt-24">
      <section className="mx-auto max-w-[275px] lg:max-w-[423px]">
        <h1 className="mb-4 text-center font-bold text-gray-800 lg:text-lg">
          Iniciar Sessão
        </h1>
        <FormLogin />
      </section>
    </div>
  )
}
