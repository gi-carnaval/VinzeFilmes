import { useState } from 'react'
import { Title } from './Title'
import CountUp from 'react-countup'
// import ScrollTrigger from 'react-scroll-trigger'
import useIntersection from '@/Hooks/useIntersection'

export function NumbersSection() {
  const [counterOn, setCounterOn] = useState(false)

  const [targetRef] = useIntersection(
    {
      root: null,
      rootMargin: '100px',
      threshold: 0.5,
    },
    () => {
      setCounterOn(true)
    },
    () => {
      setCounterOn(false)
    },
  )

  return (
    <div
      ref={targetRef}
      className="mt-36 mb-36 w-full flex flex-col justify-center items-center"
    >
      <Title title="Números" />
      <div className="w-full mt-12 px-[10%] gap-10 flex flex-col items-center justify-center overflow-hidden lg:mt-24 lg:flex-row">
        <section
          className={`flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-start lg:items-baseline`}
        >
          <h3 className="text-5xl font-semibold lg:text-8xl">
            {counterOn && (
              <CountUp
                start={0}
                delay={0.25}
                end={9}
                duration={1}
                prefix="+"
                useEasing={true}
              />
            )}
          </h3>
          <span className="text-lg font-semibold">Anos de atividades</span>
        </section>
        <section
          className={`flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-start lg:items-baseline`}
        >
          <h3 className="text-5xl font-semibold lg:text-8xl">
            {counterOn && (
              <CountUp
                delay={0.25}
                start={2850}
                end={3000}
                duration={1.5}
                prefix="+"
                useEasing={true}
              />
            )}
          </h3>
          <span className="text-lg font-semibold">Projetos finalizados</span>
        </section>
      </div>
    </div>
    // </ScrollTrigger>
  )
}
