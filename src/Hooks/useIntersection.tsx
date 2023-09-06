import React, { useEffect, useRef } from 'react'

type IntersectionOptions = {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

type IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver,
) => void

type IntersectionResult = [React.RefObject<HTMLDivElement>] // Defina o tipo como HTMLDivElement

function useIntersection(
  options: IntersectionOptions = {},
  onVisible: () => void,
  onHidden: () => void,
): IntersectionResult {
  const targetRef = useRef<HTMLDivElement>(null) // Defina o tipo como HTMLDivElement

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onVisible()
      } else {
        onHidden()
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options)

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [options, onVisible, onHidden])

  return [targetRef]
}

export default useIntersection
