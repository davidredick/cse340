const express = require('express');
const router = express.Router();
const path = require("path");

// Static Routes
router.use(express.static(path.join(__dirname, "../public")));

module.exports = router;









