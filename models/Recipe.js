module.exports = function(sequelize, DataTypes) {
  const Recipe = sequelize.define("Recipe", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },

    ingredients: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    servings: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    prep_time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cook_time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cuisine: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    diets: {
      type: DataTypes.JSON,
      allowNull: true
    }
    
  }, {});
  
  Recipe.associate = function(models) {
    // We're saying that a Favourite should belong to a Recipe
    // A Post can't be created without an Author due to the foreign key constraint
    Recipe.hasMany(models.Favourite, {
      foreignKey: {
        name: "recipe_id",
        allowNull: false
      }
    });
    Recipe.belongsTo(models.Recipe, {
      foreignKey: {
        name: "created_by",
        allowNull: false
      }
    });
  };

  return Recipe;
};
