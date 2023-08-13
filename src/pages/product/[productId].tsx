import {getAllProducts, getProductDetails} from "@/services/apiServices";
import {IProduct} from "@/utils/globalTypes";
import {ProductDetails} from "@/components/ProductDetails";

interface IProductPageProps {
   product: IProduct;
}

export default function ProductPage({product}:IProductPageProps) {
   console.log(product)
   return (
      <ProductDetails product={product}/>
   );
}

export const getStaticPaths = async () => {
   /*if (typeof window === 'undefined') {
      return {
         paths:[],
         fallback:false
      };
   }*/
  const res = await getAllProducts();
  const products = await res.json();
  const paths = products.map((product:IProduct) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (ctx: { params: { productId: any; }; }) => {
   const id = ctx.params?.productId;
   let data;
   try {
      /*if (typeof window === 'undefined') {
         return {
            props: {
               product: null,
            },
         };
      }*/
      const res = await getProductDetails(id);
      data = await res.json();
   } catch (e) {
      console.log(e)
   }
   return {
      props: {
         product: data,
      },
      revalidate: 30,
   };
}