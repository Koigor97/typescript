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
    Education["schoolOrUniversity"] = "schoolOrUniversity";
    Education["diplomaOrDegree"] = "diplomaOrDegree";
})(Education || (Education = {}));
const person1 = {
    name: "Samuel",
    age: 25,
    gender: "M",
    dateOfBirth: "years",
    country: "Sierra Leone"
};
const convertAgeToMonths = function(person) {
    person.age = person.age * 12;
    person.dateOfBirth = "months";
    return person;
};
console.log(convertAgeToMonths(person1));

//# sourceMappingURL=index.08e02114.js.map
