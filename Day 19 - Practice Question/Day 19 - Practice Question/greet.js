const moment = require("moment");

// Get name from command line
const name = process.argv[2];

if (!name) {
    console.log("Please provide your name");
    return;
}

// Format date and time
const currentDate = moment().format("ddd MMM D YYYY, hh:mm A");

console.log(`Hello, ${name}! Today is ${currentDate}`);