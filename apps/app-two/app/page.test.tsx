import { render, screen } from '@testing-library/react';
import HomePage from './page'
import { CustomProductService } from '@repo/commerce';

jest.mock('@repo/commerce');

const mockProductService = CustomProductService as jest.MockedClass<typeof CustomProductService>;

mockProductService.mockImplementation(() => {
  return {
    getProduct: jest.fn().mockReturnValue({ id: "product-one", title: "Product One" }),
    getProducts: jest.fn().mockReturnValue([
        { id: "product-one", title: "Product One" },
        { id: "product-two", title: "Product Two" },
      ]),
  };
});

describe('app-two', () => {
    it('can render page', async () => {
        const page = await HomePage()
        render(page)

        expect(screen.getByText('Product One')).toBeInTheDocument()
        expect(screen.getByText('Product Two')).toBeInTheDocument()
    })
})