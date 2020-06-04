const express = require('express');
const router = express.Router();

// Import the model (cat.js) to use its database functions.
const db = require("../../models");


router.post("/api/user", function(req, res) {
    console.log(req.body);
});

module.exports = router;