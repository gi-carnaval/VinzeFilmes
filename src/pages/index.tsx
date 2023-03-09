import { AboutSection } from '@/components/AboutSection'
import { ClientsSection, LogoImages } from '@/components/ClientsSection'
import { FirstSection } from '@/components/FirstSection'
import { JobsSection, VideoProps } from '@/components/JobsSections'
import { Loading } from '@/components/Loading'
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
  const [classNameAboutImage, setClassNameAboutImage] = useState('hidden')
  const [classNameAboutText, setClassNameAboutText] = useState('hidden')
  const [classNameCardGroup, setClassNameCardGroup] = useState('hidden')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    function handleScroll() {
      if (window.innerWidth > 426) {
        if (document.documentElement.scrollTop > 450) {
          setClassNameCardGroup('show-card')
        }
        if (document.documentElement.scrollTop > 1050) {
          setClassNameAboutImage('show-aboutImage')
          setClassNameAboutText('show-aboutText')
        }
      }
      if (window.innerWidth <= 426) {
        if (document.documentElement.scrollTop > 299) {
          setClassNameCardGroup('show-card')
        }
        if (document.documentElement.scrollTop > 1799) {
          setClassNameAboutImage('show-aboutImage')
          setClassNameAboutText('show-aboutText')
        }
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
          <ProposeSection classNameCardGroup={classNameCardGroup} />
          <AboutSection
            classNameAboutImage={classNameAboutImage}
            classNameAboutText={classNameAboutText}
          />
          <ClientsSection logoImages={logos} />
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
