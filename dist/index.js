"use strict";
const { developerAliases, interInfoTuples, acceptedMIMETypes, featureFlag } = require('./array_and_enums/array_n_enums');
const { mailNotifier, batchTaskCreator, } = require('./functions/function_in_ts');
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
//=================================== FUNCTIONS IN TS ===============================//
// ticket 5
console.log("Ticket #AO5\n");
async function logEmail(email) {
    const result = await mailNotifier(email);
    console.log(result);
}
logEmail('sam@email.com');
// ticket 6
console.log("Ticket #AO6\n");
const batchTask = batchTaskCreator("#dev_007", "Feature X", "Code Review", "Deployment");
console.log(batchTask);
console.log("");
