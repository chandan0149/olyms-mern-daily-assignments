const express = require("express");
const router = express.Router();

let courses = require("../data/Courses");
const { validateCourse } = require("../middleware/validateCourse");

router.get("/", (req, res) => {
  res.json(courses);
});

router.post("/", validateCourse, (req, res) => {

  const { name, duration } = req.body;

  const newCourse = {
    id: courses.length + 1,
    name,
    duration
  };

  courses.push(newCourse);

  res.status(201).json(newCourse);
});

router.put("/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const course = courses.find(c => c.id === id);

  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }

  course.name = req.body.name;
  course.duration = req.body.duration;

  res.json(course);
});

router.delete("/:id", (req, res) => {

  const id = parseInt(req.params.id);

  courses = courses.filter(c => c.id !== id);

  res.json({ message: "Course deleted" });

});

module.exports = router;