import Head from 'next/head'
import {Inter} from 'next/font/google'
import {HeroSection} from "@/components/HeroSection";
import {FeaturedSection} from "@/components/FeaturedSection";


const inter = Inter({subsets: ['latin']})

const featuredProducts = [
   {
      "id": "1",
      "image": "product1.jpg",
      "name": "Processor A",
      "category": "CPU / Processor",
      "price": 199.99,
      "status": "In Stock",
      "rating": 4.5
   },
   {
      "id": "2",
      "image": "product2.jpg",
      "name": "Motherboard B",
      "category": "Motherboard",
      "price": 149.99,
      "status": "In Stock",
      "rating": 4.2
   },
   {
      "id": "3",
      "image": "product3.jpg",
      "name": "RAM Kit C",
      "category": "RAM",
      "price": 79.99,
      "status": "Out of stock",
      "rating": 4.7
   },
   {
      "id": "4",
      "image": "product4.jpg",
      "name": "Power Supply D",
      "category": "Power Supply Unit",
      "price": 119.99,
      "status": "In Stock",
      "rating": 4.8
   },
   {
      "id": "5",
      "image": "product5.jpg",
      "name": "Storage Device E",
      "category": "Storage Device",
      "price": 89.99,
      "status": "In Stock",
      "rating": 4.6
   },
   {
      "id": "6",
      "image": "product6.jpg",
      "name": "Monitor F",
      "category": "Monitor",
      "price": 249.99,
      "status": "In Stock",
      "rating": 4.4
   }
]

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
            <FeaturedSection/>
         </main>
      </>
   )
}
