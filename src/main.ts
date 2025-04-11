import {Coffee} from "./components/Coffee";
import {Espresso} from "./components/Espresso";
import {MilkDecorator} from "./decorators/MilkDecorator";
import {CinnamonDecorator} from "./decorators/CinnamonDecorator";
import {ChocolateDecorator} from "./decorators/ChocolateDecorator";

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

const decorator2 = new ChocolateDecorator(decorator1);
console.log('Client: I want an espresso with milk and chocolate, please.');
clientCode(decorator2);
console.log('');

const decorator3 = new CinnamonDecorator(decorator2);
console.log('Client: I want an espresso with milk, chocolate and cinnamon, please.');
clientCode(decorator3);
console.log('');