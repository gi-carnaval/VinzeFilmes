import { Title } from './Title'

import { CaretLeft, CaretRight } from 'phosphor-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from 'next/image'
import { HTMLProps, useEffect, useState } from 'react'

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

function SampleNextArrow(props: HTMLProps<HTMLDivElement>) {
  const { onClick } = props

  return (
    <div className="slick-next" onClick={onClick}>
      <CaretRight
        size={50}
        className="text-white hover:text-zinc-400 transition-colors"
      />
    </div>
  )
}

function SamplePrevArrow(props: HTMLProps<HTMLDivElement>) {
  const { onClick } = props
  return (
    <div className="slick-prev" onClick={onClick}>
      <CaretLeft
        size={50}
        className="text-white hover:text-zinc-400 transition-colors"
      />
    </div>
  )
}

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  className: 'slider',
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  centerMode: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export function ClientsSection({ logoImages }: ClientsProps) {
  const BREAKPONIT = 768

  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth <= BREAKPONIT,
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= BREAKPONIT)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="mt-24 w-full flex flex-col justify-center items-center">
      <Title title="Nossos Clientes" />
      {isMobile ? (
        <div className="w-full mt-36 px-[15%]">
          <Slider {...settings}>
            {logoImages &&
              logoImages.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="px-4 focus:outline-none divSlider"
                  >
                    <Image
                      src={image.data.logo.url}
                      alt={`Slide ${index}`}
                      width={250}
                      height={100}
                      className="border-2 border-[#d9d9d9] rounded-xl"
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                    />
                  </div>
                )
              })}
          </Slider>
        </div>
      ) : (
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
      )}
    </div>
  )
}
