const express = require("express");
const courseRoutes = require("./routes/courseRoutes");
const rateLimiter = require("./middleware/rateLimiter");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use(rateLimiter);

app.use("/api/courses", courseRoutes);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});