import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'
import { light } from '../styles/themes/light'
import { Inter } from '@next/font/google'
import { AppWrapper, MainSection } from '../components/pages/App/styles'
import { Footer } from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Centro Pokémon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <AppWrapper className={inter.className}>
          <MainSection>
            <Component {...pageProps} />
          </MainSection>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </>
  )
}
