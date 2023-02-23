import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Title } from './Title'
import { CaretLeft, CaretRight } from 'phosphor-react'

import Image from 'next/image'
import { HTMLProps } from 'react'

function SampleNextArrow(props: HTMLProps<HTMLDivElement>) {
  const { onClick } = props
  return (
    <div
      className="slick-next"
      // style={{...style, display: 'block'}}
      onClick={onClick}
    >
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
    <div
      className="slick-prev"
      // style={{...style, display: 'block'}}
      onClick={onClick}
    >
      <CaretLeft
        size={50}
        className="text-white hover:text-zinc-400 transition-colors"
      />
    </div>
  )
}

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
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

export interface LogoImages {
  data: {
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
      <Title title="Clientes" />
      <div className="w-full mt-36 px-[15%]">
        <Slider {...settings}>
          {logoImages &&
            logoImages.map((image, index) => {
              return (
                <div key={index} className="px-4 focus:outline-none divSlider">
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
    </div>
  )
}
