import {NextApiRequest, NextApiResponse} from "next";
import {IProduct} from "@/utils/globalTypes";
import {connectToDatabase} from "@/utils/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IProduct[] | Record<string, string>>) {
   const {method, query: {category}} = req;
   if (method === 'GET') {
      try {
         const {db} = await connectToDatabase();
         const categoryName = Array.isArray(category) ? category[0] : category;
         if (!categoryName) {
            return res.status(400).json({error: 'Invalid category name'});
         }
         const decodedCategoryName = categoryName?.split("-")[0];
         const regex = new RegExp(decodedCategoryName, 'i');
         const products: IProduct[] = await db.collection<IProduct>('products').find({category: regex}).toArray();
         if (products.length)
            return res.status(200).json(products);
         return res.status(404).json({message: 'Products found in this category'});
      } catch (error) {
         res.status(500).json({error: 'Internal Server Error'});
      }
   }
}