import { getCustomProducts } from "@repo/custom-integration";
import { Product } from "./types/Product";

export default async function getProducts(): Promise<Product[]> {
  const customProducts = await getCustomProducts();

  const products = customProducts as Product[];

  return products;
}
