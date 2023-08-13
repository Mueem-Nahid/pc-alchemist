import {NextApiRequest, NextApiResponse} from "next";
import {IProduct} from "@/utils/globalTypes";
import {connectToDatabase} from "@/utils/mongodb";
import {ObjectId} from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IProduct | Record<string, string>>) {
   const {method, query: {_id}} = req;
   if (method === 'GET') {
      try {
         const {db} = await connectToDatabase();
         const productId = Array.isArray(_id) ? _id[0] : _id;
         const product = await db.collection('products').findOne({_id: new ObjectId(productId)});
         if (product)
            return res.status(200).json(product);
         return res.status(404).json({message: 'Product not found'});
      } catch (error) {
         res.status(500).json({error: 'Internal Server Error'});
      }
   }
}