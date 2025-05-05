const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();

const app = express();

// Serve static files from public folder
app.use(express.static("public"));

// Set up EJS view engine
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

