import '@/styles/globals.css'
import type { AppProps } from 'next/app'

interface Props {
  Component: any,
  pageProps: any
}

export default function App({ Component, pageProps }: Props) {
  return ( 
  <>
    <Component {...pageProps} />
    </>
  )
}
