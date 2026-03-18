const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    console.log("File Content:", data);

    // Bonus: intentional delay
    setTimeout(() => {
        console.log("Read operation completed");
    }, 1000);
});