import CheckoutService from "./interfaces/CheckoutService";
import { Checkout } from "./types/Checkout";

export default class CustomCheckoutService implements CheckoutService {
  async prepareCheckout(amount: string, currency: string): Promise<Checkout> {
    // This would be where you build implementation to instantiating a checkout with this adapter

    return Promise.resolve({
      id: "checkout-id-1",
      amount,
      currency,
      complete: false,
    });
  }

  async processCheckout(id: string): Promise<Checkout> {
    // This would be where you build implementation to processing a checkout with this adapter

    return Promise.resolve({
      id,
      amount: "30.39",
      currency: "EUR",
      complete: true,
    });
  }
}
