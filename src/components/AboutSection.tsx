import { Title } from './Title'
import aboutImage from '../assets/perfil.png'
import Image from 'next/image'
import { Slide } from 'react-awesome-reveal'

export function AboutSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Title title={'Sobre a Vinze'} />
      <div className="w-full mt-6 px-[15%] flex flex-col items-center justify-center overflow-hidden lg:mt-24 lg:flex-row">
        <Slide>
          <section className={`flex justify-center lg:justify-start`}>
            <Image
              src={aboutImage}
              alt="Logo Vinze Filmes"
              className="w-11/12 lg:w-4/6"
              width={600}
            />
          </section>
        </Slide>
        <Slide
          direction="right"
          className="max-w-xl text-base leading-5 lg:leading-8 lg:text-lg"
        >
          <section
            className={`max-w-xl text-base leading-5 lg:leading-8 lg:text-lg`}
          >
            <p className="text-center mt-4">
              A Vinze Filmes é uma empresa referência no mercado audiovisual de
              Ourinhos e região. Desde 2014, nós estamos dando VIDA a IDEIA de
              nossos clientes. Nossa missão é transformar ideias em um produto
              audiovisual de alta qualidade.
            </p>
            <p className="text-center mt-4">
              Abordamos diversos tipos de linguagem que irão dialogar com o
              canal de comunicação assertivo. Somos o braço forte da sua empresa
              que produz conteúdo e produtos de alta qualidade, agregando
              valores e entregando o resultado desejado para cada projeto.
            </p>
          </section>
        </Slide>
      </div>
    </div>
  )
}
