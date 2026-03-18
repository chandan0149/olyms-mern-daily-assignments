const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const coursesRouter = require("./routes/courses");

// view engine
app.set("view engine", "ejs");

// built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// logging middleware
app.use(logger);

// root route
app.get("/", (req, res) => {
  res.send("Welcome to SkillSphere LMS API");
});

// users POST route
app.post("/users", (req, res) => {

  const user = req.body;

  res.json({
    message: "User created successfully",
    data: user
  });

});

// courses dynamic route
app.use("/courses", coursesRouter);

// template route
app.get("/courses", (req, res) => {

  const courses = [
    { name: "React Mastery", duration: "6 weeks" },
    { name: "Node.js Bootcamp", duration: "5 weeks" },
    { name: "Cyber Security Basics", duration: "4 weeks" }
  ];

  res.render("courses", { courses });

});

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});