import { Camera, Image as ImagePhosphor, FilmSlate } from 'phosphor-react'

export interface cardGroupProps {
  heightTriggerForFirstCard: string
  heightTriggerForSecondCard: string
  heightTriggerForThirdCard: string
}

export function CardGroup({
  heightTriggerForFirstCard,
  heightTriggerForSecondCard,
  heightTriggerForThirdCard,
}: cardGroupProps) {
  // const [className, setClassName] = useState('hidden')

  return (
    <>
      <div
        className={`${heightTriggerForFirstCard} w-[75vw] mb-16 flex flex-col items-center rounded-2xl bg-zinc-300 p-5 shadow-zinc-600 shadow-xl lg:mb-0 lg:w-[25vw]`}
      >
        <Camera size={80} className="text-[#202020]" />
        <h3 className="text-[#CB2222] font-bold text-xl flex flex-col items-center">
          Invista em<span className="text-2xl">Qualidade</span>
        </h3>
        <p className="text-[#202020] text-base text-center mt-5">
          Invista em qualidade. Invista na Vinze Filmes, empresa que traz
          conceitos inovadores para toda a produção de conteúdo. Somos
          especialistas na produção de roteiro, ilustração, animação, edição de
          vídeos e fotografia.
        </p>
      </div>
      <div
        className={`${heightTriggerForSecondCard} w-[75vw] mb-16 flex flex-col items-center rounded-2xl bg-zinc-300 p-5 shadow-zinc-600 shadow-xl lg:mb-0 lg:w-[25vw]`}
      >
        <ImagePhosphor size={80} className="text-[#202020]" />
        <h3 className="text-[#CB2222] font-bold text-xl flex flex-col items-center">
          Renove o seu<span className="text-2xl">Visual</span>
        </h3>
        <p className="text-[#202020] text-base text-center mt-5">
          Renove seu visual com sofisticação e elegância! Repagina suas redes
          sociais de forma criativa e inovadora. Faça sua empresa se destacar no
          mercado.
        </p>
      </div>
      <div
        className={`${heightTriggerForThirdCard} w-[75vw] mb-16 flex flex-col items-center rounded-2xl bg-zinc-300 p-5 shadow-zinc-600 shadow-xl lg:mb-0 lg:w-[25vw]`}
      >
        <FilmSlate size={80} className="text-[#202020]" />
        <h3 className="text-[#CB2222] font-bold text-xl flex flex-col items-center">
          Crie a sua<span className="text-2xl">Produção</span>
        </h3>
        <p className="text-[#202020] text-base text-center mt-5">
          Não deixe para depois! O momento é agora! Chegou o momento de investir
          na identidade visual de sua empresa. Invista na sua imagem e atraia
          mais clientes e leads para o seu negócio. Vamos produzir o melhor
          conteúdo, completamente personalizado e adaptado a sua empresa.
        </p>
      </div>
    </>
  )
}
