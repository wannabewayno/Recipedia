// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/index.html");
    }
    res.sendFile(path.join(__dirname, "../index.html"));
  });
  
  // Dashboard/meal planner route

  //Will need handlebars for meal planning

  app.get("/dashboard", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../../Public/create-recipe.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../../Public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // Will need handlebars for user information (all except "id") + list of recipes that they've authored
  app.get("/members", /*isAuthenticated,*/ function(req, res) {
    res.sendFile(path.join(__dirname, "../../Public/members.html"));
  });

};
