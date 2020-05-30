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
  });
  return Favourite;
};
