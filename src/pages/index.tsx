import { AboutSection } from '@/components/AboutSection'
import { ClientsSection, LogoImages } from '@/components/ClientsSection'
import { FirstSection } from '@/components/FirstSection'
import { JobsSection, VideoProps } from '@/components/JobsSections'
import { ProposeSection } from '@/components/ProproseSection'
import { createClient } from '@/services/prismicio'
import { GetServerSidePropsContext } from 'next'

interface HomeProps {
  logos: LogoImages[]
  videos: VideoProps[]
}

export default function Home({ logos, videos }: HomeProps) {
  return (
    <>
      <FirstSection />
      <ProposeSection />
      <AboutSection />
      <ClientsSection logoImages={logos} />
      <JobsSection jobVideos={videos} />
    </>
  )
}
export async function getServerSideProps({
  previewData,
  req,
  res,
}: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  const client = createClient({ previewData })

  const logos = await client.getAllByType('logo_clientes')
  const videos = await client.getAllByType('videos_youtube')
  return {
    props: {
      logos,
      videos,
    },
  }
}
