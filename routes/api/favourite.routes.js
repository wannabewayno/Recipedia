// Import our models to use its database functions.
const db = require("../../models");

module.exports = app => {

    // this should be a boolean value yeah?
    app.post('/api/favourite',(req, res) =>{
        const { recipeID } = req,body;
        // add to favourites with db here
        // db.somequery idk plz halp
        //send back a response
    });

    // again? a boolean yeah?
    app.delete('/api/favourite',(req, res) =>{
        const { recipeID } = req,body;
        // delete from favourites with db here
        // db.somequery idk plz halp
        //send back a response
    });
}