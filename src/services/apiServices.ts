const URL = process.env.NEXT_PUBLIC_BASE_URL;
// process.env.NEXT_PUBLIC_BASE_URL;

export const getAllProducts = async () => {
   return await fetch(`${URL}/products`);
}

export const getFeaturedProducts = async () => {
   return await fetch(`${URL}/products/featuredProducts`);
}

export const getProductDetails = async (_id:string) => {
   return await fetch(`${URL}/products/${_id}`);
}

export const getCategories = async () => {
   return await fetch(`${URL}/categories`);
}

export const getProductsByCategory = async (categoryName:string) => {
   return await fetch(`${URL}/categories/${categoryName}`);
}