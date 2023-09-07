// example of typescript..
// const multiply = (a: number, b: number): number => a * b;
// console.log(multiply(5, 2)); // output: 10

// The different type of types
//ANY type
// let firstName: any = "Mark";
// console.log(`firstName is now: ${firstName}`);
//firstName is now: Mark

// firstName = 365;
// console.log(`firstName is now: ${firstName}`);
//firstName is now: 365

// firstName = [
//   "Jerry",
//   35,
//   "Mary",
//   { skill: "programming", job: "Software Developer" },
// ];
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

console.log(divideByTwo(32)); // 16
console.log(divideByTwo("pizza")); // This function takes a number. Please enter a valid number
