const express = require("express");
const app = express();

const coursesRouter = require("./routes/courses");

app.use(express.json());

// root route
app.get("/", (req, res) => {
  res.send("SkillSphere API is running");
});

app.use("/api/courses", coursesRouter);

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  res.status(201).json({
    message: "User created",
    user: { name, email }
  });
});

app.get("/status", (req, res) => {
  res.send("App is live");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

module.exports = app;