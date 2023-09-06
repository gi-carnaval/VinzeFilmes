import LogoVinze from '../assets/logoVinze.png'
import {
  WhatsappLogo,
  InstagramLogo,
  YoutubeLogo,
  FacebookLogo,
} from 'phosphor-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <div className="w-full flex mb-10 flex-col justify-center items-center">
      <Image height={40} src={LogoVinze} alt="" />
      <span className="w-full mx-[100px] my-7 h-[2px] bg-[#696969]" />
      <div className="w-full px-[5vw] flex flex-col-reverse items-center justify-between lg:flex-row">
        <span className="text-sm flex justify-center lg:w-96 lg:justify-start">
          Desenvolvido por&nbsp;
          <Link
            href="https://linkedin.com/in/giovani-carnaval/"
            className="font-bold"
            aria-label="Giovani Carnaval."
          >
            Giovani Carnaval
          </Link>
        </span>
        <span className="flex flex-col items-center mb-7 lg:w-96 lg:mb-0">
          <p>Vinze Filmes - CNPJ 45.660.472/0001-09</p>
          <p>Copyright {currentYear}</p>
        </span>
        <span className="flex justify-center items-center gap-5 mb-7 lg:w-96 lg:justify-end lg:mb-0">
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5514997623484&text=Ol%C3%A1%20Vinze%2C%20queria%20iniciar%20um%20projeto%20com%20voc%C3%AA%20%F0%9F%98%8E"
            rel="noreferrer"
            aria-label="Entre em contato e solicite um orçamento"
          >
            <WhatsappLogo
              size={30}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/vinzefilmes/"
            rel="noreferrer"
            aria-label="Siga de perto cada produção sendo criada pelo nosso intagram"
          >
            <InstagramLogo
              size={30}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/@vinzefilmes"
            rel="noreferrer"
            aria-label="Acesso todos os nossos trabalhos já produzidos"
          >
            <YoutubeLogo
              size={30}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            />
          </Link>
          <Link
            target="_blank"
            aria-label="Acesse nosso facebook e fica ligado em cada produção nova"
            href="https://www.facebook.com/viniciusgenerich"
          >
            <FacebookLogo
              size={30}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            />
          </Link>
        </span>
      </div>
    </div>
  )
}
