import { Coffee } from "./Coffee";

export class Espresso implements Coffee {
    public getCoffee(): string {
        return 'Espresso ☕';
    }
    public getPrice(): number {
        return 1.5;
    }
}