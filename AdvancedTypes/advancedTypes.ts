//Intersection types----------------------------------------------------------------------------------------------------------
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevetedEmployee = Admin & Employee;
interface IElevatedEmployee extends Employee, Admin {}

const e1: ElevetedEmployee = {
    name: "Oleg",
    privileges: ["create-server"],
    startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric; //get a number because it is an only intersection between two types

// Typeguards----------------------------------------------------------------------------------------------------------
function add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        /// <<<<Typeguard
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        //Checking if property exists in object
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        //Checking if property exists in object
        console.log("Privileges: " + emp.startDate);
    }
}

printEmployeeInformation(e1);

//class TypeGuards----------------------------------------------------------------------------------------------------------
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount: number) {
        console.log("Loading cargo ..." + amount);
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        //typeguard for class
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

//Discriminated union----------------------------------------------------------------------------------------------------------

interface Bird {
    type: "bird";
    flyingSpeed: number;
}

interface Horse {
    type: "horse";
    runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed: number;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }

    console.log("Moving speed is: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });

//Type casting----------------------------------------------------------------------------------------------------------

// const userInputElement = <HTMLInputElement>document.querySelector("user-input")!;
const userInputElement = document.querySelector(
    "#user-input"
)! as HTMLInputElement;
userInputElement.value = "Hi there";

// if i am not sure that element wont be null:

const userInputElementNotNull = document.querySelector("#user-input");
if (userInputElementNotNull) {
    (userInputElementNotNull as HTMLInputElement).value = "This is true";
}

//Index types----------------------------------------------------------------------------------------------------------
interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "not a valid string",
};

//Funtion overloads ----------------------------------------------------------------------------------------------------------
type Combinable1 = string | number;
type Numeric1 = number | boolean;
type Universal1 = Combinable & Numeric; //get a number because it is an only intersection between two types

function add1(a: number, b: number): number; // <---function overload
function add1(a: string, b: string): string; // <---function overload
function add1(a: Combinable1, b: Combinable1) {
    if (typeof a === "string" || typeof b === "string") {
        //Typeguard ^
        return a.toString() + b.toString();
    }
    return a + b;
}

// const result = add("max", "oleg") as string;
const resultNum = add1(5, 3); //return will be number
const resultStr = add1("5", "3"); // return will be number

//Optinal chaining----------------------------------------------------------------------------------------------------------

const fetchedUserData = {
    id: "u1",
    name: "Oleg",
    job: {
        title: "CEO",
        description: "My own company",
    },
};

console.log(fetchedUserData?.job?.title);

//Nullish Coalescing ---------------------------------------------------------------
const userInput = "";

const storedData = userInput || "Default";
console.log(storedData);   // logs Default
//if only null or undefined should be treted
const storedData1 = userInput ?? "Default";
console.log(storedData1); //logs ''
