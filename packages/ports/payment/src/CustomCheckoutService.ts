import ICheckoutService from "./interfaces/ICheckoutService";
import { prepareCustomCheckout, processCustomCheckout } from "@repo/custom-payment";
import { Checkout } from "./types/Checkout";

export default class CustomCheckoutService implements ICheckoutService {
    async prepareCheckout(amount: string, currency: string): Promise<Checkout> {
        const customCheckouts = await prepareCustomCheckout(amount, currency);

        return customCheckouts as Checkout;
    };
    
    async processCheckout(id: string): Promise<Checkout> {
        const customCheckout = await processCustomCheckout(id);

        return customCheckout as Checkout;
    };
}