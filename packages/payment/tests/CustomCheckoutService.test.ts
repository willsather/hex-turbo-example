import CustomCheckoutService from "../src/CustomCheckoutService";

describe("checkout", () => {
  it("should prepare a checkout", async () => {
    const customCheckoutService = new CustomCheckoutService();
    const checkout = await customCheckoutService.prepareCheckout("30.39", "EUR");

    expect(checkout).toEqual({
      id: "checkout-id-1",
      amount: "30.39",
      currency: "EUR",
      complete: false,
    });
  });

  it("should process a checkout", async () => {
    const customCheckoutService = new CustomCheckoutService();
    const checkout = await customCheckoutService.processCheckout("checkout-id-1");

    expect(checkout).toEqual({
      id: "checkout-id-1",
      amount: "30.39",
      currency: "EUR",
      complete: true,
    });
  });
});
