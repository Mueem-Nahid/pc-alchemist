import Head from 'next/head'
import {Inter} from 'next/font/google'
import {HeroSection} from "@/components/HeroSection";
import {FeaturedSection} from "@/components/FeaturedSection";
import {getFeaturedProducts} from "@/services/apiServices";
import {IProduct} from "@/utils/globalTypes";
import CategoriesSection from "@/components/CategoriesSection";

const inter = Inter({subsets: ['latin']})

interface HomeProps {
   featuredProducts: IProduct[];
}

export default function Home({featuredProducts}: HomeProps) {
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
            <FeaturedSection featuredProducts={featuredProducts}/>
            <CategoriesSection />
         </main>
      </>
   )
};

export const getStaticProps = async () => {
   let data;
   try {
      // if (typeof window === 'undefined') {
      //    return {
      //       props: {
      //          featuredProducts: [],
      //       },
      //    };
      // }
      const res = await getFeaturedProducts();
      data = await res.json();
   } catch (e) {
      console.log(e)
   }
   return {
      props: {
         featuredProducts: data,
      },
      revalidate: 30,
   };
}
