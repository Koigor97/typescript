// example of typescript..
const multiply = (a: number, b: number): number => a * b;
// console.log(multiply(5, 2)); // output: 10

// The different type of types
//ANY type
let firstName: any = "Mark";
// console.log(`firstName is now: ${firstName}`);
//firstName is now: Mark

firstName = 365;
// console.log(`firstName is now: ${firstName}`);
//firstName is now: 365

firstName = [
  "Jerry",
  35,
  "Mary",
  { skill: "programming", job: "Software Developer" },
];
// console.log(`firstName is now: ${firstName}`);
// firstName is now: Jerry,35,Mary,[object, object]

// UNKNOWN type
// const divideByTwo = function (num: unknown) {
//   return Math.floor(num / 2);
// };

// console.log(divideByTwo(32)); // 16
// console.log(divideByTwo("pizza")); // NaN

// A better way would be
const divideByTwo = function (num: unknown) {
  if (typeof num === "number") return Math.floor(num / 2);
  else return "This function takes a number. Please enter a valid number";
};

// console.log(divideByTwo(32)); // 16
// console.log(divideByTwo("pizza")); // This function takes a number. Please enter a valid number

// BOOLEAN type
let booleanType: boolean;
booleanType = true;
// console.log(booleanType);

booleanType = 1 > 0;
// console.log(booleanType);

// NUMBER type;
const num: number = 27;
const total: number = num * 28;

// console.log(num);
// console.log(total);

// BIGINT type
const bigInt = 834624515n; // the javaScript way
const maximumInt = Number.MAX_SAFE_INTEGER;
// console.log(maximumInt); //9007199254740991
// console.log(maximumInt + 1); //9007199254740992
// console.log(maximumInt + 2); //9007199254740992

//OBJECT type
// JavaScript way
const job = {
  name: "Software Developer",
  salaryPerMonth: 10_000,
};

// TypeScript way
const country: {
  name: string;
  population: number;
  cities: [string, string, string, string];
} = {
  name: "South Africa",
  population: 59_000_039,
  cities: ["Johannesburg", "Pretoria", "Cape Town", "Durban"],
};

//console.log(job);
// console.log(country);

// example of using the 'type' keyword
type Order = {
  foodName: string;
  code: number;
  collectTime: string;
  price: number;
  customer: {};
};

type Customer = {
  name: string;
  address: string;
  phoneNumber: number;
  hasPaid: boolean;
};

// usage of type
const customerInfo: Customer = {
  name: "Sarah Alpha",
  address: "360 Ridge View, Belverly Hill",
  phoneNumber: 3764910923,
  hasPaid: true,
};

const pizzaPalor: Order = {
  foodName: "italiano Pizza",
  code: 237006,
  collectTime: new Date().toDateString(),
  price: 80,
  customer: { ...customerInfo },
};

// console.log(pizzaPalor);

// UNION type

type ElectricVehicle = {
  name: string;
  category: string;
  canSelfDrive: boolean;
  batteryLife: number;
};

type RegularVehicle = {
  name: string;
  category: string;
  tankCapacity: number;
  milesDriven: number;
};

type Vehicle = ElectricVehicle | RegularVehicle;

const koiMotors: Vehicle = {
  name: "Koi Motors",
  category: "CrossOver-Hybrid",
  tankCapacity: 68.5,
  batteryLife: 90,
  canSelfDrive: true,
};
