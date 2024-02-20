import { getProducts, type Product } from "@repo/commerce"

export default async function Page(): Promise<JSX.Element> {
  const products = await getProducts()

  return (
    <div>
      <h1>Application #1</h1>
      <p>example next.js app router application</p>
      <br /><br /><br /><br /><br />

      <h2>Products</h2>
      {products.map((product: Product) => (
        <>
          <h5>{product.title}</h5>
          <p>{product.id}</p>
        </>
      ))}
    </div>
  );
}
