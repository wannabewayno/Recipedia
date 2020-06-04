const express = require("express")
const authController = require("../config/auth2")
const passport = require("passport")

const router = express.Router();

//user registration
router.post('/login', authController.register);

//user login
router.post('/login', (req, res) => {
    passport.authenticate('local', {
        successRedirect: "/members",
        failureRedirect: "/public/login",
        // failureFlash: true
    })(req, res, next);
});

//user logout 
router.get('/logout', (req, res) => {
    req.logout();
})

module.exports = router;