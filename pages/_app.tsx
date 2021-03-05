import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { AppProps } from 'next/app'

function myApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default myApp
