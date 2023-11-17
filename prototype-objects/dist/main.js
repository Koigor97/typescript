"use strict";

const book = {
  title: "Lord Of The Rings",
  authors: ["Bryan", "Charles", "Koigor", "Gibril"],
  chapters: 50,
  currentChapter: 30,

  read() {
    console.log(this);
  },

  getBookTitle() {
    return this.title;
  },

  getAuthors() {
    console.log("Co-authors:");
    this.authors.forEach((author) => {
      console.log(`${this.title} - ${author}`);
    });
  },
};

// book.read();
// console.log(book.getBookTitle());
// book.getAuthors();

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.point = 0;
  }

  login() {
    console.log(`${this.name}, has logged in`);
  }

  logout() {
    console.log(`${this.name}, has logged out`);
  }

  addPoint() {
    this.point++;
    console.log(`total point is: ${this.point}`);
  }
}

const bryan = new User("Bryan", "bizzy@gmail.com");
// const hassan = new User("Hassan", "sasepo@outlook.com");

console.log(bryan);

function Employee(name, id, department) {
  this.name = name;
  this.id = id;
  this.department = department;

  this.employeeBadge = () =>
    console.log(
      `Name: ${this.name}\nID: ${this.id}\nDepartment: ${this.department}`
    );
}

Employee.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

const chad = new Employee("Chad", "#f228fhry8", "IT Department");

console.log(chad);
