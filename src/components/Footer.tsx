import LogoVinze from '../assets/logoVinze.png'
import {
  WhatsappLogo,
  InstagramLogo,
  YoutubeLogo,
  BehanceLogo,
} from 'phosphor-react'
import Image from 'next/image'

export function Footer() {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <div className="w-full flex flex-col justify-center items-center mt-10 lg:mt-64">
      <Image height={40} src={LogoVinze} alt="" />
      <span className="w-full mx-[100px] my-7 h-[2px] bg-[#696969]" />
      <div className="w-full px-[5vw] flex flex-col-reverse items-center justify-between lg:flex-row">
        <span className="flex justify-center lg:w-96 lg:justify-start">
          Desenvolvido por&nbsp;<a className="font-bold"> Giovani Carnaval</a>
        </span>
        <span className="flex flex-col items-center mb-7 lg:w-96 lg:mb-0">
          <p>Vinze Filmes - CNPJ xx.xxx.xx/xxx-xx</p>
          <p>Copyright {currentYear}</p>
        </span>
        <span className="flex justify-center items-center gap-5 mb-7 lg:w-96 lg:justify-end lg:mb-0">
          <a
            target="_blank"
            href="https://wa.me/5514997623484?text=Gostaria%20de%20um%20or%C3%A7amento,%20por%20favor!"
            rel="noreferrer"
          >
            <WhatsappLogo
              size={30}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            />
          </a>
          <a target="_blank" href="#">
            <InstagramLogo
              size={30}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            />
          </a>
          <a target="_blank" href="#">
            <YoutubeLogo
              size={30}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            />
          </a>
          <a target="_blank" href="#">
            <BehanceLogo
              size={30}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            />
          </a>
        </span>
      </div>
    </div>
  )
}