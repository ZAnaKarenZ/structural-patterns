import {AbstractDecorator} from "./AbstractDecorator";

export class CinnamonDecorator extends AbstractDecorator {
    public getCoffee(): string {
        return `⋆.˚✮ ${super.getCoffee()} + Cinnamon ✮˚.⋆`;
    }
    public getPrice(): number {
        return super.getPrice() + 1;
    }
}