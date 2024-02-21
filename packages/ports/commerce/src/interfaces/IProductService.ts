import { Product } from "../types/Product";

export default interface IProductService {
    getProduct: (id: string) => Promise<Product>
    getProducts: () => Promise<Product[]>
}