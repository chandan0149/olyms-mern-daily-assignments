const express = require("express");
const router = express.Router();

// validation middleware
function validateCourseId(req, res, next) {

  const id = req.params.id;

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid course ID" });
  }

  next();
}

// GET all courses  (required for testing)
router.get("/", (req, res) => {

  const courses = [
    { id: 1, name: "React Mastery", duration: "6 weeks" },
    { id: 2, name: "NodeJS Advanced", duration: "5 weeks" }
  ];

  res.status(200).json(courses);
});

// dynamic course route
router.get("/:id", validateCourseId, (req, res) => {

  res.status(200).json({
    id: req.params.id,
    name: "React Mastery",
    duration: "6 weeks"
  });

});

module.exports = router;