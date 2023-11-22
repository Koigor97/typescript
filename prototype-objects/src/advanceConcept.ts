// Type Casting
const numbers = {
  x: 30,
  y: {
    z: 44,
  },
} as const;

// numbers.y.z = 50;
// console.log(numbers);

let firstnameField = document.querySelector("#firstName")! as HTMLInputElement;
firstnameField.value;

// Totality
type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = Weekdays | "Sat" | "Sun";

function nextDayForAWeekDay(weekday: Weekdays): Day {
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

// keying-in or Index Accessed Types
type ServiceList = UserDetailsAPIResponse["servicesList"];

type UserDetailsAPIResponse = {
  id: number;
  name: string;
  servicesList: {
    count: number;
    services: {
      id: number;
      name: string;
      price: number;
    }[];
  };
};

function FetchUserDetails(name: string): Promise<UserDetailsAPIResponse> {
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
    } else rej(new Error("Pass new a valid name"));
  });
}

function printServiceList(services: ServiceList): void {
  console.log(services);
}

// FetchUserDetails("John")
//   .then((res) => {
//     console.log(res);
//     printServiceList(res.servicesList);
//   })
//   .catch((err) => console.log(err));

// KeyOf
type Events = {
  id: number;
  date: Date;
  type: "indoor" | "outdoor";
};

type unionofKeysOfEvents = keyof Events;
type Numeric = {
  [key: number]: string;
};

type NumericKeyOf = keyof Numeric;
