import {Box, Breadcrumbs, Container, SimpleGrid, Text} from "@mantine/core";
import {getCategories, getProductsByCategory} from "@/services/apiServices";
import {ICategory, IProduct} from "@/utils/globalTypes";
import {FeaturesCard} from "@/components/FeaturesCard";
import Link from "next/link";

interface IProps {
   products: IProduct[];
   category: string
}

export default function CategoryPage({products, category}: IProps) {
   const items = [
      {title: 'Home', href: '/'},
      {title: `${category}`, href: `/category/${category}`},
   ].map((item, index) => (
      <Link className='breadcrumb-link' href={item.href} key={index} style={{textTransform: 'capitalize'}}>
         {item.title}
      </Link>
   ));

   return (
      <Container size="lg" py='2.5rem'>
         <Box>
            <Breadcrumbs separator="→" mb='1rem'>{items}</Breadcrumbs>
         </Box>
         <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{maxWidth: 'md', cols: 1}]}>
            {
               products?.map((featured: IProduct) => (
                  <FeaturesCard
                     key={featured._id}
                     id={featured._id}
                     image={featured.image}
                     name={featured.name}
                     category={featured.category}
                     price={featured.price}
                     status={featured.status}
                     rating={featured.rating}
                  />
               ))
            }
         </SimpleGrid>
      </Container>
   );
}

export const getStaticPaths = async () => {
   /*if (typeof window === 'undefined') {
      return {
         paths:[],
         fallback:false
      };
   }*/
   const res = await getCategories();
   const categories = await res.json();
   const paths = categories.map((category: ICategory) => ({
      params: {categoryName: category.link},
   }));

   return {paths, fallback: false};
};

export const getStaticProps = async (ctx: { params: { categoryName: string; }; }) => {
   const {categoryName} = ctx.params;
   let data;
   try {
      /*if (typeof window === 'undefined') {
         return {
            props: {
               products: [],
            },
         };
      }*/
      const res = await getProductsByCategory(categoryName);
      data = await res.json();
   } catch (e) {
      console.log(e)
   }
   return {
      props: {
         products: data,
         category: categoryName
      },
      revalidate: 30,
   };
}