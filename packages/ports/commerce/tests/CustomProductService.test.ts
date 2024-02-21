import IProductService from "../src/interfaces/IProductService";
import CustomProductService from "../src/CustomProductService";

jest.mock("@repo/custom-commerce", () => ({
  getCustomProducts: jest.fn().mockResolvedValue([
    { id: "product-one", title: "Product One" },
    { id: "product-two", title: "Product Two" },
  ]),
}));

describe("products", () => {
  it("should get all products", async () => {
    const customProductService: IProductService = new CustomProductService()
    const allProducts = await customProductService.getProducts();

    expect(allProducts).toEqual([
      { id: "product-one", title: "Product One" },
      { id: "product-two", title: "Product Two" },
    ]);
  });
});
