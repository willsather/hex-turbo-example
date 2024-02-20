import { CustomCheckout } from "./types/CustomCheckout";

export async function prepareCheckout(
  amount: string,
  currency: string
): Promise<CustomCheckout> {
  // POST to payment processor to prepare (or instantiate) a session/checkout instance

  return await Promise.resolve({
    id: "checkout-one",
    amount: amount,
    currency: currency,
    complete: false,
  });
}

export async function processCheckout(
  checkoutId: string
): Promise<CustomCheckout> {
  // POST to payment processor to finalize (or complete) a session/checkout instance

  return await Promise.resolve({
    id: checkoutId,
    amount: "30.00",
    currency: "EUR",
    complete: true,
  });
}
