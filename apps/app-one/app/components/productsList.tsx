import { type Product } from "@repo/commerce";
import serviceLocator from "../ServiceLocator";

export default async function ProductList() {
  // NOTE: this component ONLY depends on the port
  const productService = serviceLocator.useProductService();
  const products = await productService.getProducts();

  return (
    <>
      <h2>Products</h2>

      {products.map((product: Product) => (
        <div key={product.id}>
          <h5>{product.title}</h5>
          <p>{product.id}</p>
        </div>
      ))}
    </>
  );
}
