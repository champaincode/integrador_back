const S = require("sequelize");
const db = require("../config/index");
const bcrypt = require("bcrypt");


class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
 
 
 
}

User.init(
  { //PK USER_ID
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
        // is: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        //ESTA REGEXP COMPRUEBA EL FORMATO DEL MAIL 
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
   salt: {
      type: S.STRING,
      },
      isAdmin:{
        type:S.BOOLEAN,
        defaultValue:false
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

