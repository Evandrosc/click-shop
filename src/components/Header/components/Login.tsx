import Link from 'next/link'

export function Login() {
  return (
    <Link
      href="/"
      className="flex w-[40%] max-w-[133px] items-center justify-center border-2 border-blue-600 text-sm font-semibold leading-10 text-blue-600 duration-300 hover:bg-blue-600 hover:text-white lg:border lg:text-base lg:font-normal lg:leading-10"
    >
      Login
    </Link>
  )
}
