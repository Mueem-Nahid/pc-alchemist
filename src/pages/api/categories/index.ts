import {NextApiRequest, NextApiResponse} from "next";
import {ICategory} from "@/utils/globalTypes";
import {connectToDatabase} from "@/utils/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ICategory[] | Record<string, string>>) {
   const {method, body} = req;

   if (method === 'GET') {
      try {
         const {db} = await connectToDatabase();
         const categories: ICategory[] = await db.collection<ICategory>('categories').find().toArray();
         res.status(200).json(categories);
      } catch (error) {
         res.status(500).json({error: 'Internal Server Error'});
      }
   }
}