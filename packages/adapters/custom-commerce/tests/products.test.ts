import { getCustomProduct, getCustomProducts } from "../src/products";

describe("products", () => {
  it("should get all products", async () => {
    const allProducts = await getCustomProducts();

    expect(allProducts).toEqual([
      { id: "product-one", title: "Product One" },
      { id: "product-two", title: "Product Two" },
    ]);
  });
  
  it("should get a single product", async () => {
    const product = await getCustomProduct('product-one');

    expect(product).toEqual(
      { id: "product-one", title: "Product One" });
  });
});
