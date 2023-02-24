// import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

function useLazyLoad(
  elementRef: React.MutableRefObject<HTMLIFrameElement | null>,
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const iframe = elementRef.current!
          iframe.src = iframe.dataset.src!
          iframe.classList.add('is-loaded')
          observer.unobserve(iframe)
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.5,
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current)
      }
    }
  }, [elementRef])
}

interface Props {
  videoUrl: string
}

export const YoutubeEmbed = ({ videoUrl }: Props) => {
  const splitedUrlVideo = videoUrl.split('/')
  const idVideo = splitedUrlVideo[4]
  console.log('Video id: ', idVideo)
  // const [loaded, setLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  useLazyLoad(iframeRef)

  return (
    <div className="video-wrapper">
      <iframe
        ref={iframeRef}
        className="lazy-load"
        data-src={`https://www.youtube.com/embed/${idVideo}`}
      />
    </div>
  )
}
