// typeScript using the "typeof" inference as a typeguard
function printStrings(theStr: string | string[] | null) {
  if (theStr && typeof theStr === "object") {
    for (const str of theStr) {
      console.log(str);
    }
  } else if (theStr === "string") {
    console.log(theStr);
  } else {
    console.log("Pass an array of strings or a string");
  }
}

const listOfStrings: string[] = ["Jamie", "Zack", "Babayaega", "Kelan"];
// printStrings(listOfStrings);

// Truthiness narrowing
type Pupil = {
  name: string;
  age?: number;
};

function printPupil(person: Pupil) {
  if (person.age) {
    console.log(person.age);
  } else {
    console.log("Age undefine");
  }
}

const student: Pupil = {
  name: "Johnny",
  age: 23,
};

// printPupil(student);

// Equality narrowing
type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}

// InstanceOf typeGuard
abstract class Product {
  constructor(public name: string, public price: number) {}

  abstract getPrice(): number;
}

class Electronics extends Product {
  constructor(name: string, price: number, public warranty: number) {
    super(name, price);
  }

  getPrice(): number {
    return this.price;
  }
}

class Clothing extends Product {
  constructor(
    name: string,
    price: number,
    public size: string,
    public material: string
  ) {
    super(name, price);
  }

  getPrice(): number {
    return this.price;
  }
}

function displayDetails(product: Product): void {
  console.log(`Name: ${product.name}`);
  console.log(`Price: ${product.price}`);

  if (product instanceof Electronics) {
    console.log(`Warranty: ${product.warranty}`);
  } else if (product instanceof Clothing) {
    console.log(`Size: ${product.size}`);
    console.log(`Material: ${product.material}`);
  }
}

const polo = new Clothing("Polo T-shirt", 50, "Medium", "Cotton");
// displayDetails(polo);
