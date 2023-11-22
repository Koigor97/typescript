enum Manufacturer {
  boeing = "boeing",
  airbus = "airbus",
  gulfstream = "gulfstream",
  bombardier = "bombardier",
}

interface AircraftInterface {
  _aircraftModel: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  gulfstreamMethod?: () => void;
}

function AircraftManufacturer(manufacturer: Manufacturer) {
  return (target: Function) => {
    if (manufacturer === Manufacturer.airbus) {
      target.prototype.origin = "United States Of America";
      target.prototype.manufacturer = Manufacturer.airbus;
      target.prototype.type = "Jet";
      target.prototype.airbusMethod = () => {
        console.log("This is the Airbus Method");
      };
    } else if (manufacturer === Manufacturer.gulfstream) {
      target.prototype.origin = "United States Of America";
      target.prototype.manufacturer = Manufacturer.gulfstream;
      target.prototype.type = "Jet";
      target.prototype.gulfstreamMethod = () => {
        console.log("This is the Gulfstream Method");
      };
    } else if (manufacturer === Manufacturer.bombardier) {
      target.prototype.origin = "Quebec, Canada";
      target.prototype.manufacturer = Manufacturer.bombardier;
      target.prototype.type = "Helicopter";
    } else {
      target.prototype.origin = "United States Of America";
      target.prototype.manufacturer = Manufacturer.boeing;
      target.prototype.type = Manufacturer.airbus;
    }
  };
}

@AircraftManufacturer(Manufacturer.gulfstream)
class Airplane implements AircraftInterface {
  constructor(public _aircraftModel: string, private pilot: string) {}

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const kenyaAirways: AircraftInterface = new Airplane("KQ 170", "John Sesay");
// console.log(kenyaAirways);
// kenyaAirways.airbusMethod
//   ? kenyaAirways.airbusMethod()
//   : console.log("Method doesn't exist");

@AircraftManufacturer(Manufacturer.bombardier)
class Helicopter implements AircraftInterface {
  constructor(public _aircraftModel: string, private pilot: string) {}

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const helicopter: AircraftInterface = new Helicopter(
  "Winglet 155",
  "Micheal Brewah"
);
// console.log(helicopter);

/////////////////////////////////////////////////////////////////////////
interface YatchInterface {
  _typeOfYatch: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  gulfstreamMethod?: () => void;
  captainName: (name: string) => void;
}

function StaticMethoDecorator(
  constructor: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(constructor);
  console.log(methodName);
  console.log(descriptor);
  descriptor.writable = false;
}

function ParameterDecorator(
  classPrototype: Object,
  methodName: string,
  index: number
) {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

function PropertyDecorator(classPrototype: Object, propertyName: string) {
  console.log(classPrototype);
  console.log(propertyName);
}

function AccessorDecorator(
  constructor: Object,
  accessorName: string,
  descriptor: PropertyDescriptor
) {
  console.log(constructor);
  console.log(accessorName);
  console.log(descriptor);
}

class Yatch {
  @PropertyDecorator
  public _typeOfYatch: string;

  constructor(typeOfYatch: string) {
    this._typeOfYatch = typeOfYatch;
  }

  @StaticMethoDecorator
  public static numberOfRooms(): void {
    console.log("5 Bedrooms");
  }

  // @MethoDecorator
  public captainName(@ParameterDecorator name: string) {
    console.log(name);
  }

  public engineType(name: string) {
    console.log(name);
  }

  @AccessorDecorator
  public get typeOfYatch() {
    return this._typeOfYatch;
  }
}

const yatchMagdalene: YatchInterface = new Yatch("Winglet 155");

yatchMagdalene.captainName = () => console.log("Is it xhanged");
// yatchMagdalene.captainName();
