import ProductList from "./components/productsList";

export default async function Page(): Promise<JSX.Element> {
  return (
    <div>
      <h1>Application #1</h1>
      <p>Example next.js app router application</p>
      <br />
      <br />
      <br />
      <br />
      <br />

      <ProductList />
    </div>
  );
}
