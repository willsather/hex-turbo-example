import ProductService from "../../src/products/ProductService";
import CustomProductService from "../../src/products/CustomProductService";

describe("products", () => {
  it("is a singleton", () => {
    const instance1 = CustomProductService.getInstance();
    const instance2 = CustomProductService.getInstance();

    expect(instance1).toBe(instance2);
  });

  it("should get all products", async () => {
    const customProductService: ProductService = CustomProductService.getInstance();
    const allProducts = await customProductService.getProducts();

    expect(allProducts).toEqual([
      { id: "product-id-1", title: "Product One" },
      { id: "product-id-2", title: "Product Two" },
    ]);
  });

  it("should get a single product", async () => {
    const customProductService: ProductService = CustomProductService.getInstance();
    const allProducts = await customProductService.getProduct("product-id-1");

    expect(allProducts).toEqual({ id: "product-id-1", title: "Product One" });
  });
});
