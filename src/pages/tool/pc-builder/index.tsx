import {getCategories} from "@/services/apiServices";
import {ICategory} from "@/utils/globalTypes";
import {PCBuilder} from "@/components/PCBuilder";

interface IProps {
   categories: ICategory[]
}

export default function PcBuilder({categories}:IProps) {
   return (
      <PCBuilder categories={categories}/>
   );
}

export const getServerSideProps = async () => {
   const res = await getCategories();
   const data = await res.json();
   return {
      props: {
         categories: data,
      }
   };
};