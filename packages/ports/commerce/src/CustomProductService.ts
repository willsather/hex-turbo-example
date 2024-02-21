import IProductService from "./interfaces/IProductService";
import { getCustomProduct, getCustomProducts } from "@repo/custom-commerce";
import { Product } from "./types/Product";

export default class CustomProductService implements IProductService {
    async getProducts(): Promise<Product[]> {
        const customProducts = await getCustomProducts();

        return customProducts as Product[];
    };
    
    async getProduct(id: string): Promise<Product> {
        const customProduct = await getCustomProduct(id);

        return customProduct as Product;
    };
}