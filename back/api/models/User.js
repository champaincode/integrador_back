const S = require("sequelize");
const db = require("../config/index");



class User extends S.Model {

 
 
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

  },
  { sequelize: db, modelName: "users" }
);


module.exports = User;