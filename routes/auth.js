const express = require("express")
const authController = require("../config/auth2")

const router = express.Router();

router.post('/login', authController.register);

module.exports = router;