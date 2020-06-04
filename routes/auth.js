const express = require("express")
const authController = require("../config/auth2")
const passport = require("passport")

const router = express.Router();

//user registration
router.post('/register', authController.register);

//user login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: "/members",
        failureRedirect: "/login",
        //failureFlash: true
    })(req, res, next);
});

//user logout 
router.get('/logout', (req, res) => {
    req.logout();
})

module.exports = router;