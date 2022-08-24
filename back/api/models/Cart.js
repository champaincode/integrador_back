const S = require("sequelize");
const db = require("../config/index");

class Cart extends S.Model {}

Cart.init(
  {
    tittle: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    price: {
      type: S.DECIMAL,
      allowNull: false,
      validate:{
          min:0
      }
    },
    quantity:{
      type: S.INTEGER,
      allowNull:false,
      validate:{
          min:0
      }
    },
    image: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "carts" }
);

module.exports = Cart;