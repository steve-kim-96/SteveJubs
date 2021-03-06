import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { AppProps } from 'next/app'
import Header from '../components/Header'

const myApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
)

export default myApp
