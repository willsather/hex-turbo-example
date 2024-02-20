import { prepareCheckout, processCheckout } from "../src/checkout";

jest.mock("@repo/custom-payment", () => ({
  prepareCustomCheckout: jest.fn().mockResolvedValue({
    id: "checkout-one",
    amount: "30.00",
    currency: "EUR",
    complete: false,
  }),
  processCustomCheckout: jest.fn().mockResolvedValue({
    id: "checkout-one",
    amount: "30.00",
    currency: "EUR",
    complete: true,
  }),
}));

describe("checkout", () => {
  it("should prepare a checkout", async () => {
    const checkout = await prepareCheckout("30.00", "EUR");

    expect(checkout).toEqual({
      id: "checkout-one",
      amount: "30.00",
      currency: "EUR",
      complete: false,
    });
  });

  it("should process a checkout", async () => {
    const checkout = await processCheckout("checkout-one");

    expect(checkout).toEqual({
      id: "checkout-one",
      amount: "30.00",
      currency: "EUR",
      complete: true,
    });
  });
});
