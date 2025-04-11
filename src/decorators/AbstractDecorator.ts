import {Coffee} from "../components/Coffee";

export class AbstractDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    public getCoffee(): string {
        return this.coffee.getCoffee();
    }

    public getPrice(): number {
        return this.coffee.getPrice();
    }
}