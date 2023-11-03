// Funtion expression in TypeScript
const UserBio = function (
  name: string,
  age: number,
  job: string,
  gender?: string
): string {
  return `Name: ${name}\nAge: ${age}\nGender: ${gender}\nJob: ${job}`;
};

const info = UserBio("Samuel Turay", 25, "Software Engineer", "M");
// console.log(info);

// _______________________________________
// Custom Parameters and Return type
enum DateOfBirth {
  year = "years",
  month = "months",
  day = "days",
}

enum Education {
  schoolOrUniversity = "University",
  diplomaOrDegree = "Degree",
}

type greetFunction = (
  greeting: string,
  name: string,
  education: string
) => string;

type Person = {
  name: string;
  age: number;
  gender: string;
  dateOfBirth: DateOfBirth;
  country: string;
  sayHello: greetFunction;
};

const person1: Person = {
  name: "Samuel",
  age: 25,
  gender: "M",
  dateOfBirth: DateOfBirth.year,
  country: "Sierra Leone",
  sayHello: (greeting: string, name: string, education: string) => {
    return `${greeting}, I am ${name}, a student of the ${education} of BYU Idaho.`;
  },
};

const convertAgeToMonths = function (person: Person): Person {
  person.age = person.age * 12;
  person.dateOfBirth = DateOfBirth.month;
  return person;
};

// console.log(convertAgeToMonths(person1));
// console.log(
//   person1.sayHello("Hello", person1.name, Education.schoolOrUniversity)
// );

// Function Overloading
// trip reservation

type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation | never;
  (departureDate: Date, departingFrom: string, destination: string):
    | Reservation
    | never;
};

const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }

  throw new Error("Please provide valid details to reserve a ticket");
};

console.log(reserve(new Date(), new Date(), "Johannesburg", "Freetown"));

console.log(reserve(new Date(), "Johannesburg", "Freetown"));
