    const Sequelize = require("sequelize");
    const Op = Sequelize.Op;

module.exports = function(req) {
    let conditions = [];
    let Sequelize = require("sequelize");
    let Op = Sequelize.Op;
        
    // ingredients
    if (req.ingredients != null) {
        for (let i = 0; i < req.ingredients.length; i++) {
            conditions.push({
                 ingredients: { [Op.substring]: req.ingredients[i] }
            })
        }
    }

    // unwanted ingredients
    if (req.ingredientsUnwanted != null) {
        for (let i = 0; i < req.ingredientsUnwanted.length; i++) {
            conditions.push({
                    // need to use this method due to the way sequelize handles JSON requests 
                    ingredients: Sequelize.where(Sequelize.fn('', Sequelize.col('ingredients')), ' NOT LIKE', '%' + req.ingredientsUnwanted[i] + '%')
            })
        }
    }

    // tags
    if (req.tags != null) {
        for (let i = 0; i < req.tags.length; i++) {
            conditions.push({
                tags: { [Op.substring]: req.tags[i] }
            })
        }
    }

    // author
    if (req.author != null) {
        conditions.push({
            name: req.author
        })
    }

    // cuisine
    if (req.cuisine != null) {
        conditions.push({
            cuisine: req.cuisine
        })
    }

    // diet ASSUMING IT WILL ONLY ASK FOR ONE DIET CURRENTLY
    if (req.diet != null) {
        conditions.push({
            diet: req.diet
        })
    }

    // name
    if (req.name != null) {
        conditions.push({
            name: req.name
        })
    }
    return conditions;
};