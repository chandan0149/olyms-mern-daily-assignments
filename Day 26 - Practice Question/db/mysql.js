const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Chandan@1205",
  database: "skillsphere"
});

connection.connect((err) => {
  if (err) {
    console.log("MySQL connection failed");
  } else {
    console.log("MySQL connected successfully");
  }
});

module.exports = connection;