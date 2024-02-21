import { Product } from "../types/Product";

export default interface ProductService {
  getProduct: (id: string) => Promise<Product>;
  getProducts: () => Promise<Product[]>;
}
