import {AbstractDecorator} from "./AbstractDecorator";

export class ChocolateDecorator extends AbstractDecorator {
    public getCoffee(): string {
        return `${super.getCoffee()} + Chocolate 🍫`;
    }
    public getPrice(): number {
        return super.getPrice() + 1;
    }
}