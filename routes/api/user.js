//require our models to use;
const db = require("../../models");

module.exports = app => {
    app.post("/api/user", function(req, res) {
        console.log(req.body);
    });
}
