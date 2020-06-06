const recipe = require('./recipe');
const user = require('./user');
const favourite = require('./favourite.routes');
const aws = require('./aws.routes');

module.exports = app => {
    recipe(app);
    user(app);
    favourite(app);
    aws(app);
};