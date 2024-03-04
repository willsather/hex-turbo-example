import { CustomProductService, ProductService } from "@repo/commerce";

class ServiceLocator {
  private productService: ProductService | undefined;

  useProductService(): ProductService {
    if (this.productService == undefined) {
      this.productService = CustomProductService.getInstance();
    }
    return this.productService!;
  }

  setProductService(productService: ProductService) {
    this.productService = productService;
  }
}

const serviceLocator = new ServiceLocator();

export default serviceLocator;
