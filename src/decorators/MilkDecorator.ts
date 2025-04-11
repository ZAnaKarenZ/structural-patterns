import {AbstractDecorator} from "./AbstractDecorator";

export class MilkDecorator extends AbstractDecorator {
    public getCoffee(): string {
        return `${super.getCoffee()} + Milk 🥛`;
    }
    public getPrice(): number {
        return super.getPrice() + 1;
    }
}
