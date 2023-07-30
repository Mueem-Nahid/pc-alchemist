import {NextApiRequest, NextApiResponse} from 'next';
import {connectToDatabase} from '@/utils/mongodb';
import {IProduct} from "@/utils/globalTypes";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IProduct[] | Record<string, string>>) {
   const {method, body} = req;

   if (method === 'GET') {
      try {
         const {db} = await connectToDatabase();
         const products: IProduct[] = await db.collection<IProduct>('products').find().toArray();
         res.status(200).json(products);
      } catch (error) {
         res.status(500).json({error: 'Internal Server Error'});
      }
   }
}
