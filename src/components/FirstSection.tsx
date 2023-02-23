import Image from 'next/image'
import LogoVinze from '../assets/logoVinze.png'
import { Button } from './Button'

export function FirstSection() {
  return (
    <div className="h-screen mx-5 flex justify-center items-center lg:w-full lg:mx-0 md:bg-[url('../assets/bg.png')] bg-none bg-no-repeat bg-cover">
      <div className="flex flex-col-reverse items-start mt-24 px-5 justify-between lg:gap-16 lg:mb-24 lg:mx-[100px] md:flex-row">
        <section className="flex flex-col justify-center items-center lg:items-start lg:max-w-lg">
          <div className="flex flex-col-reverse justify-center items-center lg:block mt-24 lg:mt-0">
            <h1 className="text-3xl text-center mt-6 lg:text-left lg:text-[54px] lg:leading-[64px]">
              Conheça a <span className="font-bold">Vinze</span>, e revolucione
              seus projetos
            </h1>
            <p className="text-[#959595] text-lg lg:text-base lg:mt-6">
              Invista em <span className="font-bold">QUALIDADE</span>
            </p>
            <p className="text-[#959595] text-lg lg:text-base">
              Renove o seu <span className="font-bold">VISUAL</span>
            </p>
          </div>
          <Button
            className="mt-6 lg:mt-24"
            textButton="Entre em contato"
            link="https://wa.me/5514997623484?text=Gostaria%20de%20um%20or%C3%A7amento,%20por%20favor!"
            hasIcon
          />
        </section>
        <section className="flex justify-center items-start md:justify-end">
          <Image src={LogoVinze} alt="Logo Vinze Filmes" className="w-3/4" />
        </section>
      </div>
    </div>
  )
}
