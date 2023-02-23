import Link from 'next/link'
import { WhatsappLogo } from 'phosphor-react'
import { HTMLProps } from 'react'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  textButton: string
  hasIcon?: boolean
  link: string
}

export function Button({ textButton, hasIcon, link, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={`w-72 bg-red-600 rounded-md hover:bg-red-700 transition-colors ${className}`}
    >
      <Link
        target="_blank"
        href={link}
        className="p-4 flex justify-center items-center gap-4"
        rel="noreferrer"
      >
        {hasIcon ? <WhatsappLogo size={24} className="text-white" /> : null}
        <span className="font-bold text-lg">{textButton}</span>
      </Link>
    </button>
  )
}
