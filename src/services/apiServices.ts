export const getAllProducts = async () => {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`);
}

export const getFeaturedProducts = async () => {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/featuredProducts`);
}

export const getProductDetails = async (_id:string) => {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${_id}`);
}