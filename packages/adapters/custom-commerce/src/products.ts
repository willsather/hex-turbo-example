import { CustomProduct } from "./types/CustomProduct";

export async function getCustomProducts(): Promise<CustomProduct[]> {
  return await Promise.resolve([
    { id: "product-one", title: "Product One" },
    { id: "product-two", title: "Product Two" },
  ]);
}

export async function getCustomProduct(id: string): Promise<CustomProduct> {
  return await Promise.resolve(
    { id, title: "Product One" },
  );
}
