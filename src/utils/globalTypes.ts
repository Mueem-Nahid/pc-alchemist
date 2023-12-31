export interface IProduct {
   _id: string;
   image: string;
   name: string;
   category: string;
   price: number;
   status: string;
   rating: number;
   description: string;
   features: {
      brand: string;
      model: string;
      specification: string;
      port: string;
      type: string;
      resolution: string;
      voltage: string;
   };
   reviews: {
      id: number;
      name: string;
      review: string;
      rating: number;
   }[];
}

export interface ICategory {
   _id: string;
   name: string;
   description: string;
   link: string;
}

export interface IReview {
   id: number;
   name: string;
   review: string;
   rating: number
}
