const express = require("express");
const app = express();

// MySQL connection
const db = require("./db/mysql");

// MongoDB connection
require("./db/mongo");

// Models
const Enrollment = require("./models/Enrollment");

// Routes
const coursesRouter = require("./routes/courses");

const Instructor = require("./models/Instructor");
const Course = require("./models/Course");

Instructor.hasMany(Course);
Course.belongsTo(Instructor);

app.use(express.json());

/* ---------------- ROOT ROUTE ---------------- */

app.get("/", (req, res) => {
  res.send("SkillSphere API is running");
});

/* ---------------- MYSQL COURSE INSERT ---------------- */

app.post("/add-course", (req, res) => {

  const { name, duration } = req.body;

  const sql = "INSERT INTO courses (name, duration) VALUES (?, ?)";

  db.query(sql, [name, duration], (err, result) => {

    if (err) {
      return res.send("Insert failed");
    }

    res.send("Course added successfully");

  });

});

/* ---------------- MONGODB ENROLLMENT INSERT ---------------- */

app.post("/add-enrollment", async (req, res) => {

  const { userName, course } = req.body;

  const newEnrollment = new Enrollment({
    userName,
    course,
    date: new Date()
  });

  await newEnrollment.save();

  res.send("Enrollment added successfully");

});

/* ---------------- FETCH ENROLLMENTS ---------------- */

app.get("/enrollments", async (req, res) => {

  const data = await Enrollment.find();

  res.json(data);

});

app.get("/create-instructor", async (req, res) => {

  const instructor = await Instructor.create({
    name: "John"
  });

  res.json(instructor);

});
app.get("/create-course", async (req, res) => {

  const course = await Course.create({
    title: "NodeJS",
    InstructorId: 1
  });

  res.json(course);

});
app.get("/instructor-courses/:id", async (req, res) => {

  const courses = await Course.findAll({
    where: { InstructorId: req.params.id }
  });

  res.json(courses);

});

/* ---------------- EXISTING ROUTES ---------------- */

app.use("/api/courses", coursesRouter);

app.post("/api/users", (req, res) => {

  const { name, email } = req.body;

  res.status(201).json({
    message: "User created",
    user: { name, email }
  });

});

/* ---------------- STATUS ROUTE ---------------- */

app.get("/status", (req, res) => {
  res.send("App is live");
});

/* ---------------- SERVER ---------------- */

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

module.exports = app;