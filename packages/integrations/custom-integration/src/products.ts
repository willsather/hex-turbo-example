import { CustomProduct } from "./types/CustomProduct";

export default async function getCustomProducts(): Promise<CustomProduct[]> {
  return await Promise.resolve([
    { id: "product-one", title: "Product One" },
    { id: "product-two", title: "Product Two" },
  ]);
}
