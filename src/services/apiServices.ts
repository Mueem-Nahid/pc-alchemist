export const getFeaturedProducts = async () => {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/featuredProducts`);
}