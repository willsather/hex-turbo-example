import ProductService from "./interfaces/ProductService";
import { Product } from "./types/Product";

export default class CustomProductService implements ProductService {
  async getProduct(id: string): Promise<Product> {
    // This would be where you build implementation for getting all product with this adapter

    return {
      id: id,
      title: "Product One",
    };
  }

  async getProducts(): Promise<Product[]> {
    // This would be where you build implementation for getting all product with this adapter

    return [
      {
        id: "product-id-1",
        title: "Product One",
      },
      {
        id: "product-id-2",
        title: "Product Two",
      },
    ];
  }
}