//require our models to use;
const db = require("../../models");

module.exports = app => {

    //! hey there team, this is a working patch request from the members.html
    // I need someone to hook this up to our db
    // this update's user information like first name, last name, email, diet and allergy stuff
    // see the form in action at memeber.html

    // the req.body will look like { field: <column to update>, value: <value to set to> }
    // ? example: { field: first_name, value: wayne }
    app.patch("/api/user", function(req, res) {
        console.log(req.body);
        res.sendStatus(200);
    });

}
