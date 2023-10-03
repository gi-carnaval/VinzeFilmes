import LogoVinze from '../../assets/logoVinze.png'
import buttonMeuSite from '../../assets/buttonMeuSite.png'
import buttonOrcamento from '../../assets/buttonOrcamento.png'
import buttonPortifolio from '../../assets/portifolioButton.png'
import buttonVinzeFilmes from '../../assets/buttonVinzeFilmes.png'

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Loading } from '@/components/Loading'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  style: 'italic',
  weight: ['900'],
})

export default function Links() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="h-screen px-5 py-6 flex justify-center items-center bg-[url('../assets/CAPA-SITE-MOBILE.webp')] lg:w-full lg:mx-0 md:bg-[url('../assets/CAPA-DESKTOP.webp')] bg-no-repeat bg-cover">
            <Head>
              <title>Vinze Filmes Links</title>
            </Head>
            <div className="flex flex-col-reverse items-center px-5 justify-center lg:gap-16 lg:mb-1 lg:mx-[100px] md:flex-row">
              <section className="flex flex-col justify-center items-center lg:items-start lg:max-w-xl">
                <div className="flex flex-col-reverse justify-center items-center lg:block mt-12 lg:mt-0">
                  <h1
                    className={`${montserrat.className} text-2xl text-center mt-4 lg:text-left lg:text-[68px] lg:leading-[64px]`}
                  >
                    CONHEÇA A VINZE E REVOLUCIONE SEUS PROJETOS
                  </h1>
                  <p className="text-[#959595] text-xl lg:mt-6">
                    Como posso te ajudar?
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
                  <Link href="/">
                    <Image
                      src={buttonMeuSite}
                      alt="Botão Meu Site"
                      className="hover:scale-105 transition-transform"
                    />
                  </Link>
                  <Link
                    aria-label="Entre em contato e solicite um orçamento"
                    href="https://api.whatsapp.com/send?phone=5514997623484&text=Ol%C3%A1%20Vinze%2C%20queria%20iniciar%20um%20projeto%20com%20voc%C3%AA%20%F0%9F%98%8E"
                  >
                    <Image
                      src={buttonOrcamento}
                      alt="Botão Orçamento"
                      className="hover:scale-105 transition-transform"
                    />
                  </Link>
                  <Link
                    aria-label="Acesso todos os nossos trabalhos já produzidos"
                    href="https://www.youtube.com/@vinzefilmes"
                  >
                    <Image
                      src={buttonPortifolio}
                      alt="Botão Portifólio"
                      className="hover:scale-105 transition-transform"
                    />
                  </Link>
                  <Link
                    aria-label="Siga de perto cada produção sendo criada pelo nosso intagram"
                    href="https://www.instagram.com/vinzefilmes/"
                  >
                    <Image
                      src={buttonVinzeFilmes}
                      alt="Botão Instagram"
                      className="hover:scale-105 transition-transform"
                    />
                  </Link>
                </div>
              </section>
              <section className="flex justify-center items-center">
                <Image
                  src={LogoVinze}
                  alt="Logo Vinze Filmes"
                  className="logoVinze w-4/6 lg:w-6/6"
                />
              </section>
            </div>
          </div>
        </>
      )}
    </>
  )
}
