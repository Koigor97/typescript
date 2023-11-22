"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Manufacturer;
(function (Manufacturer) {
    Manufacturer["boeing"] = "boeing";
    Manufacturer["airbus"] = "airbus";
    Manufacturer["gulfstream"] = "gulfstream";
    Manufacturer["bombardier"] = "bombardier";
})(Manufacturer || (Manufacturer = {}));
function AircraftManufacturer(manufacturer) {
    return (target) => {
        if (manufacturer === Manufacturer.airbus) {
            target.prototype.origin = "United States Of America";
            target.prototype.manufacturer = Manufacturer.airbus;
            target.prototype.type = "Jet";
            target.prototype.airbusMethod = () => {
                console.log("This is the Airbus Method");
            };
        }
        else if (manufacturer === Manufacturer.gulfstream) {
            target.prototype.origin = "United States Of America";
            target.prototype.manufacturer = Manufacturer.gulfstream;
            target.prototype.type = "Jet";
            target.prototype.gulfstreamMethod = () => {
                console.log("This is the Gulfstream Method");
            };
        }
        else if (manufacturer === Manufacturer.bombardier) {
            target.prototype.origin = "Quebec, Canada";
            target.prototype.manufacturer = Manufacturer.bombardier;
            target.prototype.type = "Helicopter";
        }
        else {
            target.prototype.origin = "United States Of America";
            target.prototype.manufacturer = Manufacturer.boeing;
            target.prototype.type = Manufacturer.airbus;
        }
    };
}
let Airplane = class Airplane {
    _aircraftModel;
    pilot;
    constructor(_aircraftModel, pilot) {
        this._aircraftModel = _aircraftModel;
        this.pilot = pilot;
    }
    pilotName() {
        console.log(this.pilot);
    }
    get aircraftModel() {
        return this._aircraftModel;
    }
};
Airplane = __decorate([
    AircraftManufacturer(Manufacturer.gulfstream),
    __metadata("design:paramtypes", [String, String])
], Airplane);
const kenyaAirways = new Airplane("KQ 170", "John Sesay");
// console.log(kenyaAirways);
// kenyaAirways.airbusMethod
//   ? kenyaAirways.airbusMethod()
//   : console.log("Method doesn't exist");
let Helicopter = class Helicopter {
    _aircraftModel;
    pilot;
    constructor(_aircraftModel, pilot) {
        this._aircraftModel = _aircraftModel;
        this.pilot = pilot;
    }
    pilotName() {
        console.log(this.pilot);
    }
    get aircraftModel() {
        return this._aircraftModel;
    }
};
Helicopter = __decorate([
    AircraftManufacturer(Manufacturer.bombardier),
    __metadata("design:paramtypes", [String, String])
], Helicopter);
const helicopter = new Helicopter("Winglet 155", "Micheal Brewah");
function StaticMethoDecorator(constructor, methodName, descriptor) {
    console.log(constructor);
    console.log(methodName);
    console.log(descriptor);
    descriptor.writable = false;
}
function ParameterDecorator(classPrototype, methodName, index) {
    console.log(classPrototype);
    console.log(methodName);
    console.log(index);
}
function PropertyDecorator(classPrototype, propertyName) {
    console.log(classPrototype);
    console.log(propertyName);
}
function AccessorDecorator(constructor, accessorName, descriptor) {
    console.log(constructor);
    console.log(accessorName);
    console.log(descriptor);
}
class Yatch {
    _typeOfYatch;
    constructor(typeOfYatch) {
        this._typeOfYatch = typeOfYatch;
    }
    static numberOfRooms() {
        console.log("5 Bedrooms");
    }
    // @MethoDecorator
    captainName(name) {
        console.log(name);
    }
    engineType(name) {
        console.log(name);
    }
    get typeOfYatch() {
        return this._typeOfYatch;
    }
}
__decorate([
    PropertyDecorator,
    __metadata("design:type", String)
], Yatch.prototype, "_typeOfYatch", void 0);
__decorate([
    __param(0, ParameterDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Yatch.prototype, "captainName", null);
__decorate([
    AccessorDecorator,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Yatch.prototype, "typeOfYatch", null);
__decorate([
    StaticMethoDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Yatch, "numberOfRooms", null);
const yatchMagdalene = new Yatch("Winglet 155");
yatchMagdalene.captainName = () => console.log("Is it xhanged");
// yatchMagdalene.captainName();
