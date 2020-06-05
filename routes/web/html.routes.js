// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require('../../models');
const exhb = require('express-handlebars');

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../../config/middleware/isAuthenticated");

module.exports = app => {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/index.html");
    // }
    res.sendFile(path.join(__dirname, "../../Public/index.html"));
  });
  
  // Dashboard/meal planner route

  //! Will need handlebars for meal planning, this will require a db query

  app.get("/dashboard", function(req, res) {
    // db.MealPlan where id = our user id!
    // retrieves the meal plan
    // will look like 
    // run a sorting function on this for anything that is null/undefined or a placeholder value
    // then send this off for templating with handlbars
    // ! test data at the moment;
    const data = { 
      mealPlan:[
        {
          dayName:"Monday",
          type: [
            { typeName:'Breakfast',title:'chicken teriyaki' , image:"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/03/Teriyaki-Chicken-6.jpg", id:1 },
            { typeName:'Lunch', title:'chicken teriyaki' , image:"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/03/Teriyaki-Chicken-6.jpg", id:2 },
            { typeName:'Dinner', title:'chicken teriyaki' , image:"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/03/Teriyaki-Chicken-6.jpg", id:15 }
          ]
        },
        {
          dayName:"Tuesday",
          type: [
            { typeName:'Breakfast',title:'borstch' , image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/1280px-Borscht_served.jpg", id:2304 },
            { typeName:'Lunch', title:'borstch' , image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/1280px-Borscht_served.jpg", id:1 },
            { typeName:'Dinner', title:'borstch' , image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/1280px-Borscht_served.jpg", id:90 }
          ]
        }
      ] 
  }
    res.render('DOW', data )
    // res.sendFile(path.join(__dirname, "../../Public/dashboard.html"));
  });

  // //! this is only a placeholder for testing, this will be a modal anchored to dashboard.html
  // app.get("/create", function(req, res) {
    
  //   res.sendFile(path.join(__dirname, "../../Public/create-recipe.html"));
  // });

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
