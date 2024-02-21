import { Checkout } from "../types/Checkout";

export default interface CheckoutService {
  prepareCheckout: (amount: string, currency: string) => Promise<Checkout>;
  processCheckout: (checkoutId: string) => Promise<Checkout>;
}
