const express = require("express");
const app = express();

app.use(express.json());

// Middleware logging
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${req.method}] ${req.url} - ${timestamp}`);
    next();
});

// Import router
const bookRouter = require("./routes/books");

// Use router
app.use("/books", bookRouter);

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

// Status route
app.get("/status", (req, res) => {
    res.json({ server: "running", uptime: "OK" });
});

// Products route
app.get("/products", (req, res) => {
    const name = req.query.name;

    if (name) {
        res.json({ query: name });
    } else {
        res.send("Please provide a product name");
    }
});
// 404 handler
app.use((req, res) => {
    res.status(404).send("Route not found");
});
// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});