import {NextApiRequest, NextApiResponse} from 'next';
import {connectToDatabase} from "@/utils/mongodb";

const collectionName = 'products';
const FEATURED_PRODUCT_COUNT = 6;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   try {
      const {db} = await connectToDatabase();

      // Generate a random seed based on the current time
      const currentTime = new Date().getTime();
      const randomSeed = currentTime % 1000000;

      // Get the total number of products in the collection
      const productCount = await db.collection(collectionName).countDocuments();

      // Generate random indices to select featured products
      const randomIndices = generateRandomIndices(productCount, FEATURED_PRODUCT_COUNT, randomSeed);

      // Fetch the featured products based on the random indices
      const featuredProducts = await db
         .collection(collectionName)
         .find()
         .limit(FEATURED_PRODUCT_COUNT)
         .skip(randomIndices[0])
         .toArray();

      res.status(200).json(featuredProducts);
   } catch (error) {
      res.status(500).json({error: 'Internal Server Error'});
   }
}

function generateRandomIndices(totalItems: number, count: number, seed: number): number[] {
   const randomIndices: number[] = [];
   const randomGenerator = seededRandom(seed);

   while (randomIndices.length < count) {
      const index = Math.floor(randomGenerator() * totalItems);
      if (!randomIndices.includes(index)) {
         randomIndices.push(index);
      }
   }

   return randomIndices;
}


function seededRandom(seed: number): () => number {
   let seedValue = seed % 2147483647;
   if (seedValue <= 0) {
      seedValue += 2147483646;
   }
   let previous = seedValue;
   return () => {
      const next = (previous * 16807) % 2147483647;
      previous = next;
      return next / 2147483647;
   };
}
