import {getCategories} from "@/services/apiServices";
import {ICategory} from "@/utils/globalTypes";
import {PCBuilder} from "@/components/PCBuilder";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

interface IProps {
   categories: ICategory[]
}

export default function PcBuilder({categories}: IProps) {
   const [selectedComponents, setSelectedComponents] = useState<{ [key: string]: string }[]>([]);

   useEffect(() => {
      const componentsData = Cookies.get('components');
      if (componentsData) {
         setSelectedComponents(JSON.parse(componentsData));
      }
   }, [selectedComponents?.length]);

   return (
      <PCBuilder categories={categories} selectedComponents={selectedComponents} setSelectedComponents={setSelectedComponents}/>
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