// Creating a Class
class Person {
  protected theName: string;
  protected email: string;

  constructor(name: string, email: string) {
    this.theName = name;
    this.email = email;
  }

  public greet() {
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
  protected _age: number | undefined;
  constructor(name: string, email: string, protected dob: string) {
    super(name, email);
  }

  public set age(age: number) {
    if (age > 150 || age < 0) {
      throw new Error("The age must be within 1 - 150 years");
    }

    this._age = age;
  }

  public get age() {
    if (this._age === undefined) {
      throw new Error(
        "The age property has not been set. Please set the age property"
      );
    }

    return this._age;
  }
}

const sam: User = new User("Sam", "samkaliga@outlook.com", "22 Nov 1998");
sam.age = 25;

// console.log(sam);
// sam.greet();

// Static properties and members
class ElectricSuv {
  public static color: string = "Navy-green";

  public static milesPerCharge(miles: number, batteryLife: number) {
    return miles / batteryLife;
  }
}

// console.log(ElectricSuv.color);
// console.log(ElectricSuv.milesPerCharge(10, 60));

// Abstract classes

type CareerFair = {
  date: Date;
  nameOfEvent: string;
  venue: string;
}[];

abstract class Department {
  protected abstract careerFair: CareerFair;
  protected constructor(
    protected name: string,
    protected headOfDepartment: string
  ) {}

  public bookCareerFair(careerEvent: CareerFair) {
    if (Array.isArray(careerEvent)) {
      for (const event of careerEvent) {
        this.careerFair.push(event);
      }
    }
  }
}

class LawDepartment extends Department {
  protected careerFair: CareerFair = [];
  constructor() {
    super("Law Department", "LLM - Mr. Jorkundeh Coker");
  }
}

class SoftwareEngineeringDepartment extends Department {
  protected careerFair: CareerFair = [];

  constructor() {
    super("Software Engineering Department", "Dr. Sigismund Johnson");
  }
}

const lawDprtCareerEvent: CareerFair = [
  {
    date: new Date(2023, 9, 15),
    nameOfEvent: "Law Society Networking",
    venue: "Amphitheatre",
  },

  {
    date: new Date(2023, 11, 22),
    nameOfEvent: "Paralegal Associate Conference",
    venue: "Youyi Building",
  },
];

const softwareEngineeringCareerEvent: CareerFair = [
  {
    date: new Date(2024, 2, 17),
    nameOfEvent: "FinTech Company Summit",
    venue: "238 Menlyn Maine",
  },
];

const lawDepartment: LawDepartment = new LawDepartment();
const softwareEngineeringDepartment: SoftwareEngineeringDepartment =
  new SoftwareEngineeringDepartment();

lawDepartment.bookCareerFair(lawDprtCareerEvent);
softwareEngineeringDepartment.bookCareerFair(softwareEngineeringCareerEvent);

// console.log(lawDepartment);
// console.log(softwareEngineeringDepartment);

// Interface class
interface SneakerBrand {
  brandName: string;
  sneakerType: string;
  year?: number;
  sneakerDetails?: () => void;
}

const sneaker1: SneakerBrand = {
  brandName: "Nike",
  sneakerType: "Air Force 1",
  year: 2014,
  sneakerDetails() {
    console.log(
      `Brand: ${this.brandName}\nType: ${this.sneakerType}\nYear: ${this.year}`
    );
  },
};

console.log(sneaker1);
sneaker1.sneakerDetails?.();

interface BrandAddress extends SneakerBrand {
  address: string;
  mallLocation?: string;
  branchManager?: string;
}

const sneaker2: BrandAddress = {
  brandName: "Air Jordan",
  sneakerType: "Jordan 1s",
  year: 2002,
  address: "145 Menyln Maine Mall",
  mallLocation: "Level 3 East off H&M",
  branchManager: "Mr Kowalski",
};

// console.log(sneaker2);
