const S = require("sequelize");
const db = require("../config/index");
const bcrypt = require("bcrypt");


class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    firstname: {
      type: S.STRING,
      allowNull: false,
      },

    lastname: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
   salt: {
      type: S.STRING,
      },
  },
  { sequelize: db, modelName: "users" }
);

User.beforeCreate((user) => {
  return bcrypt 
    .genSalt(16) // Creas el salt
    .then((salt) => {
    user.salt = salt; // igualas al valor de user.salt
      return user.hash(user.password, salt); //primero traes el password y el salt con bcrypt
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
