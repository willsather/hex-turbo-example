import { render, screen } from '@testing-library/react';
import HomePage from './page'

jest.mock('@repo/commerce', () => ({
    getProducts: jest.fn().mockResolvedValue([
        { id: "product-one", title: "Product One" },
        { id: "product-two", title: "Product Two" },
      ])
}))

describe('app-two', () => {
    it('can render page', async () => {
        const page = await HomePage()
        render(page)
    })
})