interface Coffee {
    getCoffee(): string;
    getPrice(): number;
}

class Espresso implements Coffee {
    public getCoffee(): string {
        return 'Espresso ☕';
    }
    public getPrice(): number {
        return 1.5;
    }
}

class AbstractDecorator implements Coffee {
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

class MilkDecorator extends AbstractDecorator {
    public getCoffee(): string {
        return `${super.getCoffee()} + Milk 🥛`;
    }
    public getPrice(): number {
        return super.getPrice() + 1;
    }
}

class CinnamonDecorator extends AbstractDecorator {
    public getCoffee(): string {
        return `⋆.˚✮ ${super.getCoffee()} + Cinnamon ✮˚.⋆`;
    }
    public getPrice(): number {
        return super.getPrice() + 1;
    }
}

function clientCode(coffee: Coffee) {
    console.log(`Order: ${coffee.getCoffee()}\nPrice: $${coffee.getPrice()}`);
}

const simple = new Espresso();
console.log('Client: I want a simple espresso.');
clientCode(simple);
console.log('');

const decorator1 = new MilkDecorator(simple);
console.log('Client: I want an espresso with milk, please.');
clientCode(decorator1);
console.log('');

const decorator2 = new CinnamonDecorator(decorator1);
console.log('Client: I want an espresso with milk and cinnamon, please.');
clientCode(decorator2);
console.log('');