"use strict";
// Type Casting
const numbers = {
    x: 30,
    y: {
        z: 44,
    },
};
// numbers.y.z = 50;
// console.log(numbers);
let firstnameField = document.querySelector("#firstName");
firstnameField.value;
function nextDayForAWeekDay(weekday) {
    switch (weekday) {
        case "Mon":
            return "Tue";
        case "Tue":
            return "Wed";
        case "Wed":
            return "Thu";
        case "Thu":
            return "Fri";
        case "Fri":
            return "Sat";
    }
}
function FetchUserDetails(name) {
    return new Promise((res, rej) => {
        if (name) {
            res({
                id: 23,
                name: "John",
                servicesList: {
                    count: 2,
                    services: [
                        {
                            id: 1,
                            name: "Accounting",
                            price: 49,
                        },
                        {
                            id: 2,
                            name: "Design",
                            price: 19,
                        },
                    ],
                },
            });
        }
        else
            rej(new Error("Pass new a valid name"));
    });
}
function printServiceList(services) {
    console.log(services);
}
