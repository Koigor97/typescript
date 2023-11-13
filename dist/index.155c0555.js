// Creating a Class
class Person {
    theName;
    email;
    constructor(name, email){
        this.theName = name;
        this.email = email;
    }
    greet() {
        console.log(`Hello ${this.theName}`);
    }
}
//////////////////////////////////////////////////////
const person1 = new Person("John", "jonny20gmail.com");
// console.log(person1);
// person1.greet();
const person2 = new Person("Grace", "grace.morales101@yahoo.com");
// console.log(person2);
// person2.greet();
// Applying the principle of Inhertance to the User class
class User extends Person {
    dob;
    _age;
    constructor(name, email, dob){
        super(name, email);
        this.dob = dob;
    }
    set age(age) {
        if (age > 150 || age < 0) throw new Error("The age must be within 1 - 150 years");
        this._age = age;
    }
    get age() {
        if (this._age === undefined) throw new Error("The age property has not been set. Please set the age property");
        return this._age;
    }
}
const sam = new User("Sam", "samkaliga@outlook.com", "22 Nov 1998");
sam.age = 25;
// console.log(sam);
// sam.greet();
// Static properties and members
class ElectricSuv {
    static color = "Navy-green";
    static milesPerCharge(miles, batteryLife) {
        return miles / batteryLife;
    }
}
class Department {
    name;
    headOfDepartment;
    constructor(name, headOfDepartment){
        this.name = name;
        this.headOfDepartment = headOfDepartment;
    }
    bookCareerFair(careerEvent) {
        if (Array.isArray(careerEvent)) for (const event of careerEvent)this.careerFair.push(event);
    }
}
class LawDepartment extends Department {
    careerFair = [];
    constructor(){
        super("Law Department", "LLM - Mr. Jorkundeh Coker");
    }
}
class SoftwareEngineeringDepartment extends Department {
    careerFair = [];
    constructor(){
        super("Software Engineering Department", "Dr. Sigismund Johnson");
    }
}
const lawDprtCareerEvent = [
    {
        date: new Date(2023, 9, 15),
        nameOfEvent: "Law Society Networking",
        venue: "Amphitheatre"
    },
    {
        date: new Date(2023, 11, 22),
        nameOfEvent: "Paralegal Associate Conference",
        venue: "Youyi Building"
    }
];
const softwareEngineeringCareerEvent = [
    {
        date: new Date(2024, 2, 17),
        nameOfEvent: "FinTech Company Summit",
        venue: "238 Menlyn Maine"
    }
];
const lawDepartment = new LawDepartment();
const softwareEngineeringDepartment = new SoftwareEngineeringDepartment();
lawDepartment.bookCareerFair(lawDprtCareerEvent);
softwareEngineeringDepartment.bookCareerFair(softwareEngineeringCareerEvent);
const sneaker1 = {
    brandName: "Nike",
    sneakerType: "Air Force 1",
    year: 2014,
    sneakerDetails () {
        console.log(`Brand: ${this.brandName}\nType: ${this.sneakerType}\nYear: ${this.year}`);
    }
};
console.log(sneaker1);
sneaker1.sneakerDetails?.();
const sneaker2 = {
    brandName: "Air Jordan",
    sneakerType: "Jordan 1s",
    year: 2002,
    address: "145 Menyln Maine Mall",
    mallLocation: "Level 3 East off H&M",
    branchManager: "Mr Kowalski"
}; // console.log(sneaker2);

//# sourceMappingURL=index.155c0555.js.map
