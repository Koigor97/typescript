"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemBootMessage = systemBootMessage;
exports.greetingHandler = greetingHandler;
exports.taskEstimator = taskEstimator;
exports.signatureLogger = signatureLogger;
exports.mailNotifier = mailNotifier;
exports.batchTaskCreator = batchTaskCreator;
/*
* TODO 1: Ticket #F01 - Declaring Functions - System Boot Message
* As a developer at PineApple, you've received a ticket to create a function
* that prints a system boot message when the console app starts.
* This function takes no parameters and returns nothing.
*
* Data-type: () => void
* Expected Output:
* System Message: PineApple Internal Tools Initialized 🍍
*/
function systemBootMessage() {
    console.log("System Message: PineApple Internal Tools Initialized 🍍");
}
/*
* TODO 2: Ticket #F02 - Default and Optional Parameters: Greeting Handler
* You're building a welcome banner generator. Create a function that accepts
* a username (required) and a title (optional). If no title is given,
* default it to "Engineer".
*
* Data-type: (name: string, title?: string) => string
* Expected Output:
*   Hello, Lisa – Engineer!
*   Hello, Sam – DevOps!
*/
function greetingHandler(name, title) {
    console.log(`Hello, ${name} - ${title ?? "Engineer"}`);
}
/*
* TODO 3: Ticket #F03 - Custom Parameters & Return Types: Task Estimator
* Create a function that receives the number of tasks and average time per task
* (in hours), and returns the total time estimate.
*
* Data-type: (tasks: number, avgTime: number) => number
* Expected Output:
*   Total estimated time: 16 hours
 */
function taskEstimator(tasks, avgTime) {
    return tasks * avgTime;
}
const theLog = {
    type: "Console",
    sigLogger(message) {
        console.log(`[${this.type}]: ${message}`);
    }
};
function signatureLogger(logType) {
    if (logType.type === "Console") {
        logType.sigLogger("Task created successfully");
    }
    else if (logType.type === "File Log") {
        logType.sigLogger("Task created successfully");
    }
}
/*
* TODO 5: Ticket #F05 - Anonymous Functions: Event Triggers
* Create an array of anonymous functions that simulate event triggers
* like “login”, “logout”, and “task assigned”. Loop through them and
* execute each.
*
*Expected Output:
* `🔁 login event triggered
* `🔁 logout event triggered
* `🔁 task assigned event triggered
 */
const eventTriggers = ["login", "logout", "task assigned"];
eventTriggers.forEach((event) => {
    const trigger = () => {
        console.log(`🔁 ${event} event triggered`);
    };
    trigger();
});
/*
* TODO 6: Ticket #F06 - void and never Types:
* You’ve been assigned to differentiate error-throwing and
* on-returning functions.
* Create:
* - one function that logs and returns nothing (void)
* - another function that throws an error (never)
*
* Expected Output:
*   [Logger] Update failed
*   Error: Operation aborted due to invalid permissions
 */
function voidFunction() {
    console.log("[Logger] Update failed");
}
function neverFunction() {
    throw new Error("Operation aborted due to invalid permissions");
}
const voidNNever = {
    voidFunc: voidFunction,
    neverFunc: neverFunction
};
/*
* TODO 7: Ticket #F07 - Async Functions: Email Notifier:
* You’re implementing a mock async email sender.
* Create an async function that takes a recipient email
* and returns a promise with "Email sent to {email}".
*
* Expected Output:
*  Awaiting…
*   ✅ Email sent to dev@pineapple.com
*/
async function mailNotifier(email) {
    return Promise.resolve(`Awaiting…\n✅ Email sent to ${email}`);
}
/*
* TODO 8: Ticket #F08 - Rest Parameters & Arguments: Batch Task Creator
* Design a function that takes a user ID and a rest
* parameter of task names to assign. Return a summary
* string of tasks assigned.
*
* Expected Output:
*   Assigned 3 tasks to user #dev_002: [‘Bug Fix’, ‘Deployment’, ‘Code Review’]
 */
function batchTaskCreator(userId, ...tasks) {
    return `Assigned ${tasks.length} tasks to user ${userId}: [${tasks.join(', ')}]`;
}
