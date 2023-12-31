import Head from 'next/head'
import { Home } from '../components/pages/Home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - Centro Pokémon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
