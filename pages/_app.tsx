import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { Nav } from '../components/Nav'

export default function App({ Component, pageProps: {
  session,
  ...pageProps
} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Nav />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
