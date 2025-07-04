import Image from 'next/image'
import LogoVinze from '../assets/logoVinze.webp'
import { Button } from './Button'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  style: 'italic',
  weight: ['900'],
})

export function FirstSection() {
  return (
    <div className="h-screen px-5 flex justify-center items-center bg-[url('../assets/CAPA-SITE-MOBILE.webp')] lg:w-full lg:mx-0 md:bg-[url('../assets/CAPA-DESKTOP.webp')] bg-no-repeat bg-cover">
      <div className="flex flex-col-reverse items-center mt-24 px-5 justify-between lg:gap-16 lg:mb-24 lg:mx-[100px] md:flex-row">
        <section className="flex flex-col justify-center items-center lg:items-start lg:max-w-xl">
          <div className="flex flex-col-reverse justify-center items-center lg:block mt-24 lg:mt-0">
            <h1
              className={`${montserrat.className} font-black italic text-4xl text-center mt-4 lg:text-left lg:text-[68px] lg:leading-[64px]`}
            >
              CONHEÇA A VINZE E REVOLUCIONE SEUS PROJETOS
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
            link="https://api.whatsapp.com/send?phone=5514996497546&text=Vinze%2C%20quero%20come%C3%A7ar%20um%20projeto%20com%C2%A0voc%C3%AAs!"
            hasIcon
          />
        </section>
        <section className="flex justify-center items-center md:justify-center">
          <Image
            src={LogoVinze}
            alt="Logo Vinze Filmes"
            className="w-6/6 logoVinze"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </section>
      </div>
    </div>
  )
}
