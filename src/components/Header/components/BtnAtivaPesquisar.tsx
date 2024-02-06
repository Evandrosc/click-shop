import { BuscaSvg } from '../../../../public/svg/BuscaSvg'
import { LimpaSvg } from '../../../../public/svg/LimpaSvg'

type BotaoProps = {
  pesquisarAtivo: boolean
  onPesquisar: React.Dispatch<React.SetStateAction<boolean>>
}

export function BtnAtivaPesquisar({ pesquisarAtivo, onPesquisar }: BotaoProps) {
  function manipularPesquisar() {
    onPesquisar((pesquisar) => !pesquisar)
  }

  return (
    <button
      onClick={manipularPesquisar}
      type="button"
      className="flex h-6 w-6 items-center justify-center sm:hidden"
    >
      {pesquisarAtivo ? (
        <LimpaSvg className="text-gray-800" />
      ) : (
        <BuscaSvg className="fill-gray-800" />
      )}
    </button>
  )
}
