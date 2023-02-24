import { Button } from './Button'
import { Title } from './Title'
import { YoutubeEmbed } from './YoutubeEmbed'

export interface VideoProps {
  data: {
    link_do_video: {
      url: string
    }
    titulo_do_trabalho: string
  }
}

interface JobsProps {
  jobVideos: VideoProps[]
}

export function JobsSection({ jobVideos }: JobsProps) {
  return (
    <div className="mt-36 mb-36 w-full flex flex-col justify-center items-center">
      <Title title={'Nossos Trabalhos'} />
      <div className="w-full mt-12 px-[10%] flex flex-row flex-wrap justify-around items-center gap-10">
        {jobVideos &&
          jobVideos.map((video, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center bg-red"
              >
                <h3 className="justify-center items-center mb-6 text-xl font-bold">
                  {video.data.titulo_do_trabalho}
                </h3>
                <div className="lg:w-[500px] lg:h-[280px] overflow-hidden video-wrapper">
                  <YoutubeEmbed videoUrl={`${video.data.link_do_video.url}`} />
                </div>

                {/* <iframe
                  src={`${video.data.link_do_video.url}?autoplay=1`}
                ></iframe> */}
              </div>
            )
          })}
      </div>
      <Button
        className="mt-24  "
        textButton="Veja mais trabalhos"
        link="https://www.youtube.com/@vinzefilmes"
      />
    </div>
  )
}
