// Import our models to use its database functions.
const db = require("../../models");

module.exports = app => {

    // this should be a boolean value yeah?
    app.post('/api/favourites',(req, res) =>{
        const { recipeID } = req.body;
        // add to favourites with db here
        // db.somequery idk plz halp
        //send back a response
    });

    app.get('/api/favourites', (req, res) => {
        data: data
    })

    // again? a boolean yeah?
    app.delete('/api/favourites',(req, res) =>{
        const { recipeID } = req.body;
        // delete from favourites with db here
        // db.somequery idk plz halp
        //send back a response
    });
}