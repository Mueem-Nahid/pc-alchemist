import Head from 'next/head'
import {Inter} from 'next/font/google'
import {HeroSection} from "@/components/HeroSection";


const inter = Inter({subsets: ['latin']})

export default function Home() {
   return (
      <>
         <Head>
            <title>PC Alchemist</title>
            <meta name="description" content="PC Alchemist. The ultimate PC builder website for you."/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
         </Head>
         <main>
            <HeroSection/>
         </main>
      </>
   )
}
