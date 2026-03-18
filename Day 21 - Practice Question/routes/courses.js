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

// dynamic course route
router.get("/:id", validateCourseId, (req, res) => {

  res.json({
    id: req.params.id,
    name: "React Mastery",
    duration: "6 weeks"
  });

});

module.exports = router;