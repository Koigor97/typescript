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
console.log(person1);
person1.greet();
const person2 = new Person("Grace", "grace.morales101@yahoo.com");
console.log(person2);
person2.greet();
// Applying the principle of Inhertance to the User class
class User extends Person {
    dob;
    age;
    constructor(name, email, dob){
        super(name, email);
        this.dob = dob;
    }
}
const sam = new User("Sam", "samkaliga@outlook.com", "22 Nov 1998");
console.log(sam);
sam.greet();

//# sourceMappingURL=index.155c0555.js.map
