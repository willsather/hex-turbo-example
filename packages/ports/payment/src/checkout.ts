import { Checkout } from "./types/Checkout";
import {
  prepareCustomCheckout,
  processCustomCheckout,
} from "@repo/custom-payment";

export async function prepareCheckout(
  amount: string,
  currency: string
): Promise<Checkout> {
  const customCheckout = await prepareCustomCheckout(amount, currency);

  return customCheckout as Checkout;
}

export async function processCheckout(checkoutId: string): Promise<Checkout> {
  const customCheckout = await processCustomCheckout(checkoutId);

  return customCheckout as Checkout;
}
