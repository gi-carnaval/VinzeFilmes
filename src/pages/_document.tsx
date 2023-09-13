import Analytics from '@/components/Analytics'
import { Footer } from '@/components/Footer'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-background text-[#DEDEDE]">
        <Main />
        <NextScript />
        <Analytics />
      </body>
      <Footer />
    </Html>
  )
}
