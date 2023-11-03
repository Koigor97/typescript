// Funtion expression in TypeScript
const UserBio = function(name, age, job, gender) {
    return `Name: ${name}\nAge: ${age}\nGender: ${gender}\nJob: ${job}`;
};
const info = UserBio("Samuel Turay", 25, "Software Engineer", "M");
var DateOfBirth;
// console.log(info);
// _______________________________________
// Custom Parameters and Return type
(function(DateOfBirth) {
    DateOfBirth["year"] = "years";
    DateOfBirth["month"] = "months";
    DateOfBirth["day"] = "days";
})(DateOfBirth || (DateOfBirth = {}));
var Education;
(function(Education) {
    Education["schoolOrUniversity"] = "University";
    Education["diplomaOrDegree"] = "Degree";
})(Education || (Education = {}));
const person1 = {
    name: "Samuel",
    age: 25,
    gender: "M",
    dateOfBirth: "years",
    country: "Sierra Leone",
    sayHello: (greeting, name, education)=>{
        return `${greeting}, I am ${name}, a student of the ${education} of BYU Idaho.`;
    }
};
const convertAgeToMonths = function(person) {
    person.age = person.age * 12;
    person.dateOfBirth = "months";
    return person;
};
const reserve = (departureDate, returnDateOrDepartingFrom, departingFromOrDestination, destination)=>{
    if (returnDateOrDepartingFrom instanceof Date && destination) return {
        departureDate: departureDate,
        returnDate: returnDateOrDepartingFrom,
        departingFrom: departingFromOrDestination,
        destination: destination
    };
    else if (typeof returnDateOrDepartingFrom === "string") return {
        departureDate: departureDate,
        departingFrom: returnDateOrDepartingFrom,
        destination: departingFromOrDestination
    };
    throw new Error("Please provide valid details to reserve a ticket");
};
console.log(reserve(new Date(), new Date(), "Johannesburg", "Freetown"));
console.log(reserve(new Date(), "Johannesburg", "Freetown"));

//# sourceMappingURL=index.08e02114.js.map
