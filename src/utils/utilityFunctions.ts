import slugify from "slugify";

export function generateCategorySlug(categoryName: string): string {
   return slugify(categoryName, {lower: true, strict: true});
}