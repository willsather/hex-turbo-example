import getProducts from "../src/products";

jest.mock("@repo/custom-integration", () => ({
  getCustomProducts: jest.fn().mockResolveValue([
    { id: "product-one", title: "Product One" },
    { id: "product-two", title: "Product Two" },
  ]),
}));

describe("products", () => {
  it("should get all products", async () => {
    const allProducts = await getProducts();

    expect(allProducts).toEqual([
      { id: "product-one", title: "Product One" },
      { id: "product-two", title: "Product Two" },
    ]);
  });
});
