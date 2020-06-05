const express = require("express")
const authController = require("../config/auth2")
const passport = require("passport")

const router = express.Router();

//user registration
router.post('/register', checkNotAuthenticated, authController.register);

//user login
router.post('/login', checkNotAuthenticated, (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: "/members",
        failureRedirect: "/login",
        failureFlash: true
    })(req, res, next);
});

//user logout 
router.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect("/");
})

function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login")
}

function checkNotAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        res.redirect("/")
    }
    return next();

}

module.exports = router;