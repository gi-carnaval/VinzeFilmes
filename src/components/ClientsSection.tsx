import { Title } from './Title'
import Image from 'next/image'

export interface LogoImages {
  data: {
    nome_do_cliente: string
    logo: {
      url: string
    }
  }
}

interface ClientsProps {
  logoImages: LogoImages[]
}

export function ClientsSection({ logoImages }: ClientsProps) {
  return (
    <div className="mt-24 w-full flex flex-col justify-center items-center">
      <Title title="Nossos Clientes" />
      <div className="w-full flex flex-wrap gap-4 mt-10 lg:px-[15%] px-[5%] justify-center">
        {logoImages &&
          logoImages.map((image, index) => {
            return (
              <Image
                key={index}
                src={image.data.logo.url}
                alt={`${image.data.nome_do_cliente}`}
                width={1000}
                height={500}
                className="lg:h-[80px] lg:w-[180px] w-[65%] md:w-[45%]"
              />
            )
          })}
      </div>
    </div>
  )
}
