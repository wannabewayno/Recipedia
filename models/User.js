// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // last_name: {
    //   type: DataTypes.TEXT,
    //   allowNull: true,
    //   validate: {
    //     len: [1]
    //   }
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    },
    // diets: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // cuisines: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // }
  }, {});

  User.associate = function(models) {
    // We're saying that a Favourite should belong to a User
    // A Post can't be created without an Author due to the foreign key constraint
    User.hasMany(models.Favourite, {
      foreignKey: {
        name: "user_id",
        allowNull: false
      }
    });
    User.hasMany(models.Recipe, {
      foreignKey: {
        name: "created_by",
        allowNull: false
      }
    });
  };

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};

