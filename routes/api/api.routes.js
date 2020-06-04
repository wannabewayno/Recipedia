const recipe = require('./recipe');
const user = require('./user');

module.exports = app => {
    recipe(app);
    user(app);
};