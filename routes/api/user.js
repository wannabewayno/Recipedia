//require our models to use;
const db = require("../../models");

module.exports = app => {

    //! hey there team, this is a working patch request from the members.html
    // I need someone to hook this up to our db
    // this update's user information like first name, last name, email, diet and allergy stuff
    // see the form in action at memeber.html

    // the req.body will look like { field: <column to update>, value: <value to set to> }
    // ? example: { field: first_name, value: wayne }
    app.get("/api/user", function(req, res){
        const userId = req.params.id

        db.user.findAll({
            id: userId
        })
    })

    app.patch("/api/user", function(req, res) {
        db.user.update({
            data: data
          }).then(() => {})
        // User.update({ lastName: "Doe" }, {
        //     where: {
        //       lastName: null
        //     }
        //   }).then(() => {
        //     console.log("Done");
        //   });
        console.log(req.body);
        res.sendStatus(200);
    });

}

// https://sequelize.org/v5/manual/instances.html