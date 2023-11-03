// example of typescript..
const multiply = (a, b)=>a * b;
// console.log(multiply(5, 2)); // output: 10
// The different type of types
//ANY type
let firstName = "Mark";
// console.log(`firstName is now: ${firstName}`);
//firstName is now: Mark
firstName = 365;
// console.log(`firstName is now: ${firstName}`);
//firstName is now: 365
firstName = [
    "Jerry",
    35,
    "Mary",
    {
        skill: "programming",
        job: "Software Developer"
    }
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
const divideByTwo = function(num) {
    if (typeof num === "number") return Math.floor(num / 2);
    else return "This function takes a number. Please enter a valid number";
};
// console.log(divideByTwo(32)); // 16
// console.log(divideByTwo("pizza")); // This function takes a number. Please enter a valid number
// BOOLEAN type
let booleanType;
booleanType = true;
// console.log(booleanType);
booleanType = true;
// console.log(booleanType);
// NUMBER type;
const num = 27;
const total = num * 28;
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
    salaryPerMonth: 10000
};
// TypeScript way
const country = {
    name: "South Africa",
    population: 59000039,
    cities: [
        "Johannesburg",
        "Pretoria",
        "Cape Town",
        "Durban"
    ]
};
// usage of type
const customerInfo = {
    name: "Sarah Alpha",
    address: "360 Ridge View, Belverly Hill",
    phoneNumber: 3764910923,
    hasPaid: true
};
const pizzaPalor = {
    foodName: "italiano Pizza",
    code: 237006,
    collectTime: new Date().toDateString(),
    price: 80,
    customer: {
        ...customerInfo
    }
};
const koiMotors = {
    name: "Koi Motors",
    category: "CrossOver-Hybrid",
    tankCapacity: 68.5,
    batteryLife: 90,
    canSelfDrive: true
};
const AlphaJ = {
    name: "Alpha Juls",
    category: "Sedan",
    tankCapacity: 38.7,
    batteryLife: 100,
    canSelfDrive: true
};
// console.log(AlphaJ);
// ARRAY in typescript
const grades = [
    30,
    75,
    88,
    97,
    25,
    100
];
// array with different values
const studentInfo = [
    "Joseph Kaigus",
    15,
    {
        history: 75,
        math: 50,
        agriculture: 90
    }
];
// console.log(grades);
// console.log(studentInfo);
// TUPLES in typescript
let randomItems;
randomItems = [
    "jamie",
    30,
    false
];
// console.log(randomItems);
// VOID and NEVER type
const sayHello = ()=>console.log(`Hello World`); // void
const raiseAnError = ()=>{
    throw new Error("Just feel like raising an error");
};
var Categories;
// sayHello();
// raiseAnError();
//ENUMS type
(function(Categories) {
    Categories["student"] = "student";
    Categories["lecturer"] = "lecturer";
    Categories["headOfDepartment"] = "head of department";
})(Categories || (Categories = {}));
const person = {
    name: "Sarah Alpha",
    id: 1665,
    password: "i@mQute",
    category: "student"
};
console.log(person);

//# sourceMappingURL=index.b0465d9d.js.map
