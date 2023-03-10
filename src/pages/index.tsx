import { AboutSection } from '@/components/AboutSection'
import { ClientsSection, LogoImages } from '@/components/ClientsSection'
import { FirstSection } from '@/components/FirstSection'
import { JobsSection, VideoProps } from '@/components/JobsSections'
import { Loading } from '@/components/Loading'
import { NumbersSection } from '@/components/NumbersSection'
import { ProposeSection } from '@/components/ProproseSection'
import { createClient } from '@/services/prismicio'
import { screenWidthCompare } from '@/utils/layoutChecker'
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
  const [classNameForCardsAnimation, setClassNameForCardsAnimation] =
    useState('hidden')
  const [counterOn, setCounterOn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const screenWidth = window.innerWidth
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    function handleScroll() {
      console.log(document.documentElement.scrollTop)
      if (screenWidthCompare(screenWidth, 426)) {
        verifyIfNumbersSectionIsVisible(2300, 3150)
        triggerAnimation(450, 1050, 2400)
      } else {
        verifyIfNumbersSectionIsVisible(3300, 4100)
        triggerAnimation(299, 1799, 3300)
      }
    }

    function triggerAnimation(
      cardsHeight: number,
      aboutHeight: number,
      numbersHeight: number,
    ) {
      if (document.documentElement.scrollTop > cardsHeight) {
        setClassNameForCardsAnimation('animation-top-in')
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
            classNameForCardsAnimation={classNameForCardsAnimation}
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
