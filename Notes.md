import IProductService from '@repo/commerce'

app-one -> @repo/commerce (IProductService <- CustomProductService)

/packages

- commerce

  - product
  - carts
  - IProductService
  - ICartService
  - adapters/impls
    - CustomProductService
    - CustomCartService

- payments
