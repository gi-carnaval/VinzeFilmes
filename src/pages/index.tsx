import { AboutSection } from '@/components/AboutSection'
import { ClientsSection, LogoImages } from '@/components/ClientsSection'
import { FirstSection } from '@/components/FirstSection'
import { JobsSection, VideoProps } from '@/components/JobsSections'
import { Loading } from '@/components/Loading'
import { NumbersSection } from '@/components/NumbersSection'
import { ProposeSection } from '@/components/ProproseSection'
import { createClient } from '@/services/prismicio'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

interface HomeProps {
  logos: LogoImages[]
  videos: VideoProps[]
}

export default function Home({ logos, videos }: HomeProps) {
  const [classNameForAboutImageAnimation, setClassNameForAboutImageAnimation] =
    useState('hidden')
  const [classNameForAboutTextAnimation, setClassNameForAboutTextAnimation] =
    useState('hidden')
  const [classNameForNumbersLeft, setClassNameForNumbersLeft] =
    useState('hidden')
  const [classNameForNumbersRight, setClassNameForNumbersRight] =
    useState('hidden')

  const [heightTriggerForFirstCard, setHeightTriggerForFirstCard] =
    useState('hidden')
  const [heightTriggerForSecondCard, setHeightTriggerForSecondCard] =
    useState('hidden')
  const [heightTriggerForThirdCard, setHeightTriggerForThirdCard] =
    useState('hidden')

  const [counterOn, setCounterOn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const screenWidth = window.innerWidth
    // console.log(screenWidth)
    const screenHeight = window.innerHeight
    // console.log(screenHeight)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    function handleScroll() {
      // console.log(document.documentElement.scrollTop)
      if (screenWidth <= 320 && screenHeight <= 680) {
        // console.log('320 x 680')
        verifyIfNumbersSectionIsVisible(3400, 4300)
        triggerAnimation(280, 800, 1230, 1820, 3380)
      } else if (screenWidth <= 322 && screenHeight <= 684) {
        // console.log('322 x 684')
        verifyIfNumbersSectionIsVisible(3300, 4200)
        triggerAnimation(280, 800, 1230, 1820, 3380)
      } else if (screenWidth <= 390 && screenHeight <= 844) {
        // console.log('390 x 844')
        verifyIfNumbersSectionIsVisible(3500, 4460)
        triggerAnimation(315, 710, 1120, 2000, 3500)
      } else if (screenWidth <= 426 && screenHeight <= 680) {
        // console.log('426 x 680')
        verifyIfNumbersSectionIsVisible(3350, 4250)
        triggerAnimation(250, 685, 1051, 1960, 3350)
      } else if (screenWidth <= 428 && screenHeight <= 926) {
        // console.log('428 x 926')
        verifyIfNumbersSectionIsVisible(3440, 4460)
        triggerAnimation(320, 690, 1070, 1750, 3440)
      } else if (screenWidth <= 1440) {
        verifyIfNumbersSectionIsVisible(2300, 3100)
        triggerAnimation(265, 265, 265, 1050, 2300)
      } else if (screenWidth <= 2560) {
        verifyIfNumbersSectionIsVisible(2250, 3600)
        triggerAnimation(265, 265, 265, 900, 2250)
      }
    }

    function triggerAnimation(
      firstCardHeight: number,
      secondCardHeight: number,
      thirdCardHeight: number,
      aboutHeight: number,
      numbersHeight: number,
    ) {
      if (document.documentElement.scrollTop > firstCardHeight) {
        setHeightTriggerForFirstCard('animation-top-in')
      }
      if (document.documentElement.scrollTop > secondCardHeight) {
        setHeightTriggerForSecondCard('animation-top-in')
      }
      if (document.documentElement.scrollTop > thirdCardHeight) {
        setHeightTriggerForThirdCard('animation-top-in')
      }
      if (document.documentElement.scrollTop > aboutHeight) {
        setClassNameForAboutImageAnimation('animation-left-in')
        setClassNameForAboutTextAnimation('animation-right-in')
      }
      if (document.documentElement.scrollTop > numbersHeight) {
        setClassNameForNumbersLeft('animation-left-in')
        setClassNameForNumbersRight('animation-right-in')
      }
    }

    function verifyIfNumbersSectionIsVisible(startsOn: number, endsOn: number) {
      if (
        document.documentElement.scrollTop < startsOn ||
        document.documentElement.scrollTop > endsOn
      ) {
        setCounterOn(false)
      } else {
        setCounterOn(true)
      }
    }

    window.onscroll = () => handleScroll()
  }, [])
  return (
    <>
      <Head>
        <title>Vinze Filmes</title>
        <meta
          property="og:image"
          content="https://images.prismic.io/vinzefilmes/e1e4c231-9cc1-4e7d-ab6a-270806e0d2ab_ogImage.png?auto=compress,format"
        />
        <meta property="og:title" content="Vinze Filmes" />
      </Head>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <FirstSection />
          <ProposeSection
            heightTriggerForFirstCard={heightTriggerForFirstCard}
            heightTriggerForSecondCard={heightTriggerForSecondCard}
            heightTriggerForThirdCard={heightTriggerForThirdCard}
          />
          <AboutSection
            classNameForAnimationAboutImage={classNameForAboutImageAnimation}
            classNameForAnimationAboutText={classNameForAboutTextAnimation}
          />
          <ClientsSection logoImages={logos} />
          <NumbersSection
            classNameAnimationLeftIn={classNameForNumbersLeft}
            classNameAnimationRightIn={classNameForNumbersRight}
            counterOn={counterOn}
          />
          <JobsSection jobVideos={videos} />
        </>
      )}
    </>
  )
}
export async function getServerSideProps({
  previewData,
  res,
}: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  const client = createClient({ previewData })
  try {
    const logos = await client.getAllByType('logo_clientes')
    const videos = await client.getAllByType('videos_youtube')
    return {
      props: {
        logos,
        videos,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}
