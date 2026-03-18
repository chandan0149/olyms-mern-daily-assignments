const chalk = require("chalk");
const figlet = require("figlet");

figlet.text("Welcome to Node.js", function (err, data) {
    if (err) {
        console.error("Figlet Error:", err);
        return;
    }
    console.log(chalk.green(data));
});