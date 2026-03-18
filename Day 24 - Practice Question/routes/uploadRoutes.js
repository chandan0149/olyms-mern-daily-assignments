const express = require("express");
const router = express.Router();
const upload = require("../config/multerConfig");

router.post("/upload", upload.single("file"), (req, res) => {
  res.send(`File uploaded successfully: ${req.file.filename}`);
});

module.exports = router;