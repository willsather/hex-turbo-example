import { render, screen } from "@testing-library/react";
import { ProductService } from "@repo/commerce";
import { mock } from "jest-mock-extended";
import ProductsList from "./productsList";
import serviceLocator from "../ServiceLocator";

const mockProductService = mock<ProductService>();

describe("ProductsList", () => {
  it("can render page", async () => {
    mockProductService.getProduct.mockResolvedValue({ id: "product-one", title: "Product One" });

    mockProductService.getProducts.mockResolvedValue([
      { id: "product-one", title: "Product One" },
      { id: "product-two", title: "Product Two" },
    ]);

    serviceLocator.setProductService(mockProductService);

    const productsList = await ProductsList();
    render(productsList);

    expect(screen.getByText("Product One")).toBeInTheDocument();
    expect(screen.getByText("Product Two")).toBeInTheDocument();
  });
});
