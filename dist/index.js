"use strict";
const { developerAliases, interInfoTuples, acceptedMIMETypes, featureFlag } = require('./array_and_enums/array_n_enums');
const companyName = "=========== THE PINEAPPLE 🍍 COMPANY ==============";
console.log(`${companyName}\n`);
//================================ ARRAYS AND ENUMS IN TS ==========================//
// ticket 1
console.log("Ticket #AO1\n");
developerAliases();
// ticket 2
console.log("Ticket #AO2\n");
interInfoTuples();
// ticket 3
console.log("Ticket #AO3\n");
const formattedMIMETypes = [];
acceptedMIMETypes.forEach((type) => {
    formattedMIMETypes.push(`application/${type}`);
});
console.log(`Allowed MIME types:`, formattedMIMETypes.join(', '));
console.log("");
// ticket 4
console.log("Ticket #AO4\n");
featureFlag();
console.log("");
