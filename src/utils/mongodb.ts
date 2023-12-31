import {Db, MongoClient} from "mongodb";

let uri: string | undefined = process.env.MONGODB_URI;
let dbName: string | undefined = process.env.MONGODB_DB;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

if (!uri) {
   throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

if (!dbName) {
   throw new Error("Please define the MONGODB_DB environment variable inside .env.local");
}

export async function connectToDatabase() {
   if (cachedClient && cachedDb) {
      return {client: cachedClient, db: cachedDb};
   }


   const client = await MongoClient.connect(uri!, {
      // @ts-ignore
      useNewUrlParser: true,
      useUnifiedTopology: true,
   });

   const db = client.db(dbName);

   cachedClient = client;
   cachedDb = db;

   return {client, db};
}
