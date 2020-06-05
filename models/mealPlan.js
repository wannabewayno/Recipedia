module.exports = function(sequelize, DataTypes) {
    const MealPlan = sequelize.define("MealPlan", {
    
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    meal_slot: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    }, {});
  
    MealPlan.associate = function(models) {
      // We're saying that ALL mealplans can be found within this table
      // A MealPlan should belong to one user
      // And that a recipe can appear on many meal plans

      MealPlan.belongsTo(models.User, {
        foreignKey: {
          name: "user_id",
          allowNull: false
        }
      });
      
      MealPlan.belongsTo(models.Recipe, {
        foreignKey: {
          name: "recipe_id",
          allowNull: false
        }
      });


    };
  
    return MealPlan;
  };