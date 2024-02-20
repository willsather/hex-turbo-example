import { prepareCheckout, processCheckout } from "../src/checkout";

describe("checkout", () => {
  it("should prepare a checkout", async () => {
    const checkout = await await prepareCheckout("30.00", "EUR");

    expect(checkout).toEqual({
      id: "checkout-one",
      amount: "30.00",
      currency: "EUR",
      complete: false,
    });
  });

  it("should process a checkout", async () => {
    const checkout = await await processCheckout("checkout-one");

    expect(checkout).toEqual({
      id: "checkout-one",
      amount: "30.00",
      currency: "EUR",
      complete: true,
    });
  });
});
