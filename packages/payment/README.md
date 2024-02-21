# Payment Domain

## Interfaces

`CheckoutService` which provides two methods:

1. `prepareCheckout` which instantiates/prepares a checkout session with a given amount / currency
2. `processCheckout` which takes a specific checkout session and processes the payment
