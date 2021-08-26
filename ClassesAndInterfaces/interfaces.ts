//Function types
type AddFn = (a: number, b: number) => number;

interface IAddFn {
    (a: number, b: number): number;
}

const add: AddFn = (n1: number, n2: number) => {
    return n1 + n2;
};
//Interfaces for objects

interface Named {
    readonly name: string;
    outputName?: string;
}
interface Greetable extends Named {
    greet(phrase: string): void;
}

let user1: Greetable;

class Person implements Greetable {
    constructor(public name: string, public secondName?: string) {}

    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    }
}

user1 = {
    name: "Oleg",
    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    },
};

let user2 = new Person("Jesus");
user1.greet("Hello I am");
user2.greet("Hello I am");
