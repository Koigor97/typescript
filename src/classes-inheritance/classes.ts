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
console.log(person1);
person1.greet();

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
