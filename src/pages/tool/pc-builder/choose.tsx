import {getProductsByCategory} from "@/services/apiServices";
import {IProduct} from "@/utils/globalTypes";
import ChooseComponent from "@/components/ChooseComponent";

interface IProps {
   components: IProduct[],
   category:string,
}

export default function Choose({components, category}: IProps) {
   return (
      <ChooseComponent components={components} category={category}/>
   );
}

export const getServerSideProps = async (ctx: { query: { component: string; }; }) => {
   const {component} = ctx?.query;
   if (!component) {
      return {
         redirect: {
            destination: '/tool/pc-builder',
            permanent: false,
         },
      }
   }
   const res = await getProductsByCategory(component);
   const data = await res.json();

   return {
      props: {
         components: data,
         category: component,
      }
   };
};