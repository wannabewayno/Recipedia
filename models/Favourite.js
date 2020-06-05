module.exports = function(sequelize, DataTypes) {
  const Favourite = sequelize.define("Favourite", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {timestamps: false});

  Favourite.associate = function(models) {
    // We're saying that a Favourite should belong to a User
    // A Post can't be created without an Author due to the foreign key constraint
    Favourite.belongsTo(models.User, {
      foreignKey: {
        name: "user_id",
        allowNull: false
      }
    });
    Favourite.belongsTo(models.Recipe, {
      foreignKey: {
        name: "recipe_id",
        allowNull: false
      }
    });
  };

  return Favourite;
};
