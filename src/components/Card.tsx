import { ReactNode } from 'react'

interface CardProps {
  icon: ReactNode
  title: string
  titleFocus: string
  description: string
}

export function Card({ icon, title, titleFocus, description }: CardProps) {
  return (
    <div
      className={`w-[75vw] mb-16 flex flex-col items-center rounded-2xl bg-zinc-300 p-5 shadow-zinc-600 shadow-xl lg:mb-0 lg:w-[25vw]`}
    >
      {icon}
      <h3 className="text-[#CB2222] font-bold text-xl flex flex-col items-center">
        {title}
        <span className="text-2xl">{titleFocus}</span>
      </h3>
      <p className="text-[#202020] text-base text-center mt-5">{description}</p>
    </div>
  )
}
