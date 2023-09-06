import { Camera, Image as ImagePhosphor, FilmSlate } from 'phosphor-react'
import { Card } from './Card'
import { Slide, Zoom } from 'react-awesome-reveal'

export function CardGroup() {
  return (
    <>
      <Slide className="flex">
        <Card
          icon={<Camera size={80} className="text-[#202020]" />}
          title="Invista em"
          titleFocus="Qualidade"
          description="Invista na Vinze Filmes, empresa que traz conceitos inovadores para
        toda a produção de conteúdo. Somos especialistas na produção de
        roteiro, ilustração, animação, edição de vídeos e fotografia."
        />
      </Slide>
      <Zoom className="flex">
        <Card
          icon={<ImagePhosphor size={80} className="text-[#202020]" />}
          title="Renove o seu"
          titleFocus="Visual"
          description="Renove seu visual com sofisticação e elegância! Repagina suas redes
        sociais de forma criativa e inovadora. Faça sua empresa se destacar no
        mercado."
        />
      </Zoom>
      <Slide direction="right" className="flex">
        <Card
          icon={<FilmSlate size={80} className="text-[#202020]" />}
          title="Crie a sua"
          titleFocus="Produção"
          description="Não deixe para depois! O momento é agora! Chegou o momento de investir
        na identidade visual de sua empresa. Invista na sua imagem e atraia
        mais clientes e leads para o seu negócio. Vamos produzir o melhor
        conteúdo, completamente personalizado e adaptado a sua empresa."
        />
      </Slide>
    </>
  )
}
