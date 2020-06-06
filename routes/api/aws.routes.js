const getSignedUrls = require('../../db/url-generation.js');

module.exports = app => {

app.get('/api/signedUrl', (req,res) => {
    // this returns a promise
    getSignedUrls()
    .then(URLS => res.json(URLS))
    .catch(error => {
        res.status(422).json({ message: "URl generation failed" })
    }); 
});

}