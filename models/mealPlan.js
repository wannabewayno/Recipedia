module.exports = function(sequelize, DataTypes) {
    const MealPlan = sequelize.define("MealPlan", {
    
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // Monday
    // ==========================================================================
    monday_breakfast: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    monday_lunch: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    monday_dinner: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    // Tuesday
    // ==========================================================================
    tuesday_breakfast: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    tuesday_breakfast: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    tuesday_breakfast: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    // Wednesday
    // ==========================================================================
    wednesday_breakfast: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    wednesday_lunch: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    wednesday_dinner: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    // Thursday
    // ==========================================================================
    thursday_breakfast: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    thursday_lunch: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    thursday_dinner: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    // Friday
    // ==========================================================================  
    friday_breakfast: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    friday_lunch: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    friday_dinner: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    // Saturday
    // ==========================================================================   
    saturday_breakfast: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    saturday_lunch: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    saturday_dinner: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    // Sunday
    // ==========================================================================   
    sunday_breakfast: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    sunday_lunch: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    sunday_dinner: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    
    }, {});
  
    Recipe.associate = function(models) {
      // We're saying that a MealPlan should belong to a user
      // And that the MealPlan has many recipes
      MealPlan.hasMany(models.Recipe, {
        foreignKey: {
          name: "recipe_id",
          allowNull: false
        }
      });
      
      MealPlan.belongsTo(models.User, {
        foreignKey: {
          name: "user_id",
          allowNull: false
        }
      });
    };
  
    return MealPlan;
  };
  