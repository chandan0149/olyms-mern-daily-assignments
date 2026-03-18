const fs = require("fs").promises;

async function handleFile() {
    try {
        const input = "Node.js is awesome!";

        // Write to file
        await fs.writeFile("feedback.txt", input);
        console.log("Data written successfully.");

        // Read from file
        console.log("Reading file...");
        const data = await fs.readFile("feedback.txt", "utf8");
        console.log(data);

    } catch (error) {
        console.error("Error:", error);
    }
}

handleFile();