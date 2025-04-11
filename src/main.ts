interface Coffee {
    getCoffee(): string;
}

class Espresso implements Coffee {
    public getCoffee(): string {
        return 'Espresso ☕';
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
}

class MilkDecorator extends AbstractDecorator {
    public getCoffee(): string {
        return `${super.getCoffee()} + Milk 🥛`;
    }
}

class CinnamonDecorator extends AbstractDecorator {
    public getCoffee(): string {
        return `⋆.˚✮ ${super.getCoffee()} + Cinnamon ✮˚.⋆`;
    }
}

function clientCode(coffee: Coffee) {
    console.log(`${coffee.getCoffee()}`);
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