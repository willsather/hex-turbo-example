import { CustomProductService, type IProductService, type Product } from "@repo/commerce"

export default async function Page(): Promise<JSX.Element> {
  const productService: IProductService = new CustomProductService()

  const products = await productService.getProducts()
  
  return (
    <div>
      <h1>Application #2</h1>
      <p>example next.js app router application</p>
      <br /><br /><br /><br /><br />

      <h2>Products</h2>
      {products.map((product: Product) => (
        <div key={product.id}>
          <h5>{product.title}</h5>
          <p>{product.id}</p>
        </div>
      ))}
    </div>
  );
}
