"use strict";
// TODO-1: Ticket #AO1 - Developer Aliases List
Object.defineProperty(exports, "__esModule", { value: true });
exports.featureFlag = exports.acceptedMIMETypes = exports.interInfoTuples = exports.developerAliases = void 0;
let developerUsernames = ["sam_dev", "emily_qt", "max_code"];
const developerAliases = () => {
    developerUsernames.forEach((dev, idx) => {
        console.log(`Developer #${idx}: ${dev}`);
    });
    console.log("");
};
exports.developerAliases = developerAliases;
const listOfInterTuples = [
    ["Koigor Fogbawa", "Dev", 10],
    ["Juliana Alpha", "QA", 10],
    ["Sam Turay", "DevOps", 40],
    ["Sarah Turay", "Design", 25],
];
const interInfoTuples = () => {
    listOfInterTuples.forEach((interTuple) => {
        console.log(`${interTuple[0]} from ${interTuple[1]} has completed ${interTuple[2]} weeks`);
    });
    console.log("");
};
exports.interInfoTuples = interInfoTuples;
// TODO-3: Ticket #AO3 = Read-only MIME Types
exports.acceptedMIMETypes = [
    "pdf",
    "docx",
    "png",
    "jpeg",
    "jpg",
    "svg"
];
// TODO-4: Ticket #AO4 = Feature Flags Enum
var featureFlags;
(function (featureFlags) {
    featureFlags["ENABLED"] = "enabled";
    featureFlags["DISABLED"] = "disabled";
    featureFlags["BETA"] = "beta";
})(featureFlags || (featureFlags = {}));
const featureFlag = () => console.log(`Current feature state: ${featureFlags.BETA.charAt(0).toUpperCase() + featureFlags.BETA.substring(1)}`);
exports.featureFlag = featureFlag;
