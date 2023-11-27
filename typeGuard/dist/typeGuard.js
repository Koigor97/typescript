"use strict";
// typeScript using the "typeof" inference as a typeguard
function printStrings(theStr) {
    if (theStr && typeof theStr === "object") {
        for (const str of theStr) {
            console.log(str);
        }
    }
    else if (theStr === "string") {
        console.log(theStr);
    }
    else {
        console.log("Pass an array of strings or a string");
    }
}
const listOfStrings = ["Jamie", "Zack", "Babayaega", "Kelan"];
function printPupil(person) {
    if (person.age) {
        console.log(person.age);
    }
    else {
        console.log("Age undefine");
    }
}
const student = {
    name: "Johnny",
    age: 23,
};
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.sideLength ** 2;
    }
}
// InstanceOf typeGuard
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Electronics extends Product {
    warranty;
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }
    getPrice() {
        return this.price;
    }
}
class Clothing extends Product {
    size;
    material;
    constructor(name, price, size, material) {
        super(name, price);
        this.size = size;
        this.material = material;
    }
    getPrice() {
        return this.price;
    }
}
function displayDetails(product) {
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    if (product instanceof Electronics) {
        console.log(`Warranty: ${product.warranty}`);
    }
    else if (product instanceof Clothing) {
        console.log(`Size: ${product.size}`);
        console.log(`Material: ${product.material}`);
    }
}
const polo = new Clothing("Polo T-shirt", 50, "Medium", "Cotton");
// displayDetails(polo);
